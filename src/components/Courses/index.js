import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import { arrowWhite } from '@/img/arrow-down-white.svg';
import { arrow } from '@/img/arrow-down.svg';

import Gallery from '../Gallery';
import { ALESYA, getLinkByUserId } from '@/data/faces';
import { CHEKHOV_DATE, SPEECH_DATE, POEMS_DATE } from '@/data/constants';
import { COURSES_PHOTOS } from '@/data/courses';
import { isExpired } from '../../data/plays';

const getButtonText = isOpen =>
  isOpen ? 'Не хочу знать больше' : 'Хочу знать больше';

const images = COURSES_PHOTOS;

class Courses extends Component {
  state = {
    chekhov: { isOpen: false },
    speech: { isOpen: false },
    poems: { isOpen: false }
  };

  toggle = (e, type) => {
    e.preventDefault();

    this.setState(prevState => ({
      [type]: {
        isOpen: !prevState[type].isOpen
      }
    }));
  };

  toggleChekhov = e => this.toggle(e, 'chekhov');
  toggleSpeech = e => this.toggle(e, 'speech');
  togglePoems = e => this.toggle(e, 'poems');

  render() {
    return (
      <div>
        <Gallery images={images} />
        <Speech isOpen={this.state.speech.isOpen} toggle={this.toggleSpeech} />
        <Poems isOpen={this.state.poems.isOpen} toggle={this.togglePoems} />
        <Chekhov
          isOpen={this.state.chekhov.isOpen}
          toggle={this.toggleChekhov}
        />
      </div>
    );
  }
}

const MoreBtn = ({ isOpen, toggle }) => (
  <a
    className={classnames('course__more-btn', {
      'course__more-btn_shown': isOpen
    })}
    onClick={toggle}
  >
    {getButtonText(isOpen)}
  </a>
);

const MailtoLink = () => (
  <span>
    записаться можно здесь:{' '}
    <a href="mailto:raskolnikov.kiev@gmail.com" className="morale__link">
      raskolnikov.kiev@gmail.com
    </a>
  </span>
);

MoreBtn.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

const MoreContentWrapper = ({ children, isOpen, isLittle }) => (
  <div
    className={classnames(
      'course__more',
      'welcome-play',
      'questions__wrapper',
      {
        course__more_shown: isOpen,
        course__more_shown_little: isOpen && isLittle
      }
    )}
  >
    {children}
  </div>
);

MoreBtn.propTypes = {
  children: PropTypes.any,
  isOpen: PropTypes.bool.isRequired,
  isLittle: PropTypes.bool
};

MoreBtn.defaultProps = {
  isLittle: false,
  isOpen: false
};

const Speech = ({ isOpen, toggle }) => (
  <div>
    <div className="welcome welcome-play">
      <h1 className="welcome__title">Сценическая речь на каждый день</h1>
      <div className="welcome__text course__description">
        <span>Умеете ли вы говорить?</span> Издавать звуки тоже нужно правильно!
        Приглашаем на интенсив "Сценическая речь на каждый день". Итак, кратко о
        том, что мы будем делать. Мы займёмся развитием фонационного дыхания,
        высвобождением энергии и звука, а также артикуляционной, дикционной
        гимнастикой, выявим проблемы произношения гласных и согласных звуков, а
        также «разберёмся» с говором и тембром.
      </div>
      <MoreBtn isOpen={isOpen} toggle={toggle} />
    </div>

    <MoreContentWrapper isOpen={isOpen} isLittle={true}>
      <div className="morale">
        <h4 className="morale__heading">Теперь, «мораль».</h4>
        <ul>
          {SPEECH_DATE && !isExpired(SPEECH_DATE.expireDate) && (
            <li className="next-course morale__item">
              Ближайший старт: {SPEECH_DATE.string}
            </li>
          )}
          <li className="morale__item">2 дня по 2 часа</li>
          <li className="morale__item">
            Время предоставляется на выбор: 11:30 или 19:30
          </li>
          <li className="morale__item">500 грн</li>
          <li className="morale__item">
            Тренер -{' '}
            <Link to={getLinkByUserId(ALESYA)} className="morale__link">
              Алеся Савченко
            </Link>
          </li>
          <li className="morale__item">
            Вы получите инструмент, который «запустит» вашу речь!
          </li>
          <li className="morale__item">Возможны индивидуальные занятия</li>
          <li className="morale__item">
            <MailtoLink />
          </li>
        </ul>
      </div>
    </MoreContentWrapper>
  </div>
);

