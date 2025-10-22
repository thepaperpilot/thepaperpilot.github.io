interface GardenDocument {
  name: string;
  created: string;
  modified: string;
  referencedBy?: Record<string, string>;
  taggedBy?: Record<string, string>;
  tags?: Record<string, string>;
  wordcount: number;
  toc?: Record<string, string>;
}