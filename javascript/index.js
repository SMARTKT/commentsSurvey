var CODE_ID = document.getElementById("commentCodeID").innerHTML;
console.log(CODE_ID);
var clickedBtn = "";
var email = "";
var name = "";
var designation = "";
var affiliation = "";
function openForm(btnId) {
	if (clickedBtn != "")
	{
		document.getElementById(clickedBtn).style.background = "";
	}
	document.getElementById("emailField").value = email;
	document.getElementById("nameField").value = name;
	document.getElementById("designationField").value = designation;
	document.getElementById("affiliationField").value = affiliation;
	clickedBtn = btnId;
	document.getElementById(btnId).style.background = "red";
  	document.getElementById("myForm").style.display = "block";
}

function closeForm() {
	document.getElementById(clickedBtn).style.background = "";
	clickedBtn = "";
  document.getElementById("myForm").style.display = "none";
}

function postToGoogle() {
	console.log(clickedBtn);
	var field1 = CODE_ID +":" + clickedBtn;
	var field2;
	if (document.getElementById('commentUseful').checked) {
		field2 = "U";
	}
	if (document.getElementById('commentNotUseful').checked) {
		field2 = "NU";
	}
	if (document.getElementById('commentPartialUseful').checked) {
		field2 = "PU";
	}
	var field3 =  $("#commentView").val();
	var field4 = $("#commentAlternate").val();

	email = $("#emailField").val();
	name = $("#nameField").val();
	designation = $("#designationField").val();
	affiliation = $("#affiliationField").val();


	$.ajax({
	    url: "https://docs.google.com/forms/d/e/1FAIpQLSfFptUsvMpu-bhgJRuWcxtsTY5arq1IRLDeiWMQrfLY0ucRGg/formResponse?",
		data: {"entry.1036359742": field1, "entry.1158064626": field2, "entry.841187499": field3, "entry.698127407": field4,
				"entry.1336341702": email, "entry.728973787": name, "entry.650664319": designation, "entry.804634005": affiliation},
	    type: "POST",
	    dataType: "xml",
	    success: function(d)
		{
			console.log("SUCCESS");
			document.getElementById("closeFormButton").click();
		},
		error: function(x, y, z)
			{
				console.log("FAL");
				$('#success-msg').show();
				$('#form').hide();
				document.getElementById("closeFormButton").click();
				
			}
	});
	return false;
}