import React from "react";

import { Outlet } from "react-router-dom";
import UserAccountSideBar from "../../components/user-accoutn/UserAccountSideBar";
import SectionWrapper from "../../components/SectionWrapper";

const UserLayout = () => {
  return (
    <SectionWrapper className="bg-gray-100 py-12.5">
      <div className="flex items-start gap-0 lg:gap-10">
        <div className="w-0 lg:w-1/4 sticky top-25">
          <UserAccountSideBar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default UserLayout;
