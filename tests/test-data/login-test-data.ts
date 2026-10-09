import fs from 'node:fs';
import path from 'node:path';

export type LoginScenario = {
  testId: string;
  username: string;
  password: string;
  expectedError?: string | null;
  expectedPage: string;
  secondaryUsername?: string;
  secondaryPassword?: string;
  thirdUsername?: string;
  thirdPassword?: string;
  expectedMessages?: string[];
};

export type LoginTestData = {
  baseUrl: string;
  scenarios: {
    validLogin: LoginScenario;
    invalidUsername: LoginScenario;
    invalidPassword: LoginScenario;
    emptyFields: LoginScenario;
    dashboardAfterLogin: LoginScenario;
    failedLogin: LoginScenario;
  };
};

const filePath = path.resolve(__dirname, 'login-test-data.json');
const rawData = fs.readFileSync(filePath, 'utf8');

export const loginTestData: LoginTestData = JSON.parse(rawData) as LoginTestData;
