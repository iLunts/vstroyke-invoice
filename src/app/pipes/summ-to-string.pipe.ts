import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'summToString'
})
export class SummToStringPipe implements PipeTransform {
  // money: any;
  // price: any;
  // rub: any;
  // kop: any;
  // litera = '';
  // sotny = '';
  // desatky = '';
  // edinicy = '';
  // minus = '';
  // k = 0;
  // i = 0;
  // j = 0;
  // N: any[] = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять',
  //   '', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать',
  //   'семнадцать', 'восемнадцать', 'девятнадцать',
  //   '', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто',
  //   '', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот',
  //   'тысяч', 'тысяча', 'тысячи', 'тысячи', 'тысячи', 'тысяч', 'тысяч', 'тысяч', 'тысяч', 'тысяч',
  //   'миллионов', 'миллион', 'миллиона', 'миллиона', 'миллиона', 'миллионов', 'миллионов', 'миллионов', 'миллионов', 'миллионов',
  //   'миллиардов', 'миллиард', 'миллиарда', 'миллиарда', 'миллиарда', 'миллиардов', 'миллиардов',
  //   'миллиардов', 'миллиардов', 'миллиардов'];
  // M: any[] = new Array(10);
  // R: any[] = new Array('рублей', 'рубль', 'рубля', 'рубля', 'рубля', 'рублей', 'рублей', 'рублей', 'рублей', 'рублей');
  // K: any[] = new Array('копеек', 'копейка', 'копейки', 'копейки', 'копейки', 'копеек', 'копеек', 'копеек', 'копеек', 'копеек');

  // constructor() {}

  // transform(value: any, ...args: any[]): any {
  //   for (this.j = 0; this.j < 10; ++this.j) {
  //     this.M[this.j] = new Array(this.N.length);
  //   }

  //   for (this.i = 0; this.i < this.N.length; this.i++) {
  //     for (this.j = 0; this.j < 10; this.j++) {
  //       this.M[this.j][this.i] = this.N[this.k++];
  //     }
  //   }

  //   return this.num2str(value);
  // }


  // // num2str(money, target) {
  // num2str(money) {
  //   this.rub = '', this.kop = '';
  //   money = money.replace(',', '.');
  //   if (isNaN(money)) {
  //     return 'Не числовое значение';
  //   }
  //   if (money.substr(0, 1) === '-') {
  //     money = money.substr(1);
  //     this.minus = 'минус ';
  //   } else {
  //     this.minus = '';
  //   }
  //   money = Math.round(money * 100) / 100 + '';
  //   if (money.indexOf('.') !== -1) {
  //     this.rub = money.substr(0, money.indexOf('.'));
  //     this.kop = money.substr(money.indexOf('.') + 1);
  //     if (this.kop.length === 1) {
  //       this.kop += '0';
  //     }
  //   } else {
  //     this.rub = money;
  //   }
  //   if (this.rub.length > 12) {
  //     return 'Слишком большое число';
  //   }
  //   debugger;
  //   const ru = this.propis(this.price = this.rub, this.R);
  //   debugger;
  //   const ko = this.propis(this.price = this.kop, this.K);
  //   // const ru = this.propis(this.rub, this.R);
  //   // const ko = this.propis(this.kop, this.K);
  //   let res = '';


  //   ko !== '' ? res = ru + ' ' + ko : res = ru;
  //   ru === 'Ноль ' + this.R[0] && ko !== '' ? res = ko : 0;
  //   this.kop === 0 ? res += ' ноль ' + this.K[0] : 0;
  //   return (this.minus + res).substr(0, 1).toUpperCase() + (this.minus + res).substr(1);
  // }

  // propis(price, D) {
  //   debugger;
  //   let litera = '';
  //   for (let i = 0; i < price.length; i += 3) {
  //     this.sotny = this.desatky = this.edinicy = '';
  //     if (this.n(i + 2, 2) > 10 && this.n(i + 2, 2) < 20) {
  //       this.edinicy = ' ' + this.M[this.n(i + 1, 1)][1] + ' ' + this.M[0][i / 3 + 3];
  //       i === 0 ? this.edinicy += D[0] : 0;
  //     } else {
  //       this.edinicy = this.M[this.n(i + 1, 1)][0];
  //       (this.edinicy === 'один' && (i === 3 || D === this.K)) ? this.edinicy = 'одна' : 0;
  //       (this.edinicy === 'два' && (i === 3 || D === this.K)) ? this.edinicy = 'две' : 0;
  //       i === 0 && this.edinicy !== '' ? 0 : this.edinicy += ' ' + this.M[this.n(i + 1, 1)][i / 3 + 3];
  //       this.edinicy === ' ' ? this.edinicy = '' : (this.edinicy === ' ' + this.M[this.n(i + 1, 1)][i / 3 + 3]) ? 0 : this.edinicy = ' ' + this.edinicy;
  //       i === 0 ? this.edinicy += ' ' + D[this.n(i + 1, 1)] : 0;
  //       (this.desatky = this.M[this.n(i + 2, 1)][2]) !== '' ? this.desatky = ' ' + this.desatky : 0;
  //     }
  //     (this.sotny = this.M[this.n(i + 3, 1)][3]) !== '' ? this.sotny = ' ' + this.sotny : 0;
  //     if (price.substr(price.length - i - 3, 3) === '000' && this.edinicy === ' ' + this.M[0][i / 3 + 3]) { this.edinicy = ''; }
  //     litera = this.sotny + this.desatky + this.edinicy + litera;
  //   }
  //   if (litera === ' ' + this.R[0]) {
  //     return 'ноль' + litera;
  //   } else {
  //     return litera.substr(1);
  //   }
  // }

  // n(start, len) {
  //   if (start > this.price.length) {
  //     return 0;
  //   } else {
  //     return Number(this.price.substr(this.price.length - start, len));
  //   }
  // }



  constructor() {}

  transform(value: any, ...args: any[]): any {
    return value;
  }
}
