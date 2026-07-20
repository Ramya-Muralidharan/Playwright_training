import { type Page, expect } from '@playwright/test';
import config from '../config/config.json';
import users from '../config/users.json';

export class LoginPage {
    constructor(private page: Page) {}

    async loadURL() : Promise<void> {
        const envKey = (process.env.ENVIRONMENT || 'QA') as keyof typeof config;
        const url = config[envKey].demoURL;
        console.log(`env is ${envKey}`);

        if (!url) {
            throw new Error(`No URL configured for environment: ${process.env.ENV}`);
        }

        await this.page.goto(url);
    }

    async login(agent: string) {
        const user = users[agent as keyof typeof users];
        if (!user) {
            throw new Error(`User not found: ${agent}`);
        }
        await this.page.locator('#user-name').fill(user.username);
        await this.page.locator('input#password').fill(user.password);
        await this.page.getByRole('button', { name: 'Login' }).click();

        expect(this.page.locator('.header_label')).toContainText("Swag Labs");
    }
}