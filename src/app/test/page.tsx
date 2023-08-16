"use client";

import React, { useContext } from "react";

import { myCont } from "@/context/test_context";

const MyApp = () => {
  return (
    <div>
      <myCont.Provider value="pooja">
        <Page />
      </myCont.Provider>
    </div>
  );
};

const Page = () => {
  return useContext(myCont);
};

export default MyApp;
