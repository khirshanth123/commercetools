import { AppConfig } from '../models';



export async function getAppConfig(): Promise<AppConfig> {
    const resourcePath = `${process.env.BASE_URL}/api/config`;
    const response = await fetch(resourcePath);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch app config from ${resourcePath}`);
    }
  
    return response.json();
  }