const GIGASEC_IN_MS = Math.pow(10,12)
export const gigasecond = date => new Date(date.getTime() + GIGASEC_IN_MS);