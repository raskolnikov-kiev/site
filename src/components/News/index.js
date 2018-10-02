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
    <div className="news__item" style={{borderBottom: '1px solid #292929'}}>
      <h3 className="news__item-name">
        <Link to="/studio">Присоединяйтесь к Актерской Студии в октябре!</Link>
      </h3>
      <div className="news__item-text">
        <p>
          Дорогие друзья! С 1 октября предлагаем вам присоединиться к <Link to="/studio">актёрской студии</Link>.<br />
          <strong className="news__item_important">Предметы: культура речи, актёрское мастерство ( несколько техник), вокал и пластическое движение.</strong> Программа рассчитана на 1 год.
          Вас ждёт невероятное театральное приключение. Сцена станет вашим убежищем и вашим пьедесталом одновременно! Лучшие студийцы присоединяться к труппе театра. Задайте вопрос по телефону: <a href="tel:+380672660405" style={{ fontSize: 18 }}>+38(067)266-04-05</a>
          <br /><strong>Ждём только вас!</strong>
          <ul>
            <li>занятия 3 раза в неделю</li>
            <li>1500 грн в месяц</li>
            <li>по завершению ставим спектакль</li>
            <li>лучшие студийцы попадут в труппу</li>
            <li>
              <Link to="/studio">подробнее</Link>
            </li>
          </ul>
          <MailButton />
        </p>
      </div>
    </div>

    <div className="news__item" style={{marginTop: 15}}>
      <h3 className="news__item-name">
        Открытие детской театральной студии!
      </h3>
      <div className="news__item-text">
        <p>
          Если <strong className="news__item_important">ваше чадо</strong> проявляет интерес к миру театра - милости просим:)
          Планируется 2 группы, занятия будут проводиться 2 раза в неделю: вторник и четверг.
          <strong className="news__item_important">Актёрское мастерство, сценическая речь и пластика</strong> - вот то, чем мы будем заниматься. Каждый ребенок - артист, <strong className="news__item_important">наша задача - раскрыть творческий потенциал вашего ребенка</strong>. Впереди нас ждут спектакли, участие в фестивалях и просто душевная атмосфера театра, которая способствует всестороннему развитию вашего ребенка. По всем вопросам обращайтесь к
          {' '}<Link to="/face/MarinaPucherova"> Марине Пучеровой:</Link><br /><a href="tel:+380639718021" style={{ fontSize: 18 }}>+38(063)971-80-21</a>, <a href="tel:+380683606008" style={{ fontSize: 18 }}>+38(068)360-60-08</a>
          <ul>
            <li>2 группы</li>
            <li>2 раза в неделю</li>
            <li>Актёрское мастерство, сценическая речь и пластика</li>
            <li>спектакли, фестивали</li>
            <li>душевная атмосфера театра</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
);

export default News;
