import React, { ReactNode } from "react";
import Topbar from "./topbar";
interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <div className="hidden md:block">
        <Topbar />
        <div className="p-8 mb-[5rem] w-screen " style={{ overflowY: "auto" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;
