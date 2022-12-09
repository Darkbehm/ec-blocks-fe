import { Block } from './block.interface';

export interface Page {
  _id?: string;
  name: string;
  store?: string;
  blocks: Block[];
}
