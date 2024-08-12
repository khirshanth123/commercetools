
export interface BreadcrumbItem {
    label: string;
    link?: string;
  }
  
  export interface PageProps {
    params?: Record<string, string | string[]>;
    searchParams?: Record<string, string>;
  }
  
  export interface DefaultLayoutProps {
    params?: Record<string, any>;
  }
  