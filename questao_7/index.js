const express = require('express');
const mockCategoryModel = require('./mock/CategoryModel').modules;

const app = express();

app.use(express.json());

app.get('/categorias', (req, res) => {
    const { amount = 25 } = req.query;

    const mocks = Array.from({ length: amount }, (_) => mockCategoryModel().toJson());

    return res.status(200).json({
        categories: mocks
    });
});

app.listen(3000, () => {
    console.log("Listening 3000")
});
