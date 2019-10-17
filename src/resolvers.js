const users = [
    {id: 1, name: "William", email: "william@mail.com", address: [{nickname: "Home",street: 'Avenue A', zip: '12345', city: 'São José dos Campos'}, {nickname: "Apartment", street: "Street A", zip: '32145', city: 'São Paulo'}]}
]
module.exports = {
    Query: {
        users: () => users,
        user: (_, {id}) => users[0],
    }
}