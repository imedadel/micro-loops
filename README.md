# micro-loops

> 🚅 Fast and small implementations of JS loops 

> micro-loops is "fast and small" because it ignores many details and possible errors. **Test it before using it in production.**

## Install

```bash
yarn add micro-loops
```

## Usage

```js
import { map, find } from "micro-loops"

map({ arr: [1, 2, 3], fn: e => e * 2 })
```

## API

### map({arr, fn, len})

- arr: The array to iterate over
- fn: The function invoked per iteration
- len?: The length of the array (optional)

Returns the new array.

### mapna({arr, fn, len})

- arr: The array to iterate over
- fn: The function invoked per iteration
- len?: The length of the array (optional)

Returns the new array.

_Does not pre-allocate the new array, can be either slower or faster, depending on your use case_

### find({arr, fn, len})

- arr: The array to iterate over
- fn: The function invoked per iteration, returns `true` or `false`
- len?: The length of the array (optional)

Returns the index of the found element or undefined.

### findel({arr, fn, len})

- arr: The array to iterate over
- fn: The function invoked per iteration, returns `true` or `false`
- len?: The length of the array (optional)

Returns the element or undefined.

### filter({arr, fn, len})

- arr: The array to iterate over
- fn: The function invoked per iteration, returns `true` or `false`
- len?: The length of the array (optional)

Returns the filtered array.
