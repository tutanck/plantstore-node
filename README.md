# Plant Store API Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/plantstore)](https://www.npmjs.com/package/@fern-api/plantstore)

The Plant Store API Node.js library provides access to the Plant Store API from JavaScript/TypeScript.

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-dnjt7d?file=app.ts&view=editor)

```typescript
import {
  PlantStoreApi,
  PlantStoreApiClient,
  PlantStoreApiEnvironment,
} from '@fern-api/plantstore';

void main();

async function main() {
  const client = new PlantStoreApiClient({
    environment: PlantStoreApiEnvironment.Production,
    token: 'MY-TOKEN',
  });

  const response = await client.plant.find(
    'ef19fe7b-c4c9-4631-81d7-a83aba610a7d'
  );

  if (response.ok) {
    const plant: PlantStoreApi.Plant = response.body;
    console.log('Received plant!', plant);
  } else {
    console.log('Received failed response from Plant Store!', response.error);
  }
}
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-api/plantstore-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
