"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarriorUtils = void 0;
class WarriorUtils {
    constructor(warrior) {
        this.warrior = warrior;
    }
    printLevel() {
        console.log(`Level : ${this.warrior.level}`);
    }
    printExperience() {
        console.log(`XP : ${this.warrior.experience}`);
    }
    printRank() {
        console.log(`Rank : ${this.warrior.rank}`);
    }
}
exports.WarriorUtils = WarriorUtils;
