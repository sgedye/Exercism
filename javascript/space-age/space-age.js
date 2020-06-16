const EARTH_YEAR_IN_SECONDS = 31557600
const PLANET_TO_EARTH_RATIO = {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'earth': 1,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132
}

const rounding = ageInSeconds => {
  return Number(ageInSeconds.toFixed(2))
}

export const age = (planet, seconds) => {
  let ageInSeconds = seconds / (PLANET_TO_EARTH_RATIO[planet] * EARTH_YEAR_IN_SECONDS)
  return rounding(ageInSeconds)
}