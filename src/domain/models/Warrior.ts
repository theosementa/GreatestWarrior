import { Rank } from "../enums/Rank"

export class Warrior {
  experience: number
  achievements: string[]

  constructor(experience: number = 100, achievements: string[] = []) {
    this.experience = experience
    this.achievements = achievements
  }

  // Functions
  training(details: [string, number, number]) {
    if (details[0] == null || details[1] == null || details[2] == null) {
      return 'An element is missing'
    }

    if (this.level >= details[2]) {
      this.achievements.push(details[0])
      this.experience += details[1]
    } else {
      return 'Not strong enough'
    }
  }

  battle(level: number) {
    if (level < 1 || level > 100) {
      console.log('Invalid level')
      return
    }

    if (level > this.level - 5) {
      console.log("You've been defeated")
      return
    }

    switch (true) {
      case level > this.level:
        const diff = level - this.level
        this.experience += (20 * diff * diff)
        break
      case level === this.level:
        this.experience += 10
        break
      case level === (this.level - 1):
        this.experience += 5
        break
      case level <= (this.level - 2):
        this.experience += 0
        break
    }

    switch (true) {
      case this.level >= (level + 2):
        console.log("Easy fight")
        return
      case this.level >= (level + 1):
        console.log("A good fight")
        return
      case this.level === level:
        console.log("An intense fight")
        return
    }
  }

  // Computed
  get level(): number {
    const experience = Math.min(10_000, this.experience)
    return experience / 100
  }

  get rank(): Rank {
    switch (true) {
      case (this.level >= 1 && this.level <= 9):
        return Rank.PUSHOVER
      case (this.level >= 10 && this.level <= 19):
        return Rank.NOVICE
      case (this.level >= 20 && this.level <= 29):
        return Rank.FIGHTER
      case (this.level >= 30 && this.level <= 39):
        return Rank.WARRIOR
      case (this.level >= 40 && this.level <= 49):
        return Rank.VETERAN
      case (this.level >= 50 && this.level <= 59):
        return Rank.SAGE
      case (this.level >= 60 && this.level <= 69):
        return Rank.ELITE
      case (this.level >= 70 && this.level <= 79):
        return Rank.CONQUEROR
      case (this.level >= 80 && this.level <= 89):
        return Rank.CHAMPION
      case (this.level >= 90 && this.level <= 99):
        return Rank.MASTER
      case (this.level == 100):
        return Rank.GREATEST
      default:
        return Rank.PUSHOVER
    }
  }
}