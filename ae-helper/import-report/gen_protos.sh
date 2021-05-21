mkdir -p ./protos
rm ./protos/all.d.ts
rm ./protos/all.js
npx pbjs -t static-module -w commonjs --root "_1599734255573" --no-create --no-encode --no-verify --no-convert --no-delimited -o ./protos/all.js \
  ../../../proto/analysis-proto/indicator/report_of_all.proto \
  ../../../proto/analysis-proto/indicator/commit.proto \
  ../../../proto/analysis-proto/indicator/line_diff_edit.proto
npx pbts -o ./protos/all.d.ts ./protos/all.js
