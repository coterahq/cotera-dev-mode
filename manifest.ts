import { From } from "@cotera/era";
import { ManifestShorthand } from "@cotera/sdk";

const SomeValues = From([{ n: 1 }, { n: 2 }, { n: 3 }]);

export const manifest: ManifestShorthand = {
  definitions: {
    "Some Values": SomeValues,
  },
  apps: {
    "some-other-app": ["# Some Title", "bar", "baz", "quuz"],
    "some-app": [
      "# Hello World",
      SomeValues,
    ],
  },
};
