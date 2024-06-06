const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${src}?w=${width}&q=${quality || 75}`;
  };
  
  export default imageLoader;
  