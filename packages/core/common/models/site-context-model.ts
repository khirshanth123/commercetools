import { NonEmptyArray } from '../../types';

export interface SiteContextModel {
    baseSite?: string;
    currency?: string;
    language?: string;
    config?: SiteContextConfig;
}

  export interface SiteContextConfig {
    theme?: string;
    baseSite?: NonEmptyArray<string>;
    language?: NonEmptyArray<string>;
    currency?: NonEmptyArray<string>;
    urlParameters?: NonEmptyArray<string>;
  }
  