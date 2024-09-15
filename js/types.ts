/**********************************************
  Common types
**********************************************/

export type TitleData = {
  content: string;
  priority: number;
};

export type LinkData = {
  url: string;
  type: string;
  content: string;
};

export type ImageData = {
  source: string;
  description: string;
};

/**********************************************
  Header types
**********************************************/

export type NavItemData = {
  key: string;
  name: string;
};

export type LangData = {
  key: string;
  name: string;
};

export type HeaderData = {
  langs: LangData[];
  navigation: NavItemData[];
};

/**********************************************
  Download types
**********************************************/

export type DownloadData = {
  title: TitleData;
  texts: string[];
  links: LinkData[];
  image: ImageData;
};

/**********************************************
  Warranty types
**********************************************/

export type WarrantyData = {
  title: TitleData;
  texts: string[];
  image: ImageData;
};

/**********************************************
  Care types
**********************************************/

export type CareData = {
  title: TitleData;
  texts: string[];
  image: ImageData;
};

/**********************************************
  Cashback types
**********************************************/

export type CashbackData = {
  title: TitleData;
  texts: string[];
  buttonText: string;
};

/**********************************************
  Clients types
**********************************************/

type Source = {
  lightSource: string;
  darkSource: string;
};

export type Client = {
  name: string;
  logo: Source;
};

export type ClientsData = {
  brands: Client[];
};

/**********************************************
  Footer types
**********************************************/

export type ColumnData = {
  title: TitleData;
  links: LinkData[];
};

type ContentDev = {
  type: string;
  data: string;
};

export type DeveloperData = {
  url: string;
  content: ContentDev;
};

export type FooterData = {
  columns: ColumnData[];
  texts: string[];
  developer: DeveloperData;
};

/**********************************************
  Modal types
**********************************************/

export type CheckBoxData = {
  url: string;
  text: string;
};

export type SelectData = {
  value: string;
  optionText: string;
};

export type InputData = {
  id: string;
  type: string;
  placeholder: string;
};

export type ModalData = {
  title: TitleData;
  input: InputData[];
  select: SelectData[];
  selectText: string;
  checkbox: CheckBoxData;
  buttonText: string;
};

/**********************************************
  AppData
**********************************************/

export type AppData = {
  primaryInfo: HeaderData;
  download: DownloadData;
  warranty: WarrantyData;
  care: CareData;
  cashback: CashbackData;
  clients: ClientsData
  secondaryInfo: FooterData;
  modal: ModalData;
};

/*********************************************/
