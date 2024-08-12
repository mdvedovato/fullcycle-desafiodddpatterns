import EnviaConsoleLogHandler from "./envia-console-log.handler";
import CustomerAddressChangedEvent from "../customer-address-changed.event";

describe("EnviaConsoleLogHandler", () => {
  it("should log to console when handle is called", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const handler = new EnviaConsoleLogHandler();
    const event = new CustomerAddressChangedEvent("1", "Customer 1", "Street 1, 123, 13330-250, São Paulo");

    handler.handle(event);

    expect(consoleSpy).toHaveBeenCalledWith(
      "Endereço do cliente: 1, Customer 1 alterado para: Street 1, 123, 13330-250, São Paulo"
    );

    consoleSpy.mockRestore();
  });
});
