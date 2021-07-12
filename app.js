function loading() {
  let loadingPage = document.querySelector(".loading-page");

  loadingPage.style.display = "none";
}

function homePage() {
  let nav = document.querySelector(".nav-bar");

  nav.style.cssText = "display: flex; opacity: 0;";
  page.style.cssText = "display: flex; opacity: 0;";
}

document.addEventListener('DOMContentLoaded', function() {
  window.setTimeout(function () {
  setTimeout(function () {
    homePage();
  }, 100);
  loading();
}, 2800);
}, false);
                          
/*
window.setTimeout(function () {
  setTimeout(function () {
    homePage();
  }, 100);
  loading();
}, 2800);
*/

let newCairo = document.querySelector(".new-cairo"),
  october = document.querySelector(".october"),
  coastal = document.querySelector(".coastal"),
  intro = document.querySelector(".intro"),
  faq = document.querySelector(".faq"),
  locations = document.querySelector(".locations"),
  ids = document.querySelector(".ids"),
  activeDiv = document.querySelector(".nav-bar"),
  quickAction = document.querySelector(".quick-actions"),
  projects = document.querySelector(".projects"),
  projectsListE = document.querySelector(".projects-list"),
  aboutCont = document.querySelector(".about"),
  theList = document.querySelector(".first-list"),
  aboutLi = document.createElement("li"),
  octoberpj = document.querySelector(".october-list"),
  introScript = document.querySelector(".intro-opj"),
  faqScript = document.querySelector(".faq-opj"),
  locationScript = document.querySelector(".location-opj"),
  idsScript = document.querySelector(".agents-opj"),
  pdfFile = document.querySelector("Object"),
  costalProjects = document.querySelector(".coastal-list"),
  mviCards = document.querySelector(".mvi-cards"),
  mviiCards = document.querySelector(".mvii-cards"),
  mverkCards = document.querySelector(".mverk-cards"),
  mvhpCards = document.querySelector(".mvhp-cards"),
  mvicityncCards = document.querySelector(".mvicitync-cards"),
  mvgpCards = document.querySelector(".mvgp-cards"),
  mvOpCards = document.querySelector(".mvop-cards"),
  mvChopCards = document.querySelector(".mvchop-cards"),
  mvAsiCards = document.querySelector(".mvasi-cards"),
  mvAsiiCards = document.querySelector(".mvasii-cards"),
  mvNcCards = document.querySelector(".mvnc-cards"),
  icityOCards = document.querySelector(".icityo-cards"),
  wrapper = document.querySelector(".wrapper"),
  openLocation = document.getElementById("mvi-location"),
  openTypes = document.getElementById("mvi-types"),
  openScript = document.getElementById("mvi-script"),
  openMaster = document.getElementById("mvi-master"),
  openMviiLocation = document.getElementById("mvii-location"),
  openMviiTypes = document.getElementById("mvii-types"),
  openMviiScript = document.getElementById("mvii-script"),
  openMviiMaster = document.getElementById("mvii-master"),
  openMverkLocation = document.getElementById("mverk-location"),
  openMverkTypes = document.getElementById("mverk-types"),
  openMverkScript = document.getElementById("mverk-script"),
  openMverkMaster = document.getElementById("mverk-master"),
  openMvhpLocation = document.getElementById("mvhp-location"),
  openMvhpTypes = document.getElementById("mvhp-types"),
  openMvhpScript = document.getElementById("mvhp-script"),
  openMvhpMaster = document.getElementById("mvhp-master"),
  openicityncLocation = document.getElementById("mvicitync-location"),
  openicityncTypes = document.getElementById("mvicitync-types"),
  openicityncScript = document.getElementById("mvicitync-script"),
  openicityncMaster = document.getElementById("mvicitync-master"),
  opengpLocation = document.getElementById("mvgp-location"),
  opengpTypes = document.getElementById("mvgp-types"),
  opengpScript = document.getElementById("mvgp-script"),
  opengpMaster = document.getElementById("mvgp-master"),
  openopLocation = document.getElementById("mvop-location"),
  openopTypes = document.getElementById("mvop-types"),
  openopScript = document.getElementById("mvop-script"),
  openopMaster = document.getElementById("mvop-master"),
  openchopLocation = document.getElementById("mvchop-location"),
  openchopTypes = document.getElementById("mvchop-types"),
  openchopScript = document.getElementById("mvchop-script"),
  openchopMaster = document.getElementById("mvchop-master"),
  openicityoLocation = document.getElementById("mvicityo-location"),
  openicityoTypes = document.getElementById("mvicityo-types"),
  openicityoScript = document.getElementById("mvicityo-script"),
  openicityoMaster = document.getElementById("mvicityo-master"),
  openasiLocation = document.getElementById("mvasi-location"),
  openasiTypes = document.getElementById("mvasi-types"),
  openasiScript = document.getElementById("mvasi-script"),
  openasiMaster = document.getElementById("mvasi-master"),
  openasiiLocation = document.getElementById("mvasii-location"),
  openasiiTypes = document.getElementById("mvasii-types"),
  openasiiScript = document.getElementById("mvasii-script"),
  openasiiMaster = document.getElementById("mvasii-master"),
  openncLocation = document.getElementById("mvnc-location"),
  openncTypes = document.getElementById("mvnc-types"),
  openncScript = document.getElementById("mvnc-script"),
  openncMaster = document.getElementById("mvnc-master"),
  page = document.querySelector(".page");
