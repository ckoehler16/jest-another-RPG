const Character = require('./Character');
const Potion = require('./Potion');

class Enemy extends Character {
    constructor(name, weapon) {
        super(name);
        // this.name = name;
        this.weapon = weapon;
        this.potion = new Potion();

        // this.health = Math.floor(Math.random() * 10 + 85);
        // this.strength = Math.floor(Math.random() * 5 + 5);
        // this.agility = Math.floor(Math.random() * 5 +5);
    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
}

module.exports = Enemy;
// inherit prototype methods from Character here:
// Enemy.prototype = Object.create(Character.prototype);

// returns the current health of the Enemy
// Enemy.prototype.getHealth = function() {
//     return `${this.name}'s health is now ${this.health}!`;
// };

// returns whether the Enemy is alive or not
// Enemy.prototype.isAlive = function() {
//     if(this.health === 0) {
//         return false;
//     }
//     return true;
// };

// Enemy.prototype.reduceHealth = function(health) {
//     this.health -= health;
//     if(this.health < 0) {
//         this.health = 0;
//     }
// };

// Enemy.prototype.getAttackValue = function() {
//     const min = this.strength - 5;
//     const max = this.strength + 5;

//     return Math.floor(Math.random() * (max - min) + min);
// };

// Enemy.prototype.getDescription = function() {
//     return `A ${this.name} holding a ${this.weapon} has appeared!`;
// };

