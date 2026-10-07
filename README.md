# Orchard Ops — Novus test app

A deliberately small React app used as a test repository for connecting Novus.
It is a fake produce-supply operations dashboard (growers, shipments, grocer
accounts) with a handful of distinct pages so Novus has real routes to detect.

## Stack

- React 18
- React Router 6 (routes declared in [`src/App.jsx`](src/App.jsx))
- Vite 5

## Pages

| Route                  | Component                                              | What it is                            |
| ---------------------- | ------------------------------------------------------ | ------------------------------------- |
| `/login`               | [`Login`](src/pages/Login.jsx)                         | Standalone sign-in form               |
| `/dashboard`           | [`Dashboard`](src/pages/Dashboard.jsx)                 | Metric tiles plus recent reports      |
| `/reports`             | [`Reports`](src/pages/Reports.jsx)                     | List of saved reports                 |
| `/reports/:reportId`   | [`ReportDetail`](src/pages/ReportDetail.jsx)           | Single report, parameterized route    |
| `/customers`           | [`Customers`](src/pages/Customers.jsx)                 | Account table                         |
| `/billing`             | [`Billing`](src/pages/Billing.jsx)                     | Plan and invoice history              |
| `/settings`            | [`Settings`](src/pages/Settings.jsx)                   | Workspace preferences form            |
| `*`                    | [`NotFound`](src/pages/NotFound.jsx)                   | Catch-all                             |

`/` redirects to `/dashboard`. Every page except `/login` renders inside
[`Layout`](src/components/Layout.jsx), which provides the sidebar nav.

All content is hardcoded in [`src/data.js`](src/data.js) — there is no backend,
no auth, and no network access.

## Pendo visitor

There is no real login, so [`src/main.jsx`](src/main.jsx) gives each browser a
stable demo visitor ID (kept in `localStorage`) and a `demo-account` account,
and passes them to `pendo.initialize()`. Pendo does not deliver guides to
anonymous visitors, so this is what lets guides show up. The call is a no-op
until the Pendo install snippet is added to `index.html`.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```