aboutLi.innerHTML = "About";
aboutLi.classList.add("about-list");
aboutLi.addEventListener("click", closeAbout);

function project() {
  newCairo.classList.add("new-cairo-active");
  october.classList.add("october-active");
  coastal.classList.add("coastal-active");
  projects.classList.add("li-active");
}

function quickActions() {
  intro.classList.add("intro-active");
  faq.classList.add("faq-active");
  locations.classList.add("locations-active");
  ids.classList.add("ids-active");
  quickAction.classList.add("li-active");
}

function orgDiv() {
  newCairo.classList.remove("new-cairo-active");
  october.classList.remove("october-active");
  coastal.classList.remove("coastal-active");
  faq.classList.remove("faq-active");
  locations.classList.remove("locations-active");
  ids.classList.remove("ids-active");
  quickAction.classList.remove("li-active");
  projects.classList.remove("li-active");
  intro.classList.remove("intro-active");
  quickAction.classList.remove("li-active");
}

window.addEventListener("click", (e) => {
  if (e.target !== projects && e.target !== quickAction) {
    orgDiv();
  }
});

function removeAllChildElements() {
  var nodes = page.getElementsByTagName("div");

  for (var i = 0; i < nodes.length; i++) {
    nodes[i].style.cssText = "display: none;";
  }
}

function projectsList() {
  removeAllChildElements();

  projectsListE.style.cssText = "display: flex;";
}

function creatAbout() {
  theList.appendChild(aboutLi);
}

function closeAbout() {
  theList.removeChild(aboutLi);
  aboutCont.style.cssText = "display: flex;";
  projectsListE.style.cssText = "display: none;";
  octoberpj.style.cssText = "display: none;";
  costalProjects.style.cssText = "display: none";
}

function octoberProj() {
  removeAllChildElements();

  octoberpj.style.cssText = "display: flex;";
}

function coastalProj() {
  removeAllChildElements();

  costalProjects.style.cssText = "display: flex";
}

function introScriptOpen() {
  introScript.style.cssText = "Opacity: 1; pointer-events: all";
  introScript.addEventListener("click", (ev) => {
    if (ev.target !== pdfFile) {
      introScript.style.cssText = "Opacity: 0; pointer-events: none";
    }
  });
}

function faqScriptOpen() {
  faqScript.style.cssText = "Opacity: 1; pointer-events: all";
  faqScript.addEventListener("click", (ev) => {
    if (ev.target !== pdfFile) {
      faqScript.style.cssText = "Opacity: 0; pointer-events: none";
    }
  });
}

function locationScriptOpen() {
  locationScript.style.cssText = "Opacity: 1; pointer-events: all";
  locationScript.addEventListener("click", (ev) => {
    if (ev.target !== pdfFile) {
      locationScript.style.cssText = "Opacity: 0; pointer-events: none";
    }
  });
}

function idsScriptOpen() {
  idsScript.style.cssText = "Opacity: 1; pointer-events: all";
  idsScript.addEventListener("click", (ev) => {
    if (ev.target !== pdfFile) {
      idsScript.style.cssText = "Opacity: 0; pointer-events: none";
    }
  });
}

