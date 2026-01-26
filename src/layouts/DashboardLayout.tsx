import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";

export function DashboardLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <AppSidebar />
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
