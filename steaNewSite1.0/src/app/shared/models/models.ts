export interface Item {
    id: number;
    title: string;
    description: string;
    homeDescription: string;
    homeTitle: string;
    siOcuppa: SiOcuppa[];
    img: img[];
  }

export interface img{
  id: number;
  img: string;
}



  export interface SiOcuppa {
    id: number;
    title: string;
  }



export interface pageLinks{
  id: number;
  name: string;
  url: string
}