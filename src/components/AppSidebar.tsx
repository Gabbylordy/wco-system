import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  DollarSign,
  Shield,
  UserCheck,
  Sliders,
  Bell,
  Brain,
  Settings,
  ChevronLeft,
  ChevronRight,
  Activity,
  Package,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { useAuth } from "@/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import WcoLogo from "@/assets/wco_logo-1.png";

const navItems = [
  // {
  //   title: "Command Center",
  //   url: "/",
  //   icon: LayoutDashboard,
  //   roles: ["Risk Officer"],
  // },
  {
    title: "Command Center",
    url: "/dashboard",
    icon: LayoutDashboard,
    roles: ["Risk Officer"],
  },

  {
    title: "Revenue Assurance",
    url: "/revenue",
    icon: DollarSign,
    roles: ["Risk Officer"],
  },
  {
    title: "Society Protection",
    url: "/society",
    icon: Shield,
    roles: ["Risk Officer"],
  },
  {
    title: "Integrity Analytics",
    url: "/integrity",
    icon: UserCheck,
    roles: ["Risk Officer"],
  },
  {
    title: "Parcel Intelligence",
    url: "/parcel-intel",
    icon: Package,
    roles: ["Risk Officer", "Admin"],
    description: "E-commerce parcel analytics"
  },
  {
    title: "AI Intelligence",
    url: "/ai-intelligence",
    icon: Brain,
    roles: ["Risk Officer", "Admin"],
    description: "Advanced AI insights",
    accent: "purple"
  },
  {
    title: "Risk Rules Studio",
    url: "/rules",
    icon: Sliders,
    roles: ["Admin"], // forfuture use
  },
];

const bottomItems = [
  { title: "Alerts", url: "/alerts", icon: Bell },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };


  return (
    <aside
      className={cn(
        "h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div>
              <img
                src={WcoLogo}
                alt="WCO Logo"
                className="h-8 w-8"
              />
            </div>
            <div>
              <h1 className="font-bold text-sidebar-foreground tracking-tight">WCO</h1>
              <p className="text-[10px] text-muted-foreground -mt-0.5">Risk Intelligence</p>
            </div>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-sidebar-accent text-muted-foreground hover:text-foreground transition-colors"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {/* {navItems.map((item) => {
          const isActive = location.pathname === item.url; */}
        {navItems
          .filter((item) => !item.roles || item.roles.includes(user?.role!))
          .map((item) => {
            const isActive = location.pathname === item.url;

            return (
              <NavLink
                key={item.url}
                to={item.url}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                  "hover:bg-sidebar-accent group",
                  isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
                  !isActive && "text-sidebar-foreground"
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 shrink-0 transition-colors",
                    isActive && item.accent && `text-${item.accent}`,
                    !isActive && "text-muted-foreground group-hover:text-foreground"
                  )}
                />
                {!collapsed && (
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{item.title}</p>
                    {item.description && (
                      <p className="text-[10px] text-muted-foreground truncate">{item.description}</p>
                    )}
                  </div>
                )}
                {isActive && !collapsed && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </NavLink>
            );
          })}
      </nav>

      {/* Bottom Navigation */}
      <div className="py-4 px-2 border-t border-sidebar-border space-y-1">
        {bottomItems.map((item) => {
          const isActive = location.pathname === item.url;
          return (
            <NavLink
              key={item.url}
              to={item.url}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                "hover:bg-sidebar-accent",
                isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
                !isActive && "text-sidebar-foreground"
              )}
            >
              <item.icon className="h-5 w-5 shrink-0 text-muted-foreground" />
              {!collapsed && <span className="text-sm">{item.title}</span>}
            </NavLink>
          );
        })}
      </div>

      {/* User */}
      {!collapsed && user && (
        <div className="p-4 border-t border-sidebar-border space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-xs font-medium text-primary">
                {user.username.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">{user.role}</p>
              <p className="text-[10px] text-muted-foreground">Apapa Command</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full rounded-lg px-3 py-2 text-xs text-muted-foreground hover:bg-sidebar-accent hover:text-foreground transition"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>

        </div>
      )}

    </aside>
  );
}
