import { instance } from "./config";
export const getOneProduct = (id: any) => {
    return instance.get(`products/${id}`)
}