import { createContext, useState } from "react";
import styles from './Toolbar.module.sass'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const logo = 'Logo_ML.png';
const search = 'ic_Search.png';
const inputPlaceHolder = 'Nunca dejes de buscar';
const SearchContext = createContext(null);

export const Toolbar = () => {
    const [product, setProduct] = useState('');
    const navigate = useNavigate();
    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            //navigate(`/users/${product}`);
            navigate({
                pathname: '/items',
                search: `?search=${product}`,
            });
        }
    }
    return (

        <div className={styles.toolbarContainer}>
            <div><img src={logo} title="logo" /></div>
            <div className={styles.inputContainer}>
                <input className={styles.inputField}
                    type="text" placeholder={inputPlaceHolder}
                    value={product}
                    onChange={e => setProduct(e.target.value)}
                    onKeyUp={handleKeyPress}
                />
                <div className={styles.search}><Link to={`/items?search=${product}`} ><img src={search} title="search" /></Link></div>
            </div>
        </div >
    );

}