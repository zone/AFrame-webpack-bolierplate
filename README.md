# AFrame boilerplate

This boilerplate aims to solve two problems:

1. CSP restriction on VR devices
2. Collect and configure minimal set of functionalities for successful room-scale VR experiences

## CSP restrictions
The CSP for VR devices is very strict, and whilst things work really nice in browser, running Glitch or loading scripts from CDN fail when trying to use Vive or Oculus devices.

The easiest way to ensure everything loads and works properly is to serve every script and every asset though ssl, from the same domain.

## Minimal set of functionalities

This boilerplate creates a VR scene which:

1. Initiates a scene ...

# Prerequisites

To be able to run "compile" and package code, you have to use [Node.js](https://nodejs.dev/). This boilerplate was build and tested on `Node.js v16.14.0`

# Installation

1. Once you have this code checked out, initiate the build install all the necessary packages. Open the directory where you have downloaded the code in terminal, and run `npm install`
1. Physics module requires a `browserify` packager, but this project uses `webpack` as it is a packager we use in our organisation. To resolve this issue, please edit `./node_modules/aframe-physics-system/src/drivers/worker-driver.js` and modify `require('webworkify')` on the 1st line to `require('webworkify-webpack')`:
        
    <!-- language: lang-js -->
        var webworkify = require('webworkify-webpack'),
            webworkifyDebug = require('./webworkify-debug'),
            Driver = require('./driver'),
            Event = require('./event'),
            worker = require('./worker'),
            protocol = require('../utils/protocol')
1. `package.json` defines three scripts you can run: `watch`, `build`, and `test`. To run them use `npm run` command, for example you would want to use `npm run watch` to initiate npm in the watch mode. Any change to any files in src will automatically trigger build. To prepare and optimise the build run `npm run build`.  

    Code is compiled to the `dist` folder.
1.    