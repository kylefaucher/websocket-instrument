
			var socket = io.connect();

			var numImages = 0;

			var instruments = ["guitar", "tambourine","drum"];

			var audioFiles = ["audiofiles/guitar.mp3","audiofiles/tamborine.mp3","audiofiles/kick.mp3"];


			socket.on('connect', function() {
				console.log("Connected");

			});
       
         	socket.on("sendnumplayers", function(data){
         			numImages = data;
         			document.getElementById("number").innerHTML = "Number of Players: " + data;
         	});

         	socket.on("sound", function(data){
         		console.log("received sound: "+instruments[data]);
         		var audio = new Audio(audioFiles[data]);
         		audio.play();
         	});