function mvIActive() {
  let mvIClicked = document.querySelector(".mviNC");
  mvIClicked.classList.add("li-active");
  let childs = mviCards.getElementsByTagName("div");
  mviCards.style.cssText = "Opacity: 1; pointer-events: all";

  mviCards.addEventListener("click", (e) => {
    if (
      e.target !== mvIClicked &&
      e.target !== childs[0] &&
      e.target !== childs[1] &&
      e.target !== childs[2] &&
      e.target !== childs[3] &&
      e.target !== childs[4]
    ) {
      mvIClicked.classList.remove("li-active");
      mviCards.style.cssText = "Opacity: 0; pointer-events: none";
    }
  });
}

function mvIIActive() {
  let mvIIClicked = document.querySelector(".mviiNc");
  mvIIClicked.classList.add("li-active");
  let childs = mviiCards.getElementsByTagName("div");
  mviiCards.style.cssText = "Opacity: 1; pointer-events: all";

  mviiCards.addEventListener("click", (e) => {
    if (
      e.target !== mvIIClicked &&
      e.target !== childs[0] &&
      e.target !== childs[1] &&
      e.target !== childs[2] &&
      e.target !== childs[3] &&
      e.target !== childs[4]
    ) {
      mvIIClicked.classList.remove("li-active");
      mviiCards.style.cssText = "Opacity: 0; pointer-events: none";
    }
  });
}

function mvErkNcActive() {
  let mvErkClicked = document.querySelector(".mvErkNc");
  mvErkClicked.classList.add("li-active");
  let childs = mverkCards.getElementsByTagName("div");
  mverkCards.style.cssText = "Opacity: 1; pointer-events: all";
  mverkCards.addEventListener("click", (e) => {
    if (
      e.target !== mvErkClicked &&
      e.target !== childs[0] &&
      e.target !== childs[1] &&
      e.target !== childs[2] &&
      e.target !== childs[3] &&
      e.target !== childs[4]
    ) {
      mvErkClicked.classList.remove("li-active");
      mverkCards.style.cssText = "Opacity: 0; pointer-events: none";
    }
  });
}

function mvHpNcActive() {
  let mvHpNcClicked = document.querySelector(".mvHpNc");
  mvHpNcClicked.classList.add("li-active");
  let childs = mvhpCards.getElementsByTagName("div");
  mvhpCards.style.cssText = "Opacity: 1; pointer-events: all";
  mvhpCards.addEventListener("click", (e) => {
    if (
      e.target !== mvHpNcClicked &&
      e.target !== childs[0] &&
      e.target !== childs[1] &&
      e.target !== childs[2] &&
      e.target !== childs[3] &&
      e.target !== childs[4]
    ) {
      mvHpNcClicked.classList.remove("li-active");
      mvhpCards.style.cssText = "Opacity: 0; pointer-events: none";
    }
  });
}

function iCityNcActive() {
  let iCityClicked = document.querySelector(".iCityNc");
  iCityClicked.classList.add("li-active");
  let childs = mvicityncCards.getElementsByTagName("div");
  mvicityncCards.style.cssText = "Opacity: 1; pointer-events: all";
  mvicityncCards.addEventListener("click", (e) => {
    if (
      e.target !== iCityClicked &&
      e.target !== childs[0] &&
      e.target !== childs[1] &&
      e.target !== childs[2] &&
      e.target !== childs[3] &&
      e.target !== childs[4]
    ) {
      iCityClicked.classList.remove("li-active");
      mvicityncCards.style.cssText = "Opacity: 0; pointer-events: none";
    }
  });
}

function mvGpActive() {
  let mvGpClicked = document.querySelector(".mvGpl");
  mvGpClicked.classList.add("li-active");
  let childs = mvgpCards.getElementsByTagName("div");
  mvgpCards.style.cssText = "Opacity: 1; pointer-events: all";
  mvgpCards.addEventListener("click", (e) => {
    if (
      e.target !== mvGpClicked &&
      e.target !== childs[0] &&
      e.target !== childs[1] &&
      e.target !== childs[2] &&
      e.target !== childs[3] &&
      e.target !== childs[4]
    ) {
      mvGpClicked.classList.remove("li-active");
      mvgpCards.style.cssText = "Opacity: 0; pointer-events: none";
    }
  });
}

