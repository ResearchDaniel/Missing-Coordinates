# Missing Coordinates

![Teaser Image](https://github.com/Sparkier/Missing-Coordinates/blob/70e6d731444b108e6bff597dac0cbbb15271d211/.github/readme_pictures/teaser.png)

Implementation of a novel extension to Parallel Coordinates, introcuded in the Paper:

> Where did my Lines go? Visualizing Missing Data in Parallel Coordinates

presented at [EuroVis 2022](https://conferences.eg.org/eurovis2022/). Created by [Alex Bäuerle](https://a13x.io/), [Christian van Onzenoodt](https://onze.io/), Simon der Kinderen, [Jimmy Johansson Westberg](https://liu.se/en/employee/jimjo94), [Daniel Jönsson](https://liu.se/en/employee/danjo37), and [Timo Ropinski](https://viscom.uni-ulm.de/members/timo-ropinski/).

## Usage

Using our Parallel Coordinates implementation is as simple as:

```javascript
<script lang="ts">
  import { PC, DrawConfiguration } from "missing-coordinates";
  import type { Data } from "missing-coordinates/src";

  export let drawConfiguration: DrawConfiguration;
  export let data: Data;
</script>

<main class="content">
  <PC {data} {drawConfiguration} />
</main>
```

## Contributing

You can find detailed informations on how to contribute to this project in our [contribution guide](https://github.com/Sparkier/Missing-Coordinates/blob/main/CONTRIBUTING.md).