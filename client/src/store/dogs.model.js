import { Model } from '@vuex-orm/core';

export default class Dog extends Model {
  static entity = 'dogs'

  static fields() {
    return {
      id: this.attr(null),
      name: this.string(''),
      img: this.string('').nullable(),
      type: this.string('').nullable(),
      owner: this.string('').nullable(),
      food: this.string('').nullable(),
      allergies: this.string('').nullable(),
      friendliness: this.number(0).nullable(),
    };
  }
}
