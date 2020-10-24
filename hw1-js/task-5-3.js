 // Write code under this line
class Storage {
      
constructor(items) {
    this.items = items;
      }
      
      getItems() { 
          return this.items;
      };
// - возвращает массив текущих товаров
      addItem(item) { 
          return this.items.push(item);
    };
// - получает новый товар и добавляет его к текущим
    removeItem(item) { 

        
        this.items.splice((this.items.indexOf(item)),1);
    };
// - получает товар и, если он есть, удаляет его из текущих

}


console.log(typeof Storage);
// 'function'

const goods = [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem('Пролонгер');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

