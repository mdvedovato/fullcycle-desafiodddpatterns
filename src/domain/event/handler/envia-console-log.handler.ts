import CustomerAddressChangedEvent from "../customer-address-changed.event";

export default class EnviaConsoleLogHandler {
  handle(event: CustomerAddressChangedEvent): void {
    console.log(
      `Endereço do cliente: ${event.customerId}, ${event.customerName} alterado para: ${event.address}`
    );
  }
}
