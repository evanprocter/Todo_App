require('dotenv').config();

// const Todo = require('./models/Todo');
const User = require('./models/User');

User.searchByName('aylin')
    .then(users => {
        console.log(users);
    });

User.getById(6)
    .then(allUsers => {
        u.delete();
    });

User.deleteById(8);

User.getAll()
    .then(allUsers => {
        allUsers.forEach(user => {
            console.log(user.name);
        })
    });

User.getById(1)
    .then(userFromDB => {
        console.log(userFromDB);
        userFromDB.getTodos()
            .then(todos => {
                console.log(todos);
            })
    });

const beth = new User(2, 'beth');
beth.getTodos()
    .then(result => { console.log(result); })    

let newUsers = [
    'jeff',
    'brandy',
    'zack',
    'tasha',
    'jenn',
    'cori'
];

newUsers.forEach(u => {
    User.add(u)
        .then(aNewUser => {
            aNewUser.addTodo('do the thing');
        })
})

const skyler = new User('Skyler the Dog');
const ahjuma = new User('Ahjuma the Impressive');

// debugger;

skyler.greet(ahjuma);
ahjuma.greet(skyler);

let u = User.findById(1);
u.name = 'eileeeeeeen';
u.save();

// deleting the user by their name
User.deleteById('alsdfj;alsdjflasj')
    .then(result => {console.log(result); })

// deleting the user by id
Todo.deleteById(1)
    .then(result => { console.log(result); }
    
// getting the todos for the user
User.getTodosForUser(3)
    .then(result => {console.log(result); })

Todo.assignToUser(2, 2)
    .then(() => {
        User.getTodosForUser(2)
        .then(result => { console.log(result); })
    })

Todo.assignToUser(3, 2)
    .then(() => {
        User.getTodosForUser(2)
        .then(result => { console.log(result); })
    })

Todo.assignToUser(4, 5)
    .then(() => {
        User.getTodosForUser(2)
        .then(result => { console.log(result); })
    })