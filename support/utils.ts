import { AnyNsRecord } from 'dns';
import { promises as fs } from 'fs';
import path from 'path';

function getDataFilePath(fileName: string): string {
  return path.resolve(__dirname, '../TestData/OutputData', fileName);
}

export async function saveTestCaseData(
  fileName: string,
  testCaseId: string,
  data: Record<string, unknown>
): Promise<string> {
  const filePath = getDataFilePath(fileName);

  const content = await fs.readFile(filePath, 'utf-8');
  const existingData = JSON.parse(content) as Record<string, Record<string, unknown>>;

  existingData[testCaseId] = {
    ...(existingData[testCaseId] ?? {}),
    ...data,
  };

  await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));
  return filePath;
}

export async function getTestCaseData(
  fileName: string,
  testCaseId: string,
  key: string
): Promise<any> {
  const filePath = getDataFilePath(fileName);

  // Read file content
  const content = await fs.readFile(filePath, 'utf-8');
  const existingData = JSON.parse(content) as Record<string, Record<string, any>>;

  console.log("existing data", existingData)

  // Safely return the value if it exists
  return existingData[testCaseId]?.[key];
}
