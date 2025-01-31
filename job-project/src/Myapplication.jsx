import React, { useEffect, useState } from 'react';
import useAuth from './hooks/useAuth';
import UseAxiosSecure from './hooks/UseAxiosSecure';

const MyApplication = () => {
    const { user } = useAuth(); 
    const [jobs, setJobs] = useState([]); 
    const [error, setError] = useState(null); 
    const axiossecure = UseAxiosSecure();

    useEffect(() => {
        if (!user?.email) {
            setError("User is not authenticated. Please log in.");
        } else {
            axiossecure
                .get(`/job-applications?email=${user.email}`, { withCredentials: true })
                .then((res) => setJobs(res.data))
                .catch((err) => setError(`Failed to load job applications: ${err.message}`)); 
        }
    }, [user?.email]); 

    const handleRemoveApplication = (jobId) => {
        axiossecure
            .patch(`/job-applications/${jobId}`, { status: 'removed' }, { withCredentials: true })
            .then((response) => {
                console.log('Application removed', response);
                setJobs(jobs.filter((job) => job._id !== jobId)); // Remove from UI
            })
            .catch((error) => {
                setError(`Failed to remove application: ${error.message}`);
            });
    };

    return (
        <div>
            <h2 className="text-3xl">
                My Applications: {jobs?.length || 0}
            </h2>
            {error && <div className="text-red-500">{error}</div>} {/* Display error message */}
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
                        {jobs?.length ? (
                            jobs.map((job, index) => (
                                <tr key={job._id} className="bg-base-200">
                                    <th>{index + 1}</th> 
                                    <td>{job.title}</td> 
                                    <td>{job.company}</td> 
                                    <td>
                                        <img 
                                            src={job.company_logo} 
                                            alt={`${job.company} logo`} 
                                            className="w-10 h-10" 
                                        /> 
                                    </td>
                                    <td className="btn bg-black text-white" onClick={() => handleRemoveApplication(job._id)}>
                                        X
                                    </td> 
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No applications available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplication;
