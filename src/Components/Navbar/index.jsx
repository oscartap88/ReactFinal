
import Button from "../Button"
import CartWidget from "../CartWidget"
import styles from "./Navbar.module.css"
import { BsCart3 } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className={styles.Nav}>
        <p>Home</p>
        <p>Menú de Tragos</p>
        <p>Ingredientes</p>
        <p>Ofertas</p>
        <Button txtBtn="Mis Compras!"/>
        <CartWidget />
        <BsCart3 />
    </nav>
  )
}

export default Navbar