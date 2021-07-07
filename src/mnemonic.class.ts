import { Hash } from 'bsv-wasm'
import unorm from 'unorm'
import { Bip39Seed } from './interfaces/bip39seed.interface'

export class Mnemonic {
    private _passphrase: string = ''
    entropy: string =''
    checksum: string = ''
    mnemonic: string[]
    bits:number = 0

    constructor(phrase: string, public words: string[], public spacer: string = ' ') {
        this.mnemonic = phrase.split(this.spacer)
        if(this.mnemonic?.length === 13 || this.mnemonic?.length === 25) {
            this._passphrase = this.mnemonic?.pop() || ''
        }
        if(this.mnemonic.length<12) throw new Error("Mnemonic must contain at least 128 bits of entropy")
        if(this.mnemonic.length%3!==0) throw new Error("Mnemonic entropy must be a multiple of 32 bits")
        this.entropy = this.mnemonic.map(m => {
            let n = this.words.indexOf(m);
            if (n<0) throw new Error(`Invalid word in mnemonic: ${m}`)
            return n.toString(2).padStart(11, '0')
        }).join('')
        this.checksum = this.entropy.slice(Math.floor(this.entropy.length/33*32));
        this.bits = this.entropy.length - this.checksum.length;
    }

    getPassphrase(): string {
        return this._passphrase
    }

    setPassphrase(passphrase: string) {
        this._passphrase = passphrase
    }

    static fromBinary(binary: string, words: string[], spacer: string = ' '): Mnemonic {
        if(binary.length%33!==0) {
            if(binary.length%32!==0) {
                throw new Error("Entropy bits must be a multiple of 32 bits, or 33 bits with a checksum, and no smaller than 128 bits in length")
            }
            const bytes = new Uint8Array(binary.match(/[0-1]{8}/g)?.map((n: string) => parseInt(n, 2)) || [])
            return this.fromBytes(bytes, words, spacer)
        }
        return new this(binary.match(/[0-1]{11}/g)?.map((n: string) => { return words[parseInt(n, 2)] }).join(spacer) || '', words, spacer)
    }
    
    static fromBytes(bytes: Uint8Array, words: string[], spacer: string = ' '): Mnemonic {
        if(bytes.length%4!==0 || bytes.length<16) throw new Error("Entropy bytes must be a multiple of 32 bits and no smaller than 128 bits")
        const h = Hash.sha256(bytes).toBytes()
        let b: string = '';
        bytes.forEach((byte:number) => {
            b+=byte.toString(2).padStart(8, '0')
        })
        h.forEach((byte:number) => {
            b+=byte.toString(2).padStart(8, '0')
        })
        return this.fromBinary(b.slice(0, bytes.length*8 + Math.floor(bytes.length/4)), words, spacer)
    }

    static fromHex(hex: string, words: string[], spacer: string = ' '): Mnemonic {
        return this.fromBytes(new Uint8Array(hex.match(/([\da-f]){2}/gi)?.map((n:string) => parseInt(n, 16)) || []), words, spacer)
    }

    toString(): string {
        return this._passphrase ? [...this.mnemonic, this._passphrase].join(this.spacer) : this.mnemonic.join(this.spacer);
    }

    toHex(): string {
        return this.entropy.slice(0, this.bits).match(/[0-1]{8}/g)?.map((n: string) => parseInt(n, 2).toString(16).padStart(2, '0')).join('') || ''
    }

    toBinary(): string {
        return this.entropy
    }

    toBytes(): Uint8Array {
        return new Uint8Array(this.entropy.slice(0, this.bits).match(/[0-1]{8}/g)?.map((n: string) => parseInt(n, 2)) || [])
    }

    toBIP39Seed(): Bip39Seed {
        const key = new TextEncoder().encode(unorm.nfkd(this.mnemonic.join(this.spacer)));
        const salt = new TextEncoder().encode('mnemonic'+unorm.nfkd(this._passphrase))
        return { key, salt };
    }
}