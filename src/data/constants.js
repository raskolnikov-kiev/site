export const CHEKHOV_DATE = undefined;
export const SPEECH_DATE = { string: '30 ноября, 1, 2 декабря', expireDate: new Date('2018-12-02 20:00') };
export const CHILDREN_DATE = { string: '30 ноября, 1, 2 декабря', expireDate: new Date('2019-03-20 20:00') };
export const BALZAK_DATE = { string: '21 сентября', expireDate: new Date('2019-09-21 20:00') };

export const POEMS_DATE = undefined;

export const getSpeechExpireDate = () => SPEECH_DATE && SPEECH_DATE.expireDate;

export const getChildrenExpireDate = () => CHILDREN_DATE && CHILDREN_DATE.expireDate;

export const getBalzakExpireDate = () => BALZAK_DATE && BALZAK_DATE.expireDate;
