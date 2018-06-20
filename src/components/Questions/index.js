import React from 'react';

import { getQuestonsByUserId } from '@/data/questions';
import { getNameByUserId } from '@/data/faces';

const Questions = ({ userId }) => {
  const questions = getQuestonsByUserId(userId);
  const displayName = getNameByUserId(userId);

  return (
    <div className="block questions__wrapper">
      {/*<h1 className="welcome__title">{displayName}</h1>*/}

      {!!questions && (
        <div className="questions">
          {!!questions.additional && (
            <div className="questions__additional">
              {questions.additional.map(({ q, a }) => (
                <div key={q}>
                  <p>
                    <span className="questions__question">{q}</span>
                    <br />
                    <span className="questions__answer">{a}</span>
                  </p>
                </div>
              ))}
            </div>
          )}

          {questions.prust.map(({ q, a }) => (
            <div key={q}>
              <p>
                <span className="questions__question">{q}</span>
                <br />
                <span className="questions__answer">{a}</span>
              </p>
            </div>
          ))}

          <div className="questions__prust">Из опросника Марселя Пруста</div>
        </div>
      )}
    </div>
  );
};

export default Questions;
