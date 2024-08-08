import Address from "../value-object/address";
import CustomerCreatedEvent from "../../event/customer-created.event";
import EventDispatcher from "../../event/event-dispatcher";
import EnviaConsoleLog1Handler from "../../event/handler/envia-console-log1.handler";
import EnviaConsoleLog2Handler from "../../event/handler/envia-console-log2.handler";

export default class Customer {
  private _id: string;
  private _name: string = "";
  private _address!: Address;
  private _active: boolean = false;
  private _rewardPoints: number = 0;
  //private eventDispatcher = new EventDispatcher();
  private eventDispatcher: EventDispatcher;

  constructor(id: string, name: string, eventDispatcher?: EventDispatcher) {
    this._id = id;
    this._name = name;
    this.eventDispatcher = eventDispatcher || new EventDispatcher();
    this.validate();
    this.dispatchCustomerCreatedEvent();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  get Address(): Address {
    return this._address;
  }
  
  changeAddress(address: Address) {
    this._address = address;
  }

  isActive(): boolean {
    return this._active;
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to activate a customer");
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }

  set Address(address: Address) {
    this._address = address;
  }

  private dispatchCustomerCreatedEvent() {
    const event = new CustomerCreatedEvent(this._id, this._name);
    this.eventDispatcher.notify(event);
  }  
}
