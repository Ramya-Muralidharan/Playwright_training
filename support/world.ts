import type { Browser, BrowserContext, Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';

export interface CustomWorld {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
}

export class CustomWorldImpl extends World implements CustomWorld {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
}

setWorldConstructor(CustomWorldImpl);
