[@cdellacqua/date-only](../README.md) › [DateOnly](dateonly.md)

# Class: DateOnly

A DateOnly class for JavaScript

## Hierarchy

* **DateOnly**

## Index

### Constructors

* [constructor](dateonly.md#constructor)

### Properties

* [_date](dateonly.md#_date)
* [_month](dateonly.md#_month)
* [_year](dateonly.md#_year)
* [regex](dateonly.md#static-regex)

### Accessors

* [date](dateonly.md#date)
* [month](dateonly.md#month)
* [year](dateonly.md#year)

### Methods

* [addDays](dateonly.md#adddays)
* [addMonths](dateonly.md#addmonths)
* [addYears](dateonly.md#addyears)
* [clone](dateonly.md#clone)
* [compare](dateonly.md#compare)
* [equals](dateonly.md#equals)
* [getDay](dateonly.md#getday)
* [getTime](dateonly.md#gettime)
* [subDays](dateonly.md#subdays)
* [subMonths](dateonly.md#submonths)
* [subYears](dateonly.md#subyears)
* [toDate](dateonly.md#todate)
* [toJSON](dateonly.md#tojson)
* [toString](dateonly.md#tostring)
* [compare](dateonly.md#static-compare)
* [equals](dateonly.md#static-equals)
* [fromDate](dateonly.md#static-fromdate)
* [fromString](dateonly.md#static-fromstring)

## Constructors

###  constructor

\+ **new DateOnly**(`year?`: undefined | number, `month?`: undefined | number, `date?`: undefined | number): *[DateOnly](dateonly.md)*

Instantiates a DateOnly object.
If no argument is provided, the DateOnly instance will reflect the current date.
If some arguments are not provided, the missing one will be filled using the current date values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`year?` | undefined &#124; number | year |
`month?` | undefined &#124; number | month |
`date?` | undefined &#124; number | date  |

**Returns:** *[DateOnly](dateonly.md)*

\+ **new DateOnly**(`date`: Date): *[DateOnly](dateonly.md)*

Instantiates a DateOnly object extracting the relevant data from the given Date object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date | date  |

**Returns:** *[DateOnly](dateonly.md)*

\+ **new DateOnly**(`str`: string): *[DateOnly](dateonly.md)*

Instantiates a DateOnly object from a DateOnly string representation

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | string | the string representation YYYY-MM-DD  |

**Returns:** *[DateOnly](dateonly.md)*

## Properties

###  _date

• **_date**: *number*

Instance date

___

###  _month

• **_month**: *number*

Instance month

___

###  _year

• **_year**: *number*

Instance year

___

### `Static` regex

▪ **regex**: *RegExp‹›* = /^(\d\d\d\d)-(\d\d)-(\d\d)$/

regex that matches the format YYYY-MM-DD

## Accessors

###  date

• **get date**(): *number*

**Returns:** *number*

• **set date**(`d`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`d` | number |

**Returns:** *void*

___

###  month

• **get month**(): *number*

**Returns:** *number*

• **set month**(`m`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`m` | number |

**Returns:** *void*

___

###  year

• **get year**(): *number*

**Returns:** *number*

• **set year**(`y`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

**Returns:** *void*

## Methods

###  addDays

▸ **addDays**(`n`: number): *[DateOnly](dateonly.md)*

Returns a new DateOnly, its date will be incremented (or decremented)
by the given amount with respect to the current instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | the number of days to add  |

**Returns:** *[DateOnly](dateonly.md)*

___

###  addMonths

▸ **addMonths**(`n`: number): *[DateOnly](dateonly.md)*

Returns a new DateOnly, its month will be incremented (or decremented)
by the given amount with respect to the current instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | the number of days to add  |

**Returns:** *[DateOnly](dateonly.md)*

___

###  addYears

▸ **addYears**(`n`: number): *[DateOnly](dateonly.md)*

Returns a new DateOnly, its year will be incremented (or decremented)
by the given amount with respect to the current instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | the number of days to add  |

**Returns:** *[DateOnly](dateonly.md)*

___

###  clone

▸ **clone**(): *[DateOnly](dateonly.md)*

Clones the current instance

**Returns:** *[DateOnly](dateonly.md)*

___

###  compare

▸ **compare**(`that`: [DateOnly](dateonly.md) | string): *number*

Compares two DateOnly instances

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`that` | [DateOnly](dateonly.md) &#124; string | the other DateOnly instance or its string representation  |

**Returns:** *number*

___

###  equals

▸ **equals**(`that`: [DateOnly](dateonly.md) | string): *boolean*

Checks whether two DateOnly instances are equals

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`that` | [DateOnly](dateonly.md) &#124; string | the other DateOnly instance or its string representation  |

**Returns:** *boolean*

___

###  getDay

▸ **getDay**(): *number*

Gets the day of week the current instance

**Returns:** *number*

___

###  getTime

▸ **getTime**(): *number*

Gets the timestamp of the current instance

**Returns:** *number*

___

###  subDays

▸ **subDays**(`n`: number): *[DateOnly](dateonly.md)*

Returns a new DateOnly, its date will be decremented (or incremented)
by the given amount with respect to the current instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | the number of days to subtract  |

**Returns:** *[DateOnly](dateonly.md)*

___

###  subMonths

▸ **subMonths**(`n`: number): *[DateOnly](dateonly.md)*

Returns a new DateOnly, its month will be decremented (or incremented)
by the given amount with respect to the current instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | the number of days to subtract  |

**Returns:** *[DateOnly](dateonly.md)*

___

###  subYears

▸ **subYears**(`n`: number): *[DateOnly](dateonly.md)*

Returns a new DateOnly, its year will be decremented (or incremented)
by the given amount with respect to the current instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | the number of days to subtract  |

**Returns:** *[DateOnly](dateonly.md)*

___

###  toDate

▸ **toDate**(): *Date*

Converts the current DateOnly instance into a native Date object

**Returns:** *Date*

___

###  toJSON

▸ **toJSON**(): *string*

Returns a string representing the current DateOnly, using the format YYYY-MM-DD

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

Returns a string representing the current DateOnly, using the format YYYY-MM-DD

**Returns:** *string*

___

### `Static` compare

▸ **compare**(`d1`: [DateOnly](dateonly.md) | string, `d2`: [DateOnly](dateonly.md) | string): *number*

Compares two DateOnly instances

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`d1` | [DateOnly](dateonly.md) &#124; string | first operand |
`d2` | [DateOnly](dateonly.md) &#124; string | second operand  |

**Returns:** *number*

___

### `Static` equals

▸ **equals**(`d1`: [DateOnly](dateonly.md) | string, `d2`: [DateOnly](dateonly.md) | string): *boolean*

Checks whether two DateOnly instances are equals

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`d1` | [DateOnly](dateonly.md) &#124; string | first operand |
`d2` | [DateOnly](dateonly.md) &#124; string | second operand  |

**Returns:** *boolean*

___

### `Static` fromDate

▸ **fromDate**(`date`: Date): *[DateOnly](dateonly.md)*

Converts a native Date into a DateOnly object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date | the native Date object  |

**Returns:** *[DateOnly](dateonly.md)*

___

### `Static` fromString

▸ **fromString**(`str`: string): *[DateOnly](dateonly.md)*

Instantiates a DateOnly object given a date string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | string | a date string matching the format YYYY-MM-DD  |

**Returns:** *[DateOnly](dateonly.md)*
