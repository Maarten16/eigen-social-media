// supersecret credentials
			var accountUsername = "Heleen";
			var accountPassword = "heleen98";

			function login(){
				// haal de gegevens op
				var username = document.getElementById('username').value;
				var pass = document.getElementById('password').value;

				if(username == ""){
					document.getElementById('message').innerHTML = "voer username in";
				} else {
					if(pass== ""){
						document.getElementById('message').innerHTML = "voer wachtwoord in";
					} else {
						if(username == accountUsername){
							if(pass == accountPassword){
								document.getElementById('message').innerHTML = "ingelogd!";
							} else {
								document.getElementById('message').innerHTML = "verkeerd ww";
							}
						} else {
							document.getElementById('message').innerHTML = "verkeerd username";
						} 					
					}
				}
			}
