# Contact List App

Ini adalah holiday challenge sebelum memasuki phase 2 di Hacktiv8. Repo ini memiliki dua buah branch: `server-side` dan `client-side`.

Untuk `server-side`-nya sudah dideploy di heroku: `https://serene-tundra-64006.herokuapp.com/`

## REST API

| Method   | URL             | Description        |
|----------|-----------------|--------------------|
| `GET`    | `/contacts`     | read all contacts  |
| `GET`    | `/contacts/:id` | read one contact   |
| `POST`   | `/contacts`     | create one contact |
| `PUT`    | `/contacts/:id` | update one contact |
| `DELETE` | `/contacts/:id` | delete one contact |