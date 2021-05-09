import { Model } from '@vuex-orm/core';
import Dog from './dogs.model';

export default class User extends Model {
  static entity = 'user'

  static state() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      dogId: null,
    };
  }

  static set(user) {
    return User.commit((currentUser) => Object.assign(currentUser, user));
  }

  static get() {
    return User.store().state.entities[User.entity];
  }

  static async getUsersDog() {
    const { dogId } = this.get();
    if (dogId) {
      return Dog.query().find(dogId);
    }

    return null;
  }
}
