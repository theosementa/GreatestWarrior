import { Warrior } from "./domain/models/Warrior"
import { WarriorUtils } from "./utils/WarriorUtils"

function main() {
  const warrior = new Warrior()
  const warriorUtils = new WarriorUtils(warrior)

  warriorUtils.printLevel()
  warriorUtils.printExperience()
  warriorUtils.printRank()
  warrior.training(["Defeated Chuck Norris", 5000, 1])
  console.log('\n')

  warriorUtils.printLevel()
  warriorUtils.printExperience()
  warriorUtils.printRank()
  console.log('\n')

  warrior.battle(20)
  warriorUtils.printExperience()
}

main()