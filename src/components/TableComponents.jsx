import React from 'react';
import { twMerge } from 'tailwind-merge';

const Table = React.forwardRef(({ className, ...props }, ref) => {
  return (
    
      <table
        ref={ref}
        className={twMerge('w-full text-left  ', className)}
        {...props}
      />
    
  );
});

const TableHeader = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <thead
      ref={ref}
      className={twMerge('[&_tr]:border-b', className)}
      {...props}
    />
  );
});

const TableBody = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <tbody
      ref={ref}
      className={twMerge('&_tr:last-child]:border-0', className)}
      {...props}
    />
  );
});

const TableRow = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <tr
      ref={ref}
      className={twMerge(
        'border-b transition-colors hover:bg-muted/50',
        className
      )}
      {...props}
    />
  );
});

const TableHead = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <th
      ref={ref}
      className={twMerge(
        'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
        className
      )}
      {...props}
    />
  );
});

const TableCell = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <td
      ref={ref}
      className={twMerge('p-4 align-middle', className)}
      {...props}
    />
  );
});
export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
