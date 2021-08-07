# date-only

A DateOnly class for JavaScript


[NPM Package](https://www.npmjs.com/package/@cdellacqua/date-only)

`npm install @cdellacqua/date-only`

## Full documentation:
* [DateOnly](https://github.com/cdellacqua/date-only/blob/master/docs/classes/dateonly.md)

## Highlights

###
Always serializes to YYYY-MM-DD

```
console.log(new DateOnly(2020, 0, 1).toString());
// -> 2020-01-01
console.log(new DateOnly(2020, 0, 1).toJSON());
// -> "2020-01-01"
```

Compatible with native Date object

```
console.log(DateOnly.fromDate(new Date(2020, 0, 1)).toString());
// -> 2020-01-01
console.log(new DateOnly(2020, 0, 1).toDate().toDateString());
// -> Wed Jan 01 2020
```
