function generateImports(operations) {
  const operationNames = operations.map((op) => op.name.value);
  return `
import { unstable_cache } from "next/cache";
import { 
  ${operationNames
    .map((name) => `${name}Document, ${name}Query, ${name}QueryVariables`)
    .join(',\n')}
} from "./queries.generated";
import { getClient } from "@the-heights/apollo-client";
  `;
}

function generateFunction(operation) {
  const variables = operation.variableDefinitions.map(
    (v) => v.variable.name.value
  );
  return `
  export const ${operation.name.value} = async ({${variables.join(', ')}}: ${
    operation.name.value
  }QueryVariables, tags = ['posts']) => {
    const ${operation.name.value} = unstable_cache(async (${variables.join(
    ', '
  )}) => {
      const { data } = await getClient().query<${operation.name.value}Query>({
        query: ${operation.name.value}Document,
        variables: { ${variables.map((v) => `${v}: ${v}`).join(', ')} },
      });
      return data;
      }, ['posts'], {
        tags: tags,
      });
      return await ${operation.name.value}(${variables.join(', ')});
  }
    `;
}

module.exports = {
  plugin(schema, documents, config) {
    const operations = documents.reduce((acc, doc) => {
      const operations = doc.document.definitions.filter(
        (d) => d.kind === 'OperationDefinition'
      );
      return acc.concat(operations);
    }, []);
    const imports = generateImports(operations);
    const functions = operations.map((operation) =>
      generateFunction(operation)
    );
    return `
    ${imports}
    ${functions.join('\n')}
    `;
  },
};
