import { TitleData } from '../../ui/Title/types';
import { ImageData } from '../../ui/Image/types';
import { LinkData } from '../../ui/Link/types';

export type DownloadData = {
  title: TitleData;
  texts: number[];
  links: LinkData[];
  image: ImageData;
};
