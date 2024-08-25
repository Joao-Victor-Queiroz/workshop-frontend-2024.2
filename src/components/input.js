

import styles from '../styles/input.module.css';

export default function Input({ type, name, placeholder, value, onChange }){

    return(
        <div className={styles.pesquisa_site}>
            <label htmlFor="name"></label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}