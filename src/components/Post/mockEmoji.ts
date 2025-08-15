const emojis = ["💀", "😵", "😊", "🤞"];

export function getRandomEmoji(): string {
  const randomIndex = Math.floor(Date.now() % emojis.length);
  return emojis[randomIndex];
}
