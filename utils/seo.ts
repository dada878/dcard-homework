const siteName = "Dada's Blog";
const description = "我會在這裡分享各種技術文章及日常生活中有趣的事物～";

const SEO = {
  title: siteName,
  description: description,
  canonical: process.env.PRODUCTION_URL,
  openGraph: {
    title: siteName,
    description: description,
    url: process.env.PRODUCTION_URL,
    images: [
      {
        url: `${process.env.PRODUCTION_URL}/og-image.png`,
        width: 751,
        height: 364,
      },
    ],
    siteName: siteName,
    type: "website",
  },
};

const noIndexSEO = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function defaultSEO({
  title,
  description,
  url,
  noindex,
}: {
  title?: string;
  description?: string;
  url?: string;
  customMeta?: { [key: string]: string };
  noindex?: boolean;
} = {}) {
  const titleMeta = title ? `${title} | ${siteName}` : siteName;
  const urlMeta = url ? `${process.env.PRODUCTION_URL}${url}` : SEO.canonical;

  let seoConfig = {
    ...SEO,
    title: titleMeta,
    canonical: urlMeta,
    description: description || SEO.description,
    openGraph: {
      ...SEO.openGraph,
      title: titleMeta,
      url: urlMeta,
      description: description || SEO.description,
    },
  };

  if (noindex) {
    seoConfig = {
      ...seoConfig,
      ...noIndexSEO,
    };
  }

  return seoConfig;
}

export { defaultSEO };