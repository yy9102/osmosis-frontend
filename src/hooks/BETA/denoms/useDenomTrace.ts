import { useQuery } from 'react-query';
import { getDenomTrace } from '../../../remotes/denoms/getDenomTrace';

interface Params {
	ibcDenom?: string;
	/** restDomain is always OSMOSIS_CHAIN_API */
	restDomain?: string;
}

export function useDenomTrace({ ibcDenom, restDomain }: Params) {
	return useQuery(
		['denomTrace', restDomain, ibcDenom],
		() => {
			if (ibcDenom == null) {
				return null;
			}
			return getDenomTrace({ ibcDenom, restDomain });
		},
		{ enabled: ibcDenom != null }
	);
}
