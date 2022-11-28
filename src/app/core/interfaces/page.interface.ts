import { Block } from './block.interface';

export interface Page {
  id?: string;
  name: string;
  blocks: Block[];
}
