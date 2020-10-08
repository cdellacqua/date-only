# date-only

A DateOnly class for JavaScript

## Full documentation:
* [DateOnly](https://github.com/cdellacqua/date-only/blob/master/docs/classes/serializableerror.md)

## Highlights

###
Always 

### Exception logging
```
try {
	someFunctionThatThrows();
} catch (err) {
	logger.log(SerializableError.from(err));
	// or, if it only accepts strings
	logger.log(JSON.stringify(SerializableError.from(err)));
	throw err;
}
```

