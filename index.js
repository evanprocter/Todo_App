require('dotenv').config();

// const Todo = require
// ('./models/Todo');
const User = require('./models/User');

const skyler = new User('Skyler the pup');
const ahjuma = new User('Ahjuma the kitty')

// let u = User.findById(1);
// u.name = 'eileeeeeeen';
// u.save();

// Todo.getAll()
    // .then(results => {
        // console.log(results);
        // console.log(`yep those were the todos. cool.`)
    // })

// Todo.getById(2)
//     .then(result => { console.log(result); })

// Todo.getById(2000000)
//     .then(result => { console.log(result); })

// Todo.add('walk the chewbacca', false)
//     .catch(err => {
//         console.log(err);
//     })
//     .then(result => {
//         console.log(result);
//     })



// Todo.updateName(2, 'buy new hyperdrive')
//     .then(result => {
//         console.log(result);
//     })

// Todo.markCompleted(1)
//     .then(result => {
//         console.log(result);
//     })



Todo.deleteById(1)
    .then(result => {
        console.log(result.rowCount);
    })

