import { Bip39Seed } from './interfaces/bip39seed.interface';
export declare class Mnemonic {
    words: string[];
    spacer: string;
    private _passphrase;
    entropy: string;
    checksum: string;
    mnemonic: string[];
    bits: number;
    constructor(phrase: string, words: string[], spacer?: string);
    getPassphrase(): string;
    setPassphrase(passphrase: string): void;
    static fromBinary(binary: string, words: string[], spacer?: string): Mnemonic;
    static fromBytes(bytes: Uint8Array, words: string[], spacer?: string): Mnemonic;
    static fromHex(hex: string, words: string[], spacer?: string): Mnemonic;
    toString(): string;
    toHex(): string;
    toBinary(): string;
    toBytes(): Uint8Array;
    toBIP39Seed(): Bip39Seed;
}
