//La calculadora debe realizar el cuadrado de un numero..
//1) recuperar la referencia del boton utilizando $
//2) Agregar el evento click al boton..
//3) Crear la funcion para realizar el calculo..
//4) El resultado debe mostrar el elemento adecuado..

$("#btn1").click( function(ev){
	ev.preventDefault();  //Evita que el formulario se envie al servidor
	//Logica para resolver el problema
	//1. Recuperar lo que ingreso el usuario y guardar en una variable

	let numeroIngresado = $("input").val();

	//2. Realizar el calculo y guardar en otra variable

	let potencia = numeroIngresado * numeroIngresado;
	//let numeroIngresado = $("#n1").val();
	//let result = Math.pow(numeroIngresado,2);

	console.log(potencia);

	$(".res1").html(numeroIngresado + "<sup>2</sup>=" + "La raiz es" + potencia);
	
$(".res1").on( "mouseover", function(){
	$(".res1").css("border", "blue solid 2px");
});

});

//Segundo section
$("#btn2").click( function(){
	let palabra = $("#palabra").val();

	let cantidadLe = palabra.length;
	console.log(cantidadLe);
	$(".res2").text(cantidadLe);
});

// Funcion para calcular
//function calcular(){}