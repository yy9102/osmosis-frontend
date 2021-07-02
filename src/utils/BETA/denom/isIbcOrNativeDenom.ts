import { toDenomType } from './toDenomType';

interface Params {
	/** denom could be;
	 *   1. rawDenom (ibc:transfer:uatom) [directly received from node]
	 *   2. nativeDenom (uosmo) [which is also rawDenom if is in osmosis zone.]
	 *   3. ibcDenom (ibc/ASDF123..)
	 * */
	denom: string;
}

export function isIbcOrNativeDenom({ denom }: Params) {
	const { type } = toDenomType({ denom });
	return type === 'native' ? true : denom.startsWith('ibc/');
}
