/* eslint-disable react-refresh/only-export-components */

import { Link as WouterLink, useLocation as useWouterLocation, useSearchParams as useWouterSearchParams } from "wouter";

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
};

export function Link({ to, children, ...props }: LinkProps) {
  return (
    <WouterLink href={to} {...props}>
      {children}
    </WouterLink>
  );
}

type NavLinkProps = Omit<LinkProps, "className"> & {
  end?: boolean;
  className?: string | ((state: { isActive: boolean }) => string | undefined);
};

export function NavLink({ to, end = false, className, ...props }: NavLinkProps) {
  const [location] = useWouterLocation();
  const pathname = location.split("?")[0] || "/";
  const isActive = end ? pathname === to : pathname === to || pathname.startsWith(`${to}/`);
  const resolvedClassName = typeof className === "function" ? className({ isActive }) : className;
  return <Link to={to} className={resolvedClassName} aria-current={isActive ? "page" : undefined} {...props} />;
}

export function useLocation() {
  const [location] = useWouterLocation();
  return { pathname: location.split("?")[0] || "/" };
}

export function useSearchParams() {
  return useWouterSearchParams();
}
