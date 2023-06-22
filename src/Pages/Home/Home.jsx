import Banner from './Banner';
import Gallery from './Gallery';
import About from './About';
import Latest from './Latest';
import useTitle from '../../TitleHook/TitleHook';
import SubCategory from './SubCategory';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <SubCategory></SubCategory>
            <About></About>
            <Latest></Latest>
        </div>
    );
};

export default Home;