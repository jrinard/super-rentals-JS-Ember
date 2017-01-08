import Ember from 'ember';

export default Ember.Route.extend({ // exporting rentals  this is a MODEL HOOK
  model() { // same thing as writing model: function()
    return this.store.findAll('rental'); //refers to firebase data store to find all records of the type rental
  },
  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
