import EventHandlerInterface from "../../@shared/event/event-handler.interface";
import CustomerCreatedEvent from "../../events/customer-created.event";

export default class EnviaConsoleLog1Handler
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log("Esse é o primeiro console.log do evento: CustomerCreated");
  }
}
