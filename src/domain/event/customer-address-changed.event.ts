export default class CustomerAddressChangedEvent {
    constructor(
      public readonly customerId: string,
      public readonly customerName: string,
      public readonly address: string
    ) {}
  }
  