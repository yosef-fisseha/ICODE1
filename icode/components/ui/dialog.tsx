import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogContent = React.forwardRef(({ children, ...props }, ref) => (
  <DialogPrimitive.Content ref={ref} {...props} className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6">
    {children}
  </DialogPrimitive.Content>
));

export const DialogOverlay = React.forwardRef(({ ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} {...props} className="fixed inset-0 bg-black opacity-30" />
));

export const DialogHeader = ({ children }) => (
  <div className="flex justify-between items-center mb-4">
    {children}
  </div>
);

export const DialogTitle = ({ children }) => (
  <h2 className="text-lg font-bold">{children}</h2>
);

export const DialogClose = DialogPrimitive.Close;