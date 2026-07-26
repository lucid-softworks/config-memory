import { describe, expect, it } from "vitest";

import { memoryConfigSource } from "../src/index.js";

describe("memoryConfigSource", () => {
  it("creates named, repeatable layers with provenance", () => {
    const values = { server: { port: 3000 } };
    const source = memoryConfigSource(values, "defaults");
    expect(source.name).toBe("defaults");
    expect(source.load()).toEqual(source.load());
    expect(source.load()).toMatchObject({ name: "defaults", values });
  });

  it("uses a conventional default name", () => {
    expect(memoryConfigSource({}).name).toBe("memory");
  });
});
