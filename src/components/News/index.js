import React from 'react';
import { Link } from 'react-router-dom';

import { GoogleFormButton } from '../Studio';
import {
  ALESYA,
  getLinkByUserId,
} from '../../data/faces';
import { CHEKHOV, CHILD_STUDIO, SPEECH, STUDIO } from '../../data/googleForms';
import { isExpired } from '../../data/plays';
import { getSpeechExpireDate } from '../../data/constants';

const News = () => (
  <div className="block news">
    <SpeechNews expireDate = {getSpeechExpireDate()}/>
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
    {/*<div className="news__item" style={{ borderBottom: '1px solid #292929' }}>*/}
      {/*<h3 className="news__item-name">*/}
        {/*<Link to="/studio">Присоединяйтесь к Актерской Студии в октябре !</Link>*/}
      {/*</h3>*/}
      {/*<div className="news__item-text">*/}
        {/*<p>*/}
          {/*Дорогие друзья! С 1 октября предлагаем вам присоединиться к{' '}*/}
          {/*<Link to="/studio">актёрской студии</Link>.<br />*/}
          {/*<strong className="news__item_important">*/}
            {/*Предметы: культура речи, актёрское мастерство ( несколько техник),*/}
            {/*вокал и пластическое движение.*/}
          {/*</strong>{' '}*/}
          {/*Программа рассчитана на 1 год. Вас ждёт невероятное театральное*/}
          {/*приключение. Сцена станет вашим убежищем и вашим пьедесталом*/}
          {/*одновременно! Лучшие студийцы присоединятся к труппе театра. Задайте*/}
          {/*вопрос по телефону:{' '}*/}
          {/*<a href="tel:+380672660405" style={{ fontSize: 18 }}>*/}
            {/*+38(067)266-04-05*/}
          {/*</a>*/}
          {/*<br />*/}
          {/*<strong>Ждём только вас!</strong>*/}
          {/*<ul>*/}
            {/*<li>занятия 3 раза в неделю</li>*/}
            {/*<li>1500 грн в месяц</li>*/}
            {/*<li>по завершению ставим спектакль</li>*/}
            {/*<li>лучшие студийцы попадут в труппу</li>*/}
            {/*<li>*/}
              {/*<Link to="/studio">подробнее</Link>*/}
            {/*</li>*/}
          {/*</ul>*/}
          {/*<GoogleFormButton type={STUDIO}/>*/}
        {/*</p>*/}
      {/*</div>*/}
    {/*</div>*/}

    {/*<div className="news__item" style={{ marginTop: 15 }}>*/}
      {/*<h3 className="news__item-name">Открытие детской театральной студии в октябре !</h3>*/}
      {/*<div className="news__item-text">*/}
        {/*<p>*/}
          {/*Если <strong className="news__item_important">ваше чадо</strong>{' '}*/}
          {/*проявляет интерес к миру театра - милости просим:) Планируется 2*/}
          {/*группы, занятия будут проводиться 2 раза в неделю: вторник и четверг.*/}
          {/*<strong className="news__item_important">*/}
            {/*Актёрское мастерство, сценическая речь и пластика*/}
          {/*</strong>{' '}*/}
          {/*- вот то, чем мы будем заниматься. Каждый ребенок - артист,{' '}*/}
          {/*<strong className="news__item_important">*/}
            {/*наша задача - раскрыть творческий потенциал вашего ребенка*/}
          {/*</strong>. Впереди нас ждут спектакли, участие в фестивалях и просто*/}
          {/*душевная атмосфера театра, которая способствует всестороннему развитию*/}
          {/*вашего ребенка. По всем вопросам обращайтесь к{' '}*/}
          {/*<Link to="/face/MarinaPucherova"> Марине Пучеровой:</Link>*/}
          {/*<br />*/}
          {/*<a href="tel:+380639718021" style={{ fontSize: 18 }}>*/}
            {/*+38(063)971-80-21*/}
          {/*</a>,{' '}*/}
          {/*<a href="tel:+380683606008" style={{ fontSize: 18 }}>*/}
            {/*+38(068)360-60-08*/}
          {/*</a>*/}
          {/*<ul>*/}
            {/*<li>2 группы</li>*/}
            {/*<li>2 раза в неделю</li>*/}
            {/*<li>Актёрское мастерство, сценическая речь и пластика</li>*/}
            {/*<li>спектакли, фестивали</li>*/}
            {/*<li>душевная атмосфера театра</li>*/}
            {/*<li>1000 грн в месяц</li>*/}
          {/*</ul>*/}
          {/*<GoogleFormButton type={CHILD_STUDIO}/>*/}
        {/*</p>*/}
      {/*</div>*/}
    {/*</div>*/}
  </div>
);

