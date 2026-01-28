export default class Ticket {
  constructor(amount, purchaser) {
    this.amount = amount;
    this.purchaser = purchaser;
    this.code = Date.now();
  }
}
