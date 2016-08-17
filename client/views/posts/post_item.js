Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  email: function(){
  	return Meteor.users.findOne(this.userId).emails[0].address
  },
  ownPost: function(){
  	return this.userId == Meteor.userId();
  }
});