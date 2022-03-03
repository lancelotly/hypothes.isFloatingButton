// ==UserScript==
// @name            hypothes.isFloatingButton
// @namespace       https://greasyfork.org/users/296362
// @version         1.0.4
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
function buttonClickAction(t) {
    ! function () {
        window.hypothesisConfig = function () {
            return {
                showHighlights: !0
            }
        };
        var t = document,
            e = t.createElement("script");
        e.setAttribute("src", "https://hypothes.is/embed.js")
        t.body.appendChild(e)
    }()
}

function findHighestZIndex(t) {
    for (var e = document.getElementsByTagName(t), n = 0, d = 0; d < e.length; d++) {
        var i = document.defaultView.getComputedStyle(e[d], null).getPropertyValue("z-index");
        i > n && "auto" != i && (n = i)
    }
    return n
}
var hNode = document.createElement("div"),
    z = findHighestZIndex("div");
hNode.innerHTML = '<div id="fButton" data-toggle="tooltip" data-placement="left" data-original-title="Create"></div>'
hNode.style.zIndex = z + 1
hNode.setAttribute("id", "myFloatingButton")
document.body.appendChild(hNode)
document.getElementById("fButton").addEventListener("click", buttonClickAction, !1);

//--- Style our newly added elements using CSS.
GM_addStyle(`
#myFloatingButton {
width: 25px;
    height: 25px;
    border-radius: 50%;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjMgNzMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTYzIDU4YTUgNSAwIDAgMSAtNSA1aC0xOWwtNy41IDEwLTcuOC0xMGgtMTguN2E1IDUgMCAwIDEgLTUtNXYtNTNhNSA1IDAgMCAxIDUtNWg1M2E1IDUgMCAwIDEgNSA1eiIgZmlsbD0iI2NlMjAyNyIvPjxnIGZpbGw9IiNmZmYiPjx0ZXh0IGZvbnQtZmFtaWx5PSJQVFNhbnMtQm9sZCwgUFQgU2FucyIgZm9udC1zaXplPSI1OC4xNSIgZm9udC13ZWlnaHQ9IjcwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy43NyA1Mi4zOSkiPmg8L3RleHQ+PGNpcmNsZSBjeD0iNDkuOTEiIGN5PSI0NyIgcj0iNSIvPjwvZz48L3N2Zz4=);
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
