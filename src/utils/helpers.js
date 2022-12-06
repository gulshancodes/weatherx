const date = new Date();

export const time = date.toLocaleTimeString('default', {
    hour: '2-digit',
    minute: '2-digit'
});

export const day = date.toLocaleDateString('default', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
});