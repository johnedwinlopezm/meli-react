import { useEffect, useState } from "react";
import { SearchProductServices } from "../services/searchProductServices"
import { InfoItem } from "./components/InfoItem";
import { Search } from "../models/search";
import { useParams, useSearchParams } from "react-router-dom";
import styles from "./list.module.sass"

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
            <div className={styles.breadcrumb} >
                {products?.categories.map((categoria,index) => {
                    let content;
                    if(index+1 !== products?.categories.length) {
                        content =(<label className="text-brand">{categoria + '>'}</label>);
                    } else { 
                        content =(<label className="text-brand-b" >{ categoria }</label>);
                    }
                    return (content)
                })
                }
            </div>

            <div className={styles.containerList}>
                {products?.items?.map((producto, index) => {
                    producto.isFirts= index === 0; 
                    return <InfoItem key={producto.id} condition={producto.condition} free_shipping={producto.free_shipping}
                        id={producto.id} picture={producto.picture} price={producto.price} title={producto.title} isFirts={producto.isFirts} />
                })}
            </div>
        </div>
    )
}