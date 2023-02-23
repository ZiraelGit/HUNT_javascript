import { config } from "@onflow/fcl";

const isProd = process.env.NODE_ENV === 'production'

export const FLOW_CONFIG_CONSTANTS = {
  accessNodeApi: isProd ? "https://access-mainnet-beta.onflow.org" : "https://access-testnet.onflow.org",
  discoveryWallet: isProd ? "https://fcl-discovery.onflow.org/authn" : "https://fcl-discovery.onflow.org/testnet/authn",
  flowTokenAddress: isProd ? "0x1654653399040a61" : "0x7e60df042a9c0868",
  sFlowStakingManagerAddress: isProd ? "0xe3e282271a7c714e" : "0x6a1d46c4a99392d0",
  sFlowTokenAddress: isProd ? "0xe3e282271a7c714e" : "0x6a1d46c4a99392d0",
  fungibleTokenAddress: isProd ? "0xf233dcee88fe0abe" : "0x9a0766d93b6608b7",
  flowStakingCollectionAddress: isProd ? "0x8d0e87b65159ae63" : "0x95e019a17d0e23d7",
  flowIdTableStakingAddress: isProd ? "0x8624b52f9ddcd04a" : "0x9eca2b38b18b5dfe",
  flowServiceAccountAddress: isProd ? "0xe467b9dd11fa00df" : "0xe467b9dd11fa00df",
  lockedTokenAddress: isProd ? "0x8d0e87b65159ae63" : "0x95e019a17d0e23d7",
  adminAddress: isProd ? "0xe3e282271a7c714e" : "0x6a1d46c4a99392d0",
  managerAddress: isProd ? "0xebd406b037e56e92" : "0x3bce552e962530c7",
  managerPrivateKey: isProd ? "PRIVATE_KEY" : "af62a9f3482cf9ffe38808adb3973662d7b7720f6b1604fea4f1c04dfd2fccb0",
  adminPrivateKey: isProd ? "PRIVATE_KEY" : "aec35d978e6dc089f116e110b011b1fa797f5d2441c7b2882c18f0259fb70b5e"
}

config({
  "accessNode.api": FLOW_CONFIG_CONSTANTS.accessNodeApi,
  "discovery.wallet": FLOW_CONFIG_CONSTANTS.discoveryWallet,
  "0xsFlowToken": FLOW_CONFIG_CONSTANTS.sFlowTokenAddress,
  "0xsFlowStakingManager": FLOW_CONFIG_CONSTANTS.sFlowStakingManagerAddress,
  "0xFlowToken": FLOW_CONFIG_CONSTANTS.flowTokenAddress,
  "0xFungibleToken": FLOW_CONFIG_CONSTANTS.fungibleTokenAddress,

  "0xFlowStakingCollection": FLOW_CONFIG_CONSTANTS.flowStakingCollectionAddress,
  "0xFlowIDTableStaking": FLOW_CONFIG_CONSTANTS.flowIdTableStakingAddress,
  "0xFlowServiceAccount": FLOW_CONFIG_CONSTANTS.flowServiceAccountAddress,
  "0xLockedTokens": FLOW_CONFIG_CONSTANTS.lockedTokenAddress,

  "app.detail.title": "Overflow - Flow Liquid Staking",
  "app.detail.icon": "https://i.ibb.co/7n2LmnT/sflow.png"
})