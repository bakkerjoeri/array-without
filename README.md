# array-without

Exclude one or more items from an array.

## Installation

```sh
npm install @bakkerjoeri/array-without
```

## Usage

```js
import arrayWithout from '@bakkerjoeri/array-without';

const groceries = ['apple', 'potato', 'pear', 'cucumber', 'orange'];
const noCucumber = arrayWithout(groceries, 'cucumber'); // => ['apple', 'potato', 'pear', 'orange']
const onlyFruits = arrayWithout(groceries, 'potato', 'cucumber'); // => ['apple', 'pear', 'orange']
```

The function returns a new array without mutating the initial array.
