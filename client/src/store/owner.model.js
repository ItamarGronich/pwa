import { Model } from '@vuex-orm/core';
import Dog from './dogs.model';

export default class Owner extends Model {
  static entity = 'owner'

  static state() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      dogId: null,
    };
  }

  static set(owner) {
    return Owner.commit((currentOwner) => Object.assign(currentOwner, owner));
  }

  static get() {
    return Owner.store().state.entities[Owner.entity];
  }

  static async getOwnersDog() {
    const { dogId } = this.get();
    if (dogId) {
      return Dog.query().find(dogId);
    }

    return null;
  }
}
