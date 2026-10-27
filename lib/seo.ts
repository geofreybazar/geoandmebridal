// Search-result description: whole words, at most `max` characters
export const excerpt = (text: string | undefined, max = 155) => {
  const clean = (text ?? "").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.lastIndexOf(" ", max - 1);
  return `${clean.slice(0, cut > 0 ? cut : max - 1)}…`;
};
