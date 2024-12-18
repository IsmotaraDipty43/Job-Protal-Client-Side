import React, { useEffect, useState } from 'react';
import useAuth from './hooks/useAuth';
import axios from 'axios'; // Ensure axios is imported
const MyApplication = () => {
    const { user } = useAuth(); // Ensure useAuth is working properly
    const [jobs, setJobs] = useState([]); // Fixed typo and initialized with an empty array

    useEffect(() => {
      if (user?.email) { 
        axios.get(`http://localhost:5000/job-applications?email=${user.email}`, { 
          withCredentials: true 
        })
        .then(res => {
          console.log(res.data); 
          setJobs(res.data); 
        })
        .catch(error => console.error("Error fetching jobs:", error));
      }
    }, [user?.email]);

    return (
        <div>
            <h2 className="text-3xl">
                My Applications: {jobs?.length || 0}
                <div className="overflow-x-auto">
                <table className="table">
  {/* head */}
  <thead>
    <tr>
      <th></th>
      <th>Job Title</th>
      <th>Company</th>
      <th>Company Logo</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {jobs.map((job, index) => (
      <tr key={job._id} className="bg-base-200">
        <th>{index + 1}</th> {/* Display index starting from 1 */}
        <td>{job.title}</td> {/* Display the job title */}
        <td>{job.company}</td> {/* Display the company name */}
        <td>
          <img 
            src={job.company_logo} 
            alt={`${job.company} logo`} 
            className="w-10 h-10" 
          /> {/* Display the company logo */}
        </td>
        <td className='btn bg-black text-white'>X</td> {/* Display the company name */}
      </tr>
    ))}
  </tbody>
</table>

</div>
            </h2>
        </div>
    );
};

export default MyApplication;
