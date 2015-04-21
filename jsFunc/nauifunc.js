var nitrogen;
var pressureGroup;
var pressuregroup2;
var startDepth;
var fdt;
var surfaceInterval;

if(startDepth <= 40 && fdt <= 5) {pressureGroup = "a";}
else if(startDepth <= 40 && fdt <= 15) {pressureGroup = "a";}
else if(startDepth <= 40 && fdt <= 25) {pressureGroup = "b";}
else if(startDepth <= 40 && fdt <= 30) {pressureGroup = "c";}
else if(startDepth <= 40 && fdt <= 40) {pressureGroup = "d";}
else if(startDepth <= 40 && fdt <= 50) {pressureGroup = "e";}
else if(startDepth <= 40 && fdt <= 70) {pressureGroup = "f";}
else if(startDepth <= 40 && fdt <= 80) {pressureGroup = "g";}
else if(startDepth <= 40 && fdt <= 100) {pressureGroup = "h";}
else if(startDepth <= 40 && fdt <= 110) {pressureGroup = "i";}
else if(startDepth <= 40 && fdt <= 130) {pressureGroup = "j";}
else{}; //do again

if(startDepth <= 50 && fdt <= 10) {pressureGroup = "b";}
else if(startDepth <= 50 && fdt <= 15) {pressureGroup = "c";}
else if(startDepth <= 50 && fdt <= 25) {pressureGroup = "d";}
else if(startDepth <= 50 && fdt <= 30) {pressureGroup = "e";}
else if(startDepth <= 50 && fdt <= 40) {pressureGroup = "f";}
else if(startDepth <= 50 && fdt <= 50) {pressureGroup = "g";}
else if(startDepth <= 50 && fdt <= 60) {pressureGroup = "h";}
else if(startDepth <= 50 && fdt <= 70) {pressureGroup = "i";}
else if(startDepth <= 50 && fdt <= 80) {pressureGroup = "j";}
else{};

if(startDepth <= 60 && fdt <= 10) {pressureGroup = "b";}
else if(startDepth <= 60 && fdt <= 15) {pressureGroup = "c";}
else if(startDepth <= 60 && fdt <= 20) {pressureGroup = "d";}
else if(startDepth <= 60 && fdt <= 25) {pressureGroup = "e";}
else if(startDepth <= 60 && fdt <= 30) {pressureGroup = "f";}
else if(startDepth <= 60 && fdt <= 40) {pressureGroup = "g";}
else if(startDepth <= 60 && fdt <= 50) {pressureGroup = "h";}
else if(startDepth <= 60 && fdt <= 55) {pressureGroup = "i";}
else{};

if(startDepth <= 70 && fdt <= 5) {pressureGroup = "b";}
else if(startDepth <= 70 && fdt <= 10) {pressureGroup = "c";}
else if(startDepth <= 70 && fdt <= 15) {pressureGroup = "d";}
else if(startDepth <= 70 && fdt <= 20) {pressureGroup = "e";}
else if(startDepth <= 70 && fdt <= 30) {pressureGroup = "f";}
else if(startDepth <= 70 && fdt <= 35) {pressureGroup = "g";}
else if(startDepth <= 70 && fdt <= 40) {pressureGroup = "h";}
else if(startDepth <= 70 && fdt <= 45) {pressureGroup = "i";}
else{};

if(startDepth <= 80 && fdt <= 5) {pressureGroup = "b";}
else if(startDepth <= 70 && fdt <= 10) {pressureGroup = "c";}
else if(startDepth <= 70 && fdt <= 15) {pressureGroup = "d";}
else if(startDepth <= 70 && fdt <= 20) {pressureGroup = "e";}
else if(startDepth <= 70 && fdt <= 25) {pressureGroup = "f";}
else if(startDepth <= 70 && fdt <= 30) {pressureGroup = "g";}
else if(startDepth <= 70 && fdt <= 35) {pressureGroup = "h";}
else{};

if(startDepth <= 90 && fdt <= 5) {pressureGroup = "b";}
else if(startDepth <= 70 && fdt <= 10) {pressureGroup = "c";}
else if(startDepth <= 70 && fdt <= 12) {pressureGroup = "d";}
else if(startDepth <= 70 && fdt <= 15) {pressureGroup = "e";}
else if(startDepth <= 70 && fdt <= 20) {pressureGroup = "f";}
else if(startDepth <= 70 && fdt <= 25) {pressureGroup = "g";}
else{};

if(startDepth <= 100 && fdt <= 5) {pressureGroup = "b";}
else if(startDepth <= 70 && fdt <= 7) {pressureGroup = "c";}
else if(startDepth <= 70 && fdt <= 10) {pressureGroup = "d";}
else if(startDepth <= 70 && fdt <= 15) {pressureGroup = "e";}
else if(startDepth <= 70 && fdt <= 20) {pressureGroup = "f";}
else if(startDepth <= 70 && fdt <= 22) {pressureGroup = "g";}
else{};

if(startDepth <= 110 && fdt <= 5) {pressureGroup = "c";}
else if(startDepth <= 70 && fdt <= 10) {pressureGroup = "d";}
else if(startDepth <= 70 && fdt <= 13) {pressureGroup = "e";}
else if(startDepth <= 70 && fdt <= 15) {pressureGroup = "f";}
else{};

if(startDepth <= 120 && fdt <= 5) {pressureGroup = "c";}
else if(startDepth <= 70 && fdt <= 10) {pressureGroup = "d";}
else if(startDepth <= 70 && fdt <= 12) {pressureGroup = "e";}
else{};

if(startDepth <= 130 && fdt <= 5) {pressureGroup = "c";}
else if(startDepth <= 70 && fdt <= 8) {pressureGroup = "d";}
else{};

/************** SURFACE INTERVAL  ******************/

