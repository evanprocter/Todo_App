const db = require('./db');

// declare a class named "User"
class User {
    // what properties should
    // a user start off with?
    // `constructor` is a method
    // that automatically
    // called when you create a user
    constructor(name) {
        // define properties that
        // are also the names
        // of the database columns
        this.name = name;
    }

    greet(otherUser) {
        console.log(`Hello ${otherUser.name}, I
        am ${this.name}`);
    }
}

// ==============================================================
// CREATE
// ==============================================================
function add(name) {
    return db.one(`
    insert into users
        (name)
    values
        ($1)
        returning id
        `, [name])
}

// ==============================================================
// RETRIEVE
// ==============================================================
// must create an alias for the column and row name
function getAll() {
    return db.any(`
        select
            users.id,
            t.name as todo,
            t.completed as completed
        from
            users
            left join todos t
            on users.id = t.user_id
    `);
}

function getById(id) {
    return db.one('select * from users where id=$1', [id]);
}

function getTodosForUsers(id) {
    return db.any(`
        select * from todos
            where user_id= $1
    `, [id]);
}



// ==============================================================
// UPDATE
// ==============================================================
function update.Name(id, name) {
    return db.result(`update users
                        set name=$2
                    where id=$1`, [id, true]);
}

// ==============================================================
// DELETE
// ==============================================================
function deleteById(id) {
    return db.result(`
    delete from users
    where id= $1
    `, [id]);
}

// ==============================================================
module.exports = {
    add,
    deleteById,
    getAll,
    getById,
    getTodosForUser,
    updateName,
    User
};