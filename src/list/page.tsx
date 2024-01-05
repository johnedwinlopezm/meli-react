import { useEffect, useState } from "react";
import { SearchProductServices } from "../shared/services/searchProductServices"
import { InfoItem } from "./components/InfoItem";
import { Search } from "../models/search";
import { useParams, useSearchParams } from "react-router-dom";
import styles from "./list.module.sass"
import { BreadCrumb } from "../shared/components/breadcrumb";

interface ListPageProps {
    searchParams: {
        nameProduct: string
    }
}

const searchServices = SearchProductServices.getInstance();

export default function List() {
    const [searchParams] = useSearchParams();
    // const [name, setName] = useState<string>('');
    const myParam = searchParams.get('search')!;
    const [products, setData] = useState<Search>()
    useEffect(() => {
        const GetProducts = async () => {
            const response = await searchServices.getProducts(myParam);
            if (response.categories) {
                searchServices.setCategorias(response.categories);
            }
            setData(response)
        }
        GetProducts();
    }, [products])
    // const nameProduct = props?.searchParams.nameProduct;
    return (

        <div>
            <BreadCrumb categories={products?.categories!}/>

            <div className={styles.containerList}>
                {products?.items?.map((producto, index) => {
                    producto.isFirts= index === 0; 
                    return <InfoItem key={producto.id} item={producto} />
                })}
            </div>
        </div>
    )
}