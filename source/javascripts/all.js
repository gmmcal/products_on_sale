//= require jquery
//= require bootstrap-sprockets
//= require bootstrap/modal
//= require_tree .

$(function(){
	$('#exampleModal').on('show.bs.modal', function (event) {
	  var button = $(event.relatedTarget) // Button that triggered the modal
	  var image = button.data('image') // Extract info from data-* attributes
	  var title = button.data('title') // Extract info from data-* attributes
	  var modal = $(this)
	  modal.find('.modal-title').text(title)
	  modal.find('.modal-body').html('<img src="' + image + '" width="568" />');
	});
});