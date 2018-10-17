import {
  VERA,
  OLEGM,
  KATYA,
  ALESYA,
  OLEGB,
  BORIS,
  TANYA,
  getNameByUserId,
  getLinkByUserId,
  ALYONA,
  MARINA,
  POLINA
} from './faces';
import {
  Damn,
  Garshin,
  Silver,
  Letters,
  Dreams,
  NextMan,
  Zoschenko,
  Poetry,
  Car,
  Old
} from '@/components/PlayDescriptions';

export const DAMN = 'damn';
export const SILVER = 'silver';
export const GARSHIN = 'garshin';
export const NEXT_MAN = 'nextMan';
export const DREAMS = 'dreams';
export const LETTERS = 'letters';
export const ZOSCHENKO = 'zoschenko';
export const POETRY = 'poetry';
export const CAR = 'car';
export const OLD = 'old';
export const HYSTERIA = 'hysteria';

const oneHour = 1000 * 60 * 60;

export const getLinkByPlayId = playId => `/play/${playId}`;

export const PLAYS_INFO = {
  [DAMN]: {
    title: 'Жуткий спектакль',
    link: getLinkByPlayId(DAMN),
    component: Damn,
    faces: [
      {
        title: 'Режиссер',
        userId: ALESYA
      },
      {
        title: 'Иван Сергеевич',
        userId: OLEGB
      },
      {
        title: 'Эллис',
        userId: ALESYA
      },
      {
        title: 'Марфа',
        userId: KATYA
      },
      {
        title: 'Драматургия',
        description:
          'И. Тургенев, М. Лермонтов, А. Куприн, А. Погорельский, А. Савченко'
      },
      {
        title: 'Музыка',
        description:
          'The Tiger Lilies, Adam Hurst, Pawel Mykietyn, Sonny Black, Omar Rodriguez Lopez, Alfred Schnittke'
      },
      {
        title: 'Костюмы',
        userId: VERA
      },
      {
        title: 'Спектакль ведет',
        userId: OLEGM
      }
    ],
    dates: [{ string: '30 сентября, 17:00', date: new Date('2018-09-30 17:00') }]
  },
  [HYSTERIA]: {
    title: '13 новых истерик. Вася Чернявский',
    link: null,
    component: null,
    dates: [
      { string: '18 ноября, 17:00', date: new Date('2018-11-18 17:00') }
    ]
  },
  [OLD]: {
    title: 'Вы чьё, старичьё?',
    link: getLinkByPlayId(OLD),
    component: Old,
    faces: [
      {
        title: 'Режиссер',
        userId: ALESYA
      },
      {
        title: 'Расказчик',
        userId: BORIS
      },
      {
        title: 'Автор',
        description:
          'Б. Васильев'
      }
    ],
    dates: [
      { string: '10 ноября, 17:00', date: new Date('2018-11-10 17:00') }
    ]
  },
  [CAR]: {
    title: 'Не садись в машину, где двое',
    link: getLinkByPlayId(CAR),
    component: Car,
    faces: [
      {
        title: 'Режиссер',
        userId: OLEGB
      },
      {
        title: 'Клава',
        userId: ALESYA
      },
      {
        title: 'Охранница',
        userId: MARINA
      },
      {
        title: 'Уборщица',
        userId: KATYA
      },
      {
        title: 'Подружка',
        userId: TANYA
      },
      {
        title: 'Мужик',
        userId: OLEGB
      },
      {
        title: 'Автор',
        description:
          'Л. Петрушевская'
      },
      {
        title: 'Музыка',
        description:
          'Mr. Big, Omar Rodríguez-López, Marc Ribot, Brian Eno, Chocolate Genius, Red Snapper, Серебряная свадьба, Л. Федоров'
      },
      {
        title: 'Песни',
        description:
          'С. Канада, А. Серов, Л. Успенская, В. Цыганова, Лесоповал, Фристайл'
      },
      {
        title: 'Костюмы',
        userId: ALESYA
      },
      {
        title: 'Спектакль ведет',
        userId: OLEGM
      }
    ],
    dates: [
      { string: '17 ноября, 17:00', date: new Date('2018-11-17 17:00') },
      { string: '24 ноября, 17:00', date: new Date('2018-11-24 17:00') }
      ]
  },
  [SILVER]: {
    title: 'Серебряный вечер',
    link: getLinkByPlayId(SILVER),
    component: Silver,
    faces: [
      {
        title: 'Постановка',
        userId: ALESYA
      },
      {
        title: 'Актёр',
        userId: OLEGB
      },
      {
        title: 'Актриса',
        userId: ALESYA
      },
      {
        title: 'Актриса',
        userId: ALYONA
      },
      {
        title: 'Актриса',
        userId: KATYA
      },
      {
        title: 'Актриса',
        userId: MARINA
      },
      {
        title: 'Спектакль ведет',
        userId: OLEGM
      },
      {
        title: 'Музыка',
        description: 'О. Погудин, А. Вивальди'
      }
    ],
    dates: [{ string: '10 февраля, 17:00', date: new Date('2018-02-10 17:00') }]
  },
  [GARSHIN]: {
    title: 'Мне тебя уже не надо?...',
    link: getLinkByPlayId(GARSHIN),
    component: Garshin,
    faces: [
      {
        title: 'Постановка',
        userId: ALESYA
      },
      {
        title: 'Надежда Николаевна в платье',
        userId: KATYA
      },
      {
        title: 'Надежда Николаевна в джинсах',
        userId: ALYONA
      },
      {
        title: 'Надежда Николаевна в юбке',
        userId: ALESYA
      },
      {
        title: 'Аккомпаниатор',
        userId: OLEGB
      },
      {
        title: 'Спектакль ведет',
        userId: OLEGM
      },
      {
        title: 'Костюмы',
        userId: VERA
      },
      {
        title: 'Музыка',
        description:
          'Ляпис Трубицкой, Tom Odell Pochill feat. Janaina, Cirque Du Soleil, романс Таривердиева, голос Эдуарда Рома'
      }
    ]
  },
  [NEXT_MAN]: {
    title: 'Первый встречный',
    link: getLinkByPlayId(NEXT_MAN),
    component: NextMan,
    faces: [
      {
        title: 'Постановка',
        userId: ALESYA
      },
      {
        title: 'Он',
        userId: OLEGB
      },
      {
        title: 'Она',
        userId: ALESYA
      },
      {
        title: 'Драматургия',
        description: 'А. Куприн, А. Савченко'
      },
      {
        title: 'Дизайн макетов и афиши',
        userId: OLEGM
      },
      {
        title: 'Спектакль ведет',
        userId: OLEGM
      },
      {
        title: 'Сценография',
        description: 'Николай Костюшко'
      },
      {
        title: 'Муызка',
        description: 'И. С. Бах, Й. Гайдн, Б. Марчелло, Ф. Шопен, Secret Garden'
      }
    ],
    dates: [{ string: '2 сентября, 17:00', date: new Date('2018-09-02 17:00') }]
  },
  [DREAMS]: {
    title: 'Сны Эйнштейна',
    link: getLinkByPlayId(DREAMS),
    component: Dreams,
    faces: [
      {
        title: 'Постановка',
        userId: ALESYA
      },
      {
        title: 'Альберт Эйнштейн',
        userId: OLEGB
      },
      {
        title: 'Мужчина на балконе',
        userId: OLEGB
      },
      {
        title: 'Алан',
        userId: ALESYA
      },
      {
        title: '﻿Страж Времени',
        userId: POLINA
      },
      {
        title: 'Драматургия',
        description: 'А. Лайтман, А. Савченко'
      },
      {
        title: 'Музыка',
        description: 'Макс Рихтер, Элени Караиндру, King Crimson'
      },
      {
        title: 'Спектакль ведет',
        userId: OLEGM
      }
    ],
    dates: [{ string: '19 августа, 17:00', date: new Date('2018-08-19 17:00') }]
  },
  [LETTERS]: {
    title: 'Письма незнакомке',
    link: getLinkByPlayId(LETTERS),
    component: Letters,
    faces: [
      {
        title: 'Андре Моруа',
        userId: BORIS
      },
      {
        title: 'Музыкант',
        userId: OLEGB
      }
    ],
    dates: [{ string: '27 января, 17:00', date: new Date('2018-01-27 17:00') }]
  },
  [ZOSCHENKO]: {
    title: 'Зощенко',
    link: getLinkByPlayId(ZOSCHENKO),
    component: Zoschenko,
    faces: [
      {
        title: 'Постановка',
        userId: ALESYA
      },
      {
        title: 'Зощенко',
        userId: BORIS
      },
      {
        title: 'Образ',
        userId: OLEGB
      },
      {
        title: 'Образ',
        userId: ALESYA
      },
      {
        title: 'Образ',
        userId: ALYONA
      },
      {
        title: 'Образ',
        userId: KATYA
      },
      {
        title: 'Образ',
        userId: MARINA
      },
      {
        title: 'Образ',
        userId: TANYA
      },
      {
        title: 'Костюмы',
        userId: VERA
      },
      {
        title: 'Спектакль ведет',
        userId: OLEGM
      },
      {
        title: 'Музыка',
        description:
          'Amestoy Trio, The Swingle Singers, Orquesta de Salvador Rangel, Gert Wilden, Archerontic Dawn, Wayne Hill'
      }
    ],
    dates: [{ string: '15 сентября, 17:00', date: new Date('2018-09-15 17:00') }]
  },
  [POETRY]: {
    title: 'Вечір української поезії "Розмова про любов"',
    link: getLinkByPlayId(POETRY),
    component: Poetry,
    dates: [{ string: '23 июня, 18:00', date: new Date('2018-05-23 18:00') }],
    faces: []
  }
};

const ACTIVE_PLAYS = [
  OLD,
  CAR,
  DAMN,
  ZOSCHENKO,
  GARSHIN,
  DREAMS,
  SILVER,
  LETTERS,
  NEXT_MAN,
  POETRY
];

const SOON_PLAYS = [];

export const getActivePlays = () =>
  ACTIVE_PLAYS.map(playId => ({
    title: getPlayNameByPlayId(playId),
    link: getLinkByPlayId(playId)
  }));

export const getSoonPlays = () => {
  let plays = SOON_PLAYS.map(playId => ({
    title: getPlayNameByPlayId(playId),
    link: getLinkByPlayId(playId)
  }));

  // plays.push({
  //   title: 'Аут'
  // });

  return plays;
};

export const getDatesByPlayId = playId => {
  const { dates } = PLAYS_INFO[playId];

  return !!dates
    ? dates
        .filter(({ date }) => !isExpired(date))
        .map(({ string }) => ({ title: string }))
    : [];
};

export const getNextPlays = () => {
  return Object.keys(PLAYS_INFO)
    .reduce((acc, playId) => {
      const { dates } = PLAYS_INFO[playId];
      if (dates) {
        dates.forEach(({ date, string }) => {
          if (!isExpired(date)) {
            acc.push({
              title: getPlayNameByPlayId(playId),
              description: string,
              link: PLAYS_INFO[playId].link,
              date
            });
          }
        });
      }

      return acc;
    }, [])
    .sort((a, b) => a.date - b.date);
};

const isExpired = date => +date + oneHour - new Date() < 0;

export const getPlayNameByPlayId = playId => PLAYS_INFO[playId].title;

export const getFacesByPlayId = playId =>
  PLAYS_INFO[playId].faces &&
  PLAYS_INFO[playId].faces.map(({ title, userId, description }) => ({
    title,
    description: description || getNameByUserId(userId),
    link: userId ? getLinkByUserId(userId) : undefined
  }));

export const getPlaysByUserId = userId => {
  return Object.keys(PLAYS_INFO).reduce((acc, playId) => {
    const roles = PLAYS_INFO[playId].faces
      .filter(role => role.userId === userId)
      .map(role => role.title)
      .join(', ');

    if (roles) {
      acc.push({
        title: PLAYS_INFO[playId].title,
        description: roles,
        link: getLinkByPlayId(playId)
      });
    }
    return acc;
  }, []);
};

export const getComponentByPlayId = playId => PLAYS_INFO[playId].component;

const getPlayIdsString = () => Object.keys(PLAYS_INFO).join('|');

export const PLAY_ROUTE = `/play/:playId(${getPlayIdsString()})`;
