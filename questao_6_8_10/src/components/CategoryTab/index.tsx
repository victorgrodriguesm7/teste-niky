import { useCategories } from '../../context/CategoryContext';
import { CategoryList } from '../CategoryList';
import './style.css';

const CategoryTab = () => {
    const { categories } = useCategories();

    return (
        <section className="category-tab-container">
            <div className="category-tab-container-header">
                <h1>Categorias</h1>

                <select>
                    <option value="-" disabled selected>Selecione um Grupo</option>
                </select>
            </div>
            <div>
                <CategoryList categories={categories}/>
            </div>
        </section>
    )
}

export {
    CategoryTab
};