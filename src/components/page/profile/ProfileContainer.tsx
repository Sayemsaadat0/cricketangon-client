"use client"
import React, { useState } from 'react';
import ProfileForm from './ProfileForm';
import { profileUserData } from '@/data/dummy.data';
import ChangePasswordForm from './ChangePasswordForm';

const ProfileContainer = () => {
    const [activeTab, setActiveTab] = useState('Profile');

    return (
        <div className=' bg-gray-50 w-full rounded-[20px]'>
            <div className='space-x-10 p-10 text-c-grey-300 font-semibold'>
                <button
                    onClick={() => setActiveTab('Profile')}
                    className={`px-5 py-2  ${activeTab === 'Profile' ? 'text-c-violet-600  border-b-2 border-b-c-violet-600' : ''}`}
                >
                    Edit Profile
                </button>
                <button
                    onClick={() => setActiveTab('password')}
                    className={`px-5 py-2    ${activeTab === 'password' ? 'text-c-violet-600  border-b-2 border-b-c-violet-600' : ''}`}
                >
                    Change Password
                </button>
            </div>

            <div className="p-10">
                {activeTab === 'Profile' && <div>
                    <ProfileForm instance={profileUserData} handleDataSubmit={() => undefined} />
                </div>}
                {activeTab === 'password' && <div> <ChangePasswordForm handleDataSubmit={() => undefined}/></div>}
            </div>
        </div>
    );
};

export default ProfileContainer;
