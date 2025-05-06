export type OgImage = {
  src: string;
  url?: string;
  width?: number;
  height?: number;
};

export type PageMeta = {
  title?: string;
  description?: string;
  canonicalUrl?: string | URL;
  generator?: string;
  tags?: string[];
  ogImage?: string | OgImage;
};
