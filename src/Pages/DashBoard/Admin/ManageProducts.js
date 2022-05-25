import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product-get')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    const deletebtn = id => {
        const ask = window.confirm('Are sure to delete')
        if (ask) {
            console.log(id)
            const url=`http://localhost:5000/product-del/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted')
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining)
                        toast('Product Deleted Form Here');
                    }
                    else{
                        toast.error('Product Deleted Failed');
                    }
                })
        }
    }
    return (
        <div>
            <ToastContainer/>
            <h1>Manage Products {products.length}</h1>
            <section class="">
                <div class="container px-6 mx-auto">
                    
                    <div class="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {
                            products.map(product=>
                                <div class="px-6 py-4 rounded-lg bg-accent text-white">
                            <div class="avatar">
                                <div class="rounded mx-auto">
                                    <img src={product.img} alt=''/>
                                </div>
                            </div>
                            <div class=" space-y-2">
                                <div class="">
                                    

                                    <span class="mx-4 font-bold">{product.name}</span>
                                </div>

                                <div class="flex items-center">
                                    

                                    <span class="mx-4 ">Desc. : {product.desc}</span>
                                </div>

                                <div class="flex items-center">
                                    

                                    <span class="mx-4 ">Stock : {product.stock}</span>
                                </div>

                                <div class="flex items-center">
                                    

                                    <span class="mx-4 ">Min Order: {product.mOrder}</span>
                                </div>

                                <div class="flex items-center">
                                    

                                    <span class="mx-4 ">$ {product.price}</span>
                                </div>
                            </div>

                            <button onClick={() => deletebtn(product._id)} class="w-full px-4 py-2 mt-5 font-medium tracking-wide text-accent capitalize bg-white hover:bg-red-400 hover:text-white rounded-md ">
                                Delete
                            </button>
                        </div>
                                )
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageProducts;