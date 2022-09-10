const { faker } = require('@faker-js/faker');
const CategoryModel = require('../model/CategoryModel').modules;

exports.modules = function mockCategoryModel(){
    const categories = ["Alimentação", "Combustível", "Cultura", "Educação", "Flexível", "Transporte", "Saúde"];
    const attendances = ["Diária", "Mensal", "Anual", "Semanal"];
    
    const category = faker.helpers.arrayElement(categories);
    const attendance = faker.helpers.arrayElement(attendances);
    const price = Number(Number(faker.finance.amount()).toFixed(2));
    const totalPrice = Number(Number(faker.finance.amount(100, 10000)).toFixed(2));
    const recipientAmount = Number(faker.finance.amount(1, 100));

    return new CategoryModel(
        category,
        attendance,
        price,
        totalPrice,
        recipientAmount
    );
}