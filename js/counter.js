


// Jane - A Personal Portfolio Template.
// Below codes are for automatic counter increment.  
// All codes rights reserved by Jane - A Personal Portfolio Template.


"use strict";

function incr(){	

  var happy_client = 1000; 
  var project_done = 1000;
  var award_received = 0;
  var coffee_drank = 1100;


/*************************************************************** 1st section of Facts Counter Increment Codes are below ***********************************************************/

function client(){
  var f1_h3 = document.querySelector("#facts > .fact_container > .f1 > h3");
  happy_client++;
  f1_h3.innerHTML = happy_client;
  if(happy_client >= 1032){
    clearInterval(client_interval);
  }
}
var client_interval = setInterval(client,300);

/*************************************************************** 2nd section of Facts Counter Increment Codes are below ***********************************************************/

function project(){
  var f2_h3 = document.querySelector("#facts > .fact_container > .f2 > h3");
  project_done++;
  f2_h3.innerHTML = project_done;
  if(project_done >= 1150){
    clearInterval(project_interval);
  }
}
var project_interval = setInterval(project,200);

/*************************************************************** 3rd section of Facts Counter Increment Codes are below ***********************************************************/

function awards(){
  var f3_h3 = document.querySelector("#facts > .fact_container > .f3 > h3");
  award_received++;
  f3_h3.innerHTML = award_received;
  if(award_received >= 32){
    clearInterval(awards_interval);
  }
}
var awards_interval = setInterval(awards,500);	  

/*************************************************************** 4th section of Facts Counter Increment Codes are below ***********************************************************/

function coffee(){
  var f4_h3 = document.querySelector("#facts > .fact_container > .f4 > h3");
  coffee_drank++;
  f4_h3.innerHTML = coffee_drank;
  if(coffee_drank >= 1232){
    clearInterval(coffee_interval);
  }
}
var coffee_interval = setInterval(coffee,200);	  


/*********************************************************************************** End of main function *************************************************************************/
}
/*********************************************************************************** End of main function *************************************************************************/

function load_full_increment(){
  incr();
}
window.addEventListener("load",load_full_increment);
