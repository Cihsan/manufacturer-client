import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase_init';

const UpdateProfile = () => {
   const [user] = useAuthState(auth);
   const profileUpdate = (event) => {
      event.preventDefault()
      const submit = { 
         name:user.displayName,
         email:user.email,
         date:event.target.date.value,
         phone:event.target.phone.value,
         study:event.target.study.value,
         country:event.target.country.value,
         state:event.target.state.value,
         zip:event.target.zip.value,
         link:event.target.link.value}
      
      console.log(submit);
       fetch('https://safe-inlet-78940.herokuapp.com/profile-post', {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`

         },
         body: JSON.stringify(submit)
      })
         .then(res => res.json())
         .then(data => {
            if (data.success) {
               toast(`Profile Added Successfuly`)
            }
            else {
               toast.error(`Already have and Profile`)
            }
         })
      event.target.reset()
   }

   return (
      <div >
         <ToastContainer />
         <form onSubmit={profileUpdate}>
            <div className='flex-none md:flex gap-5 mt-10'>
               <div className=''>
                  <label className=' font-medium md:block inline' htmlFor="">Date of birth</label>
                  <input name='date' type="date" class="rounded py-3 w-full  px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
               </div>
               <div>
                  <label className=' font-medium md:block inline' htmlFor="">Phone</label>
                  <input name='phone' type="text" placeholder='Add Your Phone' class="rounded py-3 w-full  px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
               </div>
               <div>
                  <label className=' font-medium md:block inline' htmlFor="">Education</label>
                  <input name='study' type="text" placeholder='Add Your Last Study' class="rounded py-3 w-full  px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
               </div>
               <div>
                  <label className=' font-medium md:block inline' htmlFor="">Country</label>
                  <input name='country' type="text" placeholder='Add Your Country' class="rounded py-3 w-full  px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
               </div>
            </div>
            <div className='flex-none md:flex sm:items-center gap-5'>
               <div>
                  <label className=' font-medium md:block inline' htmlFor="">State</label>
                  <input name='state' type="text" placeholder='Add Your State' class="rounded py-3 w-full  px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
               </div>
               <div>
                  <label className=' font-medium md:block inline' htmlFor="">Zip Code</label>
                  <input name='zip' type="text" placeholder='Add Your Zip Code' class="rounded py-3 w-full  px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
               </div>

               <div>
                  <label className=' font-medium md:block inline' htmlFor="">Profile Link</label>
                  <input name='link' type="text" placeholder='Add Your Linkedin Profile' class="rounded py-3 w-full  px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
               </div>
            </div>
            <div><button type="submit" class="mt-5 w-full text-white bg-primary rounded border border-primary p-3 transition hover:bg-opacity-90 " >Update</button></div>
         </form>

      </div>
   );
};

export default UpdateProfile;