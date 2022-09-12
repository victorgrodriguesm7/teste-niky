export type Category = "Alimentação" | "Combustível" | "Cultura" | "Educação" | "Flexível" | "Transporte" | "Saúde";
export type Attendance = "Diária" | "Mensal" | "Anual" | "Semanal";
export const CATEGORIES = ["Alimentação" , "Combustível" , "Cultura" , "Educação" , "Flexível" , "Transporte" , "Saúde"];
export const ATTENDANCES = ["Diária", "Mensal", "Anual", "Semanal"];
export interface CategoryItem {
    category: Category;
    attendance: Attendance;
    price: number;
    totalPrice: number;
    recipientAmount: number;
}

interface DTO {
    categories: CategoryItem[] 
}

const BASE_URL = "https://niky-7.herokuapp.com";

const categoryService = {
    get: async (): Promise<DTO> => {
        return fetch(`${BASE_URL}/categorias`)
            .then((response) => {
                if (response.ok){
                    return response.json();
                }

                throw new Error(response.statusText);
            })
            .then((data) => {
                return data as DTO;
            })
            .catch((err) => ({ categories: []}) as DTO);
    }
}

export {
    categoryService
};