import { getPlanetData } from "./getPlanetsData.js";
export const planets = {
  nebula: {},
  mercury: await getPlanetData("venus"),
  venus: await getPlanetData("earth"),
  earth: await getPlanetData("mars"),
  mars: await getPlanetData("mars"),
  jupiter: await getPlanetData("jupiter"),
  saturn: await getPlanetData("saturn"),
  uranus: await getPlanetData("uranus"),
  neptune: await getPlanetData("neptune"),
};
