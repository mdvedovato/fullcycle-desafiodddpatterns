import EnviaConsoleLog1Handler from "./envia-console-log1.handler";
import CustomerCreatedEvent from "../customer-created.event";

describe("EnviaConsoleLog1Handler", () => {
  it("should log to console when handle is called", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const handler = new EnviaConsoleLog1Handler();
    const event = new CustomerCreatedEvent("1", "Customer 1");

    handler.handle(event);

    expect(consoleSpy).toHaveBeenCalledWith("Esse é o primeiro console.log do evento: CustomerCreated");

    consoleSpy.mockRestore();
  });
});
