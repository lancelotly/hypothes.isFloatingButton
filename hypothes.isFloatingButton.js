// ==UserScript==
// @name         hypothes.isFloatingButton
// @version      1.0.2
// @author       Lancelotly.Sagirrarimeow
// @description  This is a shortcut for using hypothes.is service. It combines the hypothes.is bookmarklet to the page directly for a further convience.
// @match        *://*/*
// @exclude      https://hypothes.is/*
// @grant        GM_addStyle      
// ==/UserScript==

/*--- Create a button in a container div.  It will be styled and positioned with CSS.*/
var zNode=document.createElement("div");function buttonClickAction(t){!function(){window.hypothesisConfig=function(){return{showHighlights:!0,appType:"bookmarklet"}};var t=document,e=t.createElement("script");e.setAttribute("src","https://hypothes.is/embed.js"),t.body.appendChild(e)}()}zNode.innerHTML='<div id="fButton" data-toggle="tooltip" data-placement="left" data-original-title="Create"></div>',zNode.setAttribute("id","myFloatingButton"),document.body.appendChild(zNode),document.getElementById("fButton").addEventListener("click",buttonClickAction,!1);

//--- Style our newly added elements using CSS.
GM_addStyle(`
#myFloatingButton {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background-image: url(https://blogresources.lancelotly.ml/img/hypothesis-favicon.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    bottom: 20px;
    left: 20px;
    box-shadow: 0px 2px 5px #666;
}

#fButton {
    cursor: pointer;
    width: 2em;
    height: 2em;
}

#myFloatingButton p {
    color: white;
    display: block;
    text-align: center;
    margin: 0px;
    font-family: 'Roboto';
    font-size: 18px;
}
`);
