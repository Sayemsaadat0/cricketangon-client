"use client";
import { useAuth } from "@/context/AuthContext";
import { useChangePassword, useGetSingleUser } from "@/hooks/users.hooks";
import { useState } from "react";
import ChangePasswordForm from "./ChangePasswordForm";
import ProfileForm from "./ProfileForm";

const ProfileContainer = () => {
  const { user } = useAuth();
  const { data } = useGetSingleUser(user?.id || null);
  const { mutateAsync } = useChangePassword();
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className=" bg-gray-50 w-full rounded-[20px]">
      <div className="space-x-10  p-2 md:flex items-center justify-start text-c-grey-300 font-semibold">
        <button
          onClick={() => setActiveTab("Profile")}
          className={`px-5 w-fit whitespace-nowrap py-2  ${
            activeTab === "Profile"
              ? "text-c-violet-600  border-b-2 border-b-c-violet-600"
              : "text-[#718EBF]"
          }`}
        >
          Edit Profile
        </button>
        <button
          onClick={() => setActiveTab("password")}
          className={`px-5 w-fit whitespace-nowrap py-2    ${
            activeTab === "password"
              ? "text-c-violet-600  border-b-2 border-b-c-violet-600"
              : "text-[#718EBF]"
          }`}
        >
          Change Password
        </button>
      </div>

      <div className="md:p-10 p-3">
        {activeTab === "Profile" && (
          <div>
            <ProfileForm
              instance={data?.data}
            />
          </div>
        )}
        {activeTab === "password" && (
          <div>
            <ChangePasswordForm handleDataSubmit={mutateAsync} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileContainer;
