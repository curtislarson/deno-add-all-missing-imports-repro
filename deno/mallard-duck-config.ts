export interface MallardDuckConfigOptions extends DuckConfigOptions {
  kind: "mallard";
}

export class MallardDuckConfig extends DuckConfig {
  constructor(options: MallardDuckConfigOptions) {
    super(options);
  }
}
