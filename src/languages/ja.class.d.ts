import { Mnemonic } from "../mnemonic.class";
export declare class MnemonicJA extends Mnemonic {
    static words: string[];
    static spacer: string;
    constructor(mnemonic: string);
    static fromBinary(binary: string): Mnemonic;
    static fromBytes(bytes: Uint8Array): Mnemonic;
    static fromHex(hex: string): Mnemonic;
}
