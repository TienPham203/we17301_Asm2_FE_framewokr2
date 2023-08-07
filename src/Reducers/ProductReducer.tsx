import { produce } from "immer"

const initialState: { products: any[], isLoading: boolean, error: string } = {
    products: [],
    isLoading: false,
    error: ''
}

const ProductReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case 'product/fetching':
                draftState.isLoading = true
                return;
            case 'product/fetchingSuccess':
                draftState.products = action.payload
                return;
            case 'product/fetchingError':
                draftState.error = action.payload
                return;
            case 'product/fetchingFinally':
                draftState.isLoading = false
                return;

            case 'product/fetchOne':
                const id = action.payload
                draftState.products = draftState.products.find((item: any) => item._id === id)
                return
            case 'product/add':
                draftState.products.push(action.payload)
                return

            case 'product/delete':
                const _id = action.payload
                draftState.products = draftState.products.filter((item: any) => item._id !== _id)
                return
            case 'product/update':
                const product = action.payload
                draftState.products = draftState.products.map((item: any) => item.id === product.id ? product : item)
                return
            default:
                break;
        }
    })

}

export default ProductReducer