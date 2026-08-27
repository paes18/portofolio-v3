/**
 * Utility to join classNames conditionally, ignoring boolean or undefined entries.
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
