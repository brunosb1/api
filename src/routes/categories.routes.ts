// rodar a aplicação com yarn dev

import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryServices } from "../services/CreateCategoryServices";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryServices(
        categoriesRepository
    );

    createCategoryService.execute({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const getCategory = categoriesRepository.list();

    return response.json({ getCategory });
});

export { categoriesRoutes };
