scrnshtr
========

![](https://raw.githubusercontent.com/varlambda/scrnshtr/master/images/scrnshtr.png)

#### Setup
- Click on the Deploy button to launch a **scrnshtr** instance on [Heroku](http://www.heroku.com).

	[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/varlambda/scrnshtr)

- On the Heroku *New App* page
	![](https://raw.githubusercontent.com/varlambda/scrnshtr/master/images/ss1.png)
	- Enter a unique **App Name** or skip this if you want Heroku to generate a random name. This will decide what your app url would be, so if you set the app name to `scrnshtr` then the app url would be `scrnshtr.herokuapp.com`.

	- Enter the Slack API token which you can generate at [api.slack.com/web](https://api.slack.com/web).
		![](https://raw.githubusercontent.com/varlambda/scrnshtr/master/images/ss2.png)

	- Click on the deploy button.

- Now that you have deployed **scrnshtr** on heroku, we will configure Slack.
	![](https://raw.githubusercontent.com/varlambda/scrnshtr/master/images/ss3.gif)

#### Use
		/scrnshtr [url] [resolution]
		/scrnshtr bassam.co 1920x1080
