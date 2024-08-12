'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
    Button,
    Container,
    Input,
    Sheet,
    SheetClose,
    SheetContent,
    cn,
} from '@repo/ui';
import { ArrowLeftIcon, CloseIcon, SearchIcon } from '@repo/icons';
import { fetchProducts, } from '../../../actions';
import useSWR from 'swr';
import { GenericLink } from '../../shared/generic-link';
import { SearchResultProducts } from './search-result-products';
const productsFetcher = ([, query]) =>
    query ? fetchProducts({
        locale: "en-US",
        sortCode: '',
        offset: 0,
        categoryIds: query,
        query: '',
        limit: 10,
        searchText: '',
        attributeQuery: []
    }).then((res) => res) : [];
const suggestionsFetcher = null
const SEARCH_DEBOUNCE_TIME = 300;

export const Searchbox = () => {
    const { push } = useRouter();
    const [inputValue, setInputValue] = useState('');
    const [querySearch, setQuerySearch] = useState('');
    const [productSearch, setProductSearch] = useState('');
    const [sheetOpen, setSheetOpen] = useState(false);
    const [typing, setTyping] = useState(false);
    const inputChange = useCallback((e) => setInputValue(e.target.value), []);
    const openSheet = useCallback(() => setSheetOpen(true), []);
    const closeSheet = useCallback(() => setSheetOpen(false), []);
    const clearSearchText = useCallback(() => setInputValue(''), []);
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue) {
            push(`/search/${inputValue}`);
            closeSheet();
        }
    };

    const { data, isLoading: isFetchingProducts } = useSWR(
        [['fetchProducts', productSearch], productSearch],
        productsFetcher,
    );
    const { data: suggestions = [], isLoading: isFetchingSuggestions } = useSWR(
        [['fetchSuggestions', querySearch], querySearch],
        suggestionsFetcher,
    );
    const products = data?.data?.productProjectionSearch?.results ?? []


    const isLoadingSuggestions = typing || isFetchingSuggestions;
    const isLoadingProducts = typing || isFetchingProducts;
    const isProductsSectionVisible = typing || products?.length > 0 || isFetchingProducts;
    const isSuggestionsSectionVisible = querySearch || typing || isFetchingSuggestions || isFetchingProducts || products.length > 0; // prettier-ignore
    const noResults = querySearch && !suggestions?.length && !products.length && !isFetchingSuggestions && !isFetchingProducts && !typing; // prettier-ignore

    useEffect(() => {
        setTyping(true);
        const timer = setTimeout(() => {
            setTyping(false);
            setQuerySearch(inputValue);
        }, SEARCH_DEBOUNCE_TIME);

        return () => clearTimeout(timer);
    }, [inputValue]);

    useEffect(() => {
        setProductSearch(querySearch);
    }, [querySearch]);

    useEffect(() => {
        if (!sheetOpen) clearSearchText();
    }, [clearSearchText, sheetOpen]);
    const clearButton = inputValue.length && (
        <Button
            isIconOnly
            variant='light'
            color='neutral'
            radius='full'
            size='xs'
            className='opacity-75 hover:bg-transparent hover:opacity-100'
            onClick={clearSearchText}
        >
            <CloseIcon className='scale-90' />
        </Button>
    );
    return (
        <>
            <div className='inline-block'>
                <Button
                    size='md'
                    isIconOnly
                    variant='light'
                    color='neutral'
                    radius='full'
                    className={`md:hidden [&>svg]:size-8`}
                    onClick={openSheet}
                >
                    <SearchIcon />
                </Button>
                <Input
                    size='md'
                    placeholder={'Search'}
                    variant='flat'
                    radius='full'
                    className='hidden md:block'
                    startContent={<SearchIcon />}
                    value={inputValue}
                    onChange={openSheet}
                    onClick={openSheet}
                />
            </div>
            <Sheet onOpenChange={setSheetOpen} open={sheetOpen}>
                <SheetContent
                    side='top'
                    className='flex max-h-full flex-col items-start gap-0 rounded-t-none p-0 align-top [&_.sheet-close]:hidden h-auto'
                >
                    <div className='w-full py-6 shadow'>
                        <Container className='grid grid-cols-[auto_1fr] items-center gap-4 px-4 md:px-8 md:grid-cols-4'>
                            <GenericLink href='/' className='hidden md:block'>
                                <Image
                                    className='relative left-[-0.5rem]'
                                    src='/next.svg'
                                    height={30}
                                    width={80}
                                    alt='Logo'
                                />
                            </GenericLink>
                            <Input
                                className='col-start-2 md:col-span-2'
                                size='md'
                                placeholder={"Search"}
                                variant='flat'
                                radius='full'
                                startContent={<SearchIcon />}
                                endContent={clearButton}
                                onKeyDown={handleKeyDown}
                                onChange={inputChange}
                                value={inputValue}
                                autoFocus
                            />
                            <SheetClose className='static row-start-1 col-start-1 md:col-start-4 md:ml-auto'>
                                <Button
                                    variant='link'
                                    color='neutral'
                                    size='sm'
                                    className='p-0 [&>svg]:size-8 font-semibold'
                                    isIconOnly
                                >
                                    <ArrowLeftIcon className='md:hidden' />
                                    <span className='hidden md:block px-2'>Cancel</span>
                                </Button>
                            </SheetClose>
                        </Container>
                    </div>
                    <Container
                        className={cn(
                            'grid [transition:all_300ms] transition-all w-full px-0 overflow-y-auto',
                            inputValue ? '[grid-template-rows:1fr] py-8' : 'grid-rows-[0fr]',
                        )}
                    >
                        <div
                            className={cn(
                                'flex flex-col gap-x-4 px-4 md:px-8 md:flex-row w-full transition-all',
                                querySearch && inputValue ? 'overflow-auto' : 'overflow-hidden',
                            )}
                        >
                            {/* Products */}
                            {isProductsSectionVisible && (
                                <SearchResultProducts
                                    products={products}
                                    productSearch={productSearch}
                                    isLoadingProducts={isLoadingProducts}
                                    onClick={closeSheet}
                                />
                            )}

                        </div>
                    </Container>
                </SheetContent>
            </Sheet>
        </>
    )
}