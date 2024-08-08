import CustomerCreatedEvent from "./customer-created.event";

export default class EventDispatcher {
  private eventHandlers: { [eventName: string]: any[] } = {};

  register(eventName: string, handler: any): void {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }
    this.eventHandlers[eventName].push(handler);
  }

  notify(event: CustomerCreatedEvent): void {
    const eventName = event.constructor.name;
    if (this.eventHandlers[eventName]) {
      for (const handler of this.eventHandlers[eventName]) {
        handler.handle(event);
      }
    }
  }
}
