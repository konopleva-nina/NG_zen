import { ColumnData } from '../../ui/Column/types';
import { DeveloperData } from '../../features/Developer/types';

export type FooterData = {
  columns: ColumnData[];
  texts: string[];
  developer: DeveloperData;
};
