import React from 'react';
import MeliComponent from './meliComponent';
import TmiaComponent from './tdmiaComponent';
import EbayComponent from './ebayComponent';


const Home = () => {
    return ( 
        <div>
            <h1>HOME</h1>
        <MeliComponent />
        <TmiaComponent />
        <EbayComponent />
        </div>
     );
}
 
export default Home;