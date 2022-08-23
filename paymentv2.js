var currentPage = 'UNKNOWN';
var currentDate = 0;

var pageList = [
    'page1', // Employee Info
    'page2', // Date Pages
    'page3'  // Results
];

var dateList = [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일'
];

var dateNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var newObject = false;

var PayrollObjectKey = 'PayrollObject';

var finalH=0, finalM=0;

function setPage(){
    var payrollObject = JSON.parse(localStorage.getItem(PayrollObjectKey));
    payrollObject = null;
    
    if(payrollObject){
        // console.log('Using old object');
        newObject = false;
        currentPage = payrollObject.page;
    }
    else{
        // console.log('Creating new object');
        finalH=0;
        finalM=0;
        newObject = true;
        
        var Payroll = {
            page: pageList[0],
            name: '',
            pay: 0.00,
            maritalStatus: 'single',
            PayrollDates: [
                {startHour: '', startMinute: '', startHalf: '', endHour: '', endMinute: '', endHalf: ''},
                {startHour: '', startMinute: '', startHalf: '', endHour: '', endMinute: '', endHalf: ''},
                {startHour: '', startMinute: '', startHalf: '', endHour: '', endMinute: '', endHalf: ''},
                {startHour: '', startMinute: '', startHalf: '', endHour: '', endMinute: '', endHalf: ''},
                {startHour: '', startMinute: '', startHalf: '', endHour: '', endMinute: '', endHalf: ''},
                {startHour: '', startMinute: '', startHalf: '', endHour: '', endMinute: '', endHalf: ''},
                {startHour: '', startMinute: '', startHalf: '', endHour: '', endMinute: '', endHalf: ''},
            ]
        };
        
        localStorage.setItem(PayrollObjectKey, JSON.stringify(Payroll));
        
        currentPage = pageList[0];
    }
    
    // console.log(currentPage);
    
    loadPage();
}

function nextPage(){
    saveData();
    
    // console.log('Going to next page');
    var i = 0;
    for(i = 0; i < pageList.length; i++){
        if(currentPage === pageList[i]){
            if(i == 1){
                if(currentDate == 6){
                    currentPage = pageList[i + 1];
                }
                else{
                    currentDate++;
                }
            }
            else{
                currentPage = pageList[i + 1];
            }
            i = pageList.length + 1;
        }
    }
    
    loadPage();
}
        
function previousPage(){
    saveData();
    
    // console.log('Going to previous page');
    var i = 0;
    for(i = 0; i < pageList.length; i++){
        if(currentPage === pageList[i]){
            if(i == 1){
                if(currentDate == 0){
                    currentPage = pageList[i - 1];
                }
                else{
                    currentDate--;
                }
            }
            else{
                currentPage = pageList[i - 1];
            }
            i = pageList.length + 1;
        }
    }
    
    loadPage();    
}

function saveData(){
    // console.log('Saving current page data');
    
    var payrollObject = JSON.parse(localStorage.getItem(PayrollObjectKey));
    
    if(pageList[0] === currentPage){
        // console.log('Saving employee data page');
        var name = document.getElementById('employeeName').value;
        var pay = document.getElementById('employeePay').value;
        var maritalStatus = document.getElementById('maritalStatus').options[document.getElementById('maritalStatus').selectedIndex].value;
        
        payrollObject.name = name;
        payrollObject.pay = pay;
        payrollObject.maritalStatus = maritalStatus;
    }
    else if(pageList[pageList.length - 1] != currentPage){
        // console.log('Saving date pages');
        
        var startH = document.getElementById('start_hour').value;
        var startM = document.getElementById("start_minute").value;
		var endH = document.getElementById("end_hour").value;
		var endM = document.getElementById("end_minute").value;
		var startHalf = document.getElementById("start_select").selectedIndex;
		var endHalf = document.getElementById("end_select").selectedIndex;
		
        payrollObject.PayrollDates[currentDate].startHour = startH;
        payrollObject.PayrollDates[currentDate].startMinute = startM;
        payrollObject.PayrollDates[currentDate].startHalf = startHalf;
        payrollObject.PayrollDates[currentDate].endHour = endH;
        payrollObject.PayrollDates[currentDate].endMinute = endM;
        payrollObject.PayrollDates[currentDate].endHalf = endHalf;
    }
    else{
        document.getElementById('page3-body').innerHTML = '';
    }
    // console.log(JSON.stringify(payrollObject));
    localStorage.setItem(PayrollObjectKey, JSON.stringify(payrollObject));
}

