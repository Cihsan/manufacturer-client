import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import useAdmin from '../../hooks/useAdmin';

const AdminPath = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if(loading || adminLoading){
        return <div class="flex items-center justify-center ">
        <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
    }

    if(!user || !admin){
        signOut(auth);
        return <Navigate to="/" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default AdminPath;