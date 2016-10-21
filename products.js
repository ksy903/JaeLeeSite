function getProducts(){
	var wattage = document.getElementById("wattValue").innerHTML;
	wattage = wattage / 1000;
	document.getElementById("productList").innerHTML = "";
	var SCFM = document.getElementById("SCFMValue").innerHTML;
	if(wattage<=Series1n2n3.powerUpper && wattage>=Series1n2n3.powerLower && SCFM <= Series1n2n3.maxAirPressureinPsi){
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + "<li>Series I, II, III</li>";
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + 
			"<ul>"+
			"<li>"+Series1n2n3.powerLower+"</li>"+
			"<li>"+Series1n2n3.powerUpper+"</li>"+
			"<li>"+Series1n2n3.maxAirTempinF+"</li>"+
			"<li>"+Series1n2n3.maxAirTempinC+"</li>"+
			"<li>"+Series1n2n3.maxAirPressureinPsi+"</li>"+
			"<li>"+Series1n2n3.maxAirPressureinBar+"</li>"+
			"<li>"+Series1n2n3.UseWithBlower+"</li>"+
			"<li>"+Series1n2n3.Description+"</li>"+
			"</ul>";
	}
	if(wattage<=HotAirTools.powerUpper && wattage>=HotAirTools.powerLower && SCFM <= HotAirTools.maxAirPressureinPsi){
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + "<li>Hot Air Tools</li>";
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + 
			"<ul>"+
			"<li>"+HotAirTools.powerLower+"</li>"+
			"<li>"+HotAirTools.powerUpper+"</li>"+
			"<li>"+HotAirTools.maxAirTempinF+"</li>"+
			"<li>"+HotAirTools.maxAirTempinC+"</li>"+
			"<li>"+HotAirTools.maxAirPressureinPsi+"</li>"+
			"<li>"+HotAirTools.maxAirPressureinBar+"</li>"+
			"<li>"+HotAirTools.UseWithBlower+"</li>"+
			"<li>"+HotAirTools.Description+"</li>"+
			"</ul>";
	}
	if(wattage<=Serpentine2n6.powerUpper && wattage>=Serpentine2n6.powerLower && SCFM <= Serpentine2n6.maxAirPressureinPsi){
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + "<li>Serpentine II, VI</li>";
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + 
			"<ul>"+
			"<li>"+Serpentine2n6.powerLower+"</li>"+
			"<li>"+Serpentine2n6.powerUpper+"</li>"+
			"<li>"+Serpentine2n6.maxAirTempinF+"</li>"+
			"<li>"+Serpentine2n6.maxAirTempinC+"</li>"+
			"<li>"+Serpentine2n6.maxAirPressureinPsi+"</li>"+
			"<li>"+Serpentine2n6.maxAirPressureinBar+"</li>"+
			"<li>"+Serpentine2n6.UseWithBlower+"</li>"+
			"<li>"+Serpentine2n6.Description+"</li>"+
			"</ul>";
	}
	if(wattage<=ThreadedInLine.powerUpper && wattage>=ThreadedInLine.powerLower && SCFM <= ThreadedInLine.maxAirPressureinPsi){
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + "<li>Threaded In-Line OR Flanged Inline</li>";
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + 
			"<ul>"+
			"<li>"+ThreadedInLine.powerLower+"</li>"+
			"<li>"+ThreadedInLine.powerUpper+"</li>"+
			"<li>"+ThreadedInLine.maxAirTempinF+"</li>"+
			"<li>"+ThreadedInLine.maxAirTempinC+"</li>"+
			"<li>"+ThreadedInLine.maxAirPressureinPsi+"</li>"+
			"<li>"+ThreadedInLine.maxAirPressureinBar+"</li>"+
			"<li>"+ThreadedInLine.UseWithBlower+"</li>"+
			"<li>"+ThreadedInLine.Description+"</li>"+
			"</ul>";
	}
	if(wattage<=SureHeatJet.powerUpper && wattage>=SureHeatJet.powerLower && SCFM <= SureHeatJet.maxAirPressureinPsi){
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + "<li>SureHeat Jet</li>";
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + 
			"<ul>"+
			"<li>"+SureHeatJet.powerLower+"</li>"+
			"<li>"+SureHeatJet.powerUpper+"</li>"+
			"<li>"+SureHeatJet.maxAirTempinF+"</li>"+
			"<li>"+SureHeatJet.maxAirTempinC+"</li>"+
			"<li>"+SureHeatJet.maxAirPressureinPsi+"</li>"+
			"<li>"+SureHeatJet.maxAirPressureinBar+"</li>"+
			"<li>"+SureHeatJet.UseWithBlower+"</li>"+
			"<li>"+SureHeatJet.Description+"</li>"+
			"</ul>";
	}
	if(wattage<=SureHeatMax.powerUpper && wattage>=SureHeatMax.powerLower && SCFM <= SureHeatMax.maxAirPressureinPsi){
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + "<li>SureHeat Max</li>";
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + 
			"<ul>"+
			"<li>"+SureHeatMax.powerLower+"</li>"+
			"<li>"+SureHeatMax.powerUpper+"</li>"+
			"<li>"+SureHeatMax.maxAirTempinF+"</li>"+
			"<li>"+SureHeatMax.maxAirTempinC+"</li>"+
			"<li>"+SureHeatMax.maxAirPressureinPsi+"</li>"+
			"<li>"+SureHeatMax.maxAirPressureinBar+"</li>"+
			"<li>"+SureHeatMax.UseWithBlower+"</li>"+
			"<li>"+SureHeatMax.Description+"</li>"+
			"</ul>";
	}
	if(wattage<=SureHeatMaxHT.powerUpper && wattage>=SureHeatMaxHT.powerLower && SCFM <= SureHeatMaxHT.maxAirPressureinPsi){
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + "<li>SureHeat MAX HT</li>";
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + 
			"<ul>"+
			"<li>"+SureHeatMaxHT.powerLower+"</li>"+
			"<li>"+SureHeatMaxHT.powerUpper+"</li>"+
			"<li>"+SureHeatMaxHT.maxAirTempinF+"</li>"+
			"<li>"+SureHeatMaxHT.maxAirTempinC+"</li>"+
			"<li>"+SureHeatMaxHT.maxAirPressureinPsi+"</li>"+
			"<li>"+SureHeatMaxHT.maxAirPressureinBar+"</li>"+
			"<li>"+SureHeatMaxHT.UseWithBlower+"</li>"+
			"<li>"+SureHeatMaxHT.Description+"</li>"+
			"</ul>";
	}
}

