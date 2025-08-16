export type PostType = {
  id: number;
  content: string;
  timestamp: string;
  emoji: string;
  author: {
    name: string;
    imageUrl: string;
  };
};
