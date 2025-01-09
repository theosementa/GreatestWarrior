import { Warrior } from "./domain/models/Warrior"
import { WarriorUtils } from "./utils/WarriorUtils"

function main() {
  const warrior = new Warrior()
  const warriorUtils = new WarriorUtils(warrior)

  warriorUtils.printLevel()
  warriorUtils.printExperience()
  warriorUtils.printRank()
}

main()