import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase_init';

const ProtectedPath = ({ children }) => {
    const [user,loading] = useAuthState(auth);
    let location = useLocation();
    if(loading){
        return <div class="flex items-center justify-center ">
        <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default ProtectedPath;