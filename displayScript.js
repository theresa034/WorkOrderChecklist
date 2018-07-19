
$(document).ready(function(){
	$("#chkPostage").change(function(){
		if(this.checked){
			$(".postageTab").show();
		} else {
			$(".postageTab").hide();
		}
	});
});
