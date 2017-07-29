/**
 * Created by Егор on 31.05.2017.
 */
console.log("script working");
window.onload= init();
function init(){
    /*alert("Dock is loaded");*/
    var trig1=document.getElementById("arrowButton1");
    var Mask=document.getElementById("reasonListMask");
    trig1.onclick=function(){
        Mask.style.display="none";
        var list=document.getElementById("ul1");
        list.classList.remove("hidden");
        trig1.onclick=function(){
            list.classList.add("hidden");
            Mask.style.display="inline-block";
        }
    }
    var reasonValue1=document.getElementById("reasonValue1");
    reasonValue1.onclick=function(){
        var select=document.getElementById("Reason");
        select.value="reason1";
        alert(select.value);
    }
    var reasonValue2=document.getElementById("reasonValue2");
    reasonValue2.onclick=function(){
        var select=document.getElementById("Reason");
        select.value="reason2";
        alert(select.value);
    }
}