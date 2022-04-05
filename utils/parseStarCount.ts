export const parseStarCount: (starCount: number) => string = (starCount) => {
  if (starCount < 1_000) return `⭐ ${starCount}`;
  if (starCount < 1_000_000) return `⭐ ${Math.round(starCount / 100) / 10}k`;
  return `⭐ ${Math.round(starCount / 100_000) / 10}M`;
};
