// Check off specific todos by clicking
$('ul').on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$('ul').on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove(); //here 'this' refers to this.parent() on which fadeOut() is applied
	});
	event.stopPropagation();
});

//Adding a new todo
$('input[type="text"]').keypress(function(event) {
	if (event.which === 13) {
		//grab new todo text from input
		var todoText = $(this).val();
		//clear the input after hitting enter
		$(this).val("");
		//create a new li and add to ul
		$('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

//adding and removing the edit todo list with edit icon
$(".fa-pencil-alt").click(function() {
	$('input[type="text"]').fadeToggle();
});