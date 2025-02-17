import { FC } from "react";
import { RouteObject } from "react-router-dom";
import { AccountLayout, MainLayout } from "@app/layouts";
import { _404Page } from "@modules/404";
import { DemoPage1, DemoPage2, DemoPage3 } from "@modules/DemoToDelete";
import { HomePage } from "@modules/home";
import { ProfilePage } from "@modules/profile";
import { SettingsPage } from "@modules/settings";
import { SplashPage } from "@modules/splash";

// List of URL paths that our application supports.
export const Paths = [
  "/",
  "/home",
  "/account/profile",
  "/account/settings",
  "/demo1",
  "/demo2",
  "/demo3",
] as const;

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
  // r(GlobalLayout, [
  r(_404Page, "*"),
  r(SplashPage, "/"),
  r(MainLayout, [
    r(HomePage, "/home"),
    r(AccountLayout, [
      r(ProfilePage, "/account/profile"),
      r(SettingsPage, "/account/settings"),
    ]),
    r(DemoPage1, "/demo1"),
    r(DemoPage2, "/demo2"),
    r(DemoPage3, "/demo3"),
  ]),
  // ]),
];
