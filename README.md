# `@lucid-softworks/config-memory`

Programmatic configuration sources for defaults and explicit overrides.

```ts
import { memoryConfigSource } from "@lucid-softworks/config-memory";

const defaults = memoryConfigSource(
  { server: { host: "localhost", port: 3000 } },
  "defaults",
);
```
