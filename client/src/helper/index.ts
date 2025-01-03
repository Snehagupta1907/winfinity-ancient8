import { Chain } from '@rainbow-me/rainbowkit';
import { uxuyWallet } from '@/wallets/uxuyWallet';
import { ancient8Sepolia } from 'wagmi/chains';
import {
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';

import { createConfig, http } from 'wagmi';
import {
  rainbowWallet,
  walletConnectWallet,
  okxWallet,
} from '@rainbow-me/rainbowkit/wallets';
const chains: readonly [Chain, ...Chain[]] = [ancient8Sepolia];
const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [uxuyWallet, okxWallet, rainbowWallet, walletConnectWallet],
    },
  ],
  {
    appName: 'Winfinity',
    projectId: '87106bd465234d097b8a51ba585bf799',
  }
);

export const config = createConfig({
  connectors,
  chains: chains,
  transports: {
    [ancient8Sepolia.id]: http('https://rpcv2-testnet.ancient8.gg'),
  },
});
