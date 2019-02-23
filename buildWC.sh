#!/bin/bash
ng build ngElements --prod --output-hashing none --single-bundle true --keep-polyfills true
mv dist/ngElements/main.js consumer/ngElements.js
mv dist/ngElements/scripts.js consumer/scripts.js
mv dist/ngElements/polyfills.js consumer/polyfills.js
