import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const MypostedJob = () => {
    const {user} = useAuth()
    const [jobs, setJobs] = useState([])
    useEffect(()=>{
        fetch(`https://server-wheat-iota.vercel.app/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
        })
    },[])
    return (
        <div>
            <h2>My Posted Job</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>
        Company Name</th>
        <th>Job Title</th>
        <th>Deadline</th>
        <th>ApplicationCount</th>
        <th>View Application</th>
      </tr>
    </thead>
    <tbody>
    
    {
        jobs.map((job,ind)=>  <tr>
            <th>{ind+1}</th>
            <td>{job.company}</td>
            <td>{job.title}</td>
            <td>{job.applicationDeadline}</td>
            <td>{job.applicationCount}</td>
            <td><Link to={`/viewApplication/${job._id}`}><button className='btn btn-link'>View Application</button></Link></td>
          </tr>)
    }

    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MypostedJob;