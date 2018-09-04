import React from 'react';
import { Link } from 'react-router-dom';

import { MailButton } from '../Studio';

const News = () => (
  <div className="block news">
    {/*<div className="news__item">*/}
    {/*<h3 className="news__item-name">Зощенко</h3>*/}
    {/*<div className="news__item-text">*/}
    {/*<p>*/}
    {/*Приглашаем на премьеру спектакля «Зощенко» 11 марта в 17:00! Будем веселиться?!...*/}
    {/*</p>*/}
    {/*</div>*/}
    {/*<Link to="/play/zoschenko" className="more">*/}
    {/*Детальнее*/}
    {/*</Link>*/}
    {/*</div>*/}
    {/*<div className="news__item">*/}
    {/*<h3 className="news__item-name">Актерский хакатон</h3>*/}
    {/*<div className="news__item-text">*/}
    {/*<p>*/}
    {/*"Театр раскольников" и режиссёр Алеся Савченко приглашают на <span className="news__item_important">уникальную серию актерских мастер-классов (по методу Михаила Чехова). </span>*/}
    {/*Вас ждёт мир Архетипов и Психологических жестов. И опять в рамках эксперимента!*/}
    {/*3 дня подряд участники будут изучать актёрский метод Михаила Чехова, полностью погружаясь в работу над Архетипами.*/}
    {/*Изучая метод по 6 часов в день, участники придут к пониманию феномена Михаила Чехова.*/}
    {/*<ul>*/}
    {/*<li className="news__item_important"> 25, 26, 27 мая</li>*/}
    {/*<li> Старт 25 мая в 12:00</li>*/}
    {/*<li className="news__item_important"> 3 дня, 1000 грн, маленькие группы</li>*/}
    {/*<li> тренер - Алеся Савченко, режиссер (дипломированный преподаватель метода Михаила Чехова)</li>*/}
    {/*<li> Больше информации на <a href="https://www.facebook.com/events/170353503665307/" target="_blank">facebook</a></li>*/}
    {/*</ul>*/}
    {/*<div className="news__item_block">Чтобы <span className="news__item_important">зарегестрироваться</span>, пишите <a href="mailto:raskolnikov.kiev@gmail.com">сюда</a></div>*/}
    {/*</p>*/}
    {/*</div>*/}
    {/*</div>*/}
    <div className="news__item">
      <h3 className="news__item-name">
        <Link to="/studio">Стартует Актерская Студия!</Link>
      </h3>
      <div className="news__item-text">
        <p>
          "Театр раскольников" начинает эксперимент и открывает двери для всех
          желающих учиться! Театральный дом "раскольников" с магической
          атмосферой приглашает в <Link to="/studio">студию</Link>.{' '}
          <br />
          <span className="nowrap">1 сентября 2018 года</span> стартует
          взрослая группа
          <strong className="news__item_important">
            {' '}Еще есть 2 места, спешите присоединиться!
          </strong>
          <ul>
            <li>возраст - от 18 лет</li>
            <li>Старт 1 сентября</li>
            <li>1500 грн в месяц</li>
            <li>по завершению ставим спектакль</li>
            <li>
              <Link to="/studio">подробнее</Link>
            </li>
          </ul>
          <MailButton />
        </p>
      </div>
    </div>
  </div>
);

export default News;
