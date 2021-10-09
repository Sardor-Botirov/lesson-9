// Описание  Д/З

// вам нужно найти сколько одинаковых продуктов в массиве продактс
// и создать новый ключ коунт внутри которого кол-во продукта

let products = [
    {
        name: 'молоко',
        type: 'milk',
    },
    {
        name: 'лимон',
        type: 'fruits',
    },
    {
        name: 'Кефир',
        type: 'milk',
    },
    {
        name: 'Помидоры',
        type: 'fruits',
    },
    {
        name: 'Огурцы',
        type: 'fruits',
    },
    {
        name: 'Сметана',
        type: 'milk',
    },
    {
        name: 'яблоко',
        type: 'fruits',
    },
    {
        name: 'йогурт',
        type: 'milk',
    },
    {
        name: 'Говядина',
        type: 'meat',
    },
    {
        name: 'Курятина',
        type: 'meat',
    },
    {
        name: 'Баранина',
        type: 'meat',
    },
]

let categories = [
    {
        count: 0,
        type: 'milk',
    },
    {
        count: 0,
        type: 'fruits',
    },
    {
        count: 0,
        type: 'meat',
    },
]

for (let categ of categories) {
    for (let product of products) {
        if (product.type === categ.type) {
            categ.count++
        }
    }
}

// for(let item of products) {
//     console.log(item);
// }

console.log(categories);
console.log(products);