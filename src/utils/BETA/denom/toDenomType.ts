import { ContractAddress, DenomType } from '../../../models/BETA/denom';

interface Params {
	/**
	 * Directly received `denom` from node.
	 * for ibc transferred coin is of the form `ibc:transfer:uatom`
	 * for native coin is of the form uosmo
	 * */
	denom: string;
}

export function toDenomType({ denom }: Params) {
	/** NOTE: regex will return `[ibc/ASDF]` if denom is of the form ibc/ASDF
	 *   denom directly from node is of the form type:contractAddress:denom if it is
	 * ibc-received from different zone.
	 * */
	const denomParts = denom.split(/(\w+):(\w+):(.+)/).filter(Boolean);
	if (denomParts.length !== 1 && denomParts.length !== 3) {
		throw new Error(`Invalid denom: ${denom}`);
	}
	return {
		type: (denomParts.length === 3 ? denomParts[0] : 'native') as DenomType,
		contactAddress: (denomParts.length === 3 ? denomParts[1] : '') as ContractAddress,
	} as const;
}
