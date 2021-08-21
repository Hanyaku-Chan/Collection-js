# JSON-Collection

Collection.js is a Node.JS Library for managing data. It has been inspired by the Discord.JS Collection.

## Installation

Use the package manager npm to install Collection.js.

```bash
npm i json-collection
```

## Usage

```javascript
const Collection = require("json-collection");

let data = new Collection();

data.set("name", "value");

console.log(data.get("name"));
```

You can also store a required file or another Collection inside a Collection.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)
