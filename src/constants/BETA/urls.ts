import { pluckOsmosisChainInfo } from '../../utils/BETA/pluckOsmosisChainInfo';

export const OSMOSIS_POOL_API_DOMAIN = pluckOsmosisChainInfo().rest;
/** For now pool api and chain api uses the same domain */
export const OSMOSIS_CHAIN_API_DOMAIN = pluckOsmosisChainInfo().rest;

export const COINGECKO_API_DOMAIN = 'https://api.coingecko.com/api/v3';
