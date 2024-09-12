import { tv } from 'tailwind-variants';

export const popupGroup = tv({
  slots: {
    backdrop: ['fixed inset-0', 'w-full h-full', 'bg-neutral-1 opacity-50'],
    overlay: ['fixed inset-0', 'flex justify-center items-center', 'z-50'],
    panel: ['relative'],
  },
});

export const popup = tv({
  slots: {
    cancel: '',
    confirm: '',
    message: ['text-sm', 'whitespace-pre-wrap'],
    root: ['relative', 'bg-cream-1 dark:bg-space-1', 'max-w-196 min-w-128 min-h-48 w-full', 'z-20'],
    title: ['truncate', 'text-lg', 'font-bold', 'whitespace-pre-wrap'],
  },
});
