const db = require('./db');

// declare a class named "User"
class User {
    // what properties should
    // a user start off with?
    // `constructor` is a method
    // that automatically
    // called when you create a user
    constructor(id, name) {
        // define properties that
        // are also the names
        // of the database columns
        this.id = id;
        this.name = name;
    }

    // CREATE
    static add(name) {
        return db.one(`
            insert into users
                (name)
            values
                ($1)
            returning id
            `, [name])
            .then(data => {
                const u = new User(data.id, name);
                return u;
            });
    }


    // RETRIEVE
    static getAll() {
        return db.any(`
            select * from users
            `).then(userArray => {
                // transform array of objects
                // into array of User instances
                const instanceArray = userArray.map(userObj => {
                    const u = new User(userObj.id, userObj.name);
                    return u;
                });
            })
    }


    static getById(id) {
        return db.one(`select * from users where id= $1`, [id])
            .then(result => {
                const u = new User(result.id, result.name);
                return u;
            })
    }

    static searchByName(name) {
        return db.any(`
            select * from users
                where name ilike '%$1:raw%'
        `, [name])
    }

    getTodos() {
        return db.any (`
            select * from todos
                where user_id= $1
            `, [this.id]);
    }


     // UPDATE
     updateName(name) {
         return db.result(`
            update users
                set name= $2
            where id= $1
            `, [this.id, name]);
     }

    // DELETE
    delete() {
        return db.result(`
        delete from users
        where id= $1
        `, [this.id]);
    }

    static deleteById(id) {
        return db.result(`
        delete from users
        where id= $1
        `, [id]);
    }

    // // a method is a function "belongs"
    // // to an object
    greet(otherUser) {
        console.log(`Hello ${otherUser.name}, I am ${this.name}`);
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
function updateName(id, name) {
    return db.result(`
        update users
            set name=$2
        where id=$1
    `, [id, true]);
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
module.exports = User;
// module.exports = {
//     add,
//     deleteById,
//     getAll,
//     getById,
//     getTodosForUser,
//     updateName,
//     User
// };