Session.set('pageTitle', "Messenger");

Template.header.helpers({
	pageTitle: function(){
		return Session.get("pageTitle");
	}
});
