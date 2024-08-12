import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { PageProps, parseAttributes } from '@repo/core';
import { Breadcrumb, ProductIntro, ProductGallery, ProductDescription, ProductSpecs, ProductReview } from '@repo/core/components';
import { Container } from "@repo/ui"
import { getProductDetails, getProductReviews } from '@repo/core/actions';
import { AddToCart } from '@repo/core/components';
import { setRequestLocale } from '@repo/core/server';
export interface ProductDetailsPageProps extends PageProps {
    params: {
        locale: string;
        slug: string[];
    };
}


export default async function ProductDetailsPage({
    params: { locale, slug },
}: ProductDetailsPageProps) {
    await setRequestLocale(locale);
    // const { review, common, product: productMessages } = await getMessages();
    const productDetails = await getProductDetails({ locale: "en-US", slug: slug[0] });
    const { product } = productDetails;

    const reviews = product.id && await getProductReviews({ id: product.id })



    const resolvedBreadcrumbs = [
        { label: 'Home', link: '/', },
        {
            label: 'Products', link: '/products'
        }
    ]
    const breadcrumbs = [...resolvedBreadcrumbs, { label: product.masterData.current.name }]
    const images = product.masterData.current.masterVariant.images
    const specifications = product.masterData.current.masterVariant.attributesRaw.filter(({ name }) => name === 'productspec')?.[0]?.value?.['en-US'] ?? []
    const specs = specifications.length > 0 && parseAttributes(specifications) || []


    return (
        <Container>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <div className='pb-16 lg:mt-6 overflow-auto'>
                <ProductIntro product={product} className='mb-8 md:w-2/5 md:float-end md:pl-9 lg:pl-16' reviews={reviews} />
                <ProductGallery images={images} className='mb-8 md:w-3/5 md:float-start lg:mb-16' />
                <AddToCart
                    className='mb-16 py-4 gap-8 grid-in-cart md:w-2/5 md:clear-end md:float-end md:pl-9 lg:pl-16'
                    product={product}
                    size='xl'
                    counterSize='lg'
                    max={1}
                    isDisabled
                    variant
                    color
                />
                <ProductDescription
                    className='lg:w-2/5 md:float-start lg:float-end lg:clear-end lg:pl-16'
                    description={product.masterData.current.description}
                />
                <div className='pt-16 clear-left lg:pt-0'>
                    <h2 className='text-foreground font-bold mb-8'>Product Specifications</h2>
                    <ProductSpecs classifications={specs} />
                </div>
            </div>
            <div className='pb-16'>

                <ProductReview
                    reviews={reviews}
                    numberOfReviews={reviews.length}
                    productName={product.name}
                    productSKU={product.id}
                />

            </div>
        </Container>
    )

}