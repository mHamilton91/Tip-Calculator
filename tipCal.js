const calculateTip = () => {
	var amount = parseFloat(document.getElementById("amount").value);
	var service = document.getElementById("service").value;
	var sharing = parseFloat(document.getElementById("sharing").value);
	var percent;
	
	switch(service) {
		case "outstanding":
			percent = 0.3;
			break;
		case "good":
			percent = 0.2;
			break;
		case "ok":
			percent = 0.15;
			break;
		case "bad":
			percent = 0.1;
			break;
		case "terrible":
			percent = 0.05;
			break;
		default:
			percent = 1;
			break;
	}
	
	if(isNaN(amount) || isNaN(sharing) || service === "") {
		alert("Please Enter All Correct Values");
	} else {
		showTipAmount();
		
		let tip = (amount*percent)/sharing;
		if(sharing > 1) 
			document.getElementById("result").innerHTML = "$" + tip.toFixed(2) + " each";
		else
			document.getElementById("result").innerHTML = "$" + tip.toFixed(2);
		
		
	}
}

const showTipAmount = () => {
	document.getElementById("tipAmount").innerHTML = "Tip Amount:";
}