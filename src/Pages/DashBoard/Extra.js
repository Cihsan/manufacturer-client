import React from 'react';

const Extra = () => {
    return (
        <div>

<section class=" pt-5 overflow-hidden relative z-10">
   <div class="container">
         <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
            <div class="bg-white relative rounded-lg sm:p-12 shadow-lg">
               <form className='md:grid-cols-2'>
                  <div class="mb-6">
                      <label htmlFor="">Birth</label>
                     <input
                        type="date"
                        placeholder="Your Name"
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                  </div>
                  <div class="mb-6">
                     <input
                        type="email"
                        placeholder="Your Email"
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                  </div>
                  <div class="mb-6">
                     <input
                        type="text"
                        placeholder="Your Phone"
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                  </div>
                  
                  <div>
                     <button
                        type="submit"
                        class="
                        w-full
                        text-white
                        bg-primary
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                        >
                     Send Message
                     </button>
                  </div>
               </form>
               <div>
                  
                  
               </div>
            </div>
      </div>
   </div>
</section>
        </div>
    );
};

export default Extra;