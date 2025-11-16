/**
 * ProveSource Social Proof
 * TypeScript definitions
 */

interface ProveSource {
  /**
   * Initialize ProveSource social proof notifications on your website
   * @param apiKey Your ProveSource API key
   * @returns The script element, or null if already initialized
   */
  init(apiKey: string): HTMLElement | null;
}

declare const provesource: ProveSource;
export default provesource;
