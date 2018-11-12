
function userForm () {
    return `
    <a href="/users">Return to user list</a>
        <form action="/users/${aUser.id}/edit" method="POST">
            <input type="text" name="name">
            <br>
            <input type="submit"> value="${aUser.name}">
        </form>
    `;
}

module.exports = userForm;