function mvOpActive() {
  let mvOpClicked = document.querySelector(".mvop");
  mvOpClicked.classList.add("li-active");
  let childs = mvOpCards.getElementsByTagName("div");
  mvOpCards.style.cssText = "Opacity: 1; pointer-events: all";
  mvOpCards.addEventListener("click", (e) => {
    if (
      e.target !== mvOpClicked &&
      e.target !== childs[0] &&
      e.target !== childs[1] &&
      e.target !== childs[2] &&
      e.target !== childs[3] &&
      e.target !== childs[4]
    ) {
      mvOpClicked.classList.remove("li-active");
      mvOpCards.style.cssText = "Opacity: 0; pointer-events: none";
    }
  });
}

function mvChopActive() {
  let mvChopClicked = document.querySelector(".mvchop");
  mvChopClicked.classList.add("li-active");
  let childs = mvChopCards.getElementsByTagName("div");
  mvChopCards.style.cssText = "Opacity: 1; pointer-events: all";
  mvChopCards.addEventListener("click", (e) => {
    if (
      e.target !== mvChopClicked &&
      e.target !== childs[0] &&
      e.target !== childs[1] &&
      e.target !== childs[2] &&
      e.target !== childs[3] &&
      e.target !== childs[4]
    ) {
      mvChopClicked.classList.remove("li-active");
      mvChopCards.style.cssText = "Opacity: 0; pointer-events: none";
    }
  });
}

function icityOActive() {
  let icityOClicked = document.querySelector(".icityoct");
  icityOClicked.classList.add("li-active");
  let childs = icityOCards.getElementsByTagName("div");
  icityOCards.style.cssText = "Opacity: 1; pointer-events: all";
  icityOCards.addEventListener("click", (e) => {
    if (
      e.target !== icityOClicked &&
      e.target !== childs[0] &&
      e.target !== childs[1] &&
      e.target !== childs[2] &&
      e.target !== childs[3] &&
      e.target !== childs[4]
    ) {
      icityOClicked.classList.remove("li-active");
      icityOCards.style.cssText = "Opacity: 0; pointer-events: none";
    }
  });
}

function mvAsiActive() {
  let mvaAsiClicked = document.querySelector(".mvasi");
  mvaAsiClicked.classList.add("li-active");
  let childs = mvAsiCards.getElementsByTagName("div");
  mvAsiCards.style.cssText = "Opacity: 1; pointer-events: all";
  mvAsiCards.addEventListener("click", (e) => {
    if (
      e.target !== mvaAsiClicked &&
      e.target !== childs[0] &&
      e.target !== childs[1] &&
      e.target !== childs[2] &&
      e.target !== childs[3] &&
      e.target !== childs[4]
    ) {
      mvaAsiClicked.classList.remove("li-active");
      mvAsiCards.style.cssText = "Opacity: 0; pointer-events: none";
    }
  });
}

function mvAsiiActive() {
  let mvaAsiiClicked = document.querySelector(".mvasii");
  mvaAsiiClicked.classList.add("li-active");
  let childs = mvAsiiCards.getElementsByTagName("div");
  mvAsiiCards.style.cssText = "Opacity: 1; pointer-events: all";
  mvAsiiCards.addEventListener("click", (e) => {
    if (
      e.target !== mvaAsiiClicked &&
      e.target !== childs[0] &&
      e.target !== childs[1] &&
      e.target !== childs[2] &&
      e.target !== childs[3] &&
      e.target !== childs[4]
    ) {
      mvaAsiiClicked.classList.remove("li-active");
      mvAsiiCards.style.cssText = "Opacity: 0; pointer-events: none";
    }
  });
}

function mvNcActive() {
  let mvaNcClicked = document.querySelector(".mvnc");
  mvaNcClicked.classList.add("li-active");
  let childs = mvNcCards.getElementsByTagName("div");
  mvNcCards.style.cssText = "Opacity: 1; pointer-events: all";
  mvNcCards.addEventListener("click", (e) => {
    if (
      e.target !== mvaNcClicked &&
      e.target !== childs[0] &&
      e.target !== childs[1] &&
      e.target !== childs[2] &&
      e.target !== childs[3] &&
      e.target !== childs[4]
    ) {
      mvaNcClicked.classList.remove("li-active");
      mvNcCards.style.cssText = "Opacity: 0; pointer-events: none";
    }
  });
}

