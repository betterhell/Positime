const cards = [
  {
    img: "images/cards/good_news(1).jpg",
    tagClass: "content-header__tags_world",
    tagName: "Мир",
    time: "10 апреля 2018 в 18:12",
    header: "Как стать настоящим скалолазом?",
  },
  {
    img: "images/cards/good_news(2).png",
    tagClass: "content-header__tags_art",
    tagName: "Искусство",
    time: "9 апреля 2018 в 12:11",
    header: "Оскар: 10 лучших фактов о награде и людях",
  },
  {
    img: "images/cards/good_news(3).png",
    tagClass: "content-header__tags_auto",
    tagName: "Авто",
    time: "9 апреля 2018 в 09:15",
    header: "Автопроизводители Европы готовятся к электрическому будущему",
  },
  {
    img: "images/cards/good_news(4).png",
    tagClass: "content-header__tags_russia",
    tagName: "Россия",
    time: "8 апреля 2018 в 11:15",
    header: "Определены лучшие потоковые сервисы музыки",
  },
  {
    img: "images/cards/good_news(5).png",
    tagClass: "content-header__tags_auto",
    tagName: "Авто",
    time: "8 апреля 2018 в 17:34",
    header: "Определены лучшие потоковые сервисы музыки",
  },
  {
    img: "images/cards/good_news(6).png",
    tagClass: "content-header__tags_it",
    tagName: "IT",
    time: "7 апреля 2018 в 16:21",
    header: "Слоны оказались слишком похожими на людей",
  },
  {
    img: "images/cards/good_news(8).png",
    tagClass: "content-header__tags_science",
    tagName: "Наука",
    time: "7 апреля 2018 в 13:12",
    header: "Белуха учится разговаривать с дельфинами-афалинами",
  },
  {
    img: "images/cards/good_news(7).png",
    tagClass: "content-header__tags_auto",
    tagName: "Авто",
    time: "7 апреля 2018 в 08:10",
    header: "Наконец-то создано мыло, которое не падает из рук",
  },
  {
    img: "images/cards/good_news(9).png",
    tagClass: "content-header__tags_world",
    tagName: "Мир",
    time: "6 апреля 2018 в 18:10",
    header:
      "Маленькая спасенная горилла помогла фотографу завоевать важную премию",
  },
];

const cardsLoad = () => {
  const cardPlace = document.querySelectorAll(".news-cards");

  cards.forEach((card) => {
    cardPlace.forEach((place) => {
      place.innerHTML += `<div class="good-news news-container__good-news">
      <div class="good-img-container good-news__good-img-container">
        <a class="good-img-container__link" href="##"
          ><img
            class="good-img-container__image"
            src="${card.img}"
            alt="Хорошие новости"
        /></a>
      </div>
      <div class="tag good-news__good-news-tag ${card.tagClass}">
        <a class="good-news__good-news-tag__link href="##">${card.tagName}</a>
      </div>
      <div class="good-public-time good-news__good-public-time">
        <img
          class="good-public-time__image"
          src="./images/icons/clock-icon_gray.svg"
          alt="Часы"
        />
        <p class="good-public-time__time">${card.time}</p>
      </div>
      <div class="description-news good-news__description-news">
        <a class="description-news__link href="##"><h3 class="description-news__text">${card.header}</h3></a>
      </div>
    </div>`;
    });
  });
};

cardsLoad();
