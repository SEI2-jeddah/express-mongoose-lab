# IT EventLogger API: Express & Mongoose

## Set Up

Fork and clone this repository. After cloning down **your fork**...

```bash
 $ cd express-mongoose-lab
 $ npm install
```

## Instructions

For this lab, Create a RESTful API using the two separate methods.

### Requirements

1. There is already a `package.json` file with the dependencies necessary for
   running the tests. You will have to manually `npm install` everything else
   required to build your application server with Express and Mongoose.

2. Create a model `Event` with 6 fields:

- EventTitle(str) (required)
- Description (str) (required)
- ReportedBy (str) (required)
- HandledBy (str) (default: “”)
- Completed(Boolean) (default: False)
- DateReported(default: now)

3. You should have 3 routes. They should return JSON unless otherwise specified.

- `GET '/'` which should redirect to `/events'
- `GET '/events'` which return a list of events
- `GET '/events/:someParameter'` where `:someParameter` grabs a single `Event`
  from the database by id. **NOTE** You can name `:someParameter` whatever you
  want 😬

4. Localhost server must be able to run cross domain for fetching info from the API.

   **NOTES:**

- You can refer to previous lessons and notes that you have if you forget
  syntax.
- We've provided the necessary configuration for the database connection, some
  of the Model definition, and some of the basic express app boilerplate. Don't
  delete any of this! Your task is to add to what is provided.
- Test with postman!


