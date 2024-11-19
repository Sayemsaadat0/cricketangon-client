

import DashboardAside from '@/components/core/aside/DashboardAside'
import DashboardTopNavbar from '@/components/core/navbar/DashboardTopNavbar'
import { Toaster } from '@/components/ui/toaster'
import NextTopLoader from 'nextjs-toploader'
import React from 'react'

const template = ({ children }: { children: React.ReactNode }) => {
    return (
        // <AuthPage>
        <div className="max-h-screen flex">
            <NextTopLoader color="#5a4eae" showSpinner={false} />
            <div className="fixed left-0">
                <DashboardAside />
            </div>
            <div className="w-full ml-[280px]">
                <div className="sticky top-0 z-50">
                    <DashboardTopNavbar />
                </div>
                <div className="p-8">
                    {children}
                </div>
            </div>
            <Toaster />
        </div>
        // </AuthPage>
    )
}

export default template