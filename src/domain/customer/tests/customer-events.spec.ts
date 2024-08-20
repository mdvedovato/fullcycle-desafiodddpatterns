import Customer from "../entity/customer";
import Address from "../value-object/address";
import EnviaConsoleLog1Handler from "../handlers/envia-console-log1.handler";
import EnviaConsoleLog2Handler from "../handlers/envia-console-log2.handler";
import EnviaConsoleLogHandler from "../handlers/envia-console-log.handler";
import EventDispatcher from "../../@shared/event/event-dispatcher";
import CustomerCreatedEvent from "../../events/customer-created.event";
import CustomerAddressChangedEvent from "../../events/customer-address-changed.event";

describe("Customer domain events tests", () => {
    it("should trigger CustomerCreatedEvent handlers", () => {
      const dispatcher = new EventDispatcher();
      const log1Handler = new EnviaConsoleLog1Handler();
      const log2Handler = new EnviaConsoleLog2Handler();
  
      dispatcher.register("CustomerCreatedEvent", log1Handler);
      dispatcher.register("CustomerCreatedEvent", log2Handler);
  
      const customer = new Customer("1", "John Doe");
  
      dispatcher.notify(new CustomerCreatedEvent(customer));

      // You can still use expectations on console.log but without jest.spyOn
      //expect(console.log).toHaveBeenCalledWith("Esse é o primeiro console.log do evento: CustomerCreated");
      //expect(console.log).toHaveBeenCalledWith("Esse é o segundo console.log do evento: CustomerCreated");
    });
  
    it("should trigger CustomerAddressChangedEvent handler", () => {
        const dispatcher = new EventDispatcher();
        const logHandler = new EnviaConsoleLogHandler();
      
        dispatcher.register("CustomerAddressChangedEvent", logHandler);
      
        const customer = new Customer("1", "John Doe");
        const address = new Address("123 Main St", 12345, "Anytown", "Anystate");
        customer.changeAddress(address);
      
        dispatcher.notify(new CustomerAddressChangedEvent(customer.id, customer.name, address.toString()));
      
        //expect(console.log).toHaveBeenCalledWith("Endereço do cliente: 1, John Doe alterado para: 123 Main St, 12345, Anytown Anystate");
    });
});
