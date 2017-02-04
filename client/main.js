import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.customLogin.helpers({
  profPic: function(){
      var loggedin = Meteor.user();
      if(loggedin)
        return loggedin.services.twitter.profile_image_url;
      else
        return undefined;
  },
    profName:  function(){
        var loggedin = Meteor.user();
        if(loggedin)
            return loggedin.profile.name;
        else
            return undefined;
    }
});

Template.customLogin.events({
  'click #login' : function(e){
    Meteor.loginWithTwitter();
  },
  'click #logout': function(e){
    Meteor.logout();
  }
});
