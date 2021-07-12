export interface DenomInfo {
	/** denom seen at osmosis zone. eg) uosmo for native, ibc/ASDF for ibc transfer */
	denom: string;
	/** denom seen at its original zone eg) for cosmos: uatom */
	originalDenom: string;
	/** osmosis chain's channel id denom came into. native if it's osmosis native coin*/
	sourceChannelId: string | 'native';
	/** type of channel bridge. currently only IBC is used so always 'transfer'. native if it's osmosis native coin */
	portId: 'transfer' | 'native';

	symbol?: string;
	/** dp: allowed decimalPlace */
	dp?: number;
	/** original chainId of denom it came from, when querying denom trace response does not have chainId hence optional */
	chainId?: string;
	/** original chain's channel id denom flowed out of. native if it's osmosis native coin. when querying denom trace
	 * response does not have destChannelId hence optional here. */
	destChannelId?: string | 'native';
}

export const denomInfoMap: { [denom: string]: DenomInfo } = {
	uosmo: {
		denom: 'uosmo',
		originalDenom: 'uosmo',
		sourceChannelId: 'native',
		portId: 'native',

		symbol: 'OSMO',
		dp: 6,
		chainId: 'osmosis-1',
		destChannelId: 'native',
	},
	uion: {
		denom: 'uion',
		originalDenom: 'uion',
		sourceChannelId: 'native',
		portId: 'native',

		symbol: 'ION',
		dp: 6,
		chainId: 'osmosis-1',
		destChannelId: 'native',
	},
	'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2': {
		denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
		originalDenom: 'uatom',
		sourceChannelId: 'channel-0',
		portId: 'transfer',

		symbol: 'ATOM',
		dp: 6,
		chainId: 'cosmoshub-4',
		destChannelId: 'channel-141',
	},
	'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4': {
		denom: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
		originalDenom: 'uakt',
		sourceChannelId: 'channel-1',
		portId: 'transfer',

		symbol: 'AKT',
		dp: 6,
		chainId: 'akashnet-2',
		destChannelId: 'channel-9',
	},
	'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076': {
		denom: 'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
		originalDenom: 'uregen',
		sourceChannelId: 'channel-8',
		portId: 'transfer',

		symbol: 'REGEN',
		dp: 6,
		chainId: 'regen-1',
		destChannelId: 'channel-1',
	},
	'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84': {
		denom: 'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
		originalDenom: 'udvpn',
		sourceChannelId: 'channel-2',
		portId: 'transfer',

		symbol: 'DVPN',
		dp: 6,
		chainId: 'sentinelhub-2',
		destChannelId: 'channel-0',
	},
	'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293': {
		denom: 'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
		originalDenom: 'uxprt',
		sourceChannelId: 'channel-4',
		portId: 'transfer',

		symbol: 'XPRT',
		dp: 6,
		chainId: 'core-1',
		destChannelId: 'channel-6',
	},
	'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0': {
		denom: 'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
		originalDenom: 'uiris',
		sourceChannelId: 'channel-6',
		portId: 'transfer',

		symbol: 'IRIS',
		dp: 6,
		chainId: 'irishub-1',
		destChannelId: 'channel-3',
	},
	'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1': {
		denom: 'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
		originalDenom: 'basecro',
		sourceChannelId: 'channel-5',
		portId: 'transfer',

		symbol: 'CRO',
		dp: 8,
		chainId: 'crypto-org-chain-mainnet-1',
		destChannelId: 'channel-10',
	},
	/** NOTE: gamm coins will be added when new data is received from pool list */
	'gamm/pool/41': {
		denom: 'gamm/pool/41',
		originalDenom: 'gamm/pool/41',
		sourceChannelId: 'native',
		portId: 'native',

		symbol: 'GAMM-41',
		dp: 18,
		chainId: 'osmosis-1',
		destChannelId: 'native',
	},
};

export const coinGeckoIdMap: { [originalDenom: string]: string } = {
	uakt: 'akash-network',
	uatom: 'cosmos',
	basecro: 'crypto-com-chain',
	uiris: 'iris-network',
	uxprt: 'persistence',
	udvpn: 'sentinel',
};
