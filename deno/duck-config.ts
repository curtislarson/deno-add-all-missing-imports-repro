import { DuckConfigOptions } from "./duck-config-options.ts";

export class DuckConfig {
  readonly kind;
  constructor(options: DuckConfigOptions) {
    this.kind = options.kind;
  }
}
