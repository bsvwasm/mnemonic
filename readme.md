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
- Bip39 Array (Uint8Array of mnemonic seed + optional passphrase)

## Why not just package this into BSV WASM?

Some people speak languages other than English, present company included. There's a whole bunch of languages out there that are officially supported by BIP39, and packaging all of them into a single WASM bundle with their own library of 2048 mnemonic words would bloat the package out by ~200kb as opposed to only ~20kb per language you care about. As such, we thought we'd save you a few gigamegs by allowing you to decide which locale(s) you'd like to import.

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

## Installation

BSV Mnemonic requires the peer dependency of `bsv-wasm ^1.0.0`. To add both packages to your project, run the following:

```sh
npm install bsv-wasm @bsvwasm/mnemonic
```

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