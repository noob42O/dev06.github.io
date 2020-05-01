/**
common javascript/jquery functions

**/

/**
This function returns count of letters in username
**/
function getUserName() {
	console.log("Storing user name in variable");
	var userData = $('#userInput').val();
	var count = userData.length;
	return count;

}

/**
This function clears input/output fields
*/
function clearAll(){
	$('#userInput').val('');
	$('#display').html('');
}	

/**
This function prepares and display output after the user enters the name
*/
function keyPressed(event){ 
	console.log("calling function to respond to user..");
    var keycode = (event.keyCode ? event.keyCode : event.which);
	var noOfDays = cmasDays();
	var msgStr1 = 'Hey ' + $('#userInput').val();
	var msgStr2 = greetUser();
	var msgStr3 = noOfDays + ' days until Christmas';
	var msgStr4 = 'Your name contains '+ getUserName() + ' letters.';				
	console.log("building user message");
					
    if(keycode == '13'){
		console.log("User submitted name:" + $('#userInput').val());
		$('#display').html(msgStr1  + "<br />" + msgStr2 + "<br />" + msgStr3 + "<br />" + msgStr4);
		console.log("writing user message to page");
    }
}

/**
Function to calculate no. of days until Christmas
*/
function cmasDays(){

	today=new Date();
	var cmas=new Date(today.getFullYear(), 11, 25);
	if (today.getMonth()==11 && today.getDate()>25) 
	{
	cmas.setFullYear(cmas.getFullYear()+1); 
	}  
	var one_day=1000*60*60*24;
	var noOfDays = Math.ceil((cmas.getTime()-today.getTime())/(one_day));
	
	return noOfDays;
}

/**
 Function to return morning/afternoon/evening greeting
*/

function greetUser(){
	var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';
	
	return greet;
}

/**
	function called on pageload to log message
*/

function onPageLoad(){
	console.log("waiting for user name");
	
}	