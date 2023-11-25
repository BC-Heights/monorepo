import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: "https://rickandmortyapi.com/graphql",
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['graphql/*.graphql'],
  generates: {
    './libs/gql/src/lib/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;
