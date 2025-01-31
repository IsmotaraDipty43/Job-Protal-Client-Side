import React from 'react';
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const LAtesJobCard = ({job}) => {
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        status,
        hr_email,
        hr_name,
        company_logo,
      } = job;
      
      
    return (
        <div className='flex flex-col flex-grow mb-10'>
            <div className="card card-compact bg-base-100  shadow-xl p-4 h-full">
 <div className='flex'>
 <figure>
    <img
    className='w-12 gap-2'
      src={company_logo}
      alt={company} />
  </figure>
  <div className=''>
    <h4 className='text-lg text-black'>{company}</h4>

 <p className='text-gray-500 text-base flex  items-center gap-1'>    <FaMapMarkerAlt /> {location}</p>
 
  </div>
 </div>
  <div className="card-body">
    <h2 className="card-title">{title}

    <div className="badge bg-green-200">NEW</div>

    </h2>
    <p>{description}</p>
    <div className='flex gap-2 flex-wrap '>
        {

            requirements.map((skill, index) => <p key={index} className='border text-center px-2 hover:text-blue-300 rounded-lg'>{skill}</p>)
        }
    </div>
    <div className="card-actions justify-end items-center">
        <p className='flex items-center'> Salary: <FaDollarSign /> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
<Link to={`/jobs/${_id}`}>      <button className="btn btn-primary">Apply</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default LAtesJobCard;