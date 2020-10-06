//constructor function that takes in the name of the potion
function Potion(name) {
    //'this' refers to the newly constructed Potion object
    this.types = ['strength', 'agility', 'health'];
    //if one of the given potion names is not entered, assign a random potion
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    //if it's a health potion, give it a value between 30 and 40
    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports = Potion;