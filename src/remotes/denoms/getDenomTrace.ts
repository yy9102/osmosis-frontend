import axios from 'axios';
import { OSMOSIS_CHAIN_API_DOMAIN } from '../../constants/BETA/urls';
import { DenomTraceRes } from '../../models/BETA/denom';

interface Params {
	/** Must start with ibc/ eg) ibc/XXX */
	ibcDenom: string;
	/** TODO:Q it seems restDomain is always OSMOSIS_CHAIN_API_DOMAIN?*/
	restDomain?: string;
}

export async function getDenomTrace({ ibcDenom, restDomain = OSMOSIS_CHAIN_API_DOMAIN }: Params) {
	if (ibcDenom?.toUpperCase()?.startsWith('GAMM')) {
		return { base_denom: ibcDenom, path: 'native' };
	}
	/** if does not start with ibc/ it will error out so just return null */
	if (!ibcDenom.startsWith('ibc/')) {
		return null;
	}
	const coinMinimalDenomWithoutPrefix = ibcDenom.replace('ibc/', '');
	const res = await axios.get<{ denom_trace: DenomTraceRes }>(
		`${restDomain}/ibc/applications/transfer/v1beta1/denom_traces/${coinMinimalDenomWithoutPrefix}`
	);
	return res.data?.denom_trace;
}
