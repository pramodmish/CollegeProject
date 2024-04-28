import { useState } from "react";
import { Header, Footer, MainSection } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-screen w-full bg-slate-950 text-white">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
