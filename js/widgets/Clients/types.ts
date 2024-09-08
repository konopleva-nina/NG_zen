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
