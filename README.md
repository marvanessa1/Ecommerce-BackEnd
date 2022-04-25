# Ecommerce-BackEnd
Back end for an e-commerce site


## Description

This application is to help build the back end for an e-comerce site and it's a working Express.js API uses Sqeualize to interect with a MySQL database.

This application is not deployed but there are links to video walkthroughs that demostrate the functionality.

## Table of Contents

- [License](#license)
- [Installs](#installs)
- [Tests](#tests)
- [Mock-up](#mock-up)
- [Contact Me](#contact-me)

## License

MIT License

Copyright (c) 2022 marvanessa1

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Installs

[MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages are required to be able to connect to Express.js API to MySQL. Very important to remember your MySQL password and you will need it later for the terminal commands

After git cloning this repo, users will need to update the file names .envEXAMPLE file with their sql credentials AND will need to rename the file to .env

Below are the terminal commands to get started:

```
npm i
```

```
mysql -u root -p
```
users will be prompted for their mysql password

```
source db/shema.sql;
```

```
quit
```

run seed files with:
```
npm run seed
```
invoke the application next:
```
npm start
```

## Tests

Users are able to test API GET, POST, PUT, and DELETE routes in Insomnia Core

## Mock-up

[Demo Walkthrough 1 - Initialization](https://watch.screencastify.com/v/C3erMxqj5AMQFLkpaomw) 
[Demo Walkthrough 2 - Products CRUD](https://watch.screencastify.com/v/scNypW1QetFB18CN3sjk) 
[Demo Walkthrough 3 - Tags CRUD](https://watch.screencastify.com/v/nCOBjDAXagNYDbs02JzY)
[Demo Walkthrough 4 - Categories CRUD](https://watch.screencastify.com/v/TyB2RjhT1yyqjDDZsHNp)

## Contact Me

Find me on GitHub at marvanessa1 or email me at marvanessa1@live.com if you have any comments or questions. Thanks!