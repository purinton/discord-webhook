/**
 * Sends a message to a Discord webhook URL, handling rate limits with automatic retry.
 * @param params - The parameters for the message.
 * @param params.url - The Discord webhook URL.
 * @param params.body - The JSON body to send (e.g., { content: string }).
 * @param options - Optional settings.
 * @param options.fetchFn - Custom fetch function for testing/mocking.
 * @param options.maxRetries - Maximum number of retries on rate limit (default 3).
 * @returns A Promise resolving to the fetch Response.
 */
export declare function sendMessage(
  params: { url: string; body: object },
  options?: { fetchFn?: typeof fetch; maxRetries?: number }
): Promise<Response>;