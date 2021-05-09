import { Model } from '@vuex-orm/core';
import Dog from './dogs.model';

export default class Owner extends Model {
  static entity = 'owner'

  static fields() {
    return {
      id: this.attr(null),
      firstName: this.attr(''),
      lastName: this.attr(''),
      email: this.attr(''),
      dogId: this.attr(null),
      dog: this.belongsTo(Dog, 'dogId'),
    };
  }
}
