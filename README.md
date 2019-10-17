# learning-graphql

## Returns * name * and * address city * from users
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