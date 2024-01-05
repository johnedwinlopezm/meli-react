import { useEffect, useState } from "react";
import { useActionData, useParams } from "react-router-dom";
import { SearchProductServices } from "../shared/services/searchProductServices";
import { ItemDesResponse } from "../shared/models/itemdesResponse";
import styles from "./description.module.sass"
import { BreadCrumb } from "../shared/components/breadcrumb";

const searchServices = SearchProductServices.getInstance();

export default function Description() {
    const titleDescription = 'Descripcion del producto';
    const [ItemDesResponse, setData] = useState<ItemDesResponse>();
    const [categorias, setCategorias] = useState<string[]>([]);
    const { id } = useParams();
    useEffect(() => {
        const GetProducts = async () => {
            const response = await searchServices.getDescriptionProduct(id!);
            setCategorias(searchServices.getCategorias());
            setData(response)
        }
        GetProducts();
    }, [])
    return (
        <div>
            <BreadCrumb categories={categorias!}/>
            <div className={styles.containerDetail} >
                <div className={styles.imagen}>
                    <div className={styles.row1}>
                        <img src={ItemDesResponse?.item.picture} title="picture" />
                        <div className={styles.description}>
                            <div className="title">{titleDescription}</div>
                            <div className="text-general" >{ItemDesResponse?.item.description}</div>
                        </div>
                    </div>
                    <div className={styles.row2}>
                        <div className={styles.col1}>{ItemDesResponse?.item.condition + ' ' + ItemDesResponse?.item.sold_quantity + ' vendidos'}</div>
                        <div className={styles.col2 + " title-price"}>{ItemDesResponse?.item.title}</div>
                        <div className={styles.col3 + " price"}>{ItemDesResponse?.item.price.amount}</div>
                        <div className={styles.col4}><button className="my-button">Comprar</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}