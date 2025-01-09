"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
const Rank_1 = require("../enums/Rank");
class Warrior {
    constructor(experience = 100, achievements = []) {
        this.experience = experience;
        this.achievements = achievements;
    }
    // Functions
    training(details) {
        if (details[0] == null || details[1] == null || details[2] == null) {
            return 'An element is missing';
        }
        if (this.level >= details[2]) {
            this.achievements.push(details[0]);
            this.experience += details[1];
        }
        else {
            return 'Not strong enough';
        }
    }
    // Computed
    get level() {
        const experience = Math.max(10000, this.experience);
        return experience / 100;
    }
    get rank() {
        switch (true) {
            case (this.level >= 1 && this.level <= 9):
                return Rank_1.Rank.PUSHOVER;
            case (this.level >= 10 && this.level <= 19):
                return Rank_1.Rank.NOVICE;
            case (this.level >= 20 && this.level <= 29):
                return Rank_1.Rank.FIGHTER;
            case (this.level >= 30 && this.level <= 39):
                return Rank_1.Rank.WARRIOR;
            case (this.level >= 40 && this.level <= 49):
                return Rank_1.Rank.VETERAN;
            case (this.level >= 50 && this.level <= 59):
                return Rank_1.Rank.SAGE;
            case (this.level >= 60 && this.level <= 69):
                return Rank_1.Rank.ELITE;
            case (this.level >= 70 && this.level <= 79):
                return Rank_1.Rank.CONQUEROR;
            case (this.level >= 80 && this.level <= 89):
                return Rank_1.Rank.CHAMPION;
            case (this.level >= 90 && this.level <= 99):
                return Rank_1.Rank.MASTER;
            case (this.level == 100):
                return Rank_1.Rank.GREATEST;
            default:
                return Rank_1.Rank.PUSHOVER;
        }
    }
}
exports.Warrior = Warrior;
