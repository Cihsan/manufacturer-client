import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase_init';

const Purchase = () => {
    const [user] = useAuthState(auth);

    const { id } = useParams()
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/product-get/${id}`)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [id])
    let message
    const add = event => {
        event.preventDefault()
        const qt = event.target.qt.value
        const stock = tools.stock
        const minOrder = tools.mOrder
        //console.log(qt,stock,minOrder);
        if(qt<stock&&qt>minOrder){
            message=<>Right</>
            console.log('right');
        }
        else
        {
            console.log('Fail');
            message=<>Fail</>
        }
       
    }
    return (
        <div className='md:grid-cols-2 grid-cols-1'>
            <div className='text-right mr-5'>
                <p className='text-2xl font-bold'>{user.displayName}</p>
                <p font-xs>{user.email}</p>
            </div>
            <div class="card md:w-6/12 w-full bg-base-100 shadow-xl">
                <div class="card-body px-5">
                    <div className='md:flex md:items-center gap-5 flex-none justify-center'>
                        <img width={'25%'} className='' src={tools.img} alt="" />
                        <div >
                            <h1 className='font-bold text-4xl leading-10'>{tools.name}</h1>
                            <p className='text-md leading-10'>Details: {tools.desc}</p>
                            <p className='text-md leading-10'>In Stock: {tools.stock}</p>
                            <div>
                                <p className='text-md leading-10'>Min. Order: {tools.mOrder}</p>

                            </div>
                            <p className='text-md leading-10'>$ {tools.price}</p>

                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={add}>
                <div className=''>
                    <label class="inline">
                        <span class="block text-sm font-medium text-slate-700 mt-5">Product</span>
                        <input type="number" required name='qt' class="mt-1  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "/>
                    </label>
                </div>
                <button className='btn'>Submit</button>
                {message}
            </form>

        </div>
    );
};

export default Purchase;