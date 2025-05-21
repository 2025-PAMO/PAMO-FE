import { Outlet } from "react-router-dom";
import Header from "@/components/header/Header";

export default function GlobalLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
