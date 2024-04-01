export interface Pais {
  name: {
    common: string;
    official: string;
  };
  languages: {
    [key: string]: string;
  };
  currencies: {
    [key: string]: {
      name: string;
    };
  }
  flags: {
    png: string;
  };
}