import { useParams } from "react-router-dom"
import { instance } from "../axios/config"
import { pause } from "../pause/pause"
export const fetchProduct = () => async (dispatch: any) => {

    dispatch({ type: "product/fetching" })
    try {
        await pause(1500)

        const { data } = await instance.get('products')
        await dispatch({ type: "product/fetchingSuccess", payload: data.data })



    } catch (error: any) {
        await dispatch({ type: "product/fetchingErrror", payload: error.message })
    } finally {
        await dispatch({ type: "product/fetchingFinally" })
    }
}

// export const fetchOneProduct = () => async (dispatch: any) => {
//     console.log("id", id);

//     try {
//         const data = await instance.get(`products/${_id}`)
//         console.log(data);
//         // await dispatch({ type: 'product/fetchOne', payload: data })


//     } catch (error) {

//     }
// }
