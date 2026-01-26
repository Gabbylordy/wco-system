import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  DollarSign,
  Shield,
  UserCheck,
  Sliders,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Command Center",
    url: "/",
    icon: LayoutDashboard,
    description: "Overview dashboard",
  },
  {
    title: "Revenue Assurance",
    url: "/revenue",
    icon: DollarSign,
    description: "Valuation & PAAR anomalies",
    accent: "module-revenue",
  },
  {
    title: "Society Protection",
    url: "/society",
    icon: Shield,
    description: "Illicit goods radar",
    accent: "module-society",
  },
  {
    title: "Integrity Analytics",
    url: "/integrity",
    icon: UserCheck,
    description: "Insider threat detection",
    accent: "module-integrity",
  },
  {
    title: "Risk Rules Studio",
    url: "/rules",
    icon: Sliders,
    description: "Dynamic rule management",
    accent: "module-agility",
  },
];

const bottomItems = [
  { title: "Alerts", url: "/alerts", icon: Bell },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-module-revenue flex items-center justify-center">
              <Activity className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-sidebar-foreground tracking-tight">VARIS</h1>
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
        {navItems.map((item) => {
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
      {!collapsed && (
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-xs font-medium text-primary">RO</span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">Risk Officer</p>
              <p className="text-[10px] text-muted-foreground">Apapa Command</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
