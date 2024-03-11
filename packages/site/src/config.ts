import { http, createConfig } from "wagmi";
import { mainnet, sepolia, lineaTestnet } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

export const config = createConfig({
  chains: [mainnet, sepolia, lineaTestnet],
  connectors: [
    metaMask({
      dappMetadata: {
        name: "Example dapp",
      },
      infuraAPIKey: "YOUR_INF",
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [lineaTestnet.id]: http(),
  },
});
