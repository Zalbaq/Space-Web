import { planets } from "./planets.js";

export const getPlanetData = async (planetName) => {
  const api = `https://api.le-systeme-solaire.net/rest/bodies/${planetName}`;
  let data = await fetch(api)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      planets.nebula = {
        latinName: "Nebula",
        englishName: "Nebula",
        avgTempK: 0,
        gravity: 0,
        timeRotation: 0,
        timeOrbit: 0,
        mass: 0,
      };
      console.log(err);
    });

  return {
    latinName: data.name,
    englishName: data.englishName,
    avgTempK: data.avgTemp,
    gravity: data.gravity,
    timeRotation: data.sideralRotation,
    timeOrbit: data.sideralOrbit,
    mass: data.mass.massValue,
  };
};
