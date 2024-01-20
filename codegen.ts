import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://www.bcheights.com/graphql",
  documents: ["libs/apollo-client/src/graphql/**/*.graphql"],
  generates: {
    "libs/apollo-client/src/graphql/types.generated.ts": { plugins: ["typescript"] },
    "libs/apollo-client/src/graphql/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "types.generated.ts",
      },
      plugins: ["typescript-operations", "typed-document-node"],
    },
  },
};

export default config;
