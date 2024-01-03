import { Toolbar } from './components/Toolbar';
import styles from './home.module.sass';
export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.containerHome}>
            <div className={styles.toolbar}>
                <Toolbar></Toolbar>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}