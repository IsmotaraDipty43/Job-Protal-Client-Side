import React, { useEffect, useState } from 'react';
import LAtesJobCard from './LAtesJobCard';

const Latestjobs = () => {

const [jobs,setJobs] = useState([])
useEffect(()=>{
    fetch('http://localhost:5000/jobs')
    .then(res=>res.json())
    .then(data=>{
        setJobs(data)
    })
},[])






    return (
        <div>
            <h1 className='m-10 text-center text-3xl font-bold'>Latest Jobs For You</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {
                    jobs.map(job=><LAtesJobCard key={job._id} job={job}></LAtesJobCard>)
                }
            </div>
        </div>
    );
};

export default Latestjobs;