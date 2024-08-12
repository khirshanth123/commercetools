import { Container } from "@repo/ui"
import { Breadcrumb, ProductList, Sorting, ProductFacetNavigation } from '@repo/core/components';
import { PageProps } from '@repo/core';
import { fetchProducts, getProductCategory, getProductAttributes } from '@repo/core/actions';
import { categoryResolver, attributesFilter, getSelectedAttributes } from '@repo/core/common';
export default async function ProductListingPage({ params: { slug, query: queryPath, locale },
    searchParams: { categoryIds, sortCode, attributeFilters },
}: PageProps) {
    const activeQuery = { categoryIds, attributeFilters }
    const searchQuery: string[] = Array.isArray(categoryIds) && categoryIds.length > 0 ? [categoryIds] : (typeof categoryIds === 'string' ? [categoryIds] : categoryIds);
    const attributeQuery: string[] = Array.isArray(attributeFilters) && attributeFilters.length > 0 ? [attributeFilters] : (typeof attributeFilters === 'string' ? [attributeFilters] : attributeFilters);
    console.log(categoryIds, queryPath)
    const { data: { productProjectionSearch } } = await fetchProducts({
        locale: "en-US",
        sortCode,
        offset: 0,
        categoryIds: searchQuery,
        attributeQuery,
        query: '',
        limit: 12,
        searchText: ''
    })
    const { total } = productProjectionSearch;
    const { categories } = await getProductCategory({ locale: "en-US" })
    const attributes = await getProductAttributes({ locale: "en-US" });
    const facets = categoryResolver(categories?.results);
    const attributes_facets = attributesFilter(attributes?.[0]?.attributes);
    const facets_filter = facets.concat(attributes_facets)
    const activeFacetBreadcrumbs = getSelectedAttributes(activeQuery, facets_filter);
    console.log(activeQuery, facets_filter)
    console.log(activeFacetBreadcrumbs)
    const resolvedBreadcrumbs = [
        { label: 'Home', link: '/', },
        {
            label: 'Products', link: '/products'
        }
    ]
    const serializedSorts = [
        { name: "Created At : Asc", code: "createdAt asc" },
        { name: "Created At : Desc", code: "createdAt desc" },
        { name: "Price : Low to High", code: "price asc" },
        { name: "Price : High to Low", code: "price desc" },
    ]

    return (
        <Container>
            <Breadcrumb breadcrumbs={resolvedBreadcrumbs} showHome={false} />
            <div className='flex content-stretch h-full pb-5'>
                <div className='hidden w-[350px] lg:block'>
                    <ProductFacetNavigation facets={facets_filter} activeFacetBreadcrumbs={activeFacetBreadcrumbs} />
                </div>
                <div className='w-full lg:pt-4 lg:pl-6 lg:mx-6'>
                    <div className='flex flex-col justify-between items-baseline mb-6 md:mb-8 md:flex-row lg:mb-10'>

                        <h1 className='text-base order-2 mt-6 font-bold sm:text-lg md:mt-0 md:text-xl md:order-1 lg:text-2xl'>
                            {total} for Products
                        </h1>
                        <div className='w-full order-1 flex flex-row gap-4 md:w-auto'>
                            <Sorting
                                sorts={serializedSorts}
                                className='w-full lg:pl-4'
                                label="Sort By"
                                placeholder="Default"
                            />
                            {/* <div className='lg:hidden'>
                                <ProductFacetModal
                                    facets={facets}
                                    activeFacetBreadcrumbs={activeFacetBreadcrumbs}
                                />
                            </div> */}
                        </div>
                    </div>
                    <ProductList
                        initialProducts={productProjectionSearch}
                        query={searchQuery}
                        sortCode={sortCode}
                        totalResults={total}
                        attributes={attributeQuery}
                    />
                </div>
            </div>
        </Container>
    )
}