//Pressure group 1 is a
if(pressureGroup == "a" && (surfaceInterval >= 10 && surfaceInterval <= 1440)
{
	pressureGroup2 = "a";
}
//Pressure group 1 is b
if(pressureGroup == "b" && (surfaceInterval >= 181 && surfaceInterval <= 1440)
{
	pressureGroup2 = "a";
}
else if(pressureGroup == "b" && (surfaceInterval >= 10 && surfaceInterval <= 180)
{
	pressuregroup2="b";
}
//Pressure group 1 is c
if(pressureGroup == "c" && (surfaceInterval >= 290 && surfaceInterval <= 1440)
{
	pressureGroup2 = "a";
}
else if(pressureGroup == "c" && (surfaceInterval >= 100 && surfaceInterval <= 289)
{
	pressuregroup2="b";
}
else if(pressureGroup == "c" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="c";
}



//Pressure group 1 is d
if(pressureGroup == "d" && (surfaceInterval >= 290 && surfaceInterval <= 1440)
{
	pressureGroup2 = "a";
}
else if(pressureGroup == "d" && (surfaceInterval >= 100 && surfaceInterval <= 289)
{
	pressuregroup2="b";
}
else if(pressureGroup == "d" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="c";
}
else if(pressureGroup == "d" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="d";
}



//Pressure group 1 is e
if(pressureGroup == "e" && (surfaceInterval >= 290 && surfaceInterval <= 1440)
{
	pressureGroup2 = "a";
}
else if(pressureGroup == "e" && (surfaceInterval >= 100 && surfaceInterval <= 289)
{
	pressuregroup2="b";
}
else if(pressureGroup == "e" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="c";
}
else if(pressureGroup == "e" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="d";
}
else if(pressureGroup == "e" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="e";
}



//Pressure group 1 is f
if(pressureGroup == "f" && (surfaceInterval >= 290 && surfaceInterval <= 1440)
{
	pressureGroup2 = "a";
}
else if(pressureGroup == "f" && (surfaceInterval >= 100 && surfaceInterval <= 289)
{
	pressuregroup2="b";
}
else if(pressureGroup == "f" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="c";
}
else if(pressureGroup == "f" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="d";
}
else if(pressureGroup == "f" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="e";
}
else if(pressureGroup == "f" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="f";
}



//Pressure group 1 is g
if(pressureGroup == "g" && (surfaceInterval >= 290 && surfaceInterval <= 1440)
{
	pressureGroup2 = "a";
}
else if(pressureGroup == "g" && (surfaceInterval >= 100 && surfaceInterval <= 289)
{
	pressuregroup2="b";
}
else if(pressureGroup == "g" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="c";
}
else if(pressureGroup == "g" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="d";
}
else if(pressureGroup == "g" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="e";
}
else if(pressureGroup == "g" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="f";
}
else if(pressureGroup == "g" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="g";
}



//Pressure group 1 is h
if(pressureGroup == "h" && (surfaceInterval >= 290 && surfaceInterval <= 1440)
{
	pressureGroup2 = "a";
}
else if(pressureGroup == "h" && (surfaceInterval >= 100 && surfaceInterval <= 289)
{
	pressuregroup2="b";
}
else if(pressureGroup == "h" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="c";
}
else if(pressureGroup == "h" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="d";
}
else if(pressureGroup == "h" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="e";
}
else if(pressureGroup == "h" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="f";
}
else if(pressureGroup == "h" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="g";
}
else if(pressureGroup == "h" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="h";
}



//Pressure group 1 is i
if(pressureGroup == "i" && (surfaceInterval >= 290 && surfaceInterval <= 1440)
{
	pressureGroup2 = "a";
}
else if(pressureGroup == "i" && (surfaceInterval >= 100 && surfaceInterval <= 289)
{
	pressuregroup2="b";
}
else if(pressureGroup == "i" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="c";
}
else if(pressureGroup == "i" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="d";
}
else if(pressureGroup == "i" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="e";
}
else if(pressureGroup == "i" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="f";
}
else if(pressureGroup == "i" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="g";
}
else if(pressureGroup == "i" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="h";
}
else if(pressureGroup == "i" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="i";
}



//Pressure group 1 is j
if(pressureGroup == "j" && (surfaceInterval >= 290 && surfaceInterval <= 1440)
{
	pressureGroup2 = "a";
}
else if(pressureGroup == "j" && (surfaceInterval >= 100 && surfaceInterval <= 289)
{
	pressuregroup2="b";
}
else if(pressureGroup == "j" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="c";
}
else if(pressureGroup == "j" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="d";
}
else if(pressureGroup == "j" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="e";
}
else if(pressureGroup == "j" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="f";
}
else if(pressureGroup == "j" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="g";
}
else if(pressureGroup == "j" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="h";
}
else if(pressureGroup == "j" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="i";
}
else if(pressureGroup == "j" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="j";
}



//pressure group 1 is k
if(pressureGroup == "k" && (surfaceInterval >= 290 && surfaceInterval <= 1440)
{
	pressureGroup2 = "a";
}
else if(pressureGroup == "k" && (surfaceInterval >= 100 && surfaceInterval <= 289)
{
	pressuregroup2="b";
}
else if(pressureGroup == "k" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="c";
}
else if(pressureGroup == "k" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="d";
}
else if(pressureGroup == "k" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="e";
}
else if(pressureGroup == "k" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="f";
}
else if(pressureGroup == "k" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="g";
}
else if(pressureGroup == "k" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="h";
}
else if(pressureGroup == "k" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="i";
}
else if(pressureGroup == "k" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="j";
}
else if(pressureGroup == "k" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="k";
}



//Pressure group 1 is l
if(pressureGroup == "l" && (surfaceInterval >= 290 && surfaceInterval <= 1440)
{
	pressureGroup2 = "a";
}
else if(pressureGroup == "l" && (surfaceInterval >= 100 && surfaceInterval <= 289)
{
	pressuregroup2="b";
}
else if(pressureGroup == "l" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="c";
}
else if(pressureGroup == "l" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="d";
}
else if(pressureGroup == "l" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="e";
}
else if(pressureGroup == "l" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="f";
}
else if(pressureGroup == "l" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="g";
}
else if(pressureGroup == "l" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="h";
}
else if(pressureGroup == "l" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="i";
}
else if(pressureGroup == "l" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="j";
}
else if(pressureGroup == "l" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="k";
}
else if(pressureGroup == "l" && (surfaceInterval >= 10 && surfaceInterval <= 99)
{
	pressuregroup2="l";
}

/************** RDT *******************/
//dont know how to do yet?????

