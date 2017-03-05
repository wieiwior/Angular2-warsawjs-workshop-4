import { Injectable } from '@angular/core';
import { VIDEO, CATEGORY } from './../models/index'
import * as _ from "lodash";

@Injectable()
export class MediaService {
  private categoriesLocaleStorageKey: string = "categoriesLocaleStorageKey";
  private videosLocaleStorageKey: string = "videosLocaleStorageKey";

  constructor() {
    let categoriesLocalStorage = localStorage.getItem(this.categoriesLocaleStorageKey);
    let videosLocalStorage = localStorage.getItem(this.videosLocaleStorageKey);
    if (!categoriesLocalStorage) {
      localStorage.setItem(this.categoriesLocaleStorageKey, JSON.stringify(CATEGORIES));
    }
    if (!videosLocalStorage) {
      localStorage.setItem(this.videosLocaleStorageKey, JSON.stringify(VIDEOS));
    }

  }

  public Videos(): VIDEO[] {
    return JSON.parse(localStorage.getItem(this.videosLocaleStorageKey));
  }

  public Categories(): CATEGORY[] {
    return JSON.parse(localStorage.getItem(this.categoriesLocaleStorageKey));
  }

  public addNewVideo(newElem: VIDEO): void {
    let videosLocalStorage = this.Videos();
    videosLocalStorage.push(newElem);
    localStorage.setItem(this.videosLocaleStorageKey, JSON.stringify(videosLocalStorage));
  }

  public getNameById(id: number): string {
    let object = _.find(CATEGORIES, (elem) => { return elem.id == id });
    return object != null ? object.name : null;
  }
}

let CATEGORIES = [
  new CATEGORY(1, 'Dla dzieci'),
  new CATEGORY(2, 'Sensacyjny'),
  new CATEGORY(3, 'Komedie'),
  new CATEGORY(4, 'Dramat'),
  new CATEGORY(5, 'Obyczajowy')
];

let VIDEOS = [
  new VIDEO('Świnka Pepa - Urodziny mamy świnki', 'Urodziny mamy świnki', 1, true, 0, '5Xa4ehxGpvM', 'http://1.fwcdn.pl/po/42/71/444271/7496073.6.jpg'),
  new VIDEO('Świnka Pepa - Kłótnia', 'Kłótnia', 1, true, 0, 'DrHz_8z-NlM', 'http://1.fwcdn.pl/po/42/71/444271/7496073.6.jpg'),
  new VIDEO('Świnka Pepa - Dzień talentu', 'Dzień talentu', 1, true, 0, '1UD6rwE0UOo', 'http://1.fwcdn.pl/po/42/71/444271/7496073.6.jpg'),
  new VIDEO('Świnka Pepa - Pan ziemniak przybywa do miasta', 'Pan ziemniak przybywa do miasta', 1, true, 0, 'ccl3IfbD69o', 'http://1.fwcdn.pl/po/42/71/444271/7496073.6.jpg'),
  new VIDEO('Świnka Pepa - Richard Królik przychodzi się pobawić', 'Richard Królik przychodzi się pobawić', 1, true, 0, 'PVZzbx-UuOE', 'http://1.fwcdn.pl/po/42/71/444271/7496073.6.jpg'),
  new VIDEO('Świnka Pepa - Kukiełki Kloe', 'Kukiełki Kloe', 1, true, 0, '6FeMCvQ1coE', 'http://1.fwcdn.pl/po/42/71/444271/7496073.6.jpg'),

  new VIDEO('KRWAWY ODWET', 'John (Cuba Gooding Jr) to policjant z wydziału antynarkotykowego, który w walce z mafią stracił żonę i córkę. Szansa rewanżu nadarza się, kiedy John dowiaduje się o przerzucie do USA ogromnej partii heroiny. Wraz z ojcem Porterem (Christian Slater), byłym żołnierzem sił specjalnych, planują krwawy odwet.', 2, true, 0, 'Ssiqor4RyE8', 'http://1.fwcdn.pl/po/27/11/572711/7379459.6.jpg'),
  new VIDEO('22 Minuty', 'Kiedy rosyjski tankowiec zostaje porwany przez somalijskich piratów na Morzu Arabskim, akcji wyzwolenia podejmuje się nowicjusz Sanya.', 2, true, 0, '08c7KkpRhA0', 'http://1.fwcdn.pl/po/14/48/691448/7640893.6.jpg'),
  new VIDEO('SNOWDEN', 'Academy Award®-winning director Oliver Stone, who brought Platoon, Born on the Fourth of July, Wall Street and JFK to the big screen, tackles the most important and fascinating true story of the 21st century. Snowden, the politically-charged, pulse-pounding thriller starring Joseph Gordon-Levitt and Shailene Woodley, reveals the incredible untold personal story of Edward Snowden, the polarizing figure who exposed shocking illegal surveillance activities by the NSA and became one of the most wanted men in the world. He is considered a hero by some, and a traitor by others. No matter which you believe, the epic story of why he did it, who he left behind, and how he pulled it off makes for one of the most compelling films of the year.', 2, false, 0, 'QlSAiI3xMh4', 'http://1.fwcdn.pl/po/81/91/728191/7757794.6.jpg'),

  new VIDEO('ŚMIERTELNIE SEKSOWNA', 'Opowieść o dwóch niezbyt rozgarniętych facetach z prowincji: Franku - farciarzu uważającym się za mądrego i Edim - grabarzu który nie ma co do swojej inteligencji wątpliwości. Postanawiają odmienić swój los poprzez interesy z mafią. Niestety gdy wybucha ciężarówka z przewożoną kontrabanda mają poważne problemy, dlatego postanawiają wykopać zwłoki żony biznesmena na których powinien znajdować się wielce wartościowy naszyjnik.', 3, true, 0, '56mGJZm3VaU', 'http://1.fwcdn.pl/po/12/31/141231/7569594.6.jpg'),
  new VIDEO('DZIKI CEL', 'Brytyjsko-francuski komediodramat z 2010 roku. Maynard ma opinię perfekcyjnego zabójcy. Jednak kiedy poznaje piękną Rose, która ma stać się jego kolejnym celem, rutyna zostaje przerwana. Mężczyzna ulega jej urokowi i odstępuje od zamiaru jej zabicia. Niestety po piętach zaczyna deptać im Mike - ochroniarz Fergusona, człowieka który wydał wyrok na Rose.', 3, true, 0, 'o73ztPyJL-8', 'http://1.fwcdn.pl/po/33/35/483335/7533447.6.jpg'),

];