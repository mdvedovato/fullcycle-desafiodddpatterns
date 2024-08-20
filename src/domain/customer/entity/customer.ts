import CustomerCreatedEvent from "../../events/customer-created.event";
import CustomerAddressChangedEvent from "../../events/customer-address-changed.event";
import EventDispatcher from "../../@shared/event/event-dispatcher";
import Address from "../value-object/address";

export default class Customer {
  private _id: string;
  private _name: string = "";
  private _address!: Address;
  private eventDispatcher: EventDispatcher;
  private _active: boolean = false;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.eventDispatcher = new EventDispatcher();
    this.eventDispatcher.notify(new CustomerCreatedEvent({ id, name }));
    this.validate();
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
  
  //changeAddress(address: Address) {
    //this._address = address;
  //}

  changeAddress(address: Address): void {
    this._address = address;
    const event = new CustomerAddressChangedEvent(this.id, this.name, address.toString());
    this.eventDispatcher.notify(event);
  }
//}

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
}
