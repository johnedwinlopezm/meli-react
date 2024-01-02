import { createContext, useState } from "react";
import styles from './Toolbar.module.sass'

const logo = 'Logo_ML.png';
const search = 'ic_Search.png';
const inputPlaceHolder = 'Nunca dejes de buscar';
const SearchContext = createContext(null);

export const Toolbar = () => {
    const [product, setProduct] = useState('');
    function redirect() {
        
    }
    return (
        
        <div className={styles.toolbarContainer}>
            <div><img src={logo} title="logo"/></div>
            <div className={styles.inputContainer}>
                <input className={styles.inputField} type="text" placeholder={inputPlaceHolder} value={product} onChange={e => setProduct(e.target.value)}/>
                <div className={styles.search} onClick={redirect}><img src={search} title="search"/></div>
            </div>
        </div >
    );

}