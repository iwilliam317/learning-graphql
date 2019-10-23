# learning-graphql

1. Returns **name** and **address city** from users


```
# Command
query {
  users {
    name,
    address {
     city
    }
  }
}
```

```
# Outcome
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
