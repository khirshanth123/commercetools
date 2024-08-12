import React from 'react';
import { Table, TableBody, TableCell, TableRow, cn } from '@repo/ui';

export interface ProductSpecsProps {
  className?: string;
  classifications?: ProductSpecs[];
}
interface ProductSpecs {
  key: string;
  value: string;
}
interface RenderTableProps {
  tables: ProductSpecs[];
}
export const ProductSpecs = ({ className, classifications }: ProductSpecsProps) => {




  return (
    <div className={cn('lg:flex lg:gap-10', className)}>
      <div className='flex flex-col gap-8 flex-1'>
        <RenderTable tables={classifications} />
      </div>

    </div>
  );
};

const RenderTable = ({ tables }: RenderTableProps) =>

  <div>
    <Table striped>
      <TableBody>
        {tables?.map(({ key, value }, index) => {
          if (!value) return;
          return (
            <TableRow key={index}>
              <TableCell className='font-semibold text-sm w-2/5'>
                {key}
              </TableCell>
              <TableCell className='text-sm w-2/5'>
                {value}
              </TableCell>
            </TableRow>
          )
        }
        )}
      </TableBody>
    </Table>
  </div>