function loadPage(){
    clearForm();
    
    // console.log('Loading ' + currentPage);
    
    var payrollObject = JSON.parse(localStorage.getItem(PayrollObjectKey));
    
    if(payrollObject){
        payrollObject.page = currentPage;
    }
    
    if(currentPage === pageList[0]){
        // console.log('Loading employee data page');
        document.getElementById('page1').style.display = 'block';
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'none';
        
        // Load the elements if there is data
        document.getElementById('employeeName').value = payrollObject.name;
        document.getElementById('employeePay').value = payrollObject.pay;
        document.getElementById('maritalStatus').value = payrollObject.maritalStatus;
    }
    else if(currentPage === pageList[pageList.length - 1]){
        // console.log('Loading results page');
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'block';
        
        // Blank totals then calculate total again and load data.
        finalH = 0;
        finalM = 0;
        
        var AMPM = ['AM', 'PM'];
        
        if(payrollObject){
            document.getElementById('nameContent').innerHTML = payrollObject.name;
            var splitDateArray = ('' + new Date()).split(' ');
            document.getElementById('dateContent').innerHTML = splitDateArray[0] + ' - ' + splitDateArray[1] + ' ' + splitDateArray[2] + ' ' + splitDateArray[3] + ' - ' + splitDateArray[4];
            document.getElementById('payContent').innerHTML = '$' + payrollObject.pay;
            document.getElementById('maritalStatusContent').innerHTML = payrollObject.maritalStatus[0].toUpperCase() + payrollObject.maritalStatus.substr(1);
        }
        
        var i = 0;
        for (i=0; i<dateList.length; i++){
            if(payrollObject.PayrollDates[i].startHour != ''){
                document.getElementById('page3-body').innerHTML = document.getElementById('page3-body').innerHTML 
                + '<div id="datablock"><div id="datablock-content">' + dateNames[i] 
                
                + ' | Start time - ' + formatHour(payrollObject.PayrollDates[i].startHour) 
                + ':' + formatHour(payrollObject.PayrollDates[i].startMinute)
                + ' ' + AMPM[payrollObject.PayrollDates[i].startHalf]
                
                + ' | End time - ' + formatHour(payrollObject.PayrollDates[i].endHour) 
                + ':' + formatHour(payrollObject.PayrollDates[i].endMinute)
                + ' ' + AMPM[payrollObject.PayrollDates[i].endHalf]
                
                + ' = ' + calculateHours(i)
                
                + '</div></div><br>';
            }
        }
        
        document.getElementById('totalTimeContent').innerHTML = finalH + ' hours ' + finalM + ' minutes';
        var resultsCopy = payrollObject.name + ",,";
        resultsCopy = resultsCopy + calculatePay(payrollObject.pay) + ',' + payrollObject.pay;
        console.log(resultsCopy);
    }
    else{
        // console.log('Loading the date pages');
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'block';
        document.getElementById('page3').style.display = 'none';
        document.getElementById('dateText').innerHTML = dateList[currentDate];
        
        // Load the elements if there is data
        document.getElementById('start_hour').value = payrollObject.PayrollDates[currentDate].startHour;
        document.getElementById('start_minute').value = payrollObject.PayrollDates[currentDate].startMinute;
        document.getElementById('start_select').selectedIndex = payrollObject.PayrollDates[currentDate].startHalf;
        document.getElementById('end_hour').value = payrollObject.PayrollDates[currentDate].endHour;
        document.getElementById('end_minute').value = payrollObject.PayrollDates[currentDate].endMinute;
        document.getElementById('end_select').selectedIndex = payrollObject.PayrollDates[currentDate].endHalf;
    }
    
    document.getElementById('datablock').style.height = document.getElementById('datablock-content').style.height;
}

function clearForm(){
    var inputsToClear = document.getElementsByClassName('userIO');
			    
	for ( var i=0;i<inputsToClear.length;i++ ){
		inputsToClear[i].value = "";
	}
}

