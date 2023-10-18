import Banner from "./Banner";

import Navbar from "./Navbar";
import backgroundImage from './banner.jpg';

const Header = () => {
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed' // Keeps the background fixed while scrolling
    };
    return (
        <div  style={divStyle}>
       
            <Navbar ></Navbar>
            <Banner></Banner>
           
        </div>
    );
};

export default Header;