'use client';

import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardVariantProps,
    cn,
    getRoundedRating,
} from '@repo/ui';
import { cva } from 'class-variance-authority';
import { GenericLink } from './generic-link';
import Image from 'next/image';
import { Rating } from '@repo/ui/src/components/rating';
const productCardVariants = cva('group h-full', {
    variants: {
        isFeatured: {
            true: 'bg-neutral-50 [&_.card-content]:flex-1 [&_.product-card-name]:text-2xl sm:grid sm:grid-cols-2 sm:gap-x-8 sm:p-8 sm:[&_.card-header]:p-0 sm:[&_.card-content]:p-0 sm:[&_.card-footer]:p-0 sm:[&_.card-footer]:col-start-2',
            false: '[&_.card-header]:p-0',
        },
        isBasic: {
            true: 'grid grid-cols-[64px_1fr] lg:grid-cols-1 gap-2 [&_.card-content]:flex-1 [&_.card-content]:p-0 [&_.card-header]:p-0 [&_.product-card-name]:m-0 [&_.product-card-name]:font-semibold [&_.product-card-name]:line-clamp-1 [&_.product-card-price]:p-0 [&_.product-card-price]:text-sm [&_.product-card-price]:font-normal [&_.product-card-sku]:hidden overflow-visible',
        },
        highlightEnabled: {
            true: 'lg:before:content-[""] lg:before:-z-10 lg:before:absolute lg:before:bg-background lg:hover:z-10 lg:has-[:focus-visible]:z-10 lg:hover:overflow-visible lg:has-[:focus-visible]:overflow-visible lg:hover:before:-inset-6 lg:has-[:focus-visible]:before:-inset-6 lg:hover:before:shadow-[rgba(0,0,0,0.23)_0px_10px_30px_0px] lg:has-[:focus-visible]:before:shadow-[rgba(0,0,0,0.23)_0px_10px_30px_0px]',
        },
    },
    defaultVariants: {
        isBasic: false,
        isFeatured: false,
        highlightEnabled: false,
    },
});

const cardFooterVariants = cva('', {
    variants: {
        highlightEnabled: {
            true: 'hidden group-hover:flex group-focus-within:flex absolute z-10 px-6 pb-6 -left-6 -right-6 top-[100%] bg-background shadow-[rgba(0,0,0,0.23)_0px_20px_20px_-10px]',
        },
        defaultVariants: {
            highlightEnabled: false,
        },
    },
});

const productCardContentVariants = cva('flex flex-col flex-1 mb-2 h-full hover:no-underline', {
    variants: {
        isBasic: {
            true: 'justify-center px-0',
        },
        isFeatured: {
            true: '[&_.product-card-sku]:-order-1 sm:justify-center',
            false: 'bg-white px-2 [&_.product-card-rating]:mt-auto',
        },
    },
});

export type ProductCardProps = {
    product: Partial<any>;
    className?: string;
    isFeatured?: boolean;
    isBasic?: boolean;
    quickAddEnabled?: boolean;
    highlightEnabled?: boolean;
    variantsEnabled?: boolean;
} & CardVariantProps &
    React.HTMLAttributes<HTMLDivElement>;

export const ProductCard = ({
    product: initialProduct,
    className,
    quickAddEnabled,
    highlightEnabled,
    isFeatured = false,
    isBasic = false,
    variantsEnabled = false,
    bordered = false,
    shadow = 'none',
    padding = 'none',
    ...restProps
}: ProductCardProps) => {
    const { name, description, slug, masterVariant, reviewRatingStatistics = {} } = initialProduct;
    const { images = [], prices = [] } = masterVariant;
    const imageUrl = images?.[0]?.url;
    const price = prices?.[0]?.value?.centAmount;
    const productLink = `/product/${slug}`;
    const roundedRating = reviewRatingStatistics?.averageRating



    return (
        <Card
            {...restProps}
            padding={padding}
            bordered={bordered}
            shadow={shadow}
            className={cn(productCardVariants({ isFeatured, isBasic, highlightEnabled }), className)}
        >
            <CardHeader>
                <GenericLink href={productLink} className={cn(productCardContentVariants({ isFeatured, isBasic }))}>
                    <figure className='block relative aspect-square image-overlay'>
                        <Image
                            fill
                            className='object-contain object-center'
                            src={imageUrl}
                            alt={name}
                        />
                    </figure>
                </GenericLink>
            </CardHeader>
            <CardContent className='flex flex-col'>
                <GenericLink
                    href={productLink}
                    className={cn(productCardContentVariants({ isFeatured, isBasic }))}
                >
                    {name && (
                        <h3
                            title={name}
                            className='product-card-name line-clamp-2 text-sm font-bold mb-1.5 md:text-base'
                            dangerouslySetInnerHTML={{ __html: name }}
                        />
                    )}
                    {roundedRating && <div className='product-card-rating my-2'>
                        <div className='flex items-end gap-2'>
                            <Rating readonly initialValue={roundedRating} />
                            {roundedRating > 0 && (
                                <span className='text-neutral-600 text-sm sm:text-base'>{roundedRating}</span>
                            )}
                        </div>
                    </div>}
                    <div className='product-card-price flex items-end pt-2 text-2xl font-bold'>
                        ${price}
                    </div>
                </GenericLink>
            </CardContent>
        </Card>
    )
}