(()=>{"use strict";var e=document.querySelector("nav");document.querySelectorAll(".modal-btn").forEach((function(e){e.addEventListener("click",(function(){var t=document.createElement("div");t.classList="fixed inset-0 bg-gray-200 bg-opacity-70 flex justify-center items-center";var n=document.createElement("div");n.classList="bg-white w-10/12 p-3 pt-7 rounded relative";var a=e.parentElement.querySelector("div.project"),o=e.parentElement.querySelector("ul.project-skills"),s=document.createElement("button");s.classList="absolute top-0 right-0 text-blue-800",s.innerHTML='<i class="fas fa-window-close fa-lg"></i>',s.addEventListener("click",(function(){t.remove()})),n.append(s,a.cloneNode(!0),o.cloneNode(!0),function(e){var t,n,a,o=document.createElement("div");return e.classList.contains("first-project")?(t="http://manga-central.netlify.app/",n="https://github.com/meronokbay/manga-central",a="An SPA that lets you view and search Asian comics (manga) by fetching data from Jikan API."):e.classList.contains("second-project")?(t="https://group-payments.herokuapp.com/",n="https://github.com/meronokbay/group-payments",a="Group Payments is a web app that allows you to group payments with your friends and family."):e.classList.contains("third-project")?(t="https://meronokbay.github.io/panda-runner/",n="https://github.com/meronokbay/panda-runner",a="Panda Runner is a game where you play the role of a panda and collect as many coins as you can before falling over a platform or getting hurt."):e.classList.contains("fourth-project")&&(t="https://github.com/meronokbay/microverse-linters-setup/blob/main/setup_linters",n="https://github.com/meronokbay/microverse-linters-setup",a="This is a bash script that lets you install and setup linters quickly for the programming languages used in the Microverse curriculum."),o.innerHTML='\n  <p class="py-3">'.concat(a,'</p>\n  <a target="_blank" class="bg-blue-800 text-white font-semibold block py-3 mb-1 text-center rounded"\n  href="').concat(t,'">\n    See Live <i class="fas fa-external-link-alt"></i>\n  </a>\n  <a target="_blank" class="bg-blue-800 text-white font-semibold block py-3 mb-1 text-center rounded"\n  href="').concat(n,'">\n    See Source <i class="fab fa-lg fa-github"></i>\n  </a>\n  '),o}(a)),t.append(n),t.addEventListener("click",(function(e){e.target===t&&t.remove()})),document.body.append(t)}))})),window.addEventListener("scroll",(function(){0===window.scrollY?e.classList.remove("shadow"):e.classList.add("shadow")})),fetch("/.netlify/functions/fetchRepos").then((function(e){return e.json()})).then((function(e){return console.log(e)}))})();