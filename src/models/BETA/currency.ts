export interface NativeCurrency {
	/** eg. uatom */
	originalDenom: string;
	/** eg. ATOM */
	symbol: string;
	/** eg. Cosmos Atom*/
	name: string;
	/** decimal place allowed */
	decimals: number;
}
