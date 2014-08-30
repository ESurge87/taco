

//Starts page with images for blackmale hidden
$(document).ready(function() {
	$(".blackmale").hide()
	$(".mentor1responses").hide()
	$(".imgbuttons").hide()
	//$(#"btn_hideshowd").hide()
	});
//Starts page with images for blackfemale hidden
$(document).ready(function() {
	$(".blackfemale").hide()
	$(".mentor2responses").hide()
});
//Starts page with images for asianmale hidden
$(document).ready(function() {
	$(".asianmale").hide()
	$(".mentor3responses").hide()
});
//Starts page with images for asianfemale hidden
$(document).ready(function() {
	$(".asianfemale").hide()
	$(".mentor4responses").hide()
});
//Starts page with images for mixedmale hidden
$(document).ready(function() {
	$(".mixedmale").hide()
	$(".mentor5responses").hide()
});
//Starts page with images for indianfemale hidden
$(document).ready(function() {
	$(".indianfemale").hide()
	$(".mentor6responses").hide()
});
//Starts page with images for italianmale hidden
$(document).ready(function() {
	$(".italianmale").hide()
	$(".mentor7responses").hide()
});
//Starts page with images for mixedfemale hidden
$(document).ready(function() {
	$(".mixedfemale").hide()
	$(".mentor8responses").hide()
});
//Starts page with images for whitemale hidden
$(document).ready(function() {
	$(".whitemale").hide()
	$(".mentor9responses").hide()
});
//Starts page with images for whitefemale hidden
$(document).ready(function() {
	$(".whitefemale").hide()
	$(".mentor10responses").hide()
});
//Starts page with list of Mentors hidden
$(document).ready(function() {
	$(".Mentors").hide()
});
//shows and hides the list of Mentors
	$(document).ready(function() {

	//single click to show the list of Mentors
	$("#mentors").click(function(){
		$(".Mentors").show()
	});
	//doubleclick to hide the list of Mentors
	$("#mentors").dblclick(function() {
			//Changes text back to original color to indicate images are no longer visible
		$(this).css("color","#6f7a6f");
			$(".Mentors").hide()
			/*after double click the browser highlights the text
			the following if else statement un-highlights the text  
			immediately after the double click takes place*/
			if (window.getSelection)
				window.getSelection().removeAllRanges();
			else if (document.selection)
				document.selection.empty();
	});

});
//click the first li item to show the first row of the table --- Black Male 1
$(document).ready(function() {
	// which holds the 4 images for mentor number 1 "Black Male"
	$("#blackmale").click(function(){	
		//counter
		var i = 1;
			//selects the group of images/descendants in the selected class 
		$(".blackmale img").each (function()  {
		//initialize the counter
			i++; 
		
		$(this).addClass("test_" + i.toString()); 
		});
			var c = 1; 
			$("img").click(function() { 
			c++; 
		$(".blackmale img").hide(); 
			//console.log( $(".test_" + parseInt(c % 4 + 1))); 
		var bm = $(".test_" + parseInt(c % 4+2)).show();  
	});
		//when shown, text turns blue so if you have more than one showing, you can see which ones they are in the menu
		 $(this).css("color","#156BFF");
		$(".imgbuttons").show(function(){
			$(".blackmale").show()
		});
		//shows a list of all mentor responses for this mentor
		$(".mentor1responses").show()
	});
	$(document).ready(function() {
		$("#btn_next").click(function() {
			$(".blackmale").css
		});
	});
	//double click to hide the images for black male
	$("#blackmale").dblclick(function(){
		//Changes text back to original color to indicate images are no longer visible
		$(this).css("color","#6f7a6f");
		//hides list of responses
			$(".mentor1responses").hide()
			//$(".imgbuttons").hide()
			$(".test_*").hide()
		/*after double click the browser highlights the text
		the following if else statement un-highlights the text  
		immediately after the double click takes place*/
		if (window.getSelection)
			window.getSelection().removeAllRanges();
		else if (document.selection)
			document.selection.empty();
	});
});
//click the second li item to show the second row of the table --- Black Female 2
$(document).ready(function() {
	// which holds the 4 images for mentor number 2 "Black Female"
	$("#blackfemale").click(function(){										//y
		var i = 1; 
		$(".blackfemale img").each (function()  {
			i++; 
			$(this).addClass("test_" + i.toString()); 
		});
		var c = 1; 
		$("img").click(function() { 
		c++; 
			$(".blackfemale img").hide(); 
			//console.log( $(".test_" + parseInt(c % 4 + 1))); 
				$(".test_" + parseInt(c % 4+2)).show();  
			});
			//when shown, text turns blue so if you have more than one showing, you can see which ones they are in the menu
		 $(this).css("color","#156BFF");
		$(".blackfemale").show()
		//shows a list of all mentor responses for this mentor
		$(".mentor2responses").show()
	});
	//double click to hide the images for black Female
	$("#blackfemale").dblclick(function(){
			//Changes text back to original color to indicate images are no longer visible
		$(this).css("color","#6f7a6f");
		$(".blackfemale").hide()
		//hides list of responses
		$(".mentor2responses").hide()
		/*after double click the browser highlights the text
		the following if else statement un-highlights the text  
		immediately after the double click takes place*/
		if (window.getSelection)
			window.getSelection().removeAllRanges();
		else if (document.selection)
			document.selection.empty();
	});
});
//click the third li item to show the third row of the table  ---Asian Male 3
$(document).ready(function() {	
	// which holds the 4 images for mentor number 3 "Asian Male"
	$("#asianmale").click(function(){
			var i = 1; 
		$(".asianmale img").each (function()  {
			i++; 
			$(this).addClass("test_" + i.toString()); 
		});
		var c = 1; 
		$("img").click(function() { 
		c++; 
			$(".asianmale img").hide(); 
			//console.log( $(".test_" + parseInt(c % 4 + 1))); 
				$(".test_" + parseInt(c % 4+2)).show();  
			});
				//when shown, text turns blue so if you have more than one showing, you can see which ones they are in the menu
		 $(this).css("color","#156BFF");
		$(".asianmale").show()
		//shows a list of all mentor responses for this mentor
		$(".mentor3responses").show()
	});
	//double click to hide the images for Asian Male
	$("#asianmale").dblclick(function(){
			//Changes text back to original color to indicate images are no longer visible
		$(this).css("color","#6f7a6f");
		$(".asianmale").hide()
		//hides list of responses
		$(".mentor3responses").hide()
		/*after double click the browser highlights the text
		the following if else statement un-highlights the text  
		immediately after the double click takes place*/
		if (window.getSelection)
			window.getSelection().removeAllRanges();
		else if (document.selection)
			document.selection.empty();
	});
});
//click the fourth li item to show the fourth row of the table --- Asian Female 4
$(document).ready(function() {
	// which holds the 4 images for mentor number 4 "Asian Female"
	$("#asianfemale").click(function(){
			var i = 1; 
		$(".asianfemale img").each (function()  {
			i++; 
			$(this).addClass("test_" + i.toString()); 
		});
		var c = 1; 
		$("img").click(function() { 
		c++; 
			$(".asianfemale img").hide(); 
			//console.log( $(".test_" + parseInt(c % 4 + 1))); 
				$(".test_" + parseInt(c % 4+2)).show();  
			});
			//when shown, text turns blue so if you have more than one showing, you can see which ones they are in the menu
		 $(this).css("color","#156BFF");
		$(".asianfemale").show()
		//shows a list of all mentor responses for this mentor
		$(".mentor4responses").show()
	});
	//double click to hide the images for Asian Female
	$("#asianfemale").dblclick(function(){
			//Changes text back to original color to indicate images are no longer visible
		$(this).css("color","#6f7a6f");
		//hides list of responses
		$(".mentor4responses").hide()
		$(".asianfemale").hide()
		/*after double click the browser highlights the text
		the following if else statement un-highlights the text  
		immediately after the double click takes place*/
		if (window.getSelection)
			window.getSelection().removeAllRanges();
		else if (document.selection)
			document.selection.empty();
	});
});
//click the fifth li item to show the fifth row of the table --- Mixed Male 5
$(document).ready(function() {
	// which holds the 4 images for mentor number 5 "mixed male"
	$("#mixedmale").click(function(){
			var i = 1; 
		$(".mixedmale img").each (function()  {
			i++; 
			$(this).addClass("test_" + i.toString()); 
		});
		var c = 1; 
		$("body").click(function() { 
		c++; 
			$(".mixedmale img").hide(); 
			//console.log( $(".test_" + parseInt(c % 4 + 1))); 
				$(".test_" + parseInt(c % 4+2)).show();  
			});
			//when shown, text turns blue so if you have more than one showing, you can see which ones they are in the menu
		 $(this).css("color","#156BFF");
		$(".mixedmale").show()
		//shows a list of all mentor responses for this mentor
		$(".mentor5responses").show()
	});
	//double click to hide the images for mixed male
	$("#mixedmale").dblclick(function(){
			//Changes text back to original color to indicate images are no longer visible
		$(this).css("color","#6f7a6f");
				//hides list of responses
		$(".mentor5responses").hide()
		$(".mixedmale").hide()
		/*after double click the browser highlights the text
		the following if else statement un-highlights the text  
		immediately after the double click takes place*/
		if (window.getSelection)
			window.getSelection().removeAllRanges();
		else if (document.selection)
			document.selection.empty();
	});
});
//click the sixth li item to show the sixth row of the table --- Indian Female 6
$(document).ready(function() {
	// which holds the 4 images for mentor number 6 "Indian Female"
	$("#indianfemale").click(function(){
			var i = 1; 
		$(".indianfemale img").each (function()  {
			i++; 
			$(this).addClass("test_" + i.toString()); 
		});
		var c = 1; 
		$("img").click(function() { 
		c++; 
			$(".indianfemale img").hide(); 
			//console.log( $(".test_" + parseInt(c % 4 + 1))); 
				$(".test_" + parseInt(c % 4+2)).show();  
			});
			//when shown, text turns blue so if you have more than one showing, you can see which ones they are in the menu
		 $(this).css("color","#156BFF");
		$(".indianfemale").show()
		//shows a list of all mentor responses for this mentor
		$(".mentor6responses").show()
	});
	//double click to hide the images for Indian Female
	$("#indianfemale").dblclick(function(){
			//Changes text back to original color to indicate images are no longer visible
		$(this).css("color","#6f7a6f");
				//hides list of responses
		$(".mentor6responses").hide()
		$(".indianfemale").hide()
		/*after double click the browser highlights the text
		the following if else statement un-highlights the text  
		immediately after the double click takes place*/
		if (window.getSelection)
			window.getSelection().removeAllRanges();
		else if (document.selection)
			document.selection.empty();
	});
});
//click the seventh li item to show the seventh row of the table --- Italian Male 7
$(document).ready(function() {
	// which holds the 4 images for mentor number 7 "Italian Male"
	$("#italianmale").click(function(){
			var i = 1; 
		$(".italianmale img").each (function()  {
			i++; 
			$(this).addClass("test_" + i.toString()); 
		});
		var c = 1; 
		$("img").click(function() { 
		c++; 
			$(".italianmale img").hide(); 
			//console.log( $(".test_" + parseInt(c % 4 + 1))); 
				$(".test_" + parseInt(c % 4+2)).show();  
			});
			//when shown, text turns blue so if you have more than one showing, you can see which ones they are in the menu
		 $(this).css("color","#156BFF");
		$(".italianmale").show()
		//shows a list of all mentor responses for this mentor
		$(".mentor7responses").show()
	});
	//double click to hide the images for Italian Male
	$("#italianmale").dblclick(function(){
			//Changes text back to original color to indicate images are no longer visible
		$(this).css("color","#6f7a6f");
		//hides list of responses
		$(".mentor7responses").hide()
		$(".italianmale").hide()
		/*after double click the browser highlights the text
		the following if else statement un-highlights the text  
		immediately after the double click takes place*/
		if (window.getSelection)
			window.getSelection().removeAllRanges();
		else if (document.selection)
			document.selection.empty();
	});
});
//click the eighth li item to show the eighth row of the table --- Mixed Female 8
$(document).ready(function() {	
	// which holds the 4 images for mentor number 8 "Mixed female"
	$("#mixedfemale").click(function(){
			var i = 1; 
		$(".mixedfemale img").each (function()  {
			i++; 
			$(this).addClass("test_" + i.toString()); 
		});
		var c = 1; 
		$("img").click(function() { 
		c++; 
			$(".mixedfemale img").hide(); 
			//console.log( $(".test_" + parseInt(c % 4 + 1))); 
				$(".test_" + parseInt(c % 4+2)).show();  
			});
			//when shown, text turns blue so if you have more than one showing, you can see which ones they are in the menu
		 $(this).css("color","#156BFF");
		$(".mentor8responses").show()
	});
	//double click to hide the images for Italian Male
	$("#mixedfemale").dblclick(function(){
			//Changes text back to original color to indicate images are no longer visible
		$(this).css("color","#6f7a6f");
		//hides list of responses
		$(".mentor8responses").hide()
		$(".mixedfemale").hide()
		/*after double click the browser highlights the text
		the following if else statement un-highlights the text  
		immediately after the double click takes place*/
		if (window.getSelection)
			window.getSelection().removeAllRanges();
		else if (document.selection)
			document.selection.empty();
	});
});
//click the ninth li item to show the ninth row of the table --- White Male 9
$(document).ready(function() {
	// which holds the 4 images for mentor number 9 "white Male"
	$("#whitemale").click(function(){
	var i = 1; 
		$(".whitemale img").each (function()  {
			i++; 
			$(this).addClass("test_" + i.toString()); 
		});
		var c = 1; 
		$("img").click(function() { 
		c++; 
			$(".whitemale img").hide(); 
			//console.log( $(".test_" + parseInt(c % 4 + 1))); 
				$(".test_" + parseInt(c % 4+2)).show();  
			});
			//when shown, text turns blue so if you have more than one showing, you can see which ones they are in the menu
		 $(this).css("color","#156BFF");
		$(".whitemale").show()
		//shows a list of all mentor responses for this mentor
		$(".mentor9responses").show()
	});
	//double click to hide the images for Italian Male
	$("#whitemale").dblclick(function(){
			//Changes text back to original color to indicate images are no longer visible
		$(this).css("color","#6f7a6f");
				//hides list of responses
		$(".mentor9responses").hide()
		$(".whitemale").hide()
		/*after double click the browser highlights the text
		the following if else statement un-highlights the text  
		immediately after the double click takes place*/
		if (window.getSelection)
			window.getSelection().removeAllRanges();
		else if (document.selection)
			document.selection.empty();
	});
});
//click the tenth li item to show the tenth row of the table --- White Female 10
$(document).ready(function() {
	// which holds the 4 images for mentor number 10 "white Female"
	$("#whitefemale").click(function(){
	var i = 1; 
		$(".whitefemale img").each (function()  {
			i++; 
			$(this).addClass("test_" + i.toString()); 
		});
		var c = 1; 
		$("img").click(function() { 
		c++; 
			$(".whitefemale img").hide(); 
			//console.log( $(".test_" + parseInt(c % 4 + 1))); 
				$(".test_" + parseInt(c % 4+2)).show();  
			});
			//when shown, text turns blue so if you have more than one showing, you can see which ones they are in the menu
		 $(this).css("color","#156BFF");
		$(".whitefemale").show()
		//shows a list of all mentor responses for this mentor
		$(".mentor10responses").show()
	});
	//double click to hide the images for Italian Male
	$("#whitefemale").dblclick(function(){
			//Changes text back to original color to indicate images are no longer visible
		$(this).css("color","#6f7a6f");
		//hides list of responses
		$(".mentor10responses").hide()
		$(".whitefemale").hide()
		/*after double click the browser highlights the text
		the following if else statement un-highlights the text  
		immediately after the double click takes place*/
		if (window.getSelection)
			window.getSelection().removeAllRanges();
		else if (document.selection)
			document.selection.empty();
	});
});
