import Ember from 'ember';

export default Ember.Route.extend({
  async myMethod(thing) {
    await thing;
    return true;
  }
});
