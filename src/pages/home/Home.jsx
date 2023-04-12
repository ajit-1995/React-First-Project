import React from "react";
import './home.scss';
import Sidebar from "../../components/layout/sidebar/Sidebar";

const Home = () => {
    return(
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">container</div>
        </div>
    )
}

export default Home;