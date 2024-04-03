import { From } from "@cotera/era";
import { ManifestShorthand } from "@cotera/sdk";

export const manifest: ManifestShorthand = {
  definitions: {
    "Some Values": From([{ n: 1 }, { n: 2 }, { n: 3 }]),
  },
  apps: {
    "some-other-app": ["# Some Title", "bar", "baz", 'quuz'],
    "some-app": [
      "# Hello",
      From([{ n: 1 }, { n: 2 }, { n: 3 }]).select((t) => ({
        foo: t.attr("n"),
      })),
    ],
  },
};
