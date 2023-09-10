import fetchApi from "../utils/fetchApi";
import getAllProductsQuery from "../utils/queries/getAllProducts";
import { ProductConnection } from "../schema";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({
    query: getAllProductsQuery,
  });

  

  return data.products;
};

export default getAllProducts;
