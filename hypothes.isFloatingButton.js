// ==UserScript==
// @name         hypothes.isFloatingButton
// @version      1.0.1
// @author       Lancelotly.Sagirrarimeow
// @description  This is a shortcut for using hypothes.is service. It combines the hypothes.is bookmarklet to the page directly for a further convience.
// @match        *://*/*
// @exclude      https://hypothes.is/*
// @grant        GM_addStyle
// ==/UserScript==

/*--- Create a button in a container div.  It will be styled and positioned with CSS.*/
var zNode = document.createElement('div');

zNode.innerHTML = '<div id="fButton" data-toggle="tooltip" data-placement="left" data-original-title="Create"></div>';
zNode.setAttribute('id', 'myFloatingButton');
document.body.appendChild(zNode);

//--- Activate the newly added button.
document.getElementById("fButton").addEventListener(
    "click", buttonClickAction, false
);

function buttonClickAction(zEvent) {
    javascript: (function () {
        window.hypothesisConfig = function () {
            return {
                showHighlights: true,
                appType: 'bookmarklet'
            };
        };
        var d = document,
            s = d.createElement('script');
        s.setAttribute('src', 'https://hypothes.is/embed.js');
        d.body.appendChild(s)
    })();
}

//--- Style our newly added elements using CSS.
GM_addStyle(`
#myFloatingButton {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    /* background: #db4437; */
    background-image: url(https://d242fdlp0qlcia.cloudfront.net/uploads/2017/04/28221646/hypothesis-favicon72x72-e1493417806154.png);
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
    /* line-height: 25px; */
    font-family: 'Roboto';
    /* animation: plus-out 0.3s; */
    /* transition: all 0.3s; */
    font-size: 18px;
}
`);