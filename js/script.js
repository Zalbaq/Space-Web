async function getPlanetData(planetName) {
  const api = `https://api.le-systeme-solaire.net/rest/bodies/${planetName}`;
  let response = await fetch(api);
  let data = await response.json();

  return {
    latinName: data.name,
    englishName: data.englishName,
    avgTempK: data.avgTemp,
    gravity: data.gravity,
    timeRotation: data.sideralRotation,
    timeOrbit: data.sideralOrbit,
    mass: data.mass.massValue + " x 10^22",
  };
}

async function main() {
  let planet = {
    mercury: {},
    venus: {},
    earth: {},
    mars: {},
    jupiter: {},
    saturn: {},
    uranus: {},
    neptune: {},
  };

  for (let planetName in planet) {
    planet[planetName] = await getPlanetData(planetName);
  }
}

main();

let hideSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  const closeIcon = document.getElementById("close-sidebar");
  let widthSidebar = window.getComputedStyle(sidebar).width;

  closeIcon.addEventListener("click", () => {
    sidebar.style.transform = `translateX(${widthSidebar})`;
  });
};

hideSidebar();
