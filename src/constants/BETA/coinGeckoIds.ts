import { EmbedChainInfos } from '../../config';

export const KNOWN_COINGECKO_IDS = EmbedChainInfos.reduce((accum, chainInfo) => {
	const { currencies } = chainInfo;
	const coinIds = currencies
		.map(currency => currency.coinGeckoId)
		.filter((coinId): coinId is string => coinId != null && !coinId.startsWith('pool:'));
	return accum.concat(coinIds);
}, [] as string[]);
