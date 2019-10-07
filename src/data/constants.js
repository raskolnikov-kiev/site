export const CHEKHOV_DATE = undefined;
export const SPEECH_DATE = { string: '30 ноября, 1, 2 декабря', expireDate: new Date('2018-12-02 20:00') };
export const CHILDREN_DATE = { string: '30 ноября, 1, 2 декабря', expireDate: new Date('2019-03-20 20:00') };
export const MASTER_DATE = { string: '9 июня, 18:00', expireDate: new Date('2019-06-10 20:00') };
export const PLATFORM_DATE = { string: '5 декабря', expireDate: new Date('2019-12-05 20:00') };

export const POEMS_DATE = undefined;

export const getSpeechExpireDate = () => SPEECH_DATE && SPEECH_DATE.expireDate;

export const getChildrenExpireDate = () => CHILDREN_DATE && CHILDREN_DATE.expireDate;

export const getBalzakExpireDate = () => BALZAK_DATE && BALZAK_DATE.expireDate;

export const getPlatformExpireDate = () => PLATFORM_DATE && PLATFORM_DATE.expireDate;

export const getMasterExpireDate = () => MASTER_DATE && MASTER_DATE.expireDate;
