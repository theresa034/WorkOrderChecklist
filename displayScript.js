$(document).ready(function(){
	$("#chkGeneral").change(function(){
		if(this.checked){
			$(".generalTab").show();
		} else {
			$(".generalTab").hide();
		}
	});

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

	$("#chkMerge").change(function(){
		if(this.checked){
			$(".Merge").show();
		} else {
			$(".Merge").hide();
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
		}else {
			$(".print").hide();
		}
	});

	$("#chkForeign").change(function(){
		if(this.checked){
			$(".foreign").show();
		}else {
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

	$("#chkReview").change(function(){
		if(this.checked){
			$(".woReview").show();
		} else {
			$(".woReview").hide();
		}
	});

	$("#chkSample").change(function(){
		if(this.checked){
			$(".samples").show();
		} else {
			$(".samples").hide();
		}
	});

	$("#btnClear").click(function(){
		var items = document.getElementsByName('sectionsCheck');
		for(var i=0; i<items.length; i++){
					if(items[i].type=='checkbox')
						items[i].checked=true;
					}
						$(".generalTab").show();
						$(".postageTab").show();
						$(".dataProcessing").show();
						$(".Merge").show();
						$(".lettershopFulfillment").show();
						$(".print").show();
						$(".foreign").show();
						$(".warehouse").show();
						$(".woReview").show();
						$(".sample").show();
			var reviewItems = document.getElementsByName('reviewCheck')

			for(var i=0; i<reviewItems.length; i++){
						if(reviewItems[i].type=='checkbox')
							reviewItems[i].checked=false;
						}
		 var reviewText = document.getElementsByName('reviewText')

						for(var i=0; i<reviewText.length; i++){
									if(reviewText[i].type=='textarea')
										reviewText[i].value="";
									}
   });

});
