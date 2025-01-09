"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Warrior_1 = require("./domain/models/Warrior");
const WarriorUtils_1 = require("./utils/WarriorUtils");
function main() {
    const warrior = new Warrior_1.Warrior();
    const warriorUtils = new WarriorUtils_1.WarriorUtils(warrior);
    warriorUtils.printLevel();
    warriorUtils.printExperience();
    warriorUtils.printRank();
}
main();
