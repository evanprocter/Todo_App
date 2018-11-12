
function userToItem(userObject) {
    return `
        <li>${userObject.name}</li>
            <a href="/users/${userObject.id}
            /todos">
                ${userObject.name}
            </a>
            <a href="/users/${userObject.id}">(edit)</a>
        </li>
    `;
}

function userList(arrayOfUsers) {
    const userItems = 
    arrayOfUsers.map(userToItem)
    .join('');
    console.log(userItems);
    return `
        <ul>${userItems}</ul>
    `;
}

module.exports = userList;