import Axios from "axios";
import { Order, Product } from "./entities";

// const protocol = "http";
// const hostname = "localhost";
// const port = 4600;
// const urls ={
//     products: `${protocol}://${hostname}:${port}/products`,
//     orders: `${protocol}://${hostname}:${port}/orders`
// };

const urls ={
        products: `/api/products`,
        orders: `/api/orders`
};

export class HttpHandler {
    loadProducts(): Promise<Product[]> {
        return Axios.get<Product[]>(urls.products).then(response => response.data);
    }

    storeOrder(order: Order): Promise<number> {
        const orderData = {
            lines: [...order.orderLines.values()].map(ol => ({
                productId: ol.product.id,
                productName: ol.product.name,
                quantity: ol.quantity
            }))
        }
        return Axios.post<{id: number }>(urls.orders, orderData)
            .then(response => response.data.id);
    }
}
