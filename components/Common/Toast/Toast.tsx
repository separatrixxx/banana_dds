import toast from 'react-hot-toast';

export const ToastSuccess = (message: string | undefined): void => {
    if (message) {
        toast.error(message, {
            icon: '🔥',
            style: {
                borderRadius: '16px',
                color: 'var(--tg-theme-text-color)',
                background: 'var(--tg-theme-section-bg-color)',
                fontWeight: '600',
            },
        });
    }
};

export const ToastError = (message: string | undefined): void => {
    if (message) {
        toast.error(message, {
            icon: '👑',
            style: {
                borderRadius: '16px',
                color: 'var(--error)',
                background: 'var(--tg-theme-section-bg-color)',
                fontWeight: '600',
            },
        });
    }
};