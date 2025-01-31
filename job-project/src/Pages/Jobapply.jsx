import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2'
const Jobapply = () => {
    const {user} = useAuth()
    const {id} = useParams()
    const navigate = useNavigate()
    console.log(id);
    const HandleSubmit=(e)=>{
        e.preventDefault();
        const from= e.target;
        const linkedin = from.linkedIn.value;
        const github = from.github.value;
        const resume= from.resume.value;
       
      
        const jobApplication ={
            job_id: id,
            application_email: user.email,
            linkedin,
            github,
            resume
        }

      fetch('https://server-wheat-iota.vercel.app/job-applications',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(jobApplication)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Apply Done",
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/myApplication')
        }
      })



    }
    return (
        <div>
        <h2 className='text-center text-2xl text-black font-bold mb-10'>Job Apply and Good Luck </h2>
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card bg-base-100 w-full shadow-2xl">
      <form className="card-body" onSubmit={HandleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input type="url" placeholder="LinkedIn URL" name='linkedIn' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URl</span>
          </label>
          <input type="url" placeholder="Github url" name='github' className="input input-bordered" required />
         
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume</span>
          </label>
          <input type="url" placeholder="Resume url" name='resume'  className="input input-bordered" required />
         
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  </div>
  </div>
    );
};

export default Jobapply;