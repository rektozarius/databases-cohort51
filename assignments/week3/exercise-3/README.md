# Exercise 3

```javascript
function getPopulation(Country, name, code, cb) {
  // assuming that connection to the database is established and stored as conn
  conn.query(
    `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result[0].name);
    }
  );
}
```

## Give an example of a value that can be passed as name and code that would take advantage of SQL-injection and ( fetch all the records in the database)
```javascript
const name = "myname' OR 'a' = 'a" 
const code = "mycode' OR 'a' = 'a"
```
OR
```javascript
const name = "myname' OR 1 = 1; --" 
```
OR if 'multipleStatements: true'
```javascript
const name = "myname' OR 1 = 1; SELECT * from country;  --" 
```

## Rewrite the function so that it is no longer vulnerable to SQL injection
```javascript
function getPopulation(Country, name, code, cb) {
  // assuming that connection to the database is established and stored as conn
  conn.query(
    `SELECT Population FROM ?? WHERE Name = ? and code = ?`,[Country, name, code],
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result[0].name);
    }
  );
}
```