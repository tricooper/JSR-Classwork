	'use strict';

var MyApp = {};

MyApp.comments = [
{userName: 'Tristan', email: 'test@test.com' , comment: 'hello'},
{userName: 'Tristan', email: 'test@test.com' , comment: 'hello'},
{userName: 'Tristan', email: 'test@test.com' , comment: 'hello'},

];

// Blog App
// Use the todo app as an example of how this app should work.
// 1) Make sit o that you can add a comment, use handlebars for templating. Add comment to a javascript array.
// 1a) Comment should include the users name, email address and their comment
// 2) Create list of existing comments and add them on page load to the comment section
// 3) Make it so that a comment can get deleted, also deleting it from the array
// 4) BONUS: Make the other comment section work
// 5) BONUS: Make it so that you can edit a comment


MyApp.compileItem = function (item){
	var source = $('#comment-template').html();
	var template = Handlebars.compile(source);
	return template(item);
}

MyApp.addComment = function (list, $comment_text, $comment_email, $comment_name) {
	var emailValue = $comment_email.val();
	var userNameValue = $comment_name.val();
	var textValue = $comment_text.val();
	var itemComment = {userName: userNameValue, email: emailValue, comment: textValue };
	MyApp.comments.push(itemComment);
	var compiledItem = MyApp.compileItem(itemComment);
	list.append(compiledItem);
}

// Add Comment to List function

MyApp.populateList = function($comments) {
	for (var i=0; i<MyApp.comments.length; i ++){
		var newItem = MyApp.compileItem(MyApp.comments[i]);
		$comments.append(newItem);
	}

}

// remove from list Function

MyApp.removeFromList = function ($comments, $commentItem) {
	var $itemIndex = $commentItem.index();
  	if ($itemIndex > -1) {
    MyApp.comments.splice($itemIndex, 1);
  }
	$commentItem.remove();

}

$(document).ready(function(){

 	var $comment_form = $('.comment_form');
 	var $comments = $('.comments');
 	MyApp.populateList($comments);
 	$comment_form.click (function(event){
 		event.preventDefault();
 		var $comment_text = $('.comment_text');
 		var $comment_email = $('.comment_email');
 		var $comment_userName = $('.comment_name');
 		MyApp.addComment($comments, $comment_text, $comment_email, $comment_userName);

 	});

 	$comments.on('click', '.removeComment', function(e){
 		var $commentItem = $(this).parent();
 		MyApp.removeFromList($comments, $commentItem)
 	});

 });
