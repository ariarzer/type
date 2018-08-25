# Type

[![Build status](https://travis-ci.org/ariarzer/type.svg?branch=master)](https://travis-ci.org/ariarzer/type)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/ariarzer/type/blob/master/LICENSE)
![Maintenance intention for this crate](https://img.shields.io/badge/maintenance-actively--developed-brightgreen.svg)
[![GitHub package version](https://img.shields.io/github/package-json/v/ariarzer/type.svg)](https://github.com/ariarzer/type)

Tiny library for determining the type.
 
Correctly handles arrays and `null`.

Everything works out of the box.

__Size__: 42 B.

### Install

```sh
npm i ariarzer/type
```
 
### Usage

```js
const type = require('type');

type(new Date()); //=> 'object'
type([]); //=> 'array'
```
