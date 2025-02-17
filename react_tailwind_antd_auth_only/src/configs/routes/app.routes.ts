import { FC } from "react";
import { RouteObject } from "react-router-dom";
import { AuthLayout } from "@app/layouts";
import { _404Page } from "@modules/404";
import { LoginPage } from "@modules/login";
import { SplashPage } from "@modules/splash";

// List of URL paths that our application supports.
export const Paths = ["/", "/login"] as const;

export type Path = (typeof Paths)[number]; // Exported type of Paths for auto completion.

// Returns dynamic paths according to given parameters for specific module
export const Href = {};

// Returns a route object to map that particular
const r = (
  Component: FC,
  extra: Path | undefined | "*" | RouteObject[] = undefined,
): RouteObject => ({
  path: typeof extra === "string" ? extra : undefined,
  Component,
  children: typeof extra === "object" ? extra : undefined,
});

// Application router configuration. Path to component mapping
export const AppRoutes: RouteObject[] = [
  r(_404Page, "*"),
  r(SplashPage, "/"),
  r(AuthLayout, [r(LoginPage, "/login")]),
];
