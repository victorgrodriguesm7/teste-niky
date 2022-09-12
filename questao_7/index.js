const express = require('express');
const CategoryModel = require('./model/CategoryModel').modules;
const mockCategoryModel = require('./mock/CategoryModel').modules;
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/categorias-aleatorio', (req, res) => {
    const { amount = 25 } = req.query;

    const mocks = Array.from({ length: amount }, (_) => mockCategoryModel().toJson());

    return res.status(200).json({
        categories: mocks
    });
});

app.get('/categorias', (req, res) => {
    const mocks = [
        new CategoryModel(
            "Alimentação",
            "Diária",
            45.5,
            63700.00,
            70
        ),
        new CategoryModel(
            "Combustível",
            "Mensal",
            100.00,
            3500.00,
            35
        ),
        new CategoryModel(
            "Cultura",
            "Mensal",
            100.00,
            4200.00,
            32
        ),
        new CategoryModel(
            "Educação",
            "Anual",
            1200.00,
            42000.00,
            32
        ),
        new CategoryModel(
            "Flexível",
            "Mensal",
            120.00,
            7200.00,
            60
        ),
        new CategoryModel(
            "Transporte",
            "Diária",
            12.00,
            8400.00,
            35
        ),
        new CategoryModel(
            "Saúde",
            "Mensal",
            420.00,
            41160.00,
            70
        ),
    ];

    return res.status(200).json({
        categories: mocks.map((mock) => mock.toJson())
    });
});
app.listen(process.env.PORT || 3000, () => {
    console.log("Listening 3000")
});
