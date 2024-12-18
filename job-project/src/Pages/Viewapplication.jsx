import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Viewapplication = () => {
    const jobs = useLoaderData()
    const handleStatusupdate=(e, id)=>{
    e.preventDefault()
    const data = {
        status: e.target.value
    }
    fetch(`http://localhost:5000/job-applications/${id}`,{
     method:'PATCH',
     headers:{
        'content-type':'application/json'
     },
     body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
    }
    return (

        <div>
            <h2 className='text-3xl'>Application For This Jobs: {jobs.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Resume</th>

        <th>Update Status</th>
    
      </tr>
    </thead>
    <tbody>
    
    {
        jobs.map((job,ind)=>  <tr>
            <th>{ind+1}</th>
            <td>{job.application_email}</td>
            <td>{job.resume}</td>
    
           <td>

           <select onChange={(e)=>handleStatusupdate(e,job._id)} defaultValue={job.status || 'Change Status'} className="select select-bordered select-xs w-full max-w-xs">
  <option disabled >Change Status</option>
  <option>Under Review</option>
  <option>Set InterView</option>
  <option>Hierd</option>
  <option>Rejected</option>
</select>

           </td>
          </tr>)
    }

    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Viewapplication;