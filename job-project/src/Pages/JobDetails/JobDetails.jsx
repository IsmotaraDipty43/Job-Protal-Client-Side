import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();

  

    return (
        <div className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
            <div className="flex items-center mb-6">
                <img
                    src={job.company_logo}
                    alt={`${job.company} logo`}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <p className="text-gray-600">{job.company}</p>
                </div>
            </div>
            <div className="mb-4">
                <p className="text-gray-800 font-medium">Location:</p>
                <p className="text-gray-600">{job.location}</p>
            </div>
            <div className="mb-4">
                <p className="text-gray-800 font-medium">Job Type:</p>
                <p className="text-gray-600">{job.jobType}</p>
            </div>
            <div className="mb-4">
                <p className="text-gray-800 font-medium">Salary Range:</p>
                <p className="text-gray-600">
                    {job.salaryRange.min}-{job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
                </p>
            </div>
            <div className="mb-4">
                <p className="text-gray-800 font-medium">Description:</p>
                <p className="text-gray-600">{job.description}</p>
            </div>
            <div className="mb-4">
                <p className="text-gray-800 font-medium">Requirements:</p>
                <ul className="list-disc list-inside text-gray-600">
                    {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <p className="text-gray-800 font-medium">Responsibilities:</p>
                <ul className="list-disc list-inside text-gray-600">
                    {job.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <p className="text-gray-800 font-medium">Application Deadline:</p>
                <p className="text-gray-600">{job.applicationDeadline}</p>
            </div>
            <div className="mt-6">
                <p className="text-gray-800 font-medium">Contact HR:</p>
                <p className="text-gray-600">
                    {job.hr_name} ({job.hr_email})
                </p>
            </div>
          <Link to={`/jobapply/${job._id}`}>  <button
                
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Apply Now
            </button></Link>
        </div>
    );
};

export default JobDetails;
