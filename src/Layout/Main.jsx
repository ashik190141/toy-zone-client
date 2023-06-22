import Navbar from '../Pages/Shared/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import LoadingSpinner from '../Pages/LoadSpinner/LoadingSpinner';


const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            <div>
                {
                    navigation.state === 'loading' && <LoadingSpinner></LoadingSpinner>
                }
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;