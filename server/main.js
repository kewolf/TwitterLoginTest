import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    // code to run on server at startup
    ServiceConfiguration.configurations.remove({
        service: "twitter"
    });
    ServiceConfiguration.configurations.insert({
        service: "twitter",
        consumerKey: Meteor.settings.public.twitter.consumerKey,
        loginStyle: "popup",
        secret: Meteor.settings.twitter.consumerSecret
    });
});
