import React from 'react';
import BAnner from './BAnner';
import Latestjobs from './Latestjobs';

const Home = () => {
    return (
        <div className='bg-white'>
          <BAnner></BAnner>
          <Latestjobs></Latestjobs>
        </div>
    );
};

export default Home;