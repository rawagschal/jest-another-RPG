const Potion = require('../lib/Potion');

//'name' param sets default empty string if no name is provided
function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
   
    this.inventory = [new Potion('health'), new Potion()];

}

//use 'prototype' to create the method once on the constructor
Player.prototype.getStats = function() {
    //returns an object with various player properites
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

Player.prototype.getInventory = function() {
    //returns the invertory or false if empty
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;  
};

module.exports = Player;