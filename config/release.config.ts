import { Options } from "semantic-release";

const options: Options = {
  branches: ["production"],
  plugins: [
    [
      "semantic-release-gitmoji",
      {
        releaseRules: {
          patch: {
            include: [":bento:", ":recycle:"],
          },
        },
      },
    ],
    "@semantic-release/github",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      { message: ":bookmark: v${nextRelease.version} [skip ci]" },
    ],
  ],
};

export default options;
