
# Whimsical fork of dagre

This fork was made to support a [new feature](https://github.com/WhimsicalCode/dagre/commit/f8f9511069a7603e00bece24b49de33cba1d04b5) in `dagre` - variable padding for clusters.
This enables us to have a better looking layout when calculating layout with `dagre`. 
This fork is made on the `0.8.6` version because the new maintainers of `dagre` have started to
use private class members in `graphlib` (dependency of `dagre`) which is not supported by
the Google Closure Compiler. When these changes were applied to the newer (`1.0.5-pre`) version, cluster children
`ranksep` (the vertical distance between nodes) looked very different compared to `0.8.6`

## How to release a new version
1. Make changes
2. Update version in `package.json`
3. Run `make dist`
4. Commit changes
5. Tag commit with new version
6. Push commit and tag
7. Create a new release on GitHub (This will trigger gha that will publish to github packages).



# dagre - Graph layout for JavaScript

[![Build Status](https://github.com/dagrejs/dagre/workflows/Build%20Status/badge.svg?branch=master)](https://github.com/dagrejs/dagre/actions?query=workflow%3A%22Build+Status%22)
[![npm](https://img.shields.io/npm/v/dagre.svg)](https://www.npmjs.com/package/dagre)


Dagre is a JavaScript library that makes it easy to lay out directed graphs on the client-side.

For more details, including examples and configuration options, please see our [wiki](https://github.com/dagrejs/dagre/wiki).

## License

dagre is licensed under the terms of the MIT License. See the LICENSE file for details.
