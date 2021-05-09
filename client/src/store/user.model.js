import { Model } from '@vuex-orm/core';
import Dog from './dogs.model';

export default class User extends Model {
  static entity = 'dogs'

  static fields() {
    return {
      id: this.attr(null),
      firstName: this.attr('').nullable(),
      lastName: this.attr('').nullable(),
      email: this.attr('').nullable(),
      dogId: this.attr(null).nullable(),
      dog: this.belongsTo(Dog, 'dogId'),
    };
  }
}
