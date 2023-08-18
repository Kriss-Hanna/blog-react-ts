export interface CardProps {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

export interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

export interface BlogPost {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

export interface BlogProps {
  posts: BlogPost[];
}

export interface FormData {
  nameAuthor: string;
  email: string;
  message: string;
}

export interface FormDataArticle {
  title: string;
  imageurl: string;
  link: string;
  description: string;
  post: string;
}

export interface RegistrationFormData {
  username: string;
  password: string;
  email: string;
}

export interface Message {
  id: string;
  nameAuthor: string;
  email: string;
  message: string;
  timestamp: string;
}
