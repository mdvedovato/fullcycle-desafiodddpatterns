import CustomerCreatedEvent from "../customer-created.event";

export default class EnviaConsoleLog1Handler {
  handle(event: CustomerCreatedEvent): void {
    console.log("Esse é o primeiro console.log do evento: CustomerCreated");
  }
}