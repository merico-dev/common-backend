# CommonBackend

# How to update this based on A new verion of AE

1. get the new proto file "https://gitlab.com/we/need/to/opensource/this/code_analytics.proto"
2. Overwrite the current ae-helper/grpc/code_analysis.proto
3. Add your method to ae-helper/index.ts

Compile

1. `npx pbjs -t static-module -w commonjs -o ../protos/codeAnalytics.js code_analytics.proto`
2. `npx pbts -o ../protos/codeAnalytics.d.ts ../protos/codeAnalytics.js`
3. `npm run build`

Then the new methods should be available.

There is no need to change any code in this repo. Its all generated.

## Summary

This is a library that is meant to be shared between EE and CE that consumes the AE

No object relational mapper, DB model or DB execution can happen in this code. This code is meant to lower code coupling for re-use.

This line should not appear in this repo:

`import { <anything> } from "typeorm";`

Also this line should not appear:

`import { <anything> } from '../models';`

## How this library should be consumed

```
import * as common from 'common-backend'

class MyProjectSpecificController {
  getDataForUIGraph(valuesForQueries){
    let sql1 = common.getQueryStringForQuery1(valuesForQueries.email, valuesForQueries.name)
    let results1 = createDBConnection().execute(sql)

    let modifiedResults1 = common.formatMyData(results1)

    let sql2 = common.getQueryStringForQuery2(valuesForQueries.email, valuesForQueries.name)
    let results2 = createDBConnection().execute(sql)

    let modifiedResults2 = formatMyDataForUIGrid(results2)

    return modifiedResults2
  }

  createDBConnection(){
    ...This is controlled by your project and is up to you
  }

  formatMyDataForUIGrid(){
    ... It is up to you to format the data for the UI that your project supports
  }
}
```

## Integration Testing

This library should also run its own integration tests to a mock EE database. This is because if someone changes the schema of that DB, the queries will all fail here.

We will need unit tests for all the methods that modify data through JS

# TODO:

- [ ] refactor out the services import from the statistics helper
- [ ] integration tests
- [ ] unit tests
