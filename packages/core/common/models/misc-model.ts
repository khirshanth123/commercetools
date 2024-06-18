import { BREAKPOINT } from './enums';

export type Breakpoint = (typeof BREAKPOINT)[keyof typeof BREAKPOINT];

export interface BreadcrumbItem {
  label: string;
  link?: string;
}

export interface PageProps {
  params?: Record<string, string | string[]>;
  searchParams?: Record<string, string>;
}

export interface DefaultLayoutProps {
  children: React.ReactNode;
  params?: Record<string, any>;
}
