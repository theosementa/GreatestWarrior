import { Rank } from "../enums/Rank"

export class Warrior {
  experience: number

  constructor(experience: number = 100) {
    this.experience = experience
  }

  get level(): number {
    const experience = Math.max(10_000, this.experience)
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