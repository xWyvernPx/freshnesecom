import {axiosClient} from "./axiosClient"
class CartAPI {
    async getCartByAccount(accountId) {
        const url = `/cart/${accountId}`
        const data = await axiosClient.get(url);
        return data
    }
}
export default new CartAPI();