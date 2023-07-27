import { instance } from "../axios/config"
import { pause } from "../pause/pause"
export const fetchProduct = () => async (dispatch: any) => {

    dispatch({ type: "product/fetching" })
    try {
        await pause(1000)

        const { data } = await instance.get('products')
        await dispatch({ type: "product/fetchingSuccess", payload: data.data })
        console.log(data.data);


    } catch (error: any) {
        await dispatch({ type: "product/fetchingErrror", payload: error.message })
    } finally {
        await dispatch({ type: "product/fetchingFinally" })
    }
}