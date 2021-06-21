!function(){var t={683:function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var e=document.getElementById("main-canvas"),i=e.getContext("2d"),n=document.getElementById("planet-details"),o=(document.getElementById("container"),document.getElementById("planet-name"),document.getElementById("orbital-period"),document.getElementById("planet-temp"),document.getElementById("planet-name-p")),s=document.getElementById("orbital-period-p"),r=document.getElementById("planet-temp-p"),a=document.getElementById("planet-name-title"),l=document.getElementById("orbital-period-title"),u=document.getElementById("planet-temp-title");function d(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))<e.radius}console.log(e),e.width=950,e.height=750;var c,p=function(){function e(t,i,n,o,s,r,a,l,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.planetName=t,this.orbitPeriod=i,this.planetTemp=n,this.x=o,this.y=s,this.radius=r,this.color=a,this.velocity=l,this.orbitRadius=u,this.startPos={x:o,y:s},this.radian=0}var n,o;return n=e,(o=[{key:"draw",value:function(){i.beginPath(),i.lineWidth=2,i.arc(this.startPos.x,this.startPos.y,this.orbitRadius,0,2*Math.PI),i.strokeStyle="rgb(255, 255, 255, 0.35)",i.stroke(),i.closePath(),i.beginPath(),i.arc(this.x,this.y,this.radius,0,2*Math.PI),i.fillStyle=this.color,i.fill(),i.closePath()}},{key:"update",value:function(){this.draw(),this.radian+=this.velocity,this.x=this.startPos.x+Math.cos(this.radian)*this.orbitRadius,this.y=this.startPos.y+Math.sin(this.radian)*this.orbitRadius}}])&&t(n.prototype,o),e}(),h=function(t,i,n,o,s,r,a){return new p(t,i,n,e.width/2,e.height/2,o,a,s/1e3,r)};(c=[]).push(h("Sun is not a planet","N/A","HOT",12,0,0,"yellow")),c.push(h("Mercury","88 days","167 Celsius",5,8,35,"red")),c.push(h("Venus","224.7 days","464 Celsius",10,5,60,"orange")),c.push(h("Earth","365 days","15 Celsius",15,4,90,"blue")),c.push(h("Mars","27.3 days","-20 Celsius",18,3.5,135,"red")),c.push(h("Jupiter","4,331 days","-110 Celsius",23,3,185,"orange")),c.push(h("Saturn","10,747 days","-140 Celsius",18,2.25,235,"yellow")),c.push(h("Uranus","30,589 days","-195 Celsius",13,2,285,"blue")),c.push(h("Neptune","59,800 days","-200 Celsius",20,1.5,335,"purple")),c.push(h("pluto","90,560 days","-225 Celsius",7,1,375,"gray")),function t(){requestAnimationFrame(t),i.clearRect(0,0,e.width,e.height),i.fillStyle="rgb(0, 0, 0)",i.fillRect(0,0,e.width,e.height),c.forEach((function(t){t.update()}))}(),e.addEventListener("click",(function(t){var e={x:t.offsetX,y:t.offsetY};c.forEach((function(t){if(console.log("isIntersect",d(e,t)),d(e,t)){if(console.log("PLANET CLICK",t.planetName),console.log("out of if slide",n.getAttribute("slide")),"in"===n.getAttribute("slide")||"out"===n.getAttribute("slide"))return;n.setAttribute("slide","in"),setTimeout((function(){n.setAttribute("slide","out")}),5e3),n.onanimationend=function(){"out"===n.getAttribute("slide")&&n.setAttribute("slide","")},console.log("planetP",o),a.innerHTML="Planet: ",l.innerHTML="Orbital Period: ",u.innerHTML="Planet Temperature: ",o.innerHTML=t.planetName,s.innerHTML=t.orbitPeriod,r.innerHTML=t.planetTemp}}))}))},313:function(){var t=document.querySelectorAll(".popup-trigger"),e=(document.querySelector(".popup-modal__close"),document.querySelector(".body-blackout"));t.forEach((function(t){t.addEventListener("click",(function(){t.dataset.popupTrigger;var i=document.querySelector('[data-popup-modal="one"]');console.log("popupModal",i),i.classList.add("is--visible"),e.classList.add("is-blacked-out"),i.querySelector(".popup-modal__close").addEventListener("click",(function(){i.classList.remove("is--visible"),e.classList.remove("is-blacked-out")})),e.addEventListener("click",(function(){i.classList.remove("is--visible"),e.classList.remove("is-blacked-out")}))}))}))}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,i),s.exports}i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";i(683),i(313)}()}();
//# sourceMappingURL=main.js.map