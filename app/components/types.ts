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

export interface AboutMeAttributes {
  name: string;
  address: string;
  zipCode: string;
  email: string;
  phone: string;
  projectCount: number;
  cvUrl: string;
  description: string;
  image: {
    data: ImageData;
  };
}

export interface AboutMe {
  id: number;
  attributes: AboutMeAttributes;
}

export interface AboutMeResponse {
  data: AboutMe[];
}

export interface ContactMessageAttributes {
  email: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ContactMessage {
  id: number;
  attributes: ContactMessageAttributes;
}

export interface ContactMessageResponse {
  data: ContactMessage[];
}
