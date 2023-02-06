function login(){
    username= document.getElementById("text_input").value 
    localStorage.setItem("username", username)
    window.location= "Kwitter_room.html"

}
window.addEventListener("keydown", mykeydown)
function mykeydown(e){
keyPressed = e.keyCode
if(keyPressed == '13')
		{
			login();
			console.log("User logged in");
		}
	}