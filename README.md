# Postgres-Syntax-Note

Learn to build REST API using PostgreSQL as backend. Creating a endpoint for CRUD data on with two tables. Implementing Query & Relational for Database. Implement ReactJs by using TailwindCSS for styling.

## Stack

- NodeJS
  - ExpressJS
  - Morgan
  - Postgres Node
  - dotenv
  - nodemon
- PostgreSQL
  - [x] Implement `INSERT INTO`
  - [x] Implement `SELECT * FROM NOTE`
  - [x] Implement `UPDATE ... WHERE ....`
  - [x] Implement `DELETE FROM .... WHERE ...`
- ReactJS (Coming Soon)
  - [ ] React Hooks
    - useEffect
    - useContext
    - useState
    - useCallback
    - useRef
  - [ ] TailwindCSS

## End Point

Get all of topic data

```http
GET http://localhost:5000/api/v1/postgres

```

Get detail query topic

```http
GET http://localhost:5000/api/v1/postgres/:id

```

Post new topic

```http
POST http://localhost:5000/api/v1/postgres/:id

```

update topic

```http
PUT http://localhost:5000/api/v1/postgres/:id

```

delete topic

```http
DELETE http://localhost:5000/api/v1/postgres/:id

```

Add not for id topic

```http
POST http://localhost:5000/api/v1/postgres/:id/review

```

## What I learn

- Try Catch Block
- Async/Await
- SQL Query
- React Hooks
