import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from '@remix-run/react';
import styles from '~/styles/main.css';
import MainNavigation from '~/components/MainNavigation';

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
  ];
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Remix Crash Course!</title>
        <Meta/>
        <Links/>
        <title>Oops!</title>
      </head>
      <body>
        <header>
          <MainNavigation/>
        </header>
        <main className="error">
          <h1>An Error Occurred</h1>
          {/* @ts-ignore */}
          <p>{error.message}</p>
          <p>Back to <Link to="/">safety</Link>!</p>
        </main>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Remix Crash Course!</title>
        <Meta/>
        <Links/>
      </head>
      <body>
        <header>
          <MainNavigation/>
        </header>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
      </body>
    </html>
  );
}

