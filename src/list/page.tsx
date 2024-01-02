import { SearchProductServices } from "../services/searchProductServices"
import { InfoItem } from "./components/InfoItem";


const searchServices = SearchProductServices.getInstance();

export default async function List() {
    const products = await searchServices.getProducts('');
    return (
        <div>
            {products?.items?.map(producto => {
                return <InfoItem key={producto.id} condition={producto.condition} free_shipping={producto.free_shipping} 
                id={producto.id} picture={producto.picture} price={producto.price} title={producto.title}  />
            })}
        </div>
    )
}