import { OccConfig } from './occ-config-model';
import { SiteContextConfig } from './site-context-model';

export interface AppConfig {
  siteContextConfig?: SiteContextConfig;
  occConfig?: OccConfig;
}
