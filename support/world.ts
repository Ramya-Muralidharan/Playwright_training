import type { Browser, BrowserContext, Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { AnyCnameRecord } from 'dns';

 export interface CustomWorld {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
  quoteID?: string;
  testCaseID?: string;
  dataMap: Map<string, any>// Add dataMap property to the CustomWorld interface
  testData?: { [key: string]: any }; // Add testData property to the CustomWorld interface
}

export class CustomWorldImpl extends World implements CustomWorld {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
  quoteID?: string; // Implement quoteID property in the CustomWorldImpl class
  testData?: { [key: string]: any }; // Implement testData property in the CustomWorldImpl class
  testCaseID?: string; // Implement testCaseID property in the CustomWorldImpl class
  dataMap: Map<string, unknown> = new Map<string, any>(); // Implement dataMap property in the CustomWorldImpl class
}

setWorldConstructor(CustomWorldImpl);