import React, { Component } from 'react';
import { PLATFORM, FORMS } from '../../data/googleForms';

import kuzina from '@/img/photos/platform/kuzina.jpg';
import sakaev from '@/img/photos/platform/sakaev.jpg';
import savchenko from '@/img/photos/platform/savchenko.jpg';
import { getLinkByUserId, ALESYA } from '@/data/faces';

import classnames from 'classnames';

import Gallery from '../Gallery';

import { PLATFORM_PHOTOS } from '@/data/platform';
import { Link } from 'react-router-dom';

const TOGGLES = {
  WHAT: 'WHAT',
  WHERE: 'WHERE',
  WHO: 'WHO',
  DETAILS: 'DETAILS',
  HOW_MUCH: 'HOW_MUCH',
  CONTACTS: 'CONTACTS'
 };

class Platform extends Component {
  state = {};

  onMoreClick(blockName) {
    this.setState(prevState => ({
      [blockName]: !prevState[blockName]
    }));
  }

  render() {
    return (
      <div>
        <Gallery images={PLATFORM_PHOTOS} />
        <div className="welcome welcome-play">
          <h1 className="welcome__title">Воркшоп «Актёрская платформа»</h1>
          <div className="welcome__text course__description">
            <b>22 ноября</b> стартует уникальный воркшоп «Актёрская платформа»!<br />Впервые в Украине!<br />

            Интенсив, длинною 3 дней откроет вам мир <b>биомеханики Всеволода Мейерхольда, архетипов и Психологических жестов Михаила Чехова</b>. <br />

            «Актёрская платформа» - это особое пространство для погружения в актёрские практики, которые будут полезны как актёрам, так и людям, желающим раскрыть свой творческий потенциал и узнать возможности собственного тела.
            {' '}
          </div>
          <div className="course__description welcome__text">
            <GoogleFormButton type={PLATFORM}/>
          </div>


          <div className="course__description welcome__text">
            <a
              className={classnames('studio__header', {
                studio__header_shown: this.state[TOGGLES.WHAT]
              })}
              onClick={() => this.onMoreClick(TOGGLES.WHAT)}
            >
              Что будет?
            </a>
            {this.state[TOGGLES.WHAT] && (
              <ul className="studio__list studio__block studio__list_emoji">
                <li>🎈 Медитация и йога, дыхание и растяжка, актёрские разминки и необычные творческие лаборатории, высвобождение энергии и <b>рождение новой личности – персонажа…</b> Вот, что ждёт каждого, кто присоединится к «Актёрской платформе». </li>
                <li>🎓 Вы станете учениками  <b>лучших педагогов Европы</b>, практикующих мастеров 2-х уникальных актёрских методов</li>
                <li>⚡ <b>Только практические упражнения</b>, импровизация и эксперименты – так построена программа каждого педагога.</li>
              </ul>
            )}
          </div>


          <div className="course__description welcome__text">
            <a
              className={classnames('studio__header', {
                studio__header_shown: this.state[TOGGLES.WHO]
              })}
              onClick={() => this.onMoreClick(TOGGLES.WHO)}
            >
             Педагоги
            </a>
            {this.state[TOGGLES.WHO] && (
              <ul className="studio__list studio__block studio__persons">
                <li className="studio__person">
                  <a className="photo studio__person_link" href="http://kuzinaee.com/?lang=en" target="_blank">
                    <div className="photo studio__person_photo_wrapper">
                      <img className="photo__img " src={kuzina} alt=""/>
                    </div>
                    <div className="studio__person_descr">
                      <b className="play__link"> Елена Кузина</b>
                      {' '}- режиссер, актриса, педагог-тренер.
                      Стажировалась в технике Михаила Чехова у многих педагогов: в т.ч. Джоанны Мерлин, Ленарда Петита, Теда Пью, Вячеслава Кокорина и др.
                      Принимала участие в MICHA (Нью-Йорк, 2013) ChekhovFest (Белград, 2019).
                      Автор множества мастер-классы для <b>российских, финских английских, итальянских, польских, сербских, американских, канадских, корейских, китайских и японских</b>
                      актеров: Киноакадемии Пекина (Китай), во ВГИКе (Москва), в Высшей театральной школе Атлантик и Актерском Центре  (Нью-Йорк, США, 2018),
                      в РГИСИ (бывш. Академии театрального искусства, Санкт- Петербург, 2010-2019); Театре «Школа драматического искусства» (Москва, 2003-2011 г.г.);
                      Александринском театре (Санкт-Петербург, 2008-2009); Институте Е. Гротовского (Вроцлав, Польша, 2009);  Драматическом театре гор. Кайани (Финляндия 2010, 2011), ВДТ им. Булгакова (Сиэттл, США),
                      в театре «Удивительная кошка» (Торонто, Канада). <br />
                      <b>Работала</b> приглашенным <b>профессором</b> в Университетах США, среди которых
                      <ul className="studio__list studio__block studio__list_emoji">
                        <li>🎓Университет Гарварда</li>
                        <li>🎓Национальный Институт Театра при Центре Юджина О’Нила</li>
                        <li>🎓Консерватория Беркли в Бостоне</li>
                        <li>🎓Университет Миннесоты</li>
                        <li>🎓Университет Сэнт- Клауда, Школа Майкла Ховарда в Нью- Йорке</li>
                        <li>🎓Университет Штата Вашингтон</li>
                        <li>🎓Университет Калифорнии в Лос-Анджелесе</li>
                      </ul>
                    </div>
                  </a>
                </li>
                <li className="studio__person">
                  <a className="photo studio__person_link" href="https://alexandrinsky.ru/o-teatre/sozdateli-spektaklej/sakaev-iskander-raufovich/" target="_blank">
                    <div className="photo studio__person_photo_wrapper">
                      <img className="photo__img " src={sakaev} alt=""/>
                    </div>
                    <div className="studio__person_descr">
                      <b className="play__link">Искандэр Сакаев</b>
                      {' '}- художественный руководитель театра "Левендаль", режиссёр Александринского театра Санкт-Петербурга, <b>мастер биомеханики</b>.
                    </div>
                  </a>
                </li>
                <li className="studio__person">
                  <div className="photo studio__person_link">
                    <div className="photo studio__person_photo_wrapper">
                      <Link to={getLinkByUserId(ALESYA)} className="photo">
                        <img className="photo__img " src={savchenko} alt=""/>
                      </Link>
                    </div>
                    <div className="studio__person_descr">
                      <b className="play__link">Алеся Савченко</b>
                      {' '}- (Украина-Канада) художественный руководитель «Театра раскольников», режиссёр, актриса, дипломированный преподаватель метода Михаила Чехова, Член Ассоциации Михаила Чехова.
                      Обучалась у Елены Кузиной, Джоанны Мерлин и Ленарда Петита. Ведёт тренинги в Украине и Канаде, является активным исследователем актёрского <b>метода Михаила Чехова</b>.
                    </div>
                  </div>
                </li>
              </ul>
            )}
          </div>

          <div className="course__description welcome__text">
            <a
              className={classnames('studio__header', {
                studio__header_shown: this.state[TOGGLES.WHERE]
              })}
              onClick={() => this.onMoreClick(TOGGLES.WHERE)}
            >
              Где?
            </a>
            {this.state[TOGGLES.WHERE] && (
              <div  className="course__description welcome__text studio__block"><b><a class="play__link"  href="https://goo.gl/maps/m3Gwf9UEbydRvZPZA" target="_blank">г. Киев, ул. Гринченка, 7, Дом архитекторов.</a></b></div>
            )}
          </div>

          <div className="course__description welcome__text">
            <a
              className={classnames('studio__header', {
                studio__header_shown: this.state[TOGGLES.HOW_MUCH]
              })}
              onClick={() => this.onMoreClick(TOGGLES.HOW_MUCH)}
            >
              Стоимость
            </a>
            {this.state[TOGGLES.HOW_MUCH] && (
              <div className="course__description welcome__text studio__block">
                Стоимость участия – 2500 гривен. <br />
                Оплатив до 22 октября гарантировано <b>получите скидку!</b> <br />Количество мест ограничено!
              </div>
            )}
          </div>

          <div className="course__description welcome__text">
            <a
              className={classnames('studio__header', {
                studio__header_shown: this.state[TOGGLES.CONTACTS]
              })}
              onClick={() => this.onMoreClick(TOGGLES.CONTACTS)}
            >
              Котакты
            </a>
            {this.state[TOGGLES.CONTACTS] && (
              <div className="course__description welcome__text">
              <ul className="studio__list studio__list_emoji studio__block ">
                <li>📞 <a className="play__link" href="tel:+380661512291">+38(066)151-22-91</a></li>
                <li>📖 <a className="play__link" target="_blank" href="https://www.facebook.com/events/2333811686880923/">facebook страничка</a> </li>
                <li>🎩 <a className="play__link" target="_blank" href="https://forms.gle/ANZbvaZPCee62pNHA">регистрация</a> </li>
              </ul>
              </div>
            )}
          </div>

          <div className="course__description welcome__text">
            <a
              className={classnames('studio__header', {
                studio__header_shown: this.state[TOGGLES.DETAILS]
              })}
              onClick={() => this.onMoreClick(TOGGLES.DETAILS)}
            >
              Важные детали
            </a>
            {this.state[TOGGLES.DETAILS] && (
              <div className="studio__block">
                Количесвто мест ограничено, поспешите!
                <br />
                <br />
                <GoogleFormButton type={PLATFORM} text="хочу участвовать!"/>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export const GoogleFormButton = ({ type, text = 'Записаться или задать вопрос' }) => (
  <div>
    <button className="studio__button">
      <a
        target="_blank"
        className="studio__button_link"
        href={FORMS[type]}
      >
        {text}
      </a>
    </button>
  </div>
);

export default Platform;
