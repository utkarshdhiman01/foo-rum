const emojis = ["💀", "😵", "😊", "🤞"];

export function getRandomEmoji(): string {
  const randomIndex = Math.floor((Math.random() * Date.now()) % emojis.length);
  return emojis[randomIndex];
}
