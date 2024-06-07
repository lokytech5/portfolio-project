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

// General Data Structure
export interface GenericAttributes {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


// Specific Structures
export interface ProgrammingLanguageAttributes extends GenericAttributes {
  percentage: number;
}

export interface DatabaseAttributes extends GenericAttributes {
  percentage: number;
}

export interface CloudTechnologyAttributes extends GenericAttributes {
  image: {
    data: ImageData;
  };
}

export interface FrameworkAttributes extends GenericAttributes {
  image: {
    data: ImageData;
  };
}

export interface EducationAttributes {
  year: number;
  title: string;
  description: string;
}

export interface ExperienceAttributes {
  jobTitle: string;
  details: string;
}

// Generic Data Interface
export interface GenericData<T> {
  id: number;
  attributes: T;
}

// Collections
export type ProgrammingLanguage = GenericData<ProgrammingLanguageAttributes>;
export type Framework = GenericData<FrameworkAttributes>;
export type Database = GenericData<DatabaseAttributes>;
export type CloudTechnology = GenericData<CloudTechnologyAttributes>;
export type Education = GenericData<EducationAttributes>;
export type Experience = GenericData<ExperienceAttributes>;

// Combined Resume Data
export interface ResumeData {
  programmingLanguages: ProgrammingLanguage[];
  frameworks: Framework[];
  databases: Database[];
  cloudTechnologies: CloudTechnology[];
  educations: Education[];
  experiences: Experience[];
}

// API Responses
export interface ResumeResponse {
  programmingLanguages: { data: ProgrammingLanguage[] };
  frameworks: { data: Framework[] };
  databases: { data: Database[] };
  cloudTechnologies: { data: CloudTechnology[] };
  educations: { data: Education[] };
  experiences: { data: Experience[] };
}