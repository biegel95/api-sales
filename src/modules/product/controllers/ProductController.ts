import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProductService';
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';
import UpdateProductService from '../services/UpdateProductService';

class ProductController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const listProducts = new ListProductService();

        const products = await listProducts.execute();

        return response.json(products);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id_product } = request.params;

        const showProduct = new ShowProductService();

        const product = await showProduct.execute({ id_product });

        return response.json(product);
    }

    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { desc_product, price, quantity } = request.body;

        const createProduct = new CreateProductService();

        const product = await createProduct.execute({
            desc_product,
            price,
            quantity,
        });

        return response.json(product);
    }

    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { desc_product, price, quantity } = request.body;
        const { id_product } = request.params;

        const updateProduct = new UpdateProductService();

        const product = await updateProduct.execute({
            id_product,
            desc_product,
            price,
            quantity,
        });

        return response.json(product);
    }

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id_product } = request.params;

        const deleteProduct = new DeleteProductService();

        await deleteProduct.execute({ id_product });

        return response.json([]);
    }
}

export default ProductController;
