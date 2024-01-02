import { Toolbar } from './components/Toolbar';
import styles from './home.module.sass';
export default function HomeLayout({ children }: { children: React.ReactNode , isPending:boolean}) {
    return(
     <div>
        <Toolbar></Toolbar>
        {children}
     </div>
    );
}