
function userForm () {
    return `
        <form action="" method="POST">
            <input type="text" name="name">
            <br>
            <input type="submit"> value="${aUser.name}">
        </form>
    `;
}

module.exports = userForm;