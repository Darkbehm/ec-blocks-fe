export interface Block {
  _id?: string;
  name: string;
  color: string;
  cssClass?: string;
  cssCode?: string;
  htmlCode?: string;
  jsCode?: string;
  components?: any[];
}
