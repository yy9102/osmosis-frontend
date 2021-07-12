export interface DenomCoreInfo {
	/** denom seen at osmosis zone. eg) uosmo for native, ibc/ASDF for ibc transfer */
	denom: string;
	/** denom seen at its original zone eg) for cosmos: uatom */
	originalDenom: string;
	/** osmosis chain's channel id denom came into. native if it's osmosis native coin*/
	sourceChannelId: string | 'native';
	/** type of channel bridge. currently only IBC is used so always 'transfer'. native if it's osmosis native coin */
	portId: 'transfer' | 'native';

	/** original chainId of denom it came from, when querying denom trace response does not have chainId hence optional */
	chainId?: string;
	/** original chain's channel id denom flowed out of. native if it's osmosis native coin. when querying denom trace
	 * response does not have destChannelId hence optional here. */
	destChannelId?: string | 'native';
}

export const knownDenomCoreInfoMap: { [denom: string]: DenomCoreInfo } = {
	uosmo: {
		denom: 'uosmo',
		originalDenom: 'uosmo',
		chainId: 'osmosis-1',
		sourceChannelId: 'native',
		destChannelId: 'native',
		portId: 'native',
	},
	uion: {
		denom: 'uion',
		originalDenom: 'uion',
		chainId: 'osmosis-1',
		sourceChannelId: 'native',
		destChannelId: 'native',
		portId: 'native',
	},
	'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2': {
		denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
		originalDenom: 'uatom',
		chainId: 'cosmoshub-4',
		sourceChannelId: 'channel-0',
		destChannelId: 'channel-141',
		portId: 'transfer',
	},
	'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4': {
		denom: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
		originalDenom: 'uakt',
		chainId: 'akashnet-2',
		sourceChannelId: 'channel-1',
		destChannelId: 'channel-9',
		portId: 'transfer',
	},
	'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076': {
		denom: 'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
		originalDenom: 'uregen',
		chainId: 'regen-1',
		sourceChannelId: 'channel-8',
		destChannelId: 'channel-1',
		portId: 'transfer',
	},
	'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84': {
		denom: 'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
		originalDenom: 'udvpn',
		chainId: 'sentinelhub-2',
		sourceChannelId: 'channel-2',
		destChannelId: 'channel-0',
		portId: 'transfer',
	},
	'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293': {
		denom: 'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
		originalDenom: 'uxprt',
		chainId: 'core-1',
		sourceChannelId: 'channel-4',
		destChannelId: 'channel-6',
		portId: 'transfer',
	},
	'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0': {
		denom: 'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
		originalDenom: 'uiris',
		chainId: 'irishub-1',
		sourceChannelId: 'channel-6',
		destChannelId: 'channel-3',
		portId: 'transfer',
	},
	'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1': {
		denom: 'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
		originalDenom: 'basecro',
		chainId: 'crypto-org-chain-mainnet-1',
		sourceChannelId: 'channel-5',
		destChannelId: 'channel-10',
		portId: 'transfer',
	},
	/** NOTE: gamm coins will be added when new data is received from pool list */
	'gamm/pool/41': {
		denom: 'gamm/pool/41',
		originalDenom: 'gamm/pool/41',
		sourceChannelId: 'native',
		portId: 'native',
	},
};
