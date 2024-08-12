import { BreadcrumbItem } from '../models';



export const resolveCategoryBreadcrumbs = (
    facetBreadcrumbs,
  ): BreadcrumbItem[] => {
    return facetBreadcrumbs
      .filter(({ facetCode }) => ['category', 'allCategories', 'brand'].includes(facetCode))
      .map(({ facetValueCode, facetValueName, facetCode }) => {
        const baseLink = '/c/' + facetValueCode;
  
        if (facetCode === 'brand') {
          return {
            label: facetValueName,
            link: `${baseLink}/Brands/${facetValueName}`,
          };
        }
  
        return {
          label: facetValueName,
          link: baseLink,
        };
      });
  };