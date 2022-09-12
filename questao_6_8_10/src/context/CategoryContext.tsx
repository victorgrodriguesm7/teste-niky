import { createContext, useContext, useEffect, useState } from "react";
import { CategoryItem, categoryService } from "../services/category";

interface Props {
    children: React.ReactNode;
}

interface Context {
    categories: CategoryItem[];

    removeCategory: (index: number) => void;
}

const context = createContext<Context>({
    categories: [],
    removeCategory: (index: number) => {}
});

export const CategoryProvider = ({ children }: Props) => {
    const [categories, setCategories] = useState<CategoryItem[]>([]);

    useEffect(() => {
        categoryService.get()
            .then(({ categories }) => setCategories(categories));
    }, []);

    const removeCategory = (index: number) => {
        setCategories((categories) => categories.filter((_, i) => i !== index));
    }

    const state = {
        categories,
        removeCategory
    } as Context;

    return (
        <context.Provider value={state}>
            { children }
        </context.Provider>
    )
}
export const useCategories = () => {
    return useContext(context);
}