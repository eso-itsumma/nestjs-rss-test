import { Injectable } from '@nestjs/common';

export interface IPost {
  id: number;
  title: string;
  content: string;
  description: string;
  publishedAt: string;
  slug: string;
  author: string;
  category: string;
}

@Injectable()
export class AppService {
  getPosts(): IPost[] {
    return [
      {
        id: 1,
        title: 'The hypnosis of receiving believers is outer.',
        content:
          'Galaxy at the moon was the sensor of vision, converted to a photonic queen.',
        description:
          'Peace at the ready room that is when ancient hurqs experiment.',
        publishedAt: '2021-01-01',
        slug: 'the-hypnosis-of-receiving-believers-is-outer',
        author: 'Rose',
        category: 'finance',
      },
      {
        id: 2,
        title:
          'All pictorial teachers gain each other, only outer suns have a sainthood.',
        content:
          'Phenomenans tremble from assimilations like calm vogons. Where is the evil machine?',
        description: 'I teleport this attitude, its called lunar stigma.',
        publishedAt: '2021-01-04',
        slug:
          'all-pictorial-teachers-gain-each-other-only-outer-suns-have-a-sainthood',
        author: 'Jack',
        category: 'sport',
      },
      {
        id: 3,
        title: 'Stigma, heaven and a wonderful heavens of sainthood.',
        content:
          'Powerdrain at the universe was the modification of pressure, united to a dead space suit.',
        description: 'I command this anomaly, its called virtual friendship.',
        publishedAt: '2021-02-03',
        slug: 'stigma-heaven-and-a-wonderful-heavens-of-sainthood',
        author: 'Jack',
        category: 'finance',
      },
      {
        id: 4,
        title: 'Why does the sun go?',
        content: 'Calm manifestations believes most dimensions.',
        description: 'Creatures tremble on powerdrain at earth!',
        publishedAt: '2021-06-23',
        slug: 'calm-manifestations-believes-most-dimensions',
        author: 'Rose',
        category: 'sport',
      },
      {
        id: 5,
        title: 'Die without alarm, and we won’t raise a spacecraft.',
        content:
          'Relativity happens when you fear moonlight so wonderfully that whatsoever you are diing is your issue.',
        description: 'Where is the solid sensor?',
        publishedAt: '2021-12-01',
        slug: 'die-without-alarm-and-we-wont-raise-a-spacecraft',
        author: 'Paul',
        category: 'politic',
      },
    ];
  }
}
