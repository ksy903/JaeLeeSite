function getProducts(){
	var wattage = document.getElementById("wattValue").innerHTML;
	wattage = wattage / 1000;
	document.getElementById("productList").innerHTML = "";
	if(wattage<=Series1n2n3.powerUpper && wattage>=Series1n2n3.powerLower){
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + "<li>Series I, II, III</li>";
		alert("Series I, II, III");
	}
	if(wattage<=HotAirTools.powerUpper && wattage>=HotAirTools.powerLower){
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + "<li>Hot Air Tools</li>";
	}
	if(wattage<=Serpentine2n6.powerUpper && wattage>=Serpentine2n6.powerLower){
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + "<li>Serpentine II, VI</li>";
	}
	if(wattage<=ThreadedInLine.powerUpper && wattage>=ThreadedInLine.powerLower){
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + "<li>Threaded In-Line</li>";
	}
	if(wattage<=SureHeatJet.powerUpper && wattage>=SureHeatJet.powerLower){
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + "<li>SureHeat Jet</li>";
	}
	if(wattage<=SureHeatMax.powerUpper && wattage>=SureHeatMax.powerLower){
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + "<li>SureHeat Max</li>";
	}
	if(wattage<=SureHeatMaxHT.powerUpper && wattage>=SureHeatMaxHT.powerLower){
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + "<li>SureHeat MAX HT</li>";
	}
	if(wattage<=HeatGuns.powerUpper && wattage>=HeatGuns.powerLower){
		document.getElementById("productList").innerHTML = document.getElementById("productList").innerHTML + "<li>Heat Guns</li>";
	}
}

var Series1n2n3 = {
	powerLower: 0.6, 
	powerUpper: 2.4, 
	maxAirTempinF: 1600, 
	maxAirTempinF: 871, 
	maxAirPressureinPsi: 7,
	maxAirPressureinPsi: 0.5,
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
	Description: "Inexpensive Spot-Heating Applications, Quartz Insulator Tube, Open or Nozzle End, Single Phase"
};

var Serpentine2n6 = {
	powerLower: 2.0, 
	powerUpper: 8.0, 
	maxAirTempinF: 1500, 
	maxAirTempinC: 815, 
	maxAirPressureinPsi: 25,
	maxAirPressureinBar: 1.7,
	UseWithBlower: false,
	Description: "Inexpensive Spot-Heating Applications, Quartz Insulator Tube, Open or Nozzle End, Single Phase"
};

var ThreadedInLine = {
	powerLower: 1.6, 
	powerUpper: 18.0, 
	maxAirTempinF: 1400, 
	maxAirTempinC: 760, 
	maxAirPressureinPsi: 150,
	maxAirPressureinBar: 10.0,
	UseWithBlower: false,
	Description: "Inexpensive Spot-Heating Applications, Quartz Insulator Tube, Open or Nozzle End, Single Phase"
};

var SureHeatJet = {
	powerLower: 3.0, 
	powerUpper: 8.0, 
	maxAirTempinF: 1400, 
	maxAirTempinC: 760, 
	maxAirPressureinPsi: 60,
	maxAirPressureinBar: 4.0,
	UseWithBlower: true,
	Description: "Inexpensive Spot-Heating Applications, Quartz Insulator Tube, Open or Nozzle End, Single Phase"
};

var SureHeatMax = {
	powerLower: 6.0, 
	powerUpper: 36.0, 
	maxAirTempinF: 1400, 
	maxAirTempinC: 760, 
	maxAirPressureinPsi: 60,
	maxAirPressureinBar: 4.0,
	UseWithBlower: true,
	Description: "Inexpensive Spot-Heating Applications, Quartz Insulator Tube, Open or Nozzle End, Single Phase"
};

var SureHeatMaxHT = {
	powerLower: 30.0, 
	powerUpper: 36.0, 
	maxAirTempinF: 1652, 
	maxAirTempinC: 900, 
	maxAirPressureinPsi: 60,
	maxAirPressureinBar: 4.0,
	UseWithBlower: true,
	Description: "Inexpensive Spot-Heating Applications, Quartz Insulator Tube, Open or Nozzle End, Single Phase"
};

var HeatGuns = {
	powerLower: 1.3, 
	powerUpper: 1.6, 
	maxAirTempinF: "68 - 1290", 
	maxAirTempinC: "20 - 700", 
	maxAirPressureinPsi: 0.44,
	maxAirPressureinBar: 0.03,
	UseWithBlower: true,
	Description: "Inexpensive Spot-Heating Applications, Quartz Insulator Tube, Open or Nozzle End, Single Phase"
};