const Poems = ({ isOpen, toggle }) => (
  <div>
    <div className="welcome welcome-play">
      <h1 className="welcome__title">Как читать стихи?</h1>
      <div className="welcome__text course__description">
        Знаете ли вы, почему поэзию нельзя читать как прозу? Мечтаете избавиться
        от декламирования? Хотите научиться правильно разбирать стихотворения?
        Приглашаем вас на уникальный мастер-класс,{' '}
        <strong>посвященный чтению стихотворной формы!</strong> Вы раз и
        навсегда разберетесь со стихотворными размерами, узнаете, что такое
        темпоритм и в чем "зашифрована" мысль автора. Научитесь читать стихи с
        листа и понимать смысл написанного. А главное, вы наконец-то узнаете, в
        чем секрет гениальных поэтов!
      </div>
      <MoreBtn isOpen={isOpen} toggle={toggle} />
    </div>

    <MoreContentWrapper isOpen={isOpen} isLittle={true}>
      <div className="morale">
        <h4 className="morale__heading">«мораль»</h4>
        <ul>
          {POEMS_DATE && (
            <li className="next-course morale__item">
              Ближайший старт: {POEMS_DATE}
            </li>
          )}
          <li className="morale__item">1 день - 3 часа</li>
          <li className="morale__item">200 грн</li>
          <li className="morale__item">
            Тренер -{' '}
            <Link to={getLinkByUserId(ALESYA)} className="morale__link">
              Алеся Савченко
            </Link>
          </li>
          <li className="morale__item">
            <MailtoLink />
          </li>
        </ul>
      </div>
    </MoreContentWrapper>
  </div>
);

const Chekhov = ({ isOpen, toggle }) => (
  <div>
    <div className="welcome welcome-play">
      <h1 className="welcome__title">
        Метод Михаила Чехова на сцене и вне сцены
      </h1>
      <div className="welcome__text course__description">
        Уникальная серия актерских мастер-классов (по методу Михаила Чехова)
        откроет мир <strong>Архетипов и Психологических жестов!</strong> 5
        лекций для тех, кого интересует актерское мастерство, для тех, кто хочет
        раскрыть себя и научиться говорить красиво.
      </div>
      <MoreBtn isOpen={isOpen} toggle={toggle} />
    </div>

    <MoreContentWrapper isOpen={isOpen}>
      <div className="questions questions_courses">
        <p>
          Мастер-класс № 1
          <br />
          <strong>
            «Архетип». Вы узнаете, что такое архетип и как с ним работать. Это
            значит, что вы легко сможете воплотить любого понравившегося вам
            персонажа, и даже заплакать, если надо, не вспоминая при этом
            умерших родственников.
          </strong>
        </p>
        <p>
          Мастер-класс № 2
          <br />
          <strong>
            «Психологический жест». Что это такое и почему он - «волшебная
            палочка».
          </strong>
        </p>
        <p>
          Мастер-класс № 3
          <br />
          <strong>
            «Голос и тело». Гимнастика для тела и речевая разминка. Вы удивитесь
            своему потенциалу.{' '}
          </strong>
        </p>
        <p>
          Мастер-класс № 4
          <br />
          <strong>
            «Речевой тренинг». Озвучиваем тексты, выявляем проблемы.
          </strong>
        </p>
        <p>
          Мастер-класс № 5
          <br />
          <strong>
            «Создание образа». Изучаем воображаемое тело и сливаемся с ним
            воедино. В результате получим абсолютно новую личность. Работаем
            быстро и на результат. Никаких «соплей» и «переживаний».{' '}
          </strong>
        </p>
      </div>

      <div className="morale">
        <h4 className="morale__heading">Теперь, «мораль».</h4>
        <ul>
          {CHEKHOV_DATE && (
            <li className="next-course morale__item">
              Ближайший старт: {CHEKHOV_DATE}
            </li>
          )}
          <li className="morale__item">
            Серия из 5-ти актерских мастер-классов (по методу Михаила Чехова)
          </li>
          <li className="morale__item">2 недели</li>
          <li className="morale__item">2 времени на выбор: 11:30 и 19:30</li>
          <li className="morale__item">1000 грн</li>
          <li className="morale__item">маленькие группы</li>
          <li className="morale__item">
            Тренер -{' '}
            <Link to={getLinkByUserId(ALESYA)} className="morale__link">
              Алеся Савченко
            </Link>{' '}
            режиссер (дипломированный преподаватель метода Михаила Чехова)
          </li>
          <li className="morale__item">
            <MailtoLink />
          </li>
        </ul>
      </div>
    </MoreContentWrapper>
  </div>
);

export default Courses;
