export function dateGenerator(): string {
  const now = new Date();
  const minutesAgo = Math.floor(Math.random() * 10);
  now.setMinutes(now.getMinutes() - minutesAgo);
  return now.toISOString();
}
