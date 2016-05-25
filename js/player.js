class Player {
  constructor(options) {
    this.items = []
    this.pokemon = options.pokemon
    this.name = options.name
  }

  useItem(item) {
    item.use(this)
    this.removeItemFromInventory(item)
  }

}

// if (item instanceof FirstAidKit) {
//   this.useFirstAidKit()
// } else if (item instanceof AttackPickup) {
//   this.useAttack()
// } else if (item instanceof Trap) {
//   this.useTrap()
// }
// etc ..