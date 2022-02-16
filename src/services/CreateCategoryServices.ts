import { CategoriesRepository } from "../repositories/CategoriesRepository";

// criando a interface de request, não é responsabilidade da nossa service saber sobre o request então ela vai ficar como interface
interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryServices {
    // jogando a responsabilidade para quem for usar a classe service ao inves de estanciar toda vez a categoriesRepository
    constructor(private categoriesRepository: CategoriesRepository) {}
    execute({ description, name }: IRequest): void {
        // antes da inserção vamos verificar se nao existe alguma categoria com o mesmo nome
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);
        // Fazendo a verificação se existe alguma categoria pelo nome, se sim ele manda uma throw error
        if (categoryAlreadyExists) {
            throw new Error("Category Already exists");
        }

        // adicionando uma nova categoria ao array []
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryServices };
