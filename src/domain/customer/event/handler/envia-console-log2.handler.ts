import CustomerCreatedEvent from "../customer-created.event";

export default class EnviaConsoleLog2Handler {
  handle(event: CustomerCreatedEvent): void {
    console.log("Esse é o segundo console.log do evento: CustomerCreated");
  }
}