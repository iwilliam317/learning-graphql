# learning-graphql

1. Returns **name** and **address city** from users

command
```
query {
  users {
    name,
    address {
     city
    }
  }
}
```
outcome
```
{
  "data": {
    "users": [
      {
        "name": "William",
        "address": [
          {
            "city": "São José dos Campos"
          },
          {
            "city": "São Paulo"
          }
        ]
      }
    ]
  }
}
```
