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
        return Rank.PUSHOVER
      case (this.level >= 20 && this.level <= 29):
        return Rank.PUSHOVER
      case (this.level >= 30 && this.level <= 39):
        return Rank.PUSHOVER
      case (this.level >= 40 && this.level <= 49):
        return Rank.PUSHOVER
      case (this.level >= 50 && this.level <= 59):
        return Rank.PUSHOVER
      case (this.level >= 60 && this.level <= 69):
        return Rank.PUSHOVER
      case (this.level >= 70 && this.level <= 79):
        return Rank.PUSHOVER
      case (this.level >= 80 && this.level <= 89):
        return Rank.PUSHOVER
      case (this.level >= 90):
        return Rank.PUSHOVER
      default:
        return Rank.PUSHOVER
    }
  }
}