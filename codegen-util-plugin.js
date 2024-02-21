function generateImports(operations) {
  const operationNames = operations.map((op) => op.name.value);
  return `
import { 
  ${operationNames
    .map((name) => `${name}Document, ${name}Query, ${name}QueryVariables`)
    .join(',\n')}
} from "./queries.generated";
import { getClient } from "@the-heights/apollo-client";`;
}

function generateFragmentTypeAndImports(fragments) {
  const postFragmentNames = fragments
    .map((f) => f.name.value)
    .filter((name) => name.includes('Post'));

  const imports = `
import { ${postFragmentNames
    .map((name) => `${name}Fragment`)
    .join(',\n')} } from "./fragments.generated";`;

  const postFragmentType = `export type PostFragment = ${postFragmentNames
    .map((name) => `${name}Fragment`)
    .join(' & ')};`;

  return `${imports}\n\n${postFragmentType}`;
}

function generateFunction(operation) {
  const variables = operation.variableDefinitions.map(
    (v) => v.variable.name.value
  );

  return `

export const ${operation.name.value} = async ({${variables.join(', ')}}: ${
    operation.name.value
  }QueryVariables, tags?: string[]) => {
  const { data } = await getClient().query<${operation.name.value}Query>({
    query: ${operation.name.value}Document,
    variables: { ${variables.map((v) => `${v}: ${v}`).join(', ')} },
    context: tags ? { next: { tags: tags } } : undefined,
  });
  return data;
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
    const fragments = documents.reduce((acc, doc) => {
      const fragments = doc.document.definitions.filter(
        (d) => d.kind === 'FragmentDefinition'
      );
      return acc.concat(fragments);
    }, []);
    const imports = generateImports(operations);
    const functions = operations.map((operation) =>
      generateFunction(operation)
    );
    const fragmentType = generateFragmentTypeAndImports(fragments);
    return `
    ${imports}
    ${fragmentType}
    ${functions.join('\n')}
    `;
  },
};
