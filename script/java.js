


function calcular() {
	

	var resultadopan;
	var cantidad = document.getElementById("cantidad pan").value;
	var preciopan= document.getElementById("valor pan").value;
	resultadopan = cantidad * preciopan;
	

	var resultadoleche;
	var cantidad = document.getElementById("cantidad leche").value;
	var precioleche= document.getElementById("valor leche").value;
	resultadoleche = cantidad * precioleche;
	



	var resultadohuevos;
	var cantidad = document.getElementById("cantidad huevos").value;
	var preciohuevos= document.getElementById("valor huevos").value;
	resultadohuevos = cantidad * preciohuevos;
	


	var resultado1 = resultadopan + resultadoleche + resultadohuevos
	document.getElementById("txtsubtotal1").value=resultado1;



	var subtotaljabon;
	var cantidad = document.getElementById("cantidad jabon").value;
	var preciojabon= document.getElementById("valor jabon").value;
	subtotaljabon = cantidad * preciojabon;
	


	var subtotalchampu;
	var cantidad = document.getElementById("cantidad champu").value;
	var preciochampu= document.getElementById("valor champu").value;
	subtotalchampu = cantidad * preciochampu;
	



	var subtotalcrema;
	var cantidad = document.getElementById("cantidad crema dental").value;
	var preciocrema = document.getElementById("valor crema dental").value;
	subtotalcrema = cantidad * preciocrema;
	


	var resultado2 = subtotaljabon + subtotalchampu + subtotalcrema
	document.getElementById("txtsubtotal2").value = resultado2;




	
	var iva1 = calculariva(0.19,resultado1);
	document.getElementById("txtiva1").value=iva1;

	var iva2 = calculariva(0.10,resultado2);
	document.getElementById("txtiva2").value=iva2;

	var subtotalt;
	subtotalt=resultado1+resultado2
	document.getElementById("subtotal").value = subtotalt;


	var iva;
	iva=iva1+iva2;
	document.getElementById("ivafinal").value = iva;

	var total;
	total=subtotalt+iva;
	document.getElementById("totalfactura").value = total;



	}
	
	// funcion de iva
	function calculariva(numero1,numero2){
		
		var resultadoiva = numero1*numero2;
		return resultadoiva;
	}
	