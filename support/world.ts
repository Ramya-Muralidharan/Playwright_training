import type { Browser, BrowserContext, Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';

 export interface CustomWorld {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
  quoteID?: string; // Add quoteID property to the CustomWorld interface
  testData?: { [key: string]: any }; // Add testData property to the CustomWorld interface
}

export class CustomWorldImpl extends World implements CustomWorld {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
  quoteID?: string; // Implement quoteID property in the CustomWorldImpl class
  testData?: { [key: string]: any }; // Implement testData property in the CustomWorldImpl class
}

setWorldConstructor(CustomWorldImpl);