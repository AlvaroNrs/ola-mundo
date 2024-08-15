import {NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({children, to}){
    //const localizacao = useLocation();
    return (
        /* Adição condicional de classe a elemento */
        <NavLink className={({ isActive })=> `${styles.link} ${isActive? styles.linkDestacado : ""}`} to={to}>{children}</NavLink>
    );
}