import { Model } from '@vuex-orm/core';

export default class Dog extends Model {
  static entity = 'dogs'

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(''),
    };
  }
}
