import { Suspense } from "react";
import { Route, Switch } from "wouter";
import { Layout } from "./components/Layout";
import { notFoundRoute, routes } from "./routes";

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="route-loading" aria-busy="true" />}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} component={route.Page} />
          ))}
          <Route component={notFoundRoute.Page} />
        </Switch>
      </Suspense>
    </Layout>
  );
}
