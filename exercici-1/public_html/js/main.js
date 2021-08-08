$(document).on("click", ".navbar-right .dropdown-menu", function(e){
	e.stopPropagation();
});


$(document).on("click", ".loginmodal", function(e)
{

	$('#mymodal .modal-body').load('login.html',function(){
       
     });

	var myModal = new bootstrap.Modal(document.getElementById('mymodal'), {
		keyboard: false		
	  });
	
	myModal.show();

});

$(document).on("click", ".registermodal", function(e)
{
	
	$('#mymodal .modal-body').load('register.html',function(){
       
     });

	var myModal = new bootstrap.Modal(document.getElementById('mymodal'), {
		keyboard: false		
	  });
	
	myModal.show();

});

$("#form_password").on("focusout", function () {
	if ($(this).val() != $("#form_password_confirm").val()) {
	  $("#form_password_confirm").removeClass("valid").addClass("invalid");
	} else {
	  $("#form_password_confirm").removeClass("invalid").addClass("valid");
	}
  });
  
  $("#form_password_confirm").on("keyup", function () {
	if ($("#form_password").val() != $(this).val()) {
	  $(this).removeClass("valid").addClass("invalid");
	} else {
	  $(this).removeClass("invalid").addClass("valid");
	}
  });

  