function openingLoction() {
  openLocation.classList.add("location-open-active");
  openLocation.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openLocation.classList.remove("location-open-active");
    }
  });
}

function openingTypes() {
  openTypes.classList.add("types-open-active");
  openTypes.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openTypes.classList.remove("types-open-active");
    }
  });
}

function openingScript() {
  openScript.classList.add("script-open-active");
  openScript.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openScript.classList.remove("script-open-active");
    }
  });
}

function openingMaster() {
  openMaster.classList.add("master-open-active");
  openMaster.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openMaster.classList.remove("master-open-active");
    }
  });
}

function openingMviiLoction() {
  openMviiLocation.classList.add("location-open-active");
  openMviiLocation.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openMviiLocation.classList.remove("location-open-active");
    }
  });
}

function openingMviiTypes() {
  openMviiTypes.classList.add("types-open-active");
  openMviiTypes.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openMviiTypes.classList.remove("types-open-active");
    }
  });
}

function openingMviiScript() {
  openMviiScript.classList.add("script-open-active");
  openMviiScript.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openMviiScript.classList.remove("script-open-active");
    }
  });
}

function openingMviiMaster() {
  openMviiMaster.classList.add("master-open-active");
  openMviiMaster.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openMviiMaster.classList.remove("master-open-active");
    }
  });
}

function openingMverkLoction() {
  openMverkLocation.classList.add("location-open-active");
  openMverkLocation.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openMverkLocation.classList.remove("location-open-active");
    }
  });
}

function openingMverkTypes() {
  openMverkTypes.classList.add("types-open-active");
  openMverkTypes.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openMverkTypes.classList.remove("types-open-active");
    }
  });
}

function openingMverkScript() {
  openMverkScript.classList.add("script-open-active");
  openMverkScript.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openMverkScript.classList.remove("script-open-active");
    }
  });
}

function openingMverkMaster() {
  openMverkMaster.classList.add("master-open-active");
  openMverkMaster.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openMverkMaster.classList.remove("master-open-active");
    }
  });
}
function openingMvhpLoction() {
  openMvhpLocation.classList.add("location-open-active");
  openMvhpLocation.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openMvhpLocation.classList.remove("location-open-active");
    }
  });
}

function openingMvhpTypes() {
  openMvhpTypes.classList.add("types-open-active");
  openMvhpTypes.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openMvhpTypes.classList.remove("types-open-active");
    }
  });
}

function openingMvhpScript() {
  openMvhpScript.classList.add("script-open-active");
  openMvhpScript.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openMvhpScript.classList.remove("script-open-active");
    }
  });
}

function openingMvhpMaster() {
  openMvhpMaster.classList.add("master-open-active");
  openMvhpMaster.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openMvhpMaster.classList.remove("master-open-active");
    }
  });
}

function openingicityncLoction() {
  openicityncLocation.classList.add("location-open-active");
  openicityncLocation.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openicityncLocation.classList.remove("location-open-active");
    }
  });
}

function openingicityncTypes() {
  openicityncTypes.classList.add("types-open-active");
  openicityncTypes.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openicityncTypes.classList.remove("types-open-active");
    }
  });
}

function openingicityncScript() {
  openicityncScript.classList.add("script-open-active");
  openicityncScript.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openicityncScript.classList.remove("script-open-active");
    }
  });
}

function openingicityncMaster() {
  openicityncMaster.classList.add("master-open-active");
  openicityncMaster.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openicityncMaster.classList.remove("master-open-active");
    }
  });
}

function openinggpLoction() {
  opengpLocation.classList.add("location-open-active");
  opengpLocation.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      opengpLocation.classList.remove("location-open-active");
    }
  });
}

function openinggpTypes() {
  opengpTypes.classList.add("types-open-active");
  opengpTypes.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      opengpTypes.classList.remove("types-open-active");
    }
  });
}

function openinggpScript() {
  opengpScript.classList.add("script-open-active");
  opengpScript.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      opengpScript.classList.remove("script-open-active");
    }
  });
}

function openinggpMaster() {
  opengpMaster.classList.add("master-open-active");
  opengpMaster.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      opengpMaster.classList.remove("master-open-active");
    }
  });
}
function openingopLoction() {
  openopLocation.classList.add("location-open-active");
  openopLocation.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openopLocation.classList.remove("location-open-active");
    }
  });
}

function openingopTypes() {
  openopTypes.classList.add("types-open-active");
  openopTypes.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openopTypes.classList.remove("types-open-active");
    }
  });
}

function openingopScript() {
  openopScript.classList.add("script-open-active");
  openopScript.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openopScript.classList.remove("script-open-active");
    }
  });
}

function openingopMaster() {
  openopMaster.classList.add("master-open-active");
  openopMaster.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openopMaster.classList.remove("master-open-active");
    }
  });
}

function openingchopLoction() {
  openchopLocation.classList.add("location-open-active");
  openchopLocation.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openchopLocation.classList.remove("location-open-active");
    }
  });
}

function openingchopTypes() {
  openchopTypes.classList.add("types-open-active");
  openchopTypes.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openchopTypes.classList.remove("types-open-active");
    }
  });
}

function openingchopScript() {
  openchopScript.classList.add("script-open-active");
  openchopScript.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openchopScript.classList.remove("script-open-active");
    }
  });
}

function openingchopMaster() {
  openchopMaster.classList.add("master-open-active");
  openchopMaster.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openchopMaster.classList.remove("master-open-active");
    }
  });
}

function openingicityoLoction() {
  openicityoLocation.classList.add("location-open-active");
  openicityoLocation.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openicityoLocation.classList.remove("location-open-active");
    }
  });
}

function openingicityoTypes() {
  openicityoTypes.classList.add("types-open-active");
  openicityoTypes.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openicityoTypes.classList.remove("types-open-active");
    }
  });
}

function openingicityoScript() {
  openicityoScript.classList.add("script-open-active");
  openicityoScript.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openicityoScript.classList.remove("script-open-active");
    }
  });
}

function openingicityoMaster() {
  openicityoMaster.classList.add("master-open-active");
  openicityoMaster.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openicityoMaster.classList.remove("master-open-active");
    }
  });
}

function openingasiLoction() {
  openasiLocation.classList.add("location-open-active");
  openasiLocation.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openasiLocation.classList.remove("location-open-active");
    }
  });
}

function openingasiTypes() {
  openasiTypes.classList.add("types-open-active");
  openasiTypes.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openasiTypes.classList.remove("types-open-active");
    }
  });
}

function openingasiScript() {
  openasiScript.classList.add("script-open-active");
  openasiScript.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openasiScript.classList.remove("script-open-active");
    }
  });
}

function openingasiMaster() {
  openasiMaster.classList.add("master-open-active");
  openasiMaster.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openasiMaster.classList.remove("master-open-active");
    }
  });
}
function openingasiiLoction() {
  openasiiLocation.classList.add("location-open-active");
  openasiiLocation.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openasiiLocation.classList.remove("location-open-active");
    }
  });
}

function openingasiiTypes() {
  openasiiTypes.classList.add("types-open-active");
  openasiiTypes.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openasiiTypes.classList.remove("types-open-active");
    }
  });
}

function openingasiiScript() {
  openasiiScript.classList.add("script-open-active");
  openasiiScript.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openasiiScript.classList.remove("script-open-active");
    }
  });
}

function openingasiiMaster() {
  openasiiMaster.classList.add("master-open-active");
  openasiiMaster.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openasiiMaster.classList.remove("master-open-active");
    }
  });
}
function openingncLoction() {
  openncLocation.classList.add("location-open-active");
  openncLocation.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openncLocation.classList.remove("location-open-active");
    }
  });
}

function openingncTypes() {
  openncTypes.classList.add("types-open-active");
  openncTypes.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openncTypes.classList.remove("types-open-active");
    }
  });
}

function openingncScript() {
  openncScript.classList.add("script-open-active");
  openncScript.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openncScript.classList.remove("script-open-active");
    }
  });
}

function openingncMaster() {
  openncMaster.classList.add("master-open-active");
  openncMaster.addEventListener("click", (e) => {
    if (e.target !== wrapper) {
      openncMaster.classList.remove("master-open-active");
    }
  });
}
