
export interface FetchOptions extends RequestInit {
    headers?: Record<string, string>;
  }
  
  export async function customFetch<T>(url: string,locale: string, options: FetchOptions = {}): Promise<T> {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          'locale' : locale,
          ...(options.headers || {}),
        },
      });
    
      
      // Check if the response status is OK (status code 200-299)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'An error occurred while fetching data.');
      }
  
      // Parse the response data as JSON
      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }
  