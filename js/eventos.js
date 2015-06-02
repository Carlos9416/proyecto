var InicioApp = function()
{
	var Datos = function()
	{
		$("#artDatosG").show("slow");
		$(".artHTML").hide("slow");
		$(".artCSS").hide("slow");
		$(".artJS").hide("slow");
		$(".artPHP").hide("slow");

	}
	var HTML = function()
	{	
		$(".artHTML").show("slow");
		$("#artDatosG").hide("slow");
		$(".artCSS").hide("slow");
		$(".artJS").hide("slow");
		$(".artPHP").hide("slow");
	}
	var CSS = function()
	{	
		$(".artCSS").show("slow");
		$(".artHTML").hide("slow");
		$("#artDatosG").hide("slow");
		$(".artJS").hide("slow");
		$(".artPHP").hide("slow");
	}
	var JS = function()
	{	
		$(".artCSS").hide("slow");
		$(".artHTML").hide("slow");
		$("#artDatosG").hide("slow");
		$(".artJS").show("slow");
		$(".artPHP").hide("slow");
	}
	var PHP = function()
	{	
		$(".artCSS").hide("slow");
		$(".artHTML").hide("slow");
		$("#artDatosG").hide("slow");
		$(".artJS").hide("slow");
		$(".artPHP").show("slow");
	}
	var SelDatos = $("#menuCelular").val();
	if(SelDatos=="btnDatos")
		Datos();
	else if (SelDatos=="btnHTML")
		HTML();
	else if (SelDatos=="btnCSS")
		CSS();
	else if (SelDatos =="btnJS")
		JS();
	else if (SelDatos == "btnPHP")
		PHP();
	$("#btnDatos").on("click",Datos)
	$("#btnHTML").on("click",HTML)
	$("#btnCSS").on("click",CSS)
	$("#btnJS").on("click",JS)
	$("#btnPHP").on("click",PHP)
}
$(document).on("ready",InicioApp)