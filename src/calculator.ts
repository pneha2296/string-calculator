/**
 * Escapes special characters in a string for safe use in a regular expression.
 * @param str - The string to escape.
 * @returns A string with special characters escaped.
 */
function escapeRegex(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Calculates the sum of numbers in a string, supporting custom delimiters and various input rules.
 * @param numbers - A string of numbers separated by delimiters.
 * @returns The sum of the numbers in the input string.
 * @throws An error if the input contains negative numbers.
 */
export function add(numbers: string): number {
    if (!numbers.trim()) return 0; // Handle empty or whitespace-only string

    const DEFAULT_DELIMITERS = /,|\n/;
    let delimiters = DEFAULT_DELIMITERS;

    // Extract custom delimiter if present
    if (numbers.startsWith("//")) {
        const customDelimiterMatch = numbers.match(/^\/\/(.*?)\n/);
        if (customDelimiterMatch) {
            const customDelimiter = customDelimiterMatch[1];
            delimiters = new RegExp(escapeRegex(customDelimiter));
            numbers = numbers.slice(customDelimiterMatch[0].length); // Remove custom delimiter definition
        }
    }

    // Parse numbers and validate
    const parsedNumbers = numbers
        .split(delimiters)
        .map(Number)
        .filter(num => !isNaN(num)); // Filter out invalid numbers

    const negatives = parsedNumbers.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    // Sum numbers, ignoring values > 1000
    return parsedNumbers.reduce((sum, num) => (num <= 1000 ? sum + num : sum), 0);
}
