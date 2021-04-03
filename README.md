# TitleBot
- The back-end is a simple Node.js web scraper that will return the title of a HTML webpage.
- The front-end is a Vue.js SPA with Bootstrap used as stying. 


## How to Test
1. Clone and run the back-end docker image from [tonynguyen98/title-bot](https://hub.docker.com/repository/docker/tonynguyen98/title-bot). <br />
You can do all that with one command: `docker run -p 3000:3000 tonynguyen98/title-bot`.
2. Go to the [hosted front-end Vue.js App](https://titlebot.netlify.app/) and play around.


## How to Test Locally
1. Clone this entire repo.
2. `cd back-end` from the base directory and run `node app.js`.
3. `cd front-end` from the base directory and run `npm run serve`.
