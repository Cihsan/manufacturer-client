import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';

const Login = () => {
    const [emailPassLogin, emailPassLoginUser, emailPassLoginLoading, emailPassLoginError] = useSignInWithEmailAndPassword(auth);
    const [loginGoogle, userLoginGoogle, loadingLoginGoogle, errLoginGoogle] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(auth);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    //return coming path
    if (userLoginGoogle || emailPassLoginUser || user) {
        //jwt
        const url = 'http://localhost:5000/login'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => localStorage.setItem("sToken", data.token));
        navigate(from, { replace: true });

    }
    //Loading 
    let spinner;
    if (loadingLoginGoogle || emailPassLoginLoading || loading || sending) {
        spinner = <div class="flex items-center justify-center ">
            <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    }
    //Error Handle 
    let errorMassage
    if (errLoginGoogle || emailPassLoginError || error || errorReset) {
        errorMassage =
            <div class="alert alert-warning shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>
                        {emailPassLoginError?.message}
                        {errLoginGoogle?.message}
                        {error?.message}
                        {errorReset?.message}
                    </span>
                </div>
            </div>
    }
    const refmail = useRef('')
    const loginEmailPass = async (event) => {
        const email = refmail.current.value;
        const pass = event.target.pass.value
        console.log(email, pass);
        emailPassLogin(email, pass)
        event.preventDefault()
        event.target.reset()
    }
    // toast
    const resetPass = async (event) => {
        const email = refmail.current.value;
        if (email) {
            toast('Sent email Check Now');
            await sendPasswordResetEmail(email);
        }
        else {
            toast('please enter your email address Only');
        }
    }
    return (
        <div>
            {errorMassage}
            {spinner}
            <div class="hero min-h-screen ">
                <div class="card flex-shrink-0 w-full max-w-sm bg-base-100">
                    <p class="text-xl text-gray-600 text-center">Welcome back!</p>
                    <button onClick={() => loginGoogle()} class=" flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                        <span class="px-4 py-3">
                            <FcGoogle />
                        </span>
                        <h1 class="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                    </button>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="border-b w-1/5 lg:w-1/4"></span>
                        <button class="text-xs text-center text-gray-500 uppercase">or login with email</button>
                        <span class="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <form onSubmit={loginEmailPass}>
                        <div class="mt-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input ref={refmail} class="bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                        </div>
                        <div class="mt-4">
                            <div class="flex justify-between">
                                <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <button onClick={resetPass} class="text-xs text-gray-500">Forget Password?</button>
                            </div>
                            <input name='pass' class="bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                        </div>
                        <div class="mt-8">
                            <button class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
                        </div>
                    </form>

                    <div class="mt-4 flex items-center justify-between">
                        <span class="border-b w-1/5 md:w-1/4"></span>
                        <Link to="/register" class="text-xs text-gray-500 uppercase">or sign up</Link>
                        <span class="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;