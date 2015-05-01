var nitrogen;
var pressureGroup;
var pressureGroup2;
var startDepth;
var fdt;
var surfaceInterval;
var count1 = 0;
var maxFdt;
var node1;
var capitalString;


/********** JQUERY GRAPH ***********/

$(document).ready(function(){
$("#box").mousemove(function(e){
    var x = Math.round((e.pageX - this.offsetLeft)/10);
    var y = Math.round((e.pageY - this.offsetTop)/3.84);
    //Do what you need with X and/or (e.g.
    $("#time").text(x + 'min');
    $("#depth").text(y + 'ft');
	});
$("#box").mousedown(function(e){
	fdt = Math.round((e.pageX - this.offsetLeft)/10);
	startDepth = Math.round((e.pageY - this.offsetTop)/3.84);
	calcPressureGroupJ();
	});
}); 




/************** GRAPH MARKS ***************/


 







function calcPressureGroupJ() 
{

  
  //this is used so that users don't input a higher FDT value than the max FDT value for given startDepth
  calcMaxFdt(startDepth);


	if(startDepth <= 40 && fdt < 5) {pressureGroup = "a";}
	else if(startDepth <= 40 && fdt < 15) {pressureGroup = "a";}
	else if(startDepth <= 40 && fdt < 25) {pressureGroup = "b";}
	else if(startDepth <= 40 && fdt < 30) {pressureGroup = "c";}
	else if(startDepth <= 40 && fdt < 40) {pressureGroup = "d";}
	else if(startDepth <= 40 && fdt < 50) {pressureGroup = "e";}
	else if(startDepth <= 40 && fdt < 70) {pressureGroup = "f";}
	else if(startDepth <= 40 && fdt < 80) {pressureGroup = "g";}
	else if(startDepth <= 40 && fdt < 100) {pressureGroup = "h";}
	else if(startDepth <= 40 && fdt < 110) {pressureGroup = "i";}
	else if(startDepth <= 40 && fdt < 130) {pressureGroup = "j";}


	else if(startDepth <= 50 && fdt < 10) {pressureGroup = "b";}
	else if(startDepth <= 50 && fdt < 15) {pressureGroup = "c";}
	else if(startDepth <= 50 && fdt < 25) {pressureGroup = "d";}
	else if(startDepth <= 50 && fdt < 30) {pressureGroup = "e";}
	else if(startDepth <= 50 && fdt < 40) {pressureGroup = "f";}
	else if(startDepth <= 50 && fdt < 50) {pressureGroup = "g";}
	else if(startDepth <= 50 && fdt < 60) {pressureGroup = "h";}
	else if(startDepth <= 50 && fdt < 70) {pressureGroup = "i";}
	else if(startDepth <= 50 && fdt < 80) {pressureGroup = "j";}


	else if(startDepth <= 60 && fdt < 10) {pressureGroup = "b";}
	else if(startDepth <= 60 && fdt < 15) {pressureGroup = "c";}
	else if(startDepth <= 60 && fdt < 20) {pressureGroup = "d";}
	else if(startDepth <= 60 && fdt < 25) {pressureGroup = "e";}
	else if(startDepth <= 60 && fdt < 30) {pressureGroup = "f";}
	else if(startDepth <= 60 && fdt < 40) {pressureGroup = "g";}
	else if(startDepth <= 60 && fdt < 50) {pressureGroup = "h";}
	else if(startDepth <= 60 && fdt < 55) {pressureGroup = "i";}


	else if(startDepth <= 70 && fdt < 5) {pressureGroup = "b";}
	else if(startDepth <= 70 && fdt < 10) {pressureGroup = "c";}
	else if(startDepth <= 70 && fdt < 15) {pressureGroup = "d";}
	else if(startDepth <= 70 && fdt < 20) {pressureGroup = "e";}
	else if(startDepth <= 70 && fdt < 30) {pressureGroup = "f";}
	else if(startDepth <= 70 && fdt < 35) {pressureGroup = "g";}
	else if(startDepth <= 70 && fdt < 40) {pressureGroup = "h";}
	else if(startDepth <= 70 && fdt < 45) {pressureGroup = "i";}


	else if(startDepth <= 80 && fdt < 5) {pressureGroup = "b";}
	else if(startDepth <= 80 && fdt < 10) {pressureGroup = "c";}
	else if(startDepth <= 80 && fdt < 15) {pressureGroup = "d";}
	else if(startDepth <= 80 && fdt < 20) {pressureGroup = "e";}
	else if(startDepth <= 80 && fdt < 25) {pressureGroup = "f";}
	else if(startDepth <= 80 && fdt < 30) {pressureGroup = "g";}
	else if(startDepth <= 80 && fdt < 35) {pressureGroup = "h";}


	else if(startDepth <= 90 && fdt < 5) {pressureGroup = "b";}
	else if(startDepth <= 90 && fdt < 10) {pressureGroup = "c";}
	else if(startDepth <= 90 && fdt < 12) {pressureGroup = "d";}
	else if(startDepth <= 90 && fdt < 15) {pressureGroup = "e";}
	else if(startDepth <= 90 && fdt < 20) {pressureGroup = "f";}
	else if(startDepth <= 90 && fdt < 25) {pressureGroup = "g";}


	else if(startDepth <= 100 && fdt < 5) {pressureGroup = "b";}
	else if(startDepth <= 100 && fdt < 7) {pressureGroup = "c";}
	else if(startDepth <= 100 && fdt < 10) {pressureGroup = "d";}
	else if(startDepth <= 100 && fdt < 15) {pressureGroup = "e";}
	else if(startDepth <= 100 && fdt < 20) {pressureGroup = "f";}
	else if(startDepth <= 100 && fdt < 22) {pressureGroup = "g";}


	else if(startDepth <= 110 && fdt < 5) {pressureGroup = "c";}
	else if(startDepth <= 110 && fdt < 10) {pressureGroup = "d";}
	else if(startDepth <= 110 && fdt < 13) {pressureGroup = "e";}
	else if(startDepth <= 110 && fdt < 15) {pressureGroup = "f";}


	else if(startDepth <= 120 && fdt < 5) {pressureGroup = "c";}
	else if(startDepth <= 120 && fdt < 10) {pressureGroup = "d";}
	else if(startDepth <= 120 && fdt < 12) {pressureGroup = "e";}


	else if(startDepth <= 130 && fdt < 5) {pressureGroup = "c";}
	else if(startDepth <= 130 && fdt < 8) {pressureGroup = "d";}
	else{;}

	//totally not needed, just changes pressure group letter output to upper case..

	

	//create a text node for either pressure group or "Max.....is " if FDT surpasses max FDT
	if(fdt <= maxFdt)
	      {
	      	capitalString = pressureGroup.toUpperCase();
	      	node1 = document.createTextNode("Pressure Group is: " + capitalString);
	      }
	else if(startDepth > 130)
	      {
	      	node1 = document.createTextNode("Max depth is 130ft");
	      }
	else
	      {
	      	node1 = document.createTextNode("Max fdt for this depth is: " + maxFdt);
	      }



	//check if this is first time adding <p> result, if not then replace <p> result instead of appending
	if(count1 === 0)
	    {
	      
		  var para = document.createElement("p");
		  para.appendChild(node1);
		  var element = document.getElementById("result");
		  element.appendChild(para);
		  count1++;
	    }
	else
	    {
	  	  var item = document.getElementById("result").childNodes[0];
	  	  item.replaceChild(node1, item.childNodes[0]);
	    }
}


/*********** DIVE TABLE FUNCTIONS  ***********/

//function for calculating first pressure group after first dive
function calcPressureGroup() 
{

  //set the start depth input from the input in startDepth label in HTML
  startDepth = parseFloat(document.getElementById('startDepth').value);
  //set the FDT (first dive time) input from the input in fdt label in HTML
  fdt = parseFloat(document.getElementById('fdt').value);
  //this is used so that users don't input a higher FDT value than the max FDT value for given startDepth
  calcMaxFdt(startDepth);


	if(startDepth <= 40 && fdt < 5) {pressureGroup = "a";}
	else if(startDepth <= 40 && fdt < 15) {pressureGroup = "a";}
	else if(startDepth <= 40 && fdt < 25) {pressureGroup = "b";}
	else if(startDepth <= 40 && fdt < 30) {pressureGroup = "c";}
	else if(startDepth <= 40 && fdt < 40) {pressureGroup = "d";}
	else if(startDepth <= 40 && fdt < 50) {pressureGroup = "e";}
	else if(startDepth <= 40 && fdt < 70) {pressureGroup = "f";}
	else if(startDepth <= 40 && fdt < 80) {pressureGroup = "g";}
	else if(startDepth <= 40 && fdt < 100) {pressureGroup = "h";}
	else if(startDepth <= 40 && fdt < 110) {pressureGroup = "i";}
	else if(startDepth <= 40 && fdt < 130) {pressureGroup = "j";}


	else if(startDepth <= 50 && fdt < 10) {pressureGroup = "b";}
	else if(startDepth <= 50 && fdt < 15) {pressureGroup = "c";}
	else if(startDepth <= 50 && fdt < 25) {pressureGroup = "d";}
	else if(startDepth <= 50 && fdt < 30) {pressureGroup = "e";}
	else if(startDepth <= 50 && fdt < 40) {pressureGroup = "f";}
	else if(startDepth <= 50 && fdt < 50) {pressureGroup = "g";}
	else if(startDepth <= 50 && fdt < 60) {pressureGroup = "h";}
	else if(startDepth <= 50 && fdt < 70) {pressureGroup = "i";}
	else if(startDepth <= 50 && fdt < 80) {pressureGroup = "j";}


	else if(startDepth <= 60 && fdt < 10) {pressureGroup = "b";}
	else if(startDepth <= 60 && fdt < 15) {pressureGroup = "c";}
	else if(startDepth <= 60 && fdt < 20) {pressureGroup = "d";}
	else if(startDepth <= 60 && fdt < 25) {pressureGroup = "e";}
	else if(startDepth <= 60 && fdt < 30) {pressureGroup = "f";}
	else if(startDepth <= 60 && fdt < 40) {pressureGroup = "g";}
	else if(startDepth <= 60 && fdt < 50) {pressureGroup = "h";}
	else if(startDepth <= 60 && fdt < 55) {pressureGroup = "i";}


	else if(startDepth <= 70 && fdt < 5) {pressureGroup = "b";}
	else if(startDepth <= 70 && fdt < 10) {pressureGroup = "c";}
	else if(startDepth <= 70 && fdt < 15) {pressureGroup = "d";}
	else if(startDepth <= 70 && fdt < 20) {pressureGroup = "e";}
	else if(startDepth <= 70 && fdt < 30) {pressureGroup = "f";}
	else if(startDepth <= 70 && fdt < 35) {pressureGroup = "g";}
	else if(startDepth <= 70 && fdt < 40) {pressureGroup = "h";}
	else if(startDepth <= 70 && fdt < 45) {pressureGroup = "i";}


	else if(startDepth <= 80 && fdt < 5) {pressureGroup = "b";}
	else if(startDepth <= 80 && fdt < 10) {pressureGroup = "c";}
	else if(startDepth <= 80 && fdt < 15) {pressureGroup = "d";}
	else if(startDepth <= 80 && fdt < 20) {pressureGroup = "e";}
	else if(startDepth <= 80 && fdt < 25) {pressureGroup = "f";}
	else if(startDepth <= 80 && fdt < 30) {pressureGroup = "g";}
	else if(startDepth <= 80 && fdt < 35) {pressureGroup = "h";}


	else if(startDepth <= 90 && fdt < 5) {pressureGroup = "b";}
	else if(startDepth <= 90 && fdt < 10) {pressureGroup = "c";}
	else if(startDepth <= 90 && fdt < 12) {pressureGroup = "d";}
	else if(startDepth <= 90 && fdt < 15) {pressureGroup = "e";}
	else if(startDepth <= 90 && fdt < 20) {pressureGroup = "f";}
	else if(startDepth <= 90 && fdt < 25) {pressureGroup = "g";}


	else if(startDepth <= 100 && fdt < 5) {pressureGroup = "b";}
	else if(startDepth <= 100 && fdt < 7) {pressureGroup = "c";}
	else if(startDepth <= 100 && fdt < 10) {pressureGroup = "d";}
	else if(startDepth <= 100 && fdt < 15) {pressureGroup = "e";}
	else if(startDepth <= 100 && fdt < 20) {pressureGroup = "f";}
	else if(startDepth <= 100 && fdt < 22) {pressureGroup = "g";}


	else if(startDepth <= 110 && fdt < 5) {pressureGroup = "c";}
	else if(startDepth <= 110 && fdt < 10) {pressureGroup = "d";}
	else if(startDepth <= 110 && fdt < 13) {pressureGroup = "e";}
	else if(startDepth <= 110 && fdt < 15) {pressureGroup = "f";}


	else if(startDepth <= 120 && fdt < 5) {pressureGroup = "c";}
	else if(startDepth <= 120 && fdt < 10) {pressureGroup = "d";}
	else if(startDepth <= 120 && fdt < 12) {pressureGroup = "e";}


	else if(startDepth <= 130 && fdt < 5) {pressureGroup = "c";}
	else if(startDepth <= 130 && fdt < 8) {pressureGroup = "d";}
	else{;}

	//totally not needed, just changes pressure group letter output to upper case..

	

	//create a text node for either pressure group or "Max.....is " if FDT surpasses max FDT
	if(fdt <= maxFdt)
	      {
	      	capitalString = pressureGroup.toUpperCase();
	      	node1 = document.createTextNode("Pressure Group is: " + capitalString);
	      }
	else if(startDepth > 130)
	      {
	      	node1 = document.createTextNode("Max depth is 130ft");
	      }      
	else
	      {
	      	node1 = document.createTextNode("Max fdt for this depth is: " + maxFdt);
	      }



	//check if this is first time adding <p> result, if not then replace <p> result instead of appending
	if(count1 === 0)
	    {
	      
		  var para = document.createElement("p");
		  para.appendChild(node1);
		  var element = document.getElementById("result");
		  element.appendChild(para);
		  count1++;
	    }
	else
	    {

	  	  var item = document.getElementById("result").childNodes[0];
	  	  item.replaceChild(node1, item.childNodes[0]);
	    }
}

