import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header> {/** fix thakbe*/} 
            {
                navigation.state === "loading" ? <span>Loading.....</span> :  <Outlet></Outlet>
            }
             
            



         <Footer></Footer> {/** fix thakbe*/} 
       
       
        </div>
    );
};

export default Home;