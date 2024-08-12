export interface OccEndpoint {
  default?: string;
  [scope: string]: string;
}

export interface ProductOccEndpoint extends OccEndpoint {
  list?: string;
  details?: string;
  attributes?: string;
  variants?: string;
}

export interface CartOccEndpoint extends OccEndpoint {
  default?: string;
  list?: string;
}

export interface OccConfig {
  product?: ProductOccEndpoint;
  cart?: CartOccEndpoint;
}
