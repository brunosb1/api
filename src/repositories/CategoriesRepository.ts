import { Category } from "../models/Category";

// DTO - DATA TRANSFER OBJECT
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    // função void nao vai ter retorno nenhum, está função cria uma categoria na memoria do array
    create({ description, name }: ICreateCategoryDTO): void {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });
        this.categories.push(category);
    }

    // listando categorias
    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const findCategory = this.categories.find(
            (category) => category.name === name
        );
        return findCategory;
    }
}

export { CategoriesRepository };
