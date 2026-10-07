import { NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/customers", label: "Customers" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/billing", label: "Billing" },
  { to: "/reports", label: "Reports" },
  { to: "/settings", label: "Settings" },
];

export default function Layout() {
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">Orchard Ops</div>
        <nav className="nav">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
