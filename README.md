# [![Purinton Dev](https://purinton.us/logos/brand.png)](https://discord.gg/QSBxQnX7PF)

## @purinton/discord-webhook [![npm version](https://img.shields.io/npm/v/@purinton/discord-webhook.svg)](https://www.npmjs.com/package/@purinton/discord-webhook)[![license](https://img.shields.io/github/license/purinton/discord-webhook.svg)](LICENSE)[![build status](https://github.com/purinton/discord-webhook/actions/workflows/nodejs.yml/badge.svg)](https://github.com/purinton/discord-webhook/actions)

> A simple, promise-based Discord webhook sender for Node.js with built-in rate limit handling.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [TypeScript](#typescript)
- [License](#license)

## Features

- Send messages to Discord webhooks with a single function
- Handles Discord rate limits automatically (HTTP 429)
- ESM-first, TypeScript types included
- Customizable fetch for testing/mocking

## Installation

```bash
npm install @purinton/discord-webhook
```

## Usage

```js
import { sendMessage } from '@purinton/discord-webhook';

const url = 'https://discord.com/api/webhooks/your-webhook-id/your-webhook-token';
const body = { content: 'Hello from discord-webhook!' };
try {
    const response = await sendMessage({ url, body });
    if (response.ok) {
        console.log('Message sent successfully!');
    } else {
        console.error('Failed to send message:', response.status, await response.text());
    }
} catch (err) {
    console.error('Error sending message:', err);
}
```

## API

### sendMessage({ url, body }, options?)

Sends a message to a Discord webhook URL, handling rate limits with automatic retry.

**Parameters:**

- `url` (string): The Discord webhook URL.
- `body` (object): The JSON body to send (e.g., `{ content: 'Hello!' }`).
- `options` (object, optional):
  - `fetchFn` (function): Custom fetch function for testing/mocking.
  - `maxRetries` (number): Maximum number of retries on rate limit (default: 3).

**Returns:**

- `Promise<Response>`: The fetch response.

**Throws:**

- Error if the URL or body is invalid, or if max retries are exceeded due to rate limiting.

## TypeScript

Type definitions are included:

```ts
export declare function sendMessage(
  params: { url: string; body: object },
  options?: { fetchFn?: typeof fetch; maxRetries?: number }
): Promise<Response>;
```

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://purinton.us/logos/discord_96.png)](https://discord.gg/QSBxQnX7PF)[![Purinton Dev](https://purinton.us/logos/purinton_96.png)](https://discord.gg/QSBxQnX7PF)

**[Purinton Dev on Discord](https://discord.gg/QSBxQnX7PF)**

## License

[MIT © 2025 Russell Purinton](LICENSE)

## Links

- [GitHub](https://github.com/purinton/discord-webhook)
- [npm](https://www.npmjs.com/package/@purinton/discord-webhook)
- [Discord](https://discord.gg/QSBxQnX7PF)
