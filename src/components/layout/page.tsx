import React, { ReactNode } from "react";
import Topbar from "./topbar";
interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Topbar />
      <div
        className="p-8 w-full flex justify-center "
        style={{ overflowY: "auto", height: "calc(100vh - 100px" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Page;
