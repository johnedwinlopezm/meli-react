import { useNavigate } from 'react-router-dom';
import { Item } from '../../../shared/models/item';
import styles from './Info-item.module.sass'

const shipping = 'ic_shipping.png';

interface InfoProps {
    item:Item
}

export const InfoItem = (props: InfoProps) => {
    const item = props.item
    const navigate = useNavigate();
    const goDescription = () => {
        navigate({
            pathname: `/items/${item.id}`,
        });
    }
    const line = item.isFirts ? '': 'boderLine';
    return (
        <div className={styles.containerItem + ' ' + styles[line]} onClick={goDescription} >
            <div className={styles.image}>
                <img src={item.picture} title="picture"/>
            </div>
            <div className={styles.description}>
                <div className="price-list">{ '$ '+item.price.amount }<img src={shipping}/></div>
                <div className="text-list">{ item.title }</div>
            </div>
            <div className={styles.ubicacion}>
                <div className="text-small">{ item.condition }</div>
            </div>
        </div >
    );

}