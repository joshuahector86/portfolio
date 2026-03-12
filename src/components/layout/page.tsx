import React, { ReactNode } from "react";
import Topbar from "./topbar";
interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto h-full">
      <Topbar />
      <div className="p-8 w-full flex justify-center h-full">{children}</div>
    </div>
  );
};

export default Page;
