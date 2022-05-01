# Tech_Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description

The goal of this project is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

When I visit the site for the first time I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in. When I click on the homepage option I am taken to the homepage. When I click on any other links in the navigation I am prompted to either sign up or sign in. When I choose to sign up I am prompted to create a username and password. When I click on the sign-up button my user credentials are saved and I am logged into the site. When I revisit the site at a later time and choose to sign in I am prompted to enter my username and password. When I am signed in to the site I see navigation links for the homepage, the dashboard, and the option to log out. When I click on the homepage option in the navigation I am taken to the homepage and presented with existing blog posts that include the post title and the date created. When I click on an existing blog post I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment. When I enter a comment and click on the submit button while signed in the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created. When I click on the dashboard option in the navigation I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post. When I click on the button to add a new blog post I am prompted to enter both a title and contents for my blog post. When I click on the button to create a new blog post the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post. When I click on one of my existing posts in the dashboard I am able to delete or update my post and taken back to an updated dashboard. When I click on the logout option in the navigation I am signed out of the site. When I am idle on the site for more than a set time I am able to view comments but I am prompted to log in again before I can add, update, or delete comments.


## Table of Contents

- [Technology Used](#technology-used)
- [Links](#links)
- [Usage](#usage)
- [Questions](#questions)
- [License](#license)


## Technology Use

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)
- [Insomnia](https://docs.insomnia.rest/)
- [Express](https://www.npmjs.com/package/express)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Node MySQL 2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://sequelize.org/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [GitHub](https://www.github.com)
- [node.bcrypt.js](https://www.npmjs.com/package/bcrypt)
- [Heroku](https://www.heroku.com)
- [express-session](https://www.npmjs.com/package/express-session)


## Links

- [GitHub Repository](https://github.com/dlzinck/Tech_Blog)
- [Heroku](https://drew-techblog.herokuapp.com/)


## Usage


## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit).

Copyright (c) 2022 Drew Zinck II

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.