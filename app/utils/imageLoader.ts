const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  // Fix: If src is already a full URL (S3, Cloudinary, etc.), return as is
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return `${src}?w=${width}&q=${quality || 75}`;
  }

  // Otherwise, use your Strapi backend URL for local uploads
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${src}?w=${width}&q=${quality || 75}`;
};

export default imageLoader;
