import { TitleData } from '../../ui/Title/types.ts';
import { ImageData } from '../../ui/Image/types.ts';
import { LinkData } from '../../ui/Link/types.ts';

export type DownloadData = {
  title: TitleData;
  texts: number[];
  links: LinkData[];
  image: ImageData;
};
