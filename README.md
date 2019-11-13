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

- Ability to create an IT event logger  API by sending in JSON data, the model of the data must contain:
  - EventTitle(str) (required)
  - Description (str) (required)
  - ReportedBy (str) (required) 
  - HandledBy (str) (default: “”)
  - Completed(Boolean) (default: False) 
  - DateReported(default: now)
- Localhost server must be able to run cross domain for fetching info from the API.
