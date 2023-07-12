export const baseUrl =
  process.env.NODE_ENV === "production" ? "https://yack.fyi" : "";

export const defaultSEO = {
  title: "ByteDetective | Find images by describing them",
  description: "Image search made intuitive",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: baseUrl,
    site_name: "ByteDetective",
    images: [
      {
        url: `${baseUrl}/img/og/default.png`,
        alt: "ByteDetective",
      },
    ],
  },
  github: {
    handle: "ssantoshp",
    site: "https://github.com/ssantoshp/ByteDetective",
    cardType: "summary_large_image",
  },
};
