import { verifySecureAuthentication } from '@/app/api/services/auth_middleware';
import React from 'react';
import { redirect } from "next/navigation";

export default async function UserProtectedRoute ({ children }: { children: React.ReactNode }) {

    const isAuthenticated = await verifySecureAuthentication();

    
    if (!isAuthenticated) {
        redirect('/login?mustLogin=true');
    }
    else {
        return children;
    }
}
