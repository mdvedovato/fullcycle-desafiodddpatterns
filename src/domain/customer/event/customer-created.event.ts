export default class CustomerCreatedEvent {
    constructor(public readonly customerId: string, public readonly customerName: string) {}
  }