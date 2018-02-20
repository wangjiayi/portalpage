$(document).ready(function(){
	
	var counter=1;
	contentRotator(counter);
	
});

function contentRotator(counter) {
	
	$("#rotator p:nth-child("+counter+")").fadeIn(2000, function(){
		
		if($(this).is("#rotator p:last-child"))
		{
			setTimeout(function(){
				
				$("#rotator p:nth-child("+counter+")").fadeOut(2000, function(){
					
					counter = 1;
					contentRotator(counter);
					
				});
				
			},7000);
		}
		
		else
		{
			setTimeout(function(){
				
				$("#rotator p:nth-child("+counter+")").fadeOut(2000, function(){
					
					counter++;
					contentRotator(counter);
					
				});
				
			},7000);
		}
		
	});
	
}