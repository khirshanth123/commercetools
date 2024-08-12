import { Meta, StoryObj } from '@storybook/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table';

const invoices = [
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
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

export default {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    radius: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'The border-radius of the table.',
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
      description: 'Whether to make the table full width.',
    },
    hoverable: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      description: 'Whether to apply hover styles to each row.',
    },
    bordered: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
      description: 'Whether to apply border to the table.',
    },
    striped: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      description: 'Whether to apply striped rows in the table.',
    },
  },
  render: (args) => {
    return (
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className='text-right'>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell>{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className='text-right'>{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
} as Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

/** Displays the Table with striped rows. */
export const Default: Story = {};

/** Displays the Table with striped rows. */
export const StripedTable: Story = {
  args: {
    striped: true,
  },
};

/** Displays the Table with hover styles on rows. */
export const Hoverable: Story = {
  args: {
    hoverable: true,
  },
};

/** Displays the Table with width auto. */
export const WidthAuto: Story = {
  args: {
    fullWidth: false,
  },
};
