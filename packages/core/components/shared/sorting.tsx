'use client';

import * as React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    cn,
} from '@repo/ui';

interface SortingProps extends React.HTMLProps<HTMLDivElement> {
    sorts: any;
    label: string;
}

export const Sorting = ({ sorts, className, label, placeholder }: SortingProps) => {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const selectedSort = sorts.find((sort) => sort.selected);
    const applySortToRoute = (sortCode: string) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('sortCode', sortCode);
        router.push(`${pathName}?${newSearchParams}`);
    };
    return (
        <div className={cn('flex gap-3 items-baseline justify-end', className)}>
            <p className='hidden lg:block'>{label}</p>
            <div className='flex-1 [&_button]:w-full md:[&_button]:w-[190px]'>
                <Select value={selectedSort?.code} onValueChange={applySortToRoute}>
                    <SelectTrigger>
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {sorts.map((sort, index) => (
                                <SelectItem key={index} value={sort.code}>
                                    {sort.name}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}