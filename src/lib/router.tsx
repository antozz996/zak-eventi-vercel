/* eslint-disable react-refresh/only-export-components */
import { useMemo } from "react";
import { Link as WouterLink, useLocation as useWouterLocation } from "wouter";

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
  return <Link to={to} className={resolvedClassName} {...props} />;
}

export function useLocation() {
  const [location] = useWouterLocation();
  return { pathname: location.split("?")[0] || "/" };
}

export function useSearchParams() {
  const [location, setLocation] = useWouterLocation();
  const [pathname, query = ""] = location.split("?");
  const params = useMemo(() => new URLSearchParams(query), [query]);

  const setParams = (
    next: URLSearchParams | Record<string, string>,
    options?: { replace?: boolean },
  ) => {
    const nextParams = next instanceof URLSearchParams ? next : new URLSearchParams(next);
    const search = nextParams.toString();
    setLocation(`${pathname || "/"}${search ? `?${search}` : ""}`, { replace: options?.replace });
  };

  return [params, setParams] as const;
}