//function sets max FDT
function calcMaxFdt(st)
{
	if(st <= 40)
	{
		maxFdt = 130;
	}
	else if(st <= 50)
	{
		maxFdt = 80;
	}
	else if(st <= 60)
	{
		maxFdt = 55;
	}
	else if(st <= 70)
	{
		maxFdt = 45;
	}
	else if(st <= 80)
	{
		maxFdt = 35;
	}
	else if(st <= 90)
	{
		maxFdt = 25;
	}
	else if(st <= 100)
	{
		maxFdt = 22;
	}
	else if(st <= 110)
	{
		maxFdt = 15;
	}
	else if(st <= 120)
	{
		maxFdt = 12;
	}
	else if(st <= 5130)
	{
		maxFdt = 8;
	}

}

//calculate the pressure group after user inputs surface interval in minutes
function calcPressureGroup2()

{

	surfaceInterval = parseFloat(document.getElementById("sit").value);

	//Pressure group 1 is a
	if(pressureGroup == "a" && (surfaceInterval >= 10 && surfaceInterval <= 1440))
	{
		pressureGroup2 = "a";
	}

	//Pressure group 1 is b
	else if(pressureGroup == "b" && (surfaceInterval >= 181 && surfaceInterval <= 1440))
	{
		pressureGroup2 = "a";
	}
	else if(pressureGroup == "b" && (surfaceInterval >= 10 && surfaceInterval <= 180))
	{
		pressureGroup2 ="b";
	}

	//Pressure group 1 is c
	else if(pressureGroup == "c" && (surfaceInterval >= 290 && surfaceInterval <= 1440))
	{
		pressureGroup2 = "a";
	}
	else if(pressureGroup == "c" && (surfaceInterval >= 100 && surfaceInterval <= 289))
	{
		pressureGroup2 ="b";
	}
	else if(pressureGroup == "c" && (surfaceInterval >= 10 && surfaceInterval <= 99))
	{
		pressureGroup2="c";
	}

	//Pressure group 1 is d
	else if(pressureGroup == "d" && (surfaceInterval >= 349 && surfaceInterval <= 1440))
	{
		pressureGroup2 = "a";
	}
	else if(pressureGroup == "d" && (surfaceInterval >= 159 && surfaceInterval <= 348))
	{
		pressureGroup2="b";
	}
	else if(pressureGroup == "d" && (surfaceInterval >= 70 && surfaceInterval <= 158))
	{
		pressureGroup2="c";
	}
	else if(pressureGroup == "d" && (surfaceInterval >= 10 && surfaceInterval <= 69))
	{
		pressureGroup2="d";
	}

	//Pressure group 1 is e
	else if(pressureGroup == "e" && (surfaceInterval >= 395 && surfaceInterval <= 1440))
	{
		pressureGroup2 = "a";
	}
	else if(pressureGroup == "e" && (surfaceInterval >= 205 && surfaceInterval <= 394))
	{
		pressureGroup2="b";
	}
	else if(pressureGroup == "e" && (surfaceInterval >= 118 && surfaceInterval <= 204))
	{
		pressureGroup2="c";
	}
	else if(pressureGroup == "e" && (surfaceInterval >= 55 && surfaceInterval <= 117))
	{
		pressureGroup2="d";
	}
	else if(pressureGroup == "e" && (surfaceInterval >= 10 && surfaceInterval <= 54))
	{
		pressureGroup2="e";
	}

	//Pressure group 1 is f
	else if(pressureGroup == "f" && (surfaceInterval >= 426 && surfaceInterval <= 1440))
	{
		pressureGroup2 = "a";
	}
	else if(pressureGroup == "f" && (surfaceInterval >= 238 && surfaceInterval <= 425))
	{
		pressureGroup2="b";
	}
	else if(pressureGroup == "f" && (surfaceInterval >= 149 && surfaceInterval <= 237))
	{
		pressureGroup2="c";
	}
	else if(pressureGroup == "f" && (surfaceInterval >= 90 && surfaceInterval <= 148))
	{
		pressureGroup2="d";
	}
	else if(pressureGroup == "f" && (surfaceInterval >= 46 && surfaceInterval <= 89))
	{
		pressureGroup2="e";
	}
	else if(pressureGroup == "f" && (surfaceInterval >= 10 && surfaceInterval <= 45))
	{
		pressureGroup2="f";
	}

	//Pressure group 1 is g
	else if(pressureGroup == "g" && (surfaceInterval >= 456 && surfaceInterval <= 1440))
	{
		pressureGroup2 = "a";
	}
	else if(pressureGroup == "g" && (surfaceInterval >= 266 && surfaceInterval <= 455))
	{
		pressureGroup2="b";
	}
	else if(pressureGroup == "g" && (surfaceInterval >= 179 && surfaceInterval <= 255))
	{
		pressureGroup2="c";
	}
	else if(pressureGroup == "g" && (surfaceInterval >= 120 && surfaceInterval <= 178))
	{
		pressureGroup2="d";
	}
	else if(pressureGroup == "g" && (surfaceInterval >= 76 && surfaceInterval <= 119))
	{
		pressureGroup2="e";
	}
	else if(pressureGroup == "g" && (surfaceInterval >= 41 && surfaceInterval <= 75))
	{
		pressureGroup2="f";
	}
	else if(pressureGroup == "g" && (surfaceInterval >= 10 && surfaceInterval <= 40))
	{
		pressureGroup2="g";
	}

	//Pressure group 1 is h
	else if(pressureGroup == "h" && (surfaceInterval >= 480 && surfaceInterval <= 1440))
	{
		pressureGroup2 = "a";
	}
	else if(pressureGroup == "h" && (surfaceInterval >= 290 && surfaceInterval <= 479))
	{
		pressureGroup2="b";
	}
	else if(pressureGroup == "h" && (surfaceInterval >= 201 && surfaceInterval <= 289))
	{
		pressureGroup2="c";
	}
	else if(pressureGroup == "h" && (surfaceInterval >= 144 && surfaceInterval <= 200))
	{
		pressureGroup2="d";
	}
	else if(pressureGroup == "h" && (surfaceInterval >= 102 && surfaceInterval <= 143))
	{
		pressureGroup2="e";
	}
	else if(pressureGroup == "h" && (surfaceInterval >= 67 && surfaceInterval <= 101))
	{
		pressureGroup2="f";
	}
	else if(pressureGroup == "h" && (surfaceInterval >= 37 && surfaceInterval <= 66))
	{
		pressureGroup2="g";
	}
	else if(pressureGroup == "h" && (surfaceInterval >= 10 && surfaceInterval <= 36))
	{
		pressureGroup2="h";
	}

	//Pressure group 1 is i
	else if(pressureGroup == "i" && (surfaceInterval >= 502 && surfaceInterval <= 1440))
	{
		pressureGroup2 = "a";
	}
	else if(pressureGroup == "i" && (surfaceInterval >= 313  && surfaceInterval <= 501))
	{
		pressureGroup2="b";
	}
	else if(pressureGroup == "i" && (surfaceInterval >= 224 && surfaceInterval <= 312))
	{
		pressureGroup2="c";
	}
	else if(pressureGroup == "i" && (surfaceInterval >= 165 && surfaceInterval <= 223))
	{
		pressureGroup2="d";
	}
	else if(pressureGroup == "i" && (surfaceInterval >= 123 && surfaceInterval <= 164))
	{
		pressureGroup2="e";
	}
	else if(pressureGroup == "i" && (surfaceInterval >= 90 && surfaceInterval <= 122))
	{
		pressureGroup2="f";
	}
	else if(pressureGroup == "i" && (surfaceInterval >= 60 && surfaceInterval <= 89))
	{
		pressureGroup2="g";
	}
	else if(pressureGroup == "i" && (surfaceInterval >= 34 && surfaceInterval <= 59))
	{
		pressureGroup2="h";
	}
	else if(pressureGroup == "i" && (surfaceInterval >= 10 && surfaceInterval <= 33))
	{
		pressureGroup2="i";
	}

	//Pressure group 1 is j
	else if(pressureGroup == "j" && (surfaceInterval >= 531 && surfaceInterval <= 1440))
	{
		pressureGroup2 = "a";
	}
	else if(pressureGroup == "j" && (surfaceInterval >= 341 && surfaceInterval <= 530))
	{
		pressureGroup2="b";
	}
	else if(pressureGroup == "j" && (surfaceInterval >= 243 && surfaceInterval <= 340))
	{
		pressureGroup2="c";
	}
	else if(pressureGroup == "j" && (surfaceInterval >= 185 && surfaceInterval <= 242))
	{
		pressureGroup2="d";
	}
	else if(pressureGroup == "j" && (surfaceInterval >= 141 && surfaceInterval <= 184))
	{
		pressureGroup2="e";
	}
	else if(pressureGroup == "j" && (surfaceInterval >= 108 && surfaceInterval <= 140))
	{
		pressureGroup2="f";
	}
	else if(pressureGroup == "j" && (surfaceInterval >= 80 && surfaceInterval <= 107))
	{
		pressureGroup2="g";
	}
	else if(pressureGroup == "j" && (surfaceInterval >= 55 && surfaceInterval <= 79))
	{
		pressureGroup2="h";
	}
	else if(pressureGroup == "j" && (surfaceInterval >= 32 && surfaceInterval <= 54))
	{
		pressureGroup2="i";
	}
	else if(pressureGroup == "j" && (surfaceInterval >= 10 && surfaceInterval <= 31))
	{
		pressureGroup2="j";
	}

	//pressure group 1 is k
	else if(pressureGroup == "k" && (surfaceInterval >= 539 && surfaceInterval <= 1440))
	{
		pressureGroup2 = "a";
	}
	else if(pressureGroup == "k" && (surfaceInterval >= 349 && surfaceInterval <= 538))
	{
		pressureGroup2="b";
	}
	else if(pressureGroup == "k" && (surfaceInterval >= 260 && surfaceInterval <= 348))
	{
		pressureGroup2="c";
	}
	else if(pressureGroup == "k" && (surfaceInterval >= 202 && surfaceInterval <= 259))
	{
		pressureGroup2="d";
	}
	else if(pressureGroup == "k" && (surfaceInterval >= 159 && surfaceInterval <= 201))
	{
		pressureGroup2="e";
	}
	else if(pressureGroup == "k" && (surfaceInterval >= 124 && surfaceInterval <= 158))
	{
		pressureGroup2="f";
	}
	else if(pressureGroup == "k" && (surfaceInterval >= 96 && surfaceInterval <= 123))
	{
		pressureGroup2="g";
	}
	else if(pressureGroup == "k" && (surfaceInterval >= 72 && surfaceInterval <= 95))
	{
		pressureGroup2="h";
	}
	else if(pressureGroup == "k" && (surfaceInterval >= 50 && surfaceInterval <= 71))
	{
		pressureGroup2="i";
	}
	else if(pressureGroup == "k" && (surfaceInterval >= 29 && surfaceInterval <= 49))
	{
		pressureGroup2="j";
	}
	else if(pressureGroup == "k" && (surfaceInterval >= 10 && surfaceInterval <= 28))
	{
		pressureGroup2="k";
	}

	//Pressure group 1 is l
	else if(pressureGroup == "l" && (surfaceInterval >= 553 && surfaceInterval <= 1440))
	{
		pressureGroup2 = "a";
	}
	else if(pressureGroup == "l" && (surfaceInterval >= 363 && surfaceInterval <= 552))
	{
		pressureGroup2="b";
	}
	else if(pressureGroup == "l" && (surfaceInterval >= 276 && surfaceInterval <= 362))
	{
		pressureGroup2="c";
	}
	else if(pressureGroup == "l" && (surfaceInterval >= 217 && surfaceInterval <= 275))
	{
		pressureGroup2="d";
	}
	else if(pressureGroup == "l" && (surfaceInterval >= 174 && surfaceInterval <= 216))
	{
		pressureGroup2="e";
	}
	else if(pressureGroup == "l" && (surfaceInterval >= 140 && surfaceInterval <= 173))
	{
		pressureGroup2="f";
	}
	else if(pressureGroup == "l" && (surfaceInterval >= 110 && surfaceInterval <= 139))
	{
		pressureGroup2="g";
	}
	else if(pressureGroup == "l" && (surfaceInterval >= 86 && surfaceInterval <= 109))
	{
		pressureGroup2="h";
	}
	else if(pressureGroup == "l" && (surfaceInterval >= 65 && surfaceInterval <= 85))
	{
		pressureGroup2="i";
	}
	else if(pressureGroup == "l" && (surfaceInterval >= 46 && surfaceInterval <= 64))
	{
		pressureGroup2="j";
	}
	else if(pressureGroup == "l" && (surfaceInterval >= 27 && surfaceInterval <= 45))
	{
		pressureGroup2="k";
	}
	else if(pressureGroup == "l" && (surfaceInterval >= 10 && surfaceInterval <= 26))
	{
		pressureGroup2="l";
	}


	capitalString = pressureGroup2.toUpperCase();
	node3 = document.createTextNode("New pressure group: " + capitalString);

	if(count1 === 0)
	    {
	      
		  var para = document.createElement("p");
		  para.appendChild(node3);
		  var element = document.getElementById("result");
		  element.appendChild(para);
		  count1++;
	    }
	else
	    {

	  	  var item = document.getElementById("result").childNodes[0];
	  	  item.replaceChild(node3, item.childNodes[0]);
	    }
}


