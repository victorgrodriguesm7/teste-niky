import { CategoryItem } from "../../services/category";
import './style.css';

interface Props {
    categories: CategoryItem[];
}

const formater = new Intl.NumberFormat(['pt-Br'], {
    minimumFractionDigits: 2
});

const CategoryList = ({ categories }: Props) => {
    return (
        <table className="category-list-table">
            <tr className="category-list-header">
                <th>Categoria</th>
                <th>Frequência</th>
                <th>Valor</th>
                <th>Valor Total</th>
            </tr>
            {categories.map((category, i) => {
                return (
                    <tr
                        key={`category-list-item-${i}`}
                        className="category-list-item">
                        <td>{category.category}</td>
                        <td>{category.attendance}</td>
                        <td><strong className="category-list-item__currency">R$</strong>{formater.format(category.price)}</td>
                        <td><strong className="category-list-item__currency">R$</strong>{formater.format(category.totalPrice)}</td>
                    </tr>
                )
            })}
        </table>
    )
}

export {
    CategoryList
};