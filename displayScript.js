$(document).ready(function(){
/*hide "extras" from the start*/
	$("#postageTab").hide();
	$("#dataProcessing").hide();
	$("#lettershopFulfillment").hide();
	$("#print").hide();
	$("#foreign").hide();
	$("#warehouse").hide();	
	
/*checkbox conditions*/	
	$("#chkPostage").click(function(){
		if($("#chkPostage").is(":checked")){
			$("#postageTab").show();
		} else {
			$("#postageTab").hide();
		}
	});
  
	

});	
