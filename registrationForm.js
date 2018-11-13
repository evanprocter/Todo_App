function registrationForm() {
    return `
    <form action="" method="POST">
        <label>
            Your Name:
            <input type="text" name="name">
        </label>
        <br>
        <label>
            Username:
            <input type="text" name="username">
        </label>
        <br>
        <label>
            Password:
            <input type="text" name="password">
        </label>
        <br>
        <input type="submit">
    </form>
    `;
}