import axios from 'axios';
import { OSMOSIS_CHAIN_API_DOMAIN } from '../../constants/BETA/urls';

interface DenomTraceRes {
	/** native coin, eg) uatom */
	base_denom: string;
	/** contractAddress/osmosisChannelId eg) transfer/channel-0 */
	path: string;
}

interface Params {
	/** can be ibcToken eg) ibc/XXX, or  eg) uatom */
	ibcDenom: string;
	/** TODO:Q it seems restDomain is always OSMOSIS_CHAIN_API_DOMAIN?*/
	restDomain?: string;
}

export async function getDenomTrace({ ibcDenom, restDomain = OSMOSIS_CHAIN_API_DOMAIN }: Params) {
	if (!ibcDenom.startsWith('ibc/')) {
		return null;
	}
	const coinMinimalDenomWithoutPrefix = ibcDenom.replace('ibc/', '');
	const res = await axios.get<{ denom_trace: DenomTraceRes }>(
		`${restDomain}/ibc/applications/transfer/v1beta1/denom_traces/${coinMinimalDenomWithoutPrefix}`
	);
	return res.data;
}
