// Meteor.startup(function() {
//   Tracker.autorun(function() {
//     console.log('There are ' + Posts.find().count() + ' posts');
//   });
// });

Template.postsList.helpers({
  posts: function () {
     return Posts.find({}, {sort: { submitted: -1}});
  }
});