export interface ImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface ImageData {
  id: number;
  attributes: {
    name: string;
    formats: {
      thumbnail: ImageFormat;
      small: ImageFormat;
      medium: ImageFormat;
      large: ImageFormat;
    };
    url: string;
  };
}

export interface ProjectAttributes {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  techStack: string[];
  image: {
    data: ImageData;
  };
}

export interface Project {
  id: number;
  attributes: ProjectAttributes;
}
