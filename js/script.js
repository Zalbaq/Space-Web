let planet;
async function getPlanetData() {
  let namePlanet = "earth";
  const url = "https://api.le-systeme-solaire.net/rest/bodies/earth";
  let response = await fetch(url);
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
