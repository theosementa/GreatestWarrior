import { Warrior } from "./domain/models/Warrior"
import { WarriorUtils } from "./utils/WarriorUtils"

function main() {
  const warrior = new Warrior()
  const warriorUtils = new WarriorUtils(warrior)

  warriorUtils.printLevel()
  warriorUtils.printExperience()
  warriorUtils.printRank()
  warrior.training(["Defeated Chuck Norris", 3000, 1])
  warrior.training(["Defeated The Rock", 5000, 10])
  console.log('\n')

  warriorUtils.printLevel()
  warriorUtils.printExperience()
  warriorUtils.printRank()
  console.log('\n')

  warrior.battle(83)
  warriorUtils.printExperience()
  warriorUtils.printAchievements()
}

main()