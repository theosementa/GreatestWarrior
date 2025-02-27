import { Warrior } from "../domain/models/Warrior";

export class WarriorUtils {
  private warrior: Warrior

  constructor(warrior: Warrior) {
    this.warrior = warrior
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

  printAchievements() {
    console.log('Achievements :')
    this.warrior.achievements.forEach(($0) => {
      console.log(`- ${$0}`)
    }) 
  }

}