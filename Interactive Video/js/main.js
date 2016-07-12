  var popvideo = document.getElementById("myfirstVideo");
   var poPdemo = document.getElementById("poPdemo");
   var demo = document.getElementById("demo");
   var close = document.getElementById("close");
   var vid = $("#myfirstVideo");
   var video = document.getElementById("myfirstVideo");
   var isClicked = false;
   // if($(".popVid-data").is(":hidden")){
   	 // //setTimeout(function(){ if(!isClicked){$(poPdemo).fadeOut()} }, 5000);
   // }else{
   	// $(poPdemo).show();
   // }
   
   function getCurTime() {
     vid[0].pause(vid[0].currentTime);
   }
   function stopAtSpecificTime(){ 
   	switch(Math.floor(vid[0].currentTime)){
   		case 3:
   			//getCurTime();
     		$(".popVid-data").show();
     		//vid[0].play();
     		break;
     	case 5:
     	    if(!isClicked){
     	    	$(poPdemo).fadeOut()
     	    }
     	    break;
       case 9: 
	       //getCurTime();
	       $(".vid-data").show();
	       //video.play();
	       break;
   	}
    /*
    if(Math.floor(vid.currentTime) === 3){
         getCurTime();
         $(".popVid-data").show();
         vid.play();
        }*/
    
	//$("#poPdemo").delay(5000).fadeOut();
    // else if(Math.floor(vid.currentTime) === 9){
     // getCurTime();
     // $(".vid-data").show();
     // video.play();
     // }
   }
   
   function checkAndUpdateStatus(){
   	var currentTime = vid[0].currentTime;
   	if(currentTime >= 5 && !isClicked && $(".popVid-data").is(":visible")){
   		$(".popVid-data").fadeOut();
   	}
   	// switch(Math.floor(currentTime)){
   		// case (currentTime >= 5) :
   			// if(!isClicked && $(".popVid-data").is(":visible")){
   				// $(".popVid-data").fadeOut();
   			// }
   			// break;
   	// }
   }
   
   function bindEvents(){
   	vid.on("progress", function(){
   		stopAtSpecificTime();
   	});
   	vid.on("seeked", function(){
   		checkAndUpdateStatus();
   	});
   }
   
   function init(){
   	bindEvents();
   }
   
   init();
   
    demo.addEventListener("click", function(){
      vid[0].pause();
    });
    close.addEventListener("click", function(){
     vid.play();
     $(".vid-data").hide();
    });
    
   function myFunction() {
       var a = document.getElementById("name1").checked;
       var b = document.getElementById("name2").checked;
       var c = document.getElementById("name3").checked;
       var d = document.getElementById("name4").checked;
               
       var $elem = document.getElementById("demonew");
       if($elem.innerHTML === "Continue"){
        $elem.innerHTML = "Check";
        vid.currentTime = vid.currentTime + 1;
        $(".vid-data").hide()
        vid.play();
       } else if($elem.innerHTML === "Watch Again"){
        $elem.innerHTML = "Check";
        $(".vid-data").hide()
        vid.currentTime = 0;
        vid.play();
       } 
       else
       {
        if(a && !b && c && d){
         $elem.innerHTML="Continue";
        }else{
         $elem.innerHTML="Watch Again";
        }
       }
      }
   function ssFunction() {
       var a = document.getElementById("one").checked;
                var b = document.getElementById("two").checked;
                var c = document.getElementById("three").checked;
                var d = document.getElementById("four").checked;
               
       var $elem = document.getElementById("ssdemo");
       if($elem.innerHTML === "Continue"){
        $elem.innerHTML = "Check";
        video.currentTime = video.currentTime + 1;
        $(".ssvid-data").hide()
        video.play();
       } else if($elem.innerHTML === "Watch Again"){
        $elem.innerHTML = "Check";
        $(".ssvid-data").hide()
        video.currentTime = 11;
        video.play();
       } 
       else
       {
        if(a && b && c && !d){
         $elem.innerHTML="Continue";
        }else{
         $elem.innerHTML="Watch Again";
        }
       }
      }
    
   
   var interval = setInterval(stopAtSpecificTime, 0);
   
   poPdemo.addEventListener("click", function(){
    popvideo.pause();
    isClicked = true;
    $(".myModal").show();
   });
   close.addEventListener("click", function(){
    popvideo.play();
    $("#poPdemo").hide();
   });