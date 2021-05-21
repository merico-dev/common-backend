# Steps


1. `cd node`
2. `npx pbjs -t static-module -w commonjs -o ./protos/codeAnalytics.js ../proto/all.proto`
3. `npx pbts -o ./protos/codeAnalytics.d.ts ./protos/codeAnalytics.js`

Replaces the input and output file names.
