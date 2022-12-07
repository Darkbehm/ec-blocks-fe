export interface Store {
  id: string;
  tittle: string;
  created: Date;
  description: string;
  keyWords: string[];
  favIcon: file;
  logo: file;
  images?: file[];
  videos?: file[];
  otherFiles?: any[];
  cssCode?: string;
  jsCode?: string;
  bgImage?: file;
}

export type file = {
  key: string;
  url: string;
};