function newForm(){
    document.getElementById('page3-body').innerHTML = '';
            var Payroll = {
            page: pageList[0],
            name: '',
            pay: 0.00,
            maritalStatus: 'single',
            PayrollDates: [
                {startHour: '', startMinute: '', startHalf: '', endHour: '', endMinute: '', endHalf: ''},
                {startHour: '', startMinute: '', startHalf: '', endHour: '', endMinute: '', endHalf: ''},
                {startHour: '', startMinute: '', startHalf: '', endHour: '', endMinute: '', endHalf: ''},
                {startHour: '', startMinute: '', startHalf: '', endHour: '', endMinute: '', endHalf: ''},
                {startHour: '', startMinute: '', startHalf: '', endHour: '', endMinute: '', endHalf: ''},
                {startHour: '', startMinute: '', startHalf: '', endHour: '', endMinute: '', endHalf: ''},
                {startHour: '', startMinute: '', startHalf: '', endHour: '', endMinute: '', endHalf: ''},
            ]
        };
        
    localStorage.setItem(PayrollObjectKey, JSON.stringify(Payroll));
    localStorage.removeItem(PayrollObjectKey);
    currentDate = 0;
    currentPage = 0;
    
    setPage();
}

// ------------------------------------ FROM v1 -----------------------------------------------------


function calculateHours(date){
    var payrollObject = JSON.parse(localStorage.getItem(PayrollObjectKey));
    
    var startH = parseInt(payrollObject.PayrollDates[date].startHour);
    var startM = parseInt(payrollObject.PayrollDates[date].startMinute);
    var endH = parseInt(payrollObject.PayrollDates[date].endHour);
    var endM = parseInt(payrollObject.PayrollDates[date].endMinute);
    var startHalf = parseInt(payrollObject.PayrollDates[date].startHalf);
    var endHalf = parseInt(payrollObject.PayrollDates[date].endHalf);
    
    // console.log(dateList[date] + " " + startH + " " + startM + " " + endH + " " + endM + " " + startHalf  + " " + endHalf);
    
    if(startHalf == 1 && startH != 12){
        startH += 12;
    }
    if(endHalf == 1 && endH != 12){
        endH += 12;
    }
    
    // console.log(startH + " " + startM + " " + endH + " " + endM + " " + startHalf  + " " + endHalf);
    
    var resultH = 0, resultM = 0;
    if(endM - startM < 0){
        resultH += ((endH - startH) - 1);
        resultM += 60 - (startM - endM);
        
    }
    else{
        resultH += (endH - startH);
        resultM += (endM - startM);
    }
    finalH += resultH;
    finalM += resultM;
    
    // console.log('Adding hours for ' + dateList[date] + ': Adding ' + formatHour(resultH) + ':' + formatHour(resultM) + " = new totals: " + formatHour(finalH) + ':' + formatHour(finalM));
    
    removeHrFromMin();
    // document.getElementById("time_result").innerHTML = formatHour(finalH) + ":" + formatHour(finalM);
    // clearFields();
    
    // var dateNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    // document.getElementById("timestamp").innerHTML = document.getElementById("timestamp").innerHTML + "<tr><th><p>" + dateNames[date] + " | " + formatHour(startH) + ":" + formatHour(startM) + " - " + formatHour(endH) + ":" + formatHour(endM) + " = " + formatHour(resultH)+ ":" + formatHour(resultM) + "</p></th></tr>";
    
    return formatHour(resultH) + ' hours and ' + formatHour(resultM) + ' minutes';
}

function calculatePay(pay){
    var hourlyrate=pay;
    var finalPay = 0.0;
    var SocMedTaxAmt = 0.0;
    var overtimePay = 0.0;
    if (finalH < 40 || (finalH == 40 && finalM == 0)){
        // console.log("Not Overtime");
        finalPay += hourlyrate * finalH;
        // console.log(finalPay);
        finalPay += hourlyrate * (finalM / 60);
        // console.log(hourlyrate + "*" + finalH + " + " + hourlyrate + "*" + (finalM/60) + " = " + finalPay);
        SocMedTaxAmt += finalPay * 0.0765;
    }
    else{
        // console.log("Overtime");
        finalPay += hourlyrate * 40;
        // console.log(finalPay);
        overtimePay += (hourlyrate * 1.5) * (finalH - 40);
        // finalPay += (hourlyrate * 1.5) * (finalH - 40);
        // console.log(finalPay);
        overtimePay += (hourlyrate * 1.5) * (finalM / 60);
        // finalPay += (hourlyrate * 1.5) * (finalM / 60);
        finalPay += overtimePay;
        // console.log(hourlyrate + " * 40 + " + hourlyrate + " * " + (finalH - 40) + " + " + hourlyrate + "*" + (finalM/60) + " = " + finalPay);
        SocMedTaxAmt += finalPay * 0.0765;
    }
    
    var FedTaxAmt = calculateFederalTax(finalPay);
    
    document.getElementById("grossPayContent").innerHTML = "$" + formatMoney(finalPay);
    document.getElementById("fedTaxContent").innerHTML = '$' + formatMoney(FedTaxAmt);
    document.getElementById("socMediTaxContent").innerHTML = '$' + formatMoney(SocMedTaxAmt);
    document.getElementById("netPayContent").innerHTML = '$' + formatMoney(formatMoney(finalPay) - formatMoney(SocMedTaxAmt) - formatMoney(FedTaxAmt));
    
    var returnText = "$" + formatMoney(FedTaxAmt) + "," + "$" + formatMoney(SocMedTaxAmt) + "," + "$" + (formatMoney(formatMoney(finalPay) - formatMoney(SocMedTaxAmt) - formatMoney(FedTaxAmt))) + "," + "$" + formatMoney(finalPay);
    
    if ( overtimePay > 0 ) {
        // Sometimes overtime doesn't show
        document.getElementById("optional-overtime").style.display = "block";
        document.getElementById("overtimeContent").innerHTML = '$' + formatMoney(overtimePay);
        returnText = returnText + ",," + "$" + formatMoney(overtimePay) + " Overtime";
    }
    else{
	document.getElementById("optional-overtime").style.display = 'none';
    }
    return returnText;
}

function showOnlyResults(){
    document.getElementById("body").innerHTML = document.getElementById("timestamp_over").innerHTML;
    document.documentElement.scrollTop = 0;
}

function clearFields(){
    var inputsToClear = document.getElementsByClassName('userIO');
    
    for ( var i=0;i<inputsToClear.length;i++ ){
        inputsToClear[i].value = "";
    }
}

function removeHrFromMin(){
    while ( finalM >= 60 ){
        finalM -= 60;
        finalH++;
    }
}

function formatHour(hourString){
    return (('0' + hourString).slice(-2));
}

function formatMoney(moneyString){
    return Number.parseFloat(moneyString).toFixed(2);
}

function calculateFederalTax(pay){
    var maritalStatusObject = document.getElementById("maritalStatus");
    var maritalStatus = maritalStatusObject.options[maritalStatusObject.selectedIndex].value;
    var withholdings = 0;
    var step = 11;
    var singleBase = 72;
    var marriedBase = 226;
    if ( maritalStatus == "single" ){
        if ( pay >= 832 ){
            alert("최고 금액 $832 넘었습니다. 직접 Federal Tax 계산하세요");
            return 0;
        }
        else if ( pay < singleBase ){
            return 0;
        }
        withholdings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 25, 26, 27, 29, 30, 31, 33, 34, 35, 37, 38, 39, 40, 42, 43, 44, 46, 47, 48, 50, 51, 52, 54, 55, 56, 58, 59, 60, 62, 63, 64, 66, 67, 68, 70, 71, 72, 73, 75, 76, 77, 79, 80, 81, 83, 84, 85, 87];
        var remainder = (pay - singleBase) & step;
        var index = Math.floor((pay - singleBase) / step);
        if ( remainder != 0 ){
            index += 1;
        }
        // console.log("Received index: " + index + " and the tax value: " + withholdings[index]);
        return withholdings[index];
    }
    else{
        if ( pay >= 986 ){
            alert("최고 금액 $986 넘었습니다. 직접 Federal Tax 계산하세요");
            return 0;
        }
        else if ( pay < marriedBase ){
            return 0;
        }
        withholdings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 41, 42, 43, 45, 46, 47, 49, 50, 51, 53, 54, 55, 57, 58, 59, 61, 62, 63, 64, 66, 67, 68, 70, 71, 72, 74, 75, 76, 78, 79, 80, 82, 83];
        var remainder = (pay - marriedBase) & step;
        var index = Math.floor((pay - marriedBase) / step);
        if(remainder != 0){
            index += 1;
        }
        // console.log("Received index: " + index + " and the tax value: " + withholdings[index]);
        return withholdings[index];                    
    }
}
