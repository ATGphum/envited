import React from "react"
import { useNavigate } from 'react-router-dom';
import styles from "./homepage.module.css"

const Home: React.FC = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.page}>
        <div className={styles.headerBar} onClick={() => navigate('/about')}>poopy</div>
        </div>
    )
}

export default Home;