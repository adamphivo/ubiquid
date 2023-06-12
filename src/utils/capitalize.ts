/**
 * Capitalize a string
 * @param input
 * @returns
 */
export function capitalize(input: string): string {
  return input[0].toUpperCase() + input.slice(1).toLowerCase();
}
