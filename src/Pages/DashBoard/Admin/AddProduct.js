import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imgkey = '496c910d299b68d853a1aac1a435c6f2'
    const onSubmit = async data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgkey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        
            .then(res => res.json())
            .then(result => {
                if (result.success) {

                    const img = result.data.url;
                    const productPost = {
                        name: data.name,
                        desc: data.desc,
                        mOrder: data.mOrder,
                        stock: data.stock,
                        price: data.price,
                        img: img
                    }
                    fetch('https://safe-inlet-78940.herokuapp.com/product-post', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(productPost)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted) {
                                toast.success('Product Successfuly Added')
                                reset();
                            }
                            else {
                                toast.error('Failed to add Product');
                            }
                        })

                }

            })
    }
    
    return (
        <div>
            <ToastContainer/>
            <h1 className='text-2xl font-bold'>Add Product Here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label class="block">
                    <span class="block text-sm font-medium text-slate-700 mt-5">Product</span>
                    
                    <input type="text" required name='name'{...register("name", {
                                                required: { value: true, message: 'Name is Required' }
                                            })} class="mt-1 block w-3/4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "/>
                        <label className="label">
                                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                        </label>
                </label>
                <label class="block">
                    <span class="block text-sm font-medium text-slate-700 mt-2">Product Description</span>
                    
                    <input type="text" required name='desc' {...register("desc", {
                                                required: { value: true, message: 'desc is Required' }
                                            })} class="mt-1 block w-3/4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "/>
                </label>
                <label class="block">
                    <span class="block text-sm font-medium text-slate-700 mt-2">Product Image</span>
                    
                    <input type="file" required name='img' {...register("img", {
                                                required: { value: true, message: 'img is Required' }
                                            })} class="mt-1 block w-3/4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "/>
                </label>
                <label class="block">
                    <span class="block text-sm font-medium text-slate-700 mt-2">Stock Product</span>
                    
                    <input type="number" required name='stock' {...register("stock", {
                                                required: { value: true, message: 'stock is Required' }
                                            })} class="mt-1 block w-3/4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "/>
                </label>
                <label class="block">
                    <span class="block text-sm font-medium text-slate-700 mt-2">Min. Order Product</span>
                    
                    <input type="number" required name='mOrder' {...register("mOrder", {
                                                required: { value: true, message: 'mOrder is Required' }
                                            })} class="mt-1 block w-3/4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "/>
                </label>
                <label class="block">
                    <span class="block text-sm font-medium text-slate-700 mt-2">Price</span>
                    
                    <input type="number" required name='price' {...register("price", {
                                                required: { value: true, message: 'price is Required' }
                                            })} class="mt-1 block w-3/4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "/>
                </label>
                <label class="block">
                    
                    <input type="submit" value="Add Product" class="mt-5 block w-3/4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        bg-primary text-white cursor-pointer disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "/>
                </label>

            </form>
        </div>
    );
};

export default AddProduct;