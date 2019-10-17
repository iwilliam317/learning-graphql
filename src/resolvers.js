const users = [
    {id: 1, name: "William", email: "william@mail.com"}
]
module.exports = {
    Query: {
        users: () => users
    }
}