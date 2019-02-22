export const CHEKHOV_DATE = undefined;
export const SPEECH_DATE = { string: '30 ноября, 1, 2 декабря', expireDate: new Date('2018-12-02 20:00') };

export const POEMS_DATE = undefined;

export const getSpeechExpireDate = () => SPEECH_DATE && SPEECH_DATE.expireDate;
