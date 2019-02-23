#!/bin/bash
ng build ngElements --prod --output-hashing=none && cat dist/ngElements/runtime.js dist/ngElements/polyfills.js dist/ngElements/scripts.js dist/ngElements/main.js > consumer/ngElements.js