import { Rank } from "./Rank"

export class Warrior {
  level: number
  rank: Rank

  constructor(level: number = 1, rank: Rank = Rank.PUSHOVER) {
    this.level = level
    this.rank = rank
  }
}