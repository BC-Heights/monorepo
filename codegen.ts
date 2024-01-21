import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://www.bcheights.com/graphql",
  documents: ["libs/graphql/src/lib/**/*.graphql"],
  generates: {
    "libs/graphql/src/lib/types.generated.ts": { plugins: ["typescript"] },
    "libs/graphql/src/lib/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "types.generated.ts",
      },
      plugins: ["typescript-operations", "typed-document-node"],
    },
      'libs/apollo-wrapper/src/lib/apollo-helpers.ts': {
        plugins: ['typescript-apollo-client-helpers']
      }
  },
};

export default config;
