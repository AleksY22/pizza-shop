export const categories = [
  {
    name: "Пиццы",
  },
  {
    name: "Комбо",
  },
  {
    name: "Закуски",
  },
  {
    name: "Коктейли",
  },
  {
    name: "Кофе",
  },
  {
    name: "Напитки",
  },
  {
    name: "Десерты",
  },
];

export const ingredients = [
  {
    name: "Сырный бортик",
    price: 5.5,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/0199153ab3e173359bb0aedb9df4f08c.png",
  },
  {
    name: "Сливочная моцарелла",
    price: 3.0,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/0199ae785779712c863b4ab51d7b4201.png",
  },
  {
    name: "Ветчина",
    price: 3.0,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/019915395c95756388115d2dc2d7f4aa.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 3.5,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/0199153ac37975aaaf9982ac46442c20.png",
  },
  {
    name: "Итальянские травы",
    price: 2.5,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/0199153941fd727bae814a19530c199a.png",
  },
  {
    name: "Сладкий перец",
    price: 2.5,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/01991539e382773984e2ef328da00571.png",
  },
  {
    name: "Брынза",
    price: 1.2,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/0199153769307927b2fd2f59f5c79834.png",
  },
  {
    name: "Томаты",
    price: 3.0,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/01991537793b77b398687801189f5f81.png",
  },
  {
    name: "Шампиньоны",
    price: 2.5,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/0199153894bc72838634834ec912bbca.png",
  },
  {
    name: "Красный лук",
    price: 2.5,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/0199ae77db5475ae8a8dd294b5f7778c.png",
  },
  {
    name: "Ананасы",
    price: 3.0,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/019915380947793dab38205bb5c2f91f.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  //=========================================================
  {
    name: "Сытное комбо",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0199e15264d17384b262ab386716d6ac.avif",
    categoryId: 2,
  },
  {
    name: "2 пиццы 30см",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0199e1e105577813a719013dcca6c2db.avif",
    categoryId: 2,
  },
  {
    name: "Комбо Все включено",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/019a7c433d4b73dc932d2e2d0c3558e7.avif",
    categoryId: 2,
  },
  {
    name: "Додо Бокс",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/019754abc06878738a08804fc163d158.avif",
    categoryId: 2,
  },
  //=========================================================
  {
    name: "Додстер",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/01989d9534f676ce99a73d0388c0bc99.avif",
    categoryId: 3,
  },
  {
    name: "Дэнвич с говядиной",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/019a3a73bb7d796e863ae726d4fc5364.avif",
    categoryId: 3,
  },
  {
    name: "Салат Цезарь",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0198bec25ea677469d5b9f83f1f140b0.avif",
    categoryId: 3,
  },
  {
    name: "Картофель по-деревенски",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0198bec25ea677469d5b9f83f1f140b0.avif",
    categoryId: 3,
  },
  {
    name: "Омлет с ветчиной и грибами",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0196ba50d552722fae7107777d1fbe8d.avif",
    categoryId: 3,
  },
  {
    name: "Омлет с пепперони",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0196ba559fa97719814f96ed21cc50f7.avif",
    categoryId: 3,
  },
  //==========================================================
  {
    name: "Классический молочный коктейль",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0197560ff07d72adac592623174b4ba1.avif",
    categoryId: 4,
  },
  {
    name: "Клубничный молочный коктейль",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/019755f42e19766e8659be9144e08deb.avif",
    categoryId: 4,
  },
  {
    name: "Клубничный молочный коктейль",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/019755f42e19766e8659be9144e08deb.avif",
    categoryId: 4,
  },
  //========================================================
  {
    name: "Кофе Латте",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d5f24b752499d31c5bdfdd3f674.avif",
    categoryId: 5,
  },
  {
    name: "Кофе Американо",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d5f243edf28a95820f2a40aacc4.avif",
    categoryId: 5,
  },
  {
    name: "Кофе Американо",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d5f243edf28a95820f2a40aacc4.avif",
    categoryId: 5,
  },
  //===========================================================
  {
    name: "Пепси",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ef020d1987e9eba7d2b650bcdb6b99.avif",
    categoryId: 6,
  },
  {
    name: "Миринда",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ef020cedf5f78eb345e1deee159fb8.avif",
    categoryId: 6,
  },
  {
    name: "Пепси",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ef020d1987e9eba7d2b650bcdb6b99.avif",
    categoryId: 6,
  },
  {
    name: "Морс вишня",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee796eb75fca50b26573abd923ed26.avif",
    categoryId: 6,
  },
  //===========================================================
  {
    name: "Карамельный чизкейк",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0195cc2c091074df81bdc1f369dc6bb2.avif",
    categoryId: 7,
  },
  {
    name: "Банановый чизкейк",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/019512ea25b778aba777f7640b507526.avif",
    categoryId: 7,
  },
  {
    name: "Фондан",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d5f2d20c03494f2d0bd862b3ec0.avif",
    categoryId: 7,
  },
  {
    name: "Сырники",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/01968644378d77a3bd4f483ab6308e9f.avif",
    categoryId: 7,
  },
];
