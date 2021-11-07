import { Mnemonic } from "../mnemonic.class";
export declare class MnemonicZH_CN extends Mnemonic {
    static words: string[];
    constructor(mnemonic: string);
    static fromBinary(binary: string): Mnemonic;
    static fromBytes(bytes: Uint8Array): Mnemonic;
    static fromHex(hex: string): Mnemonic;
}
