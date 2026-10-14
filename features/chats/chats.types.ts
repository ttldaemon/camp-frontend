


export type RawMessage = {
  id: string;
  authorName: string;
  authorColor: string;
  timestamp: string;
  day: string;
  content: string;
  taskEmbed?: { title: string; status: string; priority: string };
};