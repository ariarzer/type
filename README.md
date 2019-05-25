# Type

[![Build status](https://travis-ci.org/ariarzer/type.svg?branch=master)](https://travis-ci.org/ariarzer/type)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/ariarzer/type/blob/master/LICENSE)
![Maintenance intention for this crate](https://img.shields.io/badge/maintenance-actively--developed-brightgreen.svg)
[![GitHub package version](https://img.shields.io/github/package-json/v/ariarzer/type.svg)](https://github.com/ariarzer/type)

Tiny library for __determining the type__.
 
Correctly handles arrays and `null` and can detection different objects for the name of the constructor.

Everything works out of the box.

__Size__: 68 B.

### Install

```sh
npm i ariarzer/type
```
 
### Usage

```js
const type = require('type');

type([]); //=> 'array'
type(new Date()); //=> 'object'
```

Also you can use the second argument `true` to detection objects.
In this case the constructor name is returned in lowercase.

```js
type(new Date(), true); //=> 'date'
type(new myObject(), true); //=> 'myobject'
```

### Configuration

#### Modes:

* **Normal**: works like almost `typeof`, but it is correct to handle `null` and arrays.

* **All**: distinguishes types of objects, returns the name of the object constructor in lowercase.

Examples: 

|                 | normal       | all          |
|:----------------|:-------------|:-------------|
|`undefined`      |`'undefined'` |`'undefined'` |
|`null`           |`'null'`      |`'null'`      |
|`[]`             |`'array'`     |`'array'`     |
|`Symbol()`       |`'symbol'`    |`'symbol'`    | 
|`new WeakSet()`  |`'object'`    |`'weakset'`   | 
|`new Date()`     |`'object'`    |`'date'`      | 
|`new MyObject()` |`'object'`    |`'myobject'`  |
|`document.createElement('div')` |`'object'`    |`'htmldivelement'` |

```js
const config = {
  mode: 'all', // string: 'all' || 'normal' (default: 'normal')
}
```

Example of using modes:
 ```js
const type = require('type');

const myType = type.create({mode: 'all'});
myType(new myObject()); //=> 'myobject'

/* But, you can run that... */
type(new myObject(), true); //=> 'myobject';
/* ...and get a similar result. */
```
