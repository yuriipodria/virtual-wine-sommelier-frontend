enum Country {
  Ukraine = 'Україна',
  Spain = 'Іспанія',
  Argentina = 'Аргентина',
  Italy = 'Італія',
  Germany = 'Німеччина',
  SouthAfrica = 'Південна Африка',
  Portugal = 'Португалія',
  USA = 'США',
  France = 'Франція',
  Chile = 'Чилі',
}

enum Type {
  Dry = 'Сухе',
  SemiDry = 'Напівсухе',
  SemiSweet = 'Напівсолодке',
  Sweet = 'Солодке',
}

enum Color {
  White = 'Біле',
  Red = 'Червоне',
  Rose = 'Рожеве',
}

export interface Product {
  id: number;
  name: string;
  type: Type;
  color: Color;
  strength: string;
  country: Country;
  grape: string;
  price: number;
  description: string;
}
