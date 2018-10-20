# Type

[![Build status](https://travis-ci.org/ariarzer/type.svg?branch=master)](https://travis-ci.org/ariarzer/type)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/ariarzer/type/blob/master/LICENSE)
![Maintenance intention for this crate](https://img.shields.io/badge/maintenance-actively--developed-brightgreen.svg)
[![GitHub package version](https://img.shields.io/github/package-json/v/ariarzer/type.svg)](https://github.com/ariarzer/type)

Tiny library for determining the type.
 
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
