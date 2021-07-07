# BSV Mnemonic
### _Mnemonic phrases for `bsv-wasm`_

BSV Mnemonic is a Typescript extension of `bsv-wasm` that allows you to create Mnemonics from:
- 12/15/18/21/24/any multiple of 3 words >=12
- 13/25 words (12/24 + 1 word as a passphrase)
- 128/256/any multiple of 32 bit raw entropy >=128 (Uint8Array/Hex/Binary)

And export them to:
- Mnemonic phrase
- Hex entropy
- Uint8Array
- Binary
- Bip39Seed (Uint8Array object with key and salt for PBKDF derivation)

## Why not just package this into BSV WASM?

Some people speak languages other than English, present company included. There's a whole bunch of languages out there that are officially supported by BIP39, and packaging all of them into a single WASM bundle with their own library of 2048 mnemonic words would bloat the package out by ~200kb as opposed to only ~20kb per language you care about. As such, we thought we'd save you a few gigamegs by allowing you to decide which locale(s) you'd like to import.

## Installation

BSV Mnemonic requires the peer dependency of `bsv-wasm ^1.0.0`. To add both packages to your project, run the following:

```sh
npm install bsv-wasm @bsvwasm/mnemonic
```

## Usage

#### Seed Phrase
The simplest way to create a `Mnemonic` is to simply import the language(s) you want to use and instantiate a new `Mnemonic` object via the class constructor method:

```ts
import { MnemonicEN } from '@bsvwasm/mnemonic'

const mnemonic = new MnemonicEN('boy similar alien season glow journey tumble coach announce thrive legend bag')

console.log(mnemonic.toHex())

// Outputs: 1ab91c1961163cf0fa9165095c25fe08
```

The seed phrase may be any multiple of 3 words with a minimum length of 12 words. Seeds with 13 or 25 words will treat the 13th or 25th word respectively as a passphrase. For any other seed length that you wish to use with a passphrase, you may explicitly set one via the `Mnemonic.passphrase()` method.

#### From Hex String

A new `Mnemonic` can be instantiated by any >=128 bit source of entry that is a multiple of 32 bits. To instantiate from a hex `string`, use the `Mnemonic.fromHex()` static method:

```ts
import { MnemonicJA } from '@bsvwasm/mnemonic'

const mnemonic = MnemonicJA.fromHex('1ab91c1961163cf0fa9165095c25fe08')

console.log(mnemonic.toString())

// Outputs: えいせい　はんめい　あんこ　はさん　しちりん　ぜんあく　むらさき　かまう　いじょう　まつり　そつえん　いわば
```

#### From Uint8Array
To instantiate a new `Mnemonic` from a `Uint8Array` with the same constraints as a hex stringe above, use the `Mnemonic.fromBytes()` static method:

```ts
import { MnemonicKO } from '@bsvwasm/mnemonic'

const mnemonic = new MnemonicKO('귀국 증거 같이 조용히 상품 시댁 풍경 단점 게임 태풍 실정 공연')

console.log(mnemonic.toBytes())

// Outputs: Uint8Array(16) [ 26, 185, 28, 25, 97, 22, 60, 240, 250, 145, 101, 9, 92, 37, 254, 8]
```

#### From Binary

You can also instantiate a new `Mnemonic` from a binary string. Unlike the hex `string` and `Uint8Array` methods above, the binary string may be any multiple of 32 or 33 bits that is >=128 bits, as it can either include or exclude the entropy checksum. When calling the opposing `Menmonic.toBinary()` function, the output will always be a checksummed multiple of 33 bits.



#### Passphrases (Optional)
Seeds with 13 or 25 words will treat the 13th or 25th word respectively as a passphrase. For any other seed length that you wish to use with a passphrase, or any `Mnemonic` instantiated by `hex`, `Uint8Array` or binary `string` methods, you may explicitly set a passphrase using the `Mnemonic.passphrase()` method:

```ts
import { MnemonicZH_HK } from '@bsvwasm/mnemonic'

const mnemonic = new MnemonicZH_HK('基 掘 面 胸 唱 紹 漲 今 裡 曹 潤 心')
		
mnemonic.passphrase('家黃萬事興')

console.log(mnemonic.toBIP39Seed())

/*
Outputs: 
{
    key: Uint8Array(47) [229, 159, 186, 32, 230, 142, 152, 32, 233, 157, 162, 32, 232, 131, 184, 32, 229, 148, 177, 32, 231, 180, 185,32, 230, 188, 178, 32, 228, 187, 138, 32, 232, 163, 161, 32, 230, 155, 185, 32, 230, 189, 164, 32, 229, 191, 131],
    salt: Uint8Array(23) [109, 110, 101, 109, 111, 110, 105, 99, 229, 174, 182, 233, 187, 131, 232, 144, 172, 228, 186, 139, 232, 136, 136] 
}
*/
```



## Language support

BSV Mnemonic currently supports the following languages:
- 🇦🇺 English
- 🇯🇵 日本語
- 🇲🇽 Español
- 🇨🇳 中文(简体)
- 🇭🇰 中文(繁體)
- 🇨🇦 Français
- 🇮🇹 Italiano
- 🇰🇷 한국어
- 🇨🇿 Čeština
- 🇵🇹 Português

## Development

Want to contribute? Submit a pull request.

## TODO:
- Integration tests
- Randomised tests
- Password tests
- Larger entropy tests

## Thanks to

[u/6511](https://twetch.app/u/6511) / [@firaenix](https://twitter.com/Firaenix)

[u/1](https://twetch.app/u/1) / [@hcbeckerich](https://twitter.com/hcbeckerich)