export interface Store {
  id: string;
  name: string;
  created: Date;
  description: string;
  keyWords: string[];
  favIcon: any;
  logo: string;
  images?: any[];
  videos?: any[];
  otherFiles?: any[];
  cssCode?: string;
  jsCode?: string;
  bgImage?: string;
}
