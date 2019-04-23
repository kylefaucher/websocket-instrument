
			var myInstrumentIndex = -1;

			var myInstrument = " ";

			var instruments = ["guitar", "tambourine","drum"];

			var audioFiles = ["audiofiles/guitar.mp3","audiofiles/tamborine.mp3","audiofiles/kick.mp3"];

			var mySound = " ";

			var images = ["img/guitar.png","img/tambourine.png","img/drum.png"];

			var socket = io.connect();


			socket.on('connect', function() {
				console.log("Connected");

			});

			socket.on('sendInstrument', function(data){
           
            		if (myInstrumentIndex == -1 ){
            			myInstrumentIndex = data;
            			myInstrument = instruments[myInstrument];
            			mySound = audioFiles[myInstrumentIndex];
            			document.getElementById("instrument").innerHTML+= instruments[myInstrumentIndex];
            			document.getElementById("picture").innerHTML = "<img src="+images[myInstrumentIndex]+" alt = picture</img>";
            		}

         	});

         	socket.on("sendnumplayers", function(data){

         			document.getElementById("number").innerHTML = "Number of Players: " + data;
         	});

         	var audio;

         	function playSound(){
         
         		console.log("sending sound: " + instruments[myInstrumentIndex]);
         		socket.emit("sendsound",myInstrumentIndex);
         		audio = new Audio("audiofiles/silent.mp3");
         		audio.play();
         	}

         	socket.on("sound", function(data){
         		console.log("received sound: "+instruments[data]);
         		audio.src = audioFiles[data];
         		audio.play();
         	});