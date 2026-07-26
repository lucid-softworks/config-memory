import {
  createConfigLayer,
  type ConfigObject,
  type ConfigSource,
} from "@lucid-softworks/config-core";

/** Creates a synchronous source for defaults or explicit overrides. */
export function memoryConfigSource(
  values: ConfigObject,
  name = "memory",
): ConfigSource {
  return {
    name,
    load: () => createConfigLayer(name, values),
  };
}
