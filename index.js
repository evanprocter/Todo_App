require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));

// Configure body-parser to read data sent by HTML form tags
app.use(bodyParser.urlencoded({ extended: false }));

// Configure body-parser to read JSON bodies
app.use(bodyParser.json());

// const Todo = require('./models/Todo');
const User = require('./models/User');

const page = require('./views/page');

const userList = require('./views/userList');

const registrationForm = require('./views/registration');


app.get('/', (req, res) => {
    const thePage = page('hey there');
    res.send(thePage);
});

app.get('/login', (req, res) => {
    // send them the login form
    const theLogin = loginForm();
    const loginPage = page(theLogin);
    res.send(theLogin);
});

app.post('/login', (req, res) => {
    // process the login form
    const loginName = req.body.name;
    const loginUsername = req.name.username;
    const loginPassword = req.name.password;

    2.
};

app.get('/register', (req, res) => {
    // send them the signup form
    const theForm = registrationForm();
    const thePage = page(theForm);
    res.send(thePage);
});

app.post('/register', (req, res) => {
    // process the signup form
    // 1.grab the values out of req.body
    const newName = req.body.name;
    const newUsername = body.name.username;
    const newPassword = body.name.password;
    
    console.log(newName);
    console.log(userName);
    console.log(newPassword);

    // 2. call User.id
    User.add(newName, newUsername, newPassword)
        .catch(err => {
            console.log(err);
            // 3. if that works, redirect to the welcome page
            res.redirect('/login');
        });
};

// Listen for a GET request
app.get('/users', (req, res) => {
    User.getAll()
        .then(allUsers => {
            // res.status(200).json(allUsers);
            // res.send(allUsers);
            // const usersUL = userList(allUsers);
            // const thePage = page(usersUL);
            // res.send(thePage);

            // other way of sending the data
            res.send(page(userList(allUsers)));
        });
});


app.get('/welcome', (req, res) => {
    const welcomePage = page('this is the welcome page. WELCOMMMMEEEE');
    res.send(welcomePage);
});


app.post('/register', (req, res) => {
    console.log(req.body);
    const registration = req.body
})

// Listen for POST requests
// Create new user
// using POST because HTML forms can only send GET or POST
// HTML form cannor send a PUT (or a DELETE).
app.post('/register/users', (req, res) => {
    console.log(req.body);
    // res.send('ok');
    const newUsername = req.body.name;
    console.log(newUsername);
    User.add(newUsername)
    .then(theUser => {
        res.send(theUser);
    })
});



// updating an existing user
app.post('/users/:id(\\d+)/edit', (req, res) => {
    const id = req.params.id;
    const newName = req.body.name;
    console.log(id);
    console.log(newName);
    // res.send('ok');

    // Get the user by their id
    User.getById(id)
        .then(theUser => {
            // call that user's updateName method
            theUser.updateName(newName)
                .then(result => {
                    if (result.rowCount === 1) {
                        res.send('yeah you did');
                    } else {
                        res.send('oops');
                    }
                });
            
        });

});

// Match the string "/users/" followed by one or more digits
// REGular EXpressions
// app.get('/users/:id([0-9]+)', (req, res) => {
app.get(`/users/:id(\\d+)/edit`, (req, res) => {
    // console.log(req.params.id);
    User.getById(req.params.id)
        .catch(err => {
            res.send({
                message: `no soup for you`
            });
        })
        .then(theUser => {
            res.send(theUser);
        })
});

app.get('/users/register', (req, res) => {
    res.send('you are on the registration page. no really.');
});

app.get('/users/:id(\\d+)/rename/:newName', (req, res) => {
    User.getById(req.params.id)
        .then(user => {
            user.updateName(req.params.newName)
                .then(() => {
                    res.send('you just renamed them!');
                })
        })
});

app.listen(3000, () => {
    console.log('You express app is ready!');
});


// ===== example of sending a whole page

/*
    User.getAll()
        .then(allUsers => {
            let usersList = ``;
            allUsers.forEach(user => {
                usersList += `<li>${user.name}</li>`
            });
            let thePage = `
              <!doctype>
              <html>
                <head>
                </head>
                <body>
                    <h1>hey</h1>
                    <ul>
                        ${usersList}
                    </ul>
                </body>
              </html>
            `;
            res.send(thePage);
            // console.log(allUsers);
            // res.send(allUsers);
            // res.send(allUsers);
            // res.status(200).json(allUsers);
        })
    // res.send('Hellooooooo Expresssssssssssssuh');
*/