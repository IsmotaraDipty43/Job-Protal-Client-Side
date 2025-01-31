import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

const AddJob = () => {
    const {user} = useAuth()
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Create a FormData object
  
 const formData = new FormData(event.target)
    // Convert FormData to a JavaScript object

const jobData = Object.fromEntries(formData.entries())

    console.log(jobData); 
    const {min,max,currency,...newJOb} = jobData
    console.log(newJOb);
    newJOb.salaryRange = {
        min,
        max,
        currency
    }
    newJOb.
    requirements
     = newJOb.
     requirements
     .split(',')
    newJOb.responsibilities = newJOb.responsibilities.split(',')
 
    console.log(newJOb);
    fetch('https://server-wheat-iota.vercel.app/jobs',{
       method:'POST',
       headers:{
           'content-type' : 'application/json'
       },
       body:JSON.stringify(newJOb)
    })
    .then(res=>res.json())
    .then(data=>{

         if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "JOb added succesfuly",
                        showConfirmButton: false,
                        timer: 1500
                      })
                      navigate('/mypostjob')
            
                }
    })

  };

  return (
    <div>
      <form className="card-body" id="jobForm" onSubmit={handleSubmit}>
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Software Engineer"
            name="title"
            className="input input-bordered"
            required
          />
        </div>

        {/* Job Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            placeholder="Halishohor, Chittagong"
            name="location"
            className="input input-bordered"
            required
          />
        </div>

        {/* Job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <input
            type="text"
            placeholder="Hybrid"
            name="jobType"
            className="input input-bordered"
            required
          />
        </div>

        {/* Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            placeholder="Engineering"
            name="category"
            className="input input-bordered"
            required
          />
        </div>

        {/* Application Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Application Deadline</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            className="input input-bordered"
            required
          />
        </div>

        {/* Salary Range */}
        <label className="label">
            <span className="label-text">Salary Range</span>
          </label>
     <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>

     <div className="form-control">
          <label className="label">
            <span className="label-text">Max</span>
          </label>
          <input
            type="text"
            placeholder="Max"
            name="max"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Min</span>
          </label>
          <input
            type="text"
            placeholder="Min"
            name="min"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Currency</span>
          </label>
          <input
            type="text"
            placeholder="Currency"
            name="currency"
            className="input input-bordered"
            required
          />
        </div>
     </div>
        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            placeholder="We are seeking a skilled Software Engineer..."
            name="description"
            className="textarea textarea-bordered"
            required
          ></textarea>
        </div>

        {/* Company */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            placeholder="Favorite IT"
            name="company"
            className="input input-bordered"
            required
          />
        </div>

        {/* HR Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="text"
            placeholder=""
            defaultValue={user.displayName}
            name="hr_name"
            className="input input-bordered"
            required
          />
        </div>

        {/* HR Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
            type="email"
            placeholder=""
            defaultValue={user.email}
            name="hr_email"
            className="input input-bordered"
            required
          />
        </div>

        {/* Company Logo URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input
            type="url"
            placeholder="https://i.ibb.co/mXD5MNf/facebook.png"
            name="company_logo"
            className="input input-bordered"
            required
          />
        </div>

        {/* Status */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <select name="status" className="select select-bordered" required>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Responsibilities (comma separated)</span>
          </label>
          <input
            type="text"
            placeholder="Develop, Test, Deploy"
            name="responsibilities"
            className="input input-bordered"
            required
          />
        </div>

        {/* Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Requirements (comma separated)</span>
          </label>
          <input
            type="text"
            placeholder="JavaScript, React, Node.js"
            name="requirements"
            className="input input-bordered"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
