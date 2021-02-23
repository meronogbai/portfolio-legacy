(()=>{"use strict";var e=document.querySelector("nav");window.addEventListener("scroll",(function(){0===window.scrollY?e.classList.remove("shadow"):e.classList.add("shadow")})),fetch("/.netlify/functions/fetchRepos").then((function(e){return e.json()})).then((function(e){var t=document.createElement("div");t.className="grid lg:grid-cols-2 gap-3",e.forEach((function(e){var n=document.createElement("article");n.className="lg:col-span-1 rounded-md shadow-md flex flex-col justify-between";var a=document.createElement("div");a.className="p-3 h-48 rounded",a.style.background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), no-repeat center/cover url('".concat(e.node.openGraphImageUrl,"'");var r=document.createElement("h3");r.className="font-extrabold text-white text-xl",r.textContent=e.node.name.split("-").map((function(e){return e[0].toUpperCase()+e.slice(1)})).join(" "),a.appendChild(r);var c=document.createElement("p");c.className="p-3",c.textContent=e.node.description;var o=function(e){var t=document.createElement("ul");return e.forEach((function(e){var n=document.createElement("li");n.textContent=e.node.topic.name,n.className="bg-gray-700 text-white inline-block px-2 py-1 rounded mr-1 capitalize",t.appendChild(n)})),t}(e.node.repositoryTopics.edges),l=document.createElement("div");l.innerHTML='\n        <a target="_blank" href='.concat(e.node.homepageUrl,'>\n          <i class="fas fa-external-link-alt fa-lg text-blue-800"></i>\n        </a>\n        <a target="_blank" href=').concat(e.node.url,'>\n          <i class="fab fa-github fa-lg text-blue-800"></i>\n        </a>\n      '),l.className="flex gap-2 items-center";var d=document.createElement("div");d.className="flex justify-between p-3",d.append(o,l);var i=document.createElement("div");i.append(a,c),n.append(i,d),t.appendChild(n)}));var n=document.querySelector("#projects");document.querySelector(".loading").remove(),n.appendChild(t)}))})();
//# sourceMappingURL=bundle.js.map