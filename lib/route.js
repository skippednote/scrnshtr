import fs from 'fs';
import {join} from 'path';
import {Router as _router} from 'express';
import prependHttp from 'prepend-http';
import Slack from 'node-slack-upload';
import screenshot from 'screenshot-promise';
import moment from 'moment'
import slug from 'slug';

let Router = _router();
const token  = process.env.SLACK_API_TOKEN;

Router.post('/', (req, res) => {
	console.log(req.body);
	if (req.body.text.length > 0) {
		let {channel_id, text, user_id} = req.body;
		let meta = text.split(' ');

		let url = meta[0].toLowerCase();
		let resolution = meta[1] || '480x320';

		let opt = {};
		if (meta[2]) {
			opt.username = meta[2].split('/')[0];
			opt.password = meta[2].split('/')[1];
		} else {
			opt = {};
		}

		let now = moment(new Date()).format('DD-MM-YYYY-hh-mm-ss');
		let file = `${slug(url)}-${resolution}-${now}`;
		let filePath = join(__dirname, '..', 'screenshots', file + '.png');

		screenshot(prependHttp(url), resolution, opt)
		.then(buf => fs.writeFileSync(filePath, buf))
		.then(() => {
			let slack = new Slack(token);
			slack.uploadFile({
				user: user_id,
				file: fs.createReadStream(filePath),
				filetype: 'png',
				title: file,
				initialcommit: '',
				channels: channel_id
			}, function(err) {
				if(err) {
					console.log(`Error ${err} at ${now}`);
				} else {
					console.log("DONE");
				}
			})
		}).catch(e => {
			console.log("Something went wrong. " + e);
			res.send("Something went wrong.");
		}
		);
	} else {
		res.send("Please enter a valide url!");
	}
});

export default Router;



