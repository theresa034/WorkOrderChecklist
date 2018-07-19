
$(document).ready(function(){
	$("#chkPostage").change(function(){
		if(this.checked){
			$(".postageTab").show();
		} else {
			$(".postageTab").hide();
		}
	});
	
	$("#chkDataProcessing").change(function(){
		if(this.checked){
			$(".dataProcessing").show();
		} else {
			$(".dataProcessing").hide();
		}
	});
	
	$("#chkLettershop").change(function(){
		if(this.checked){
			$(".lettershopFulfillment").show();
		} else {
			$(".lettershopFulfillment").hide();
		}
	});
	
	$("#chkPrint").change(function(){
		if(this.checked){
			$(".print").show();
		} else {
			$(".print").hide();
		}
	});
	
	$("#chkForeign").change(function(){
		if(this.checked){
			$(".foreign").show();
		} else {
			$(".foreign").hide();
		}
	});

	$("#chkWarehouse").change(function(){
		if(this.checked){
			$(".warehouse").show();
		} else {
			$(".warehouse").hide();
		}
	});
	
	$("#chkSample").change(function(){
		if(this.checked){
			$(".sample").show();
		} else {
			$(".sample").hide();
		}
	});
});
