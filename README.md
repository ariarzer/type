# Type

[![Build status](https://travis-ci.org/ariarzer/type.svg?branch=master)](https://travis-ci.org/ariarzer/type)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/ariarzer/type/blob/master/LICENSE)
![Maintenance intention for this crate](https://img.shields.io/badge/maintenance-actively--developed-brightgreen.svg)
[![GitHub package version](https://img.shields.io/github/package-json/v/ariarzer/type.svg)](https://github.com/ariarzer/type)

Tiny library for determining the type.

Everything works out of the box.

__Size__:  183 B.

### Install

```sh
npm i ariarzer/type
```
 
### Usage

```js
const type = require('type');

type(new Date()); //=> object
```

Customization:

```js
const Type = require('type');

const type = Type.create({ mode:'all' }); 

type(new Date()); //=> date
```
### Configuration

#### Modes:

* **Normal**: works like almost `typeof`, but it is correct to handle `null` and arrays.

* **All**: distinguishes types of objects, returns the name of the object constructor in lowercase.

Examples: 

| input           | normal       | all          |
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

