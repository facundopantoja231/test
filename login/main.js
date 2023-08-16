/* 





*/




function iniciarSesion() {
	let user = document.getElementById("name").value;
	let pass = document.getElementById("pass").value;
	

	if(user == ""){
		alert("no puede quedar vacio el usuario");
	}
	else if(pass == ""){
		alert("la contraseña no puede quedar vacia");
	} else{
		console.log(user,pass);
	}

}
