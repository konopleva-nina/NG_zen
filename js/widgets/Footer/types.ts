import { ColumnData } from '../../ui/Column/types';
import { DeveloperData } from '../../ui/Developer/types';

export type FooterData = {
  columns: ColumnData[];
  texts: string[];
  developer: DeveloperData;
};
