import { Model } from '@vuex-orm/core';

export default class Dog extends Model {
  static entity = 'dogs'

  static fields() {
    return {
      id: this.attr(null),
      name: this.string(''),
      img: this.string('').nullable(),
      type: this.string('').nullable(),
      ownerFirstName: this.string('').nullable(),
      ownerLastName: this.string('').nullable(),
      food: this.string('').nullable(),
      allergies: this.string('').nullable(),
      description: this.number(0).nullable(),
    };
  }

  static addDogs(dogs) {
    return this.insert({ data: dogs });
  }

  static createNewDogTable(dogs) {
    return this.create({ data: dogs });
  }

  static getDogById(id) {
    return this.query().find(id);
  }

  static getAllDogs() {
    return this.query().all();
  }
}
