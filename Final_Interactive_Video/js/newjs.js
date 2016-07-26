
   var popvideo = document.getElementById("myfirstVideo");
   var poPdemo = document.getElementById("poPdemo");
   var demo = document.getElementById("demo");
   var close = document.getElementById("close");
   var vid = $("#myfirstVideo");
   var video = document.getElementById("myfirstVideo");
   var isClicked = false;
   
     
function stopAtSpecificTime(){ 
   	switch(Math.floor(vid.currentTime)){
   		case 18:
   			//getCurTime();
     		$(".popVid-data").show();
			
     		//vid.play();
     		break;
     	case 21:
     	    if(!isClicked){
     	    	$(poPdemo).fadeOut()
     	    }
     	    break;
       case 44: 
	       //getCurTime();
	       $(".vid-data").show(function(){
			  vid.pause(); 
			  isClicked = true; 
			  $('.play-icon').removeClass('pause-icon');
		   });
	       //video.play();
	       break;
	  case 47:
     	    if(!isClicked){
     	    $(".vid-data").fadeOut()
     	    }
     	    break;
   	    }
     }
	 
 
	  
	  $('#close').click(function(){
		   vid.play();
	  });
      
      function checkAndUpdateStatus(){
   	var currentTime = vid.currentTime;
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
      vid.pause(); 
      isClicked = true;
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
		$('.play-icon').addClass('pause-icon');
		$('.play-icon').removeClass('play-icon');
       } else if($elem.innerHTML === "Watch Again"){
        $elem.innerHTML = "Check";
        $(".vid-data").hide();
        $(".popVid-data").show();
        vid.currentTime = 4;
        vid.play();
       } 
       else
       {
        if(!a && !b && c && d){
         $elem.innerHTML="Continue";
		 
		 	 
        }else{
         $elem.innerHTML="Watch Again";
        }
       }
      }
   
   
var vid = document.getElementById("myfirstVideo");
	function getCurTime(){
		vid.pause(vid.currentTime);
        }
	
	$width = screen.width;
		var vid,playbtn,seekslider,curtimetext,durtimetext,mutebtn,volumeslider,fullscreenbtn;
			function initializePlayer(){
				//object reference
				vid = document.getElementById("myfirstVideo");
				playbtn = document.getElementById("playpausebutton");
				

				seekslider = document.getElementById("seekslider");
				curtimetext = document.getElementById("curtimetext");
				durtimetext = document.getElementById("durtimetext");
				mutebtn = document.getElementById("mutebtn");
				volumeslider = document.getElementById("volumeslider");
                fullscreenbtn = document.getElementById("fullscreenbtn");

				
				//Event listeners
                playbtn.addEventListener("click",playPause,false);
				seekslider.addEventListener("change",vidSeek,false);
				vid.addEventListener("timeupdate",seektimeupdate,false);
				mutebtn.addEventListener("click",vidmute,false);
				volumeslider.addEventListener("change",setvolume,false);
			}
						 
		
			
		window.onload = initializePlayer;
			function playPause(){
				if(vid.paused){
					vid.play();
					$('.play-icon').addClass('pause-icon');	 
					}
					else{
					vid.pause();
					$('.play-icon').addClass('play-icon');
					$('.play-icon').removeClass('pause-icon');	

				}
			}
			

	function vidSeek(){
		var seekto = vid.duration * (seekslider.value / 100)
		    vid.currentTime = seekto;
	}
	function seektimeupdate(){
		$('#time-divider').show();
		var newtime = vid.currentTime * (100 / vid.duration);
			seekslider.value = newtime;
		var curmins = Math.floor(vid.currentTime / 60);
		var cursecs = Math.floor(vid.currentTime - curmins * 60);
		var durmins = Math.floor(vid.duration / 60);
		var dursecs = Math.round(vid.duration - durmins * 60);
		    if(cursecs < 10){cursecs = "0"+ cursecs;}
			if(dursecs < 10){dursecs = "0"+ dursecs;}
			if(curmins < 10){curmins = "0"+ curmins;}
			if(durmins < 10){durmins = "0"+ durmins;}
				curtimetext.innerHTML = curmins+":"+cursecs;
				durtimetext.innerHTML = durmins+":"+dursecs;
	} 
	function vidmute(){
			if(vid.muted){
				vid.muted= false;
				mutebtn.style.background = "url(Images/icon5.png) no-repeat";
			}
			else{
				vid.muted= true;
				mutebtn.style.background = "url(Images/icon4.png) no-repeat";
				}
	}
	function setvolume(){
			vid.volume = volumeslider.value / 100;
	}
	

function toggleFullScreen() {
	
	 var vidCont = document.getElementById('vid-cont');
	 var video_control_bar = document.getElementById('video_control_bar');
	     $('.bPt').css('width', '86%');
	     $('#seekslider').css('width', '90%');
		 $('.brekpt').css('left', '23.4%');
		 $('.brekpt1').css('left', '55.4%');
		 $('.breakpoints-division').css('left','23%');
		 $('.breakpoints-division1').css('left','54.8%');
    if (!document.fullscreenElement && !document.msFullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        
		vidCont.style.width= screen.width+'px';
		video_control_bar.style.width=screen.width+'px';
		video_control_bar.style.position = 'absolute';
	
		
		if (document.body.requestFullscreen) {
            document.body.requestFullscreen();
		
        } else if (document.body.msRequestFullscreen) {
            document.body.msRequestFullscreen();
        }else if (document.body.mozRequestFullScreen) {
            document.body.mozRequestFullScreen();
        }else if (document.body.webkitRequestFullscreen) {
            document.body.webkitRequestFullscreen();
        }
    } else{
	      
		 vidCont.style.width= '600px';
         video_control_bar.style.width= '600px';
         video_control_bar.style.position = 'relative';
		     $('.bPt').css('width', 'auto');
		     $('#seekslider').css('width', '75%');
			 $('.brekpt').css('left', '19%');	
			 $('.brekpt1').css('left', '45.4%');
			 $('.breakpoints-division').css('left','18%');
		     $('.breakpoints-division1').css('left','44%');
          

			 
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
		
    }
	
	$(document).keyup(function(e){
     if (e.keyCode == 27) { 
			 vidCont.style.width= '600px';
         video_control_bar.style.width= '600px';
         video_control_bar.style.position = 'relative';
		     $('.bPt').css('width', 'auto');
		     $('#seekslider').css('width', '75%');
			 $('.brekpt').css('left', '19%');	
			 $('.brekpt1').css('left', '45.4%');
			 $('.breakpoints-division').css('left','18%');
		     $('.breakpoints-division1').css('left','44%');
          

			 
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
});

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
			
 

 	
 	
				
				
				 