const SpeechNews = ({expireDate}) => {
  return (
    !isExpired(expireDate) && (
    <div className="news__item" >
      <h3 className="news__item-name">Сценическая речь на каждый день (30 ноября, 1 и 2 декабря)</h3>
      <div className="news__item-text">
        <p>
          Умеете ли вы говорить? Издавать звуки тоже нужно правильно! Приглашаем на интенсив{' '}
          <span className="news__item_important">"Сценическая речь на каждый день".</span> <br />Итак, кратко о том, что мы будем делать.
          Мы займёмся развитием фонационного дыхания, высвобождением энергии и звука, а также артикуляционной,
          дикционной гимнастикой, выявим проблемы произношения гласных и согласных звуков, а также «разберёмся» с говором и тембром.
          <ul>
            <li className="news__item_important"> 30 ноября, 1 и 2 декабря</li>
            <li className="news__item_important"> Старт в пятницу в 19:00</li>
            <li className="news__item_important">
               стоимость - 1000 грн
            </li>
            <li >
              {' '}
              тренер - <Link to={getLinkByUserId(ALESYA)}>Алеся Савченко</Link>, режиссер (дипломированный преподаватель
              метода Михаила Чехова, Член Ассоциации Михаила Чехова)
            </li>
          </ul>
          <GoogleFormButton type={SPEECH}/>
        </p>
      </div>
    </div>
    )
  );
};

const StudioNews = ({expireDate}) => {
  return (
    !isExpired(expireDate) && (
    <div className="news__item">
      <h3 className="news__item-name">Актёрская студия для взрослых при «Театре раскольников» в ноябре</h3>
      <div className="news__item-text">
        <p>
          "Театр раскольников" и режиссёр Алеся Савченко приглашают на{' '}
          <span className="news__item_important">
            уникальную серию актерских мастер-классов (по методу Михаила
            Чехова).{' '}
          </span>
          3 дня подряд участники будут изучать актёрский метод Михаила Чехова, полностью погружаясь в работу над Архетипами. Участники придут к пониманию феномена Михаила Чехова. В финальный воскресный день группа проработает на сцене отрывок из "Короля Лира" У.Шекспира (в переводе Б.Пастернака).
          Лекции подойдут для тех, кого интересует актерское мастерство, для тех, кто хочет раскрыть себя и научиться говорить красиво.
          <ul>
            <li className="news__item_important"> 2, 3, 4 ноября</li>
            <li className="news__item_important"> Старт 2 ноября в 19:00</li>
            <li className="news__item_important">
              {' '}
              3 дня, 1000 грн, маленькие группы
            </li>
            <li >
              {' '}
              тренер - <Link to={getLinkByUserId(ALESYA)}>Алеся Савченко</Link>, режиссер (дипломированный преподаватель
              метода Михаила Чехова, Член Ассоциации Михаила Чехова)
            </li>
            <li>
              {' '}
              Больше информации на{' '}
              <a
                href="https://www.facebook.com/events/311362479649412/"
                target="_blank"
              >
                facebook
              </a>
            </li>
          </ul>
          <GoogleFormButton type={CHEKHOV}/>
        </p>
      </div>
    </div>
    )
  );
};

export default News;
