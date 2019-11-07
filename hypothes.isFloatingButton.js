// ==UserScript==
// @name            hypothes.isFloatingButton
// @namespace       https://greasyfork.org/users/296362
// @version         1.0.2.5
// @author          Lancelotly.Sagirrarimeow
// @description     This is a shortcut for using hypothes.is service. It combines the hypothes.is bookmarklet to the page directly for a further convience.
// @match           *://*/*
// @exclude         https://hypothes.is/*
// @noframes
// @run-at          document-idle
// @grant           GM_addStyle
// @icon            https://blogresources.lancelotly.ml/img/hypothesis-favicon.png
// ==/UserScript==

/*--- Create a button in a container div.  It will be styled and positioned with CSS.*/
function buttonClickAction(t){!function(){window.hypothesisConfig=function(){return{showHighlights:!0}};var t=document,e=t.createElement("script");e.setAttribute("src","https://hypothes.is/embed.js"),t.body.appendChild(e)}()}function findHighestZIndex(t){for(var e=document.getElementsByTagName(t),n=0,d=0;d<e.length;d++){var i=document.defaultView.getComputedStyle(e[d],null).getPropertyValue("z-index");i>n&&"auto"!=i&&(n=i)}return n}var hNode=document.createElement("div"),z=findHighestZIndex("div");hNode.innerHTML='<div id="fButton" data-toggle="tooltip" data-placement="left" data-original-title="Create"></div>',hNode.style.zIndex=z+1,hNode.setAttribute("id","myFloatingButton"),document.body.appendChild(hNode),document.getElementById("fButton").addEventListener("click",buttonClickAction,!1);

//--- Style our newly added elements using CSS.
GM_addStyle(`
#myFloatingButton {
width: 25px;
    height: 25px;
    border-radius: 50%;
    background-image: url(https://gitlab.com/lancelotly/blog_resources/raw/master/img/hypothesis_favicon.svg);
    background-repeat: no-repeat;
    background-size: 60%;
    background-color: black;
    background-position-x: center;
    background-position-y: 65%;
    position: fixed;
    bottom: 20px;
    left: 20px;
    box-shadow: -2px 2px 9px #202020;
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
