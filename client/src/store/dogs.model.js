import { Model } from '@vuex-orm/core';

export default class Dog extends Model {
  static entity = 'dogs'

  static fields() {
    return {
      id: this.attr(null),
      name: this.string(''),
      imgSrc: this.string('').nullable(),
      type: this.string('').nullable(),
      owner: this.string('').nullable(),
      food: this.string('').nullable(),
      allergies: this.string('').nullable(),
      description: this.string('').nullable(),
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
