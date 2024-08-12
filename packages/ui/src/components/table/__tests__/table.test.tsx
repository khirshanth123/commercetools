import * as React from 'react';
import { render } from '@testing-library/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../table';

const columns = [
  { name: 'Invoice', key: 'invoice' },
  { name: 'Status', key: 'status' },
  { name: 'Method', key: 'method' },
  { name: 'Amount', key: 'amount' },
];

const items = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
];

describe('Table', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Table aria-label='Test example table'>
        <TableHeader>
          <TableRow>
            <TableHead>NAME</TableHead>
            <TableHead>TYPE</TableHead>
            <TableHead>DATE MODIFIED</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow key='1'>
            <TableCell>Games</TableCell>
            <TableCell>File folder</TableCell>
            <TableCell>6/7/2020</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLTableElement>();

    render(
      <Table ref={ref} aria-label='Test example table'>
        <TableHeader>
          <TableRow>
            <TableHead>NAME</TableHead>
            <TableHead>TYPE</TableHead>
            <TableHead>DATE MODIFIED</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow key='1'>
            <TableCell>Games</TableCell>
            <TableCell>File folder</TableCell>
            <TableCell>6/7/2020</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
    expect(ref.current).not.toBeNull();
  });

  it('should render dynamic table', () => {
    const wrapper = render(
      <Table aria-label='Dynamic Table'>
        <caption role='table-caption'>A list of your recent invoices.</caption>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key} role='columnheader'>
                {column.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.invoice}>
              <TableCell className='font-medium'>{item.invoice}</TableCell>
              <TableCell>{item.paymentStatus}</TableCell>
              <TableCell>{item.paymentMethod}</TableCell>
              <TableCell className='text-right'>{item.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>,
    );

    const table = wrapper.getByRole('table');

    expect(table).toHaveAttribute('aria-label', 'Dynamic Table');

    expect(wrapper.getAllByRole('columnheader')).toHaveLength(4);

    expect(wrapper.getAllByRole('rowgroup')).toHaveLength(2);

    expect(wrapper.getAllByRole('row')).toHaveLength(4);

    expect(wrapper.getAllByRole('cell')).toHaveLength(12);
  });
});
