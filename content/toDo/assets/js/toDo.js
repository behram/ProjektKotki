$(".custom-container ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$(".custom-container ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(function() {
		$(this).remove(); //usuwa rodzica danego elementu
	}); 
	event.stopPropagation(); //blokuje wywoływanie metod rodzicow
})

$(".custom-container input").on("keypress", function(event) {
	if (event.which === 13) {
		var toDoText = $(this).val();
		$(".custom-container ul").append('<li><span><i class="fa fa-trash"></i></span> ' + toDoText + '</li>');
		$(this).val("");
	}
})

$("#show").on("click", function() {
	$(".custom-container input").fadeToggle();
})