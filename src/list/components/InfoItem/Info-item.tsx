import { Item } from '../../../models/item';
import styles from './Info-item.module.sass'

const shipping = '../../../assets/images/ic_shipping.png';

export const InfoItem = (item:Item, isFirst:boolean) => {

    return (
        <div className={styles.containerItem}  >
            <div className={styles.image}>
                <img src={item.picture} title="picture"/>
            </div>
            <div className={styles.description}>
                <div className="price-list">{ '$ '+item.price.amount }<img src={shipping}/></div>
                <div className="text-list">{ item.title }</div>
            </div>
            <div className="ubicacion">
                <div className="text-small">{ item.condition }</div>
            </div>
        </div >
    );

}