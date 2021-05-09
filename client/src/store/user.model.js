import { Model } from '@vuex-orm/core';
import Owner from './owners.model';

export default class User extends Model {
  static entity = 'dogs'

  static fields() {
    return {
      id: this.attr(null),
      firstName: this.attr(''),
      lastName: this.attr(''),
      email: this.attr(''),
      ownerId: this.attr(null),
      owner: this.belongsTo(Owner, 'ownerId'),
    };
  }
}