var Series1n2n3 = {
	powerLower: 0.6, 
	powerUpper: 2.4, 
	maxAirTempinF: 1600, 
	maxAirTempinC: 871, 
	maxAirPressureinPsi: 7,
	maxAirPressureinBar: 0.5,
	UseWithBlower: false,
	Description: "Inexpensive Spot-Heating Applications, Quartz Insulator Tube, Open or Nozzle End, Single Phase"
};

var HotAirTools = {
	powerLower: 1.5, 
	powerUpper: 3.5, 
	maxAirTempinF: 1400, 
	maxAirTempinC: 760, 
	maxAirPressureinPsi: 60,
	maxAirPressureinBar: 4.0,
	UseWithBlower: false,
	Description: "Compact Size, Built-in Type K Thermal Couple, Precise Temp Control +\-1°F, Single phase"
};

var Serpentine2n6 = {
	powerLower: 2.0, 
	powerUpper: 8.0, 
	maxAirTempinF: 1500, 
	maxAirTempinC: 815, 
	maxAirPressureinPsi: 25,
	maxAirPressureinBar: 1.7,
	UseWithBlower: false,
	Description: "Triple Pass Exchanger, Improved Safety & Efficiency, Easy to Service & Replace Element, Single phase"
};

var ThreadedInLine = {
	powerLower: 1.6, 
	powerUpper: 18.0, 
	maxAirTempinF: 1400, 
	maxAirTempinC: 760, 
	maxAirPressureinPsi: 150,
	maxAirPressureinBar: 10.0,
	UseWithBlower: false,
	Description: "High-Pressure Exchanger, Improved Safety & Efficiency, Easy to Service & Replace Element, Single Phase, NOTE: Flanged Inline is the same product with a different mount"
};

var SureHeatJet = {
	powerLower: 3.0, 
	powerUpper: 8.0, 
	maxAirTempinF: 1400, 
	maxAirTempinC: 760, 
	maxAirPressureinPsi: 60,
	maxAirPressureinBar: 4.0,
	UseWithBlower: true,
	Description: "All-Purpose Single Phase Heater, 2 Built-in Type K Thermal Couples, Built-in Over-temp Protection, Single Phase"
};

var SureHeatMax = {
	powerLower: 6.0, 
	powerUpper: 36.0, 
	maxAirTempinF: 1400, 
	maxAirTempinC: 760, 
	maxAirPressureinPsi: 60,
	maxAirPressureinBar: 4.0,
	UseWithBlower: true,
	Description: "All-Purpose Three Phase Heater, 2 Built-in Type K Termal Couples, Built-in Over-temp Couples, Single or three phase"
};

var SureHeatMaxHT = {
	powerLower: 30.0, 
	powerUpper: 36.0, 
	maxAirTempinF: 1652, 
	maxAirTempinC: 900, 
	maxAirPressureinPsi: 60,
	maxAirPressureinBar: 4.0,
	UseWithBlower: true,
	Description: "High Temperature Applications, 1 Built-in Type K Thermal Couple, Built-in Over-temp Protection, 3 phase"
};
