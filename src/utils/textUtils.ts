export function sanitizeForURL(input: string): string {
    // Replace spaces and non-alphanumeric characters with hyphens
    let sanitized = input.replace(/[^a-zA-Z0-9]+/g, '-');
    // Convert to lowercase
    sanitized = sanitized.toLowerCase();
    // Remove leading and trailing hyphens
    sanitized = sanitized.replace(/^[-]+|[-]+$/g, '');
    return sanitized;
}