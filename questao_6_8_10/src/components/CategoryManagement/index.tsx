import { useState } from "react";
import { useCategories } from "../../context/CategoryContext";
import { ATTENDANCES } from "../../services/category";
import CheckIcon from "../icons/CheckIcon";
import TrashCanIcon from "../icons/TrashCanIcon";
import { Modal } from "../Modal";
import './style.css';

const randomColors = [
    { color: "#DEDEDE", background: "#06064b", icon: "#FF0"},
    { color: "#DEDEDE", background: "#4a4a8a", icon: "#FF0"},
    { color: "#DEDEDE", background: "#4A7C8A", icon: "#FF0"},
    { color: "#DEDEDE", background: "#4A8A87", icon: "#FF0"},
    { color: "#292929", background: "#3AA79A", icon: "#06064b"},
    { color: "#292929", background: "#26B142", icon: "#06064b"},
    { color: "#292929", background: "#DFE36B", icon: "#06064b"},
];

const CategoryManagement = () => {
    const [ categoryToRemove, setCategoryToRemove] = useState<number>();
    const [ showErrorModal, setErrorModal] = useState<boolean>(false);

    const { categories, removeCategory } = useCategories();

    const handleRemoveCategory = () => {
        if (categoryToRemove != null){
            const category = categories[categoryToRemove];

            if (category.attendance === "Mensal"){
                return setErrorModal(true);
            }

            removeCategory(categoryToRemove);
            setCategoryToRemove(undefined);
        }
    }

    const handleOpenRemoveModal = (index: number) => {
        const category = categories[index];
        
        setCategoryToRemove(index);

        if (category.attendance === "Mensal"){
            setErrorModal(true);
        }
    }

    return (
        <section className="category-tab-container__management">
                <h1>Resumo</h1>
                <h3>Gestores de Área</h3>
                <section className="category-tab-container__management__list">
                    {categories.map(({ category, attendance }, i) => {
                        const random = randomColors[i];

                        return (
                            <div
                                key={`management-item-${i}`}
                                className="category-tab-container__management__item" style={{backgroundColor: random.background}}>
                                <span style={{ color: random.color }}>{category}</span>
                                <select>
                                    {ATTENDANCES.map((defaultAttendance) => (
                                        <option value={defaultAttendance} selected={defaultAttendance === attendance}>{defaultAttendance}</option>
                                    ))}
                                </select>
                                <button type="button" onClick={() => handleOpenRemoveModal(i)}>
                                    <TrashCanIcon
                                        fill={random.icon}
                                        width="24"
                                        height="24"/>
                                </button>
                            </div>
                        )
                    })}
                </section>
                <section className="category-tab-management-actions">
                    <button
                        type="button">
                        <CheckIcon
                            width="16"
                            height="16"
                            fill="currentColor"/>
                        Ativar categoria
                    </button>
                    <button
                        type="button"
                        disabled>
                        Salvar alterações
                    </button>
                </section>
                { (categoryToRemove != null && (categoryToRemove <= categories.length)) && (
                    <Modal
                        text=""
                        title={`Deseja remover a categoria ${categories[categoryToRemove].category}?`}
                        actions={
                            <>
                                <button
                                    className="category-tab-modal-action"
                                    onClick={() => handleRemoveCategory()}>
                                    Sim
                                </button>
                                <button
                                    className="category-tab-modal-action"
                                    onClick={() => setCategoryToRemove(undefined)}>
                                    Não
                                </button>
                            </>
                        }/>
                )}
                {
                    (showErrorModal) && (categoryToRemove != null) && (
                        <Modal
                            text="Não é possível excluir uma categoria que possua a recorrência como Mensal"
                            title={`Erro ao Remover Categoria ${categories[categoryToRemove].category}?`}
                            actions={
                                <>
                                    <button
                                        className="category-tab-modal-action"
                                        onClick={() => {
                                            setErrorModal(false);
                                            setCategoryToRemove(undefined);
                                        }}>
                                        Ok
                                    </button>
                                </>
                            }/>
                    )
                }
        </section>
    )
}

export {
    CategoryManagement
}