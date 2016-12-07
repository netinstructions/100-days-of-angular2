# 100 days of Angular 2

I'm going to make a crazy Angular 2 app. It's going to take 100 days. I don't know what it will do yet, but I'm going to start from scratch and fumble my way to the finish line. Here's what I want to accomplish:

* Figure out what the Angular 2 hype is all about
* Develop in a "dev" environment and publish to a "production" environment every day.
* Make a bunch of mistakes
* Hopefully figure out how to fix those mistakes
*  Publish all the code and write daily summaries

What's a better way to learn about Angular 2?

Read my daily summaries on my [blog starting at day 1](http://www.netinstructions.com/100-days-of-angular-2/)

## Running the code

As of Day 5, you can run locally like this (after `git clone` and `npm install`):

In one terminal:

    npm start

And in another terminal:

    npm run backend

And in another terminal:

    tsc server/*.ts --watch

Open up your browser and go to http://localhost:8085/ . Note that the back end runs on port 3000, but the server serving up the Angular 2 client knows to forward requests from `api/*` to the back end server on the other port.

If you want to deploy to producton, you run:

    git clone 100-days-of-angular2
    cd 100-days-of-angular2/
    npm install
    npm run build
    export NODE_ENV=production
    tsc server/*.ts
    forever start ./server/bin/www

which will serve the newly created files at `dist/` using Express, and Node.js/Express also handles backend server side logic.