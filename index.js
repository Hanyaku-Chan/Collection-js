//One dependencies. Easy to use and fast to install.
const fs = require("fs");

//If needed
function sleep(ms) {
  //Stops the code for the ammount of ms that were given
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

module.exports = class {
  //On creation of the Class
  constructor() {
    //Create JSON for the Data
    this.data = {};
  }

  //Function for getting a value from the JSON
  get(name) {
    //Check if name is defined
    if(!name) return;

    //If value existing return it
    if(this.data[name]) return this.data[name];

  }

  //Function for storing values
  set(name, value) {
    //Check if both name and value are defined
    if(!name) return;
    if(!value) return;

    //If already data with the same name has been stored, return and log
    if(this.data[name]) return console.log("Data with the same Name has already been stored.");

    //Store the data
    this.data[name] = value;
  }

  delete = async function(name) {
    //If no data for the provided name, return and log in console
    if(!this.data[name]) return;

    //Pause (to get no errors)
    await sleep(50);

    //Delete
    delete this.data[name];
  }

  //Deletes everything from the JSON
  clear() {
    this.data = {};
    console.log("Data has been cleared.");
  }

  save(path) {
    fs.writeFileSync(path, JSON.stringify(this.data),  (err) => {
      if (err) throw err;
      console.log('Data has been saved.');
    });
  }

  load(path) {
    fs.readFile(path, (err, data) => {
      if (err) throw err;
      this.data = JSON.parse(data);
      console.log("Data has been loaded.")
    });
  }
}
