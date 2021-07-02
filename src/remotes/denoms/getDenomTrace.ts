import axios from 'axios';
import { OSMOSIS_CHAIN_API_DOMAIN } from '../../constants/BETA/urls';

interface Params {
	/** can be ibcToken eg) ibc/XXX, or nativeToken eg) uatom */
	coinMinimalDenom: string;
	restDomain?: string;
}

export async function getDenomTrace({ coinMinimalDenom, restDomain = OSMOSIS_CHAIN_API_DOMAIN }: Params) {
	const coinMinimalDenomWithoutPrefix = coinMinimalDenom.replace('ibc/', '');
	const res = await axios.get(
		`${restDomain}/ibc/applications/transfer/v1beta1/denom_traces/${coinMinimalDenomWithoutPrefix}`
	);
	return res.data;
}
