# UI Library

## Table of Contents

- [UI Library](#ui-library)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Development](#development)
    - [Use prior to publishing](#use-prior-to-publishing)
    - [Use once published](#use-once-published)

## Overview

This library provides a number of **re-usable ReactJS components**. The library uses [rollup.js](https://rollupjs.org) to bundle the code into a distribution, to be used in applications.

## Development

Prior to **Publishing** the library, to test, you can `pack` the code and install that as a dependency in your app.

### Use prior to publishing

1. Go to library root directory.
1. Run: `yarn pack`, this produces a gzipped file.
1. Go to the app you want to use the library in.
1. Run: `yarn add /path/to/gzipped/file`

### Use once published

1. Go to library root directory.
1. Run: `yarn link`, this creates a link to distribution.
1. Go to the app you want to use the library in.
1. Run: `yarn link <library name>`
