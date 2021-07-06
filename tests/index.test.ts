import { assert } from "chai";
import { MnemonicCZ, MnemonicEN, MnemonicES, MnemonicFR, MnemonicIT, MnemonicJA, MnemonicKO, MnemonicPT, MnemonicZH_CN, MnemonicZH_HK } from "../src"

describe('Create entropy from mnemonic', function () {
	const binary = '000110101011100100011100000110010110000100010110001111001111000011111010100100010110010100001001010111000010010111111110000010001100'
	it('English', async () => {
		const mnemonic = new MnemonicEN("boy similar alien season glow journey tumble coach announce thrive legend bag")
		assert.equal(mnemonic.toBinary(), binary);
	});
	
	it('日本語', async () => {
		const mnemonic = new MnemonicJA("えいせい　はんめい　あんこ　はさん　しちりん　ぜんあく　むらさき　かまう　いじょう　まつり　そつえん　いわば")
		assert.equal(mnemonic.toBinary(), binary);
	});

	it('Español', async () => {
		const mnemonic = new MnemonicES("bahía reunir agudo rato gimnasio justo tono catorce aliado tapia lima arder")
		assert.equal(mnemonic.toBinary(), binary);
	});

	it('中文(简体)', async () => {
		const mnemonic = new MnemonicZH_CN("基 掘 面 胸 唱 绍 涨 今 里 曹 润 心")
		assert.equal(mnemonic.toBinary(), binary);
	});

	it('中文(繁體)', async () => {
		const mnemonic = new MnemonicZH_HK("基 掘 面 胸 唱 紹 漲 今 裡 曹 潤 心")
		assert.equal(mnemonic.toBinary(), binary);
	});

	it('Français', async () => {
		const mnemonic = new MnemonicFR("bateau recruter adulte profond fautif hangar tétine central alchimie source imposer armure")
		assert.equal(mnemonic.toBinary(), binary);
	});

	it('Italiano', async () => {
		const mnemonic = new MnemonicIT("bavosa segregato alce sbarra idillio mana trafila cirrosi amalgama svolta minerale arringa")
		assert.equal(mnemonic.toBinary(), binary);
	});

	it('한국어', async () => {
		const mnemonic = new MnemonicKO("귀국 증거 같이 조용히 상품 시댁 풍경 단점 게임 태풍 실정 공연")
		assert.equal(mnemonic.toBinary(), binary);
	});

	it('Čeština', async () => {
		const mnemonic = new MnemonicCZ("datel starosta batoh slunce madam nepokoj vybrat fotbal blecha vchod obrna cejn")
		assert.equal(mnemonic.toBinary(), binary);
	});

	it('Português', async () => {
		const mnemonic = new MnemonicPT("auditor ranger aditivo prensar fadiga gritaria terno cafezal agitado soprano imortal animar")
		assert.equal(mnemonic.toBinary(), binary);
	});

});

describe('Create mnemonic from entropy hex', function () {
	const entropy = '1ab91c1961163cf0fa9165095c25fe08'
	it('English', async () => {
		const mnemonic = MnemonicEN.fromHex(entropy)
		assert.equal(mnemonic.toString(), "boy similar alien season glow journey tumble coach announce thrive legend bag");
	});

	it('日本語', async () => {
		const mnemonic = MnemonicJA.fromHex(entropy)
		assert.equal(mnemonic.toString(), "えいせい　はんめい　あんこ　はさん　しちりん　ぜんあく　むらさき　かまう　いじょう　まつり　そつえん　いわば")
	});

	it('Español', async () => {
		const mnemonic = MnemonicES.fromHex(entropy)
		assert.equal(mnemonic.toString(), "bahía reunir agudo rato gimnasio justo tono catorce aliado tapia lima arder")
	});

	it('中文(简体)', async () => {
		const mnemonic = MnemonicZH_CN.fromHex(entropy)
		assert.equal(mnemonic.toString(), "基 掘 面 胸 唱 绍 涨 今 里 曹 润 心")
	});

	it('中文(繁體)', async () => {
		const mnemonic = MnemonicZH_HK.fromHex(entropy)
		assert.equal(mnemonic.toString(), "基 掘 面 胸 唱 紹 漲 今 裡 曹 潤 心")
	});

	it('Français', async () => {
		const mnemonic = MnemonicFR.fromHex(entropy)
		assert.equal(mnemonic.toString(), "bateau recruter adulte profond fautif hangar tétine central alchimie source imposer armure")
	});

	it('Italiano', async () => {
		const mnemonic = MnemonicIT.fromHex(entropy)
		assert.equal(mnemonic.toString(), "bavosa segregato alce sbarra idillio mana trafila cirrosi amalgama svolta minerale arringa")
	});

	it('한국어', async () => {
		const mnemonic = MnemonicKO.fromHex(entropy)
		assert.equal(mnemonic.toString(), "귀국 증거 같이 조용히 상품 시댁 풍경 단점 게임 태풍 실정 공연")
	});

	it('Čeština', async () => {
		const mnemonic = MnemonicCZ.fromHex(entropy)
		assert.equal(mnemonic.toString(), "datel starosta batoh slunce madam nepokoj vybrat fotbal blecha vchod obrna cejn")
	});

	it('Português', async () => {
		const mnemonic = MnemonicPT.fromHex(entropy)
		assert.equal(mnemonic.toString(), "auditor ranger aditivo prensar fadiga gritaria terno cafezal agitado soprano imortal animar")
	});

});

describe('Create mnemonic from entropy binary', function () {
	const binary = '000110101011100100011100000110010110000100010110001111001111000011111010100100010110010100001001010111000010010111111110000010001100'
	it('English', async () => {
		const mnemonic = MnemonicEN.fromBinary(binary)
		assert.equal(mnemonic.toString(), "boy similar alien season glow journey tumble coach announce thrive legend bag");
	});

	it('日本語', async () => {
		const mnemonic = MnemonicJA.fromBinary(binary)
		assert.equal(mnemonic.toString(), "えいせい　はんめい　あんこ　はさん　しちりん　ぜんあく　むらさき　かまう　いじょう　まつり　そつえん　いわば")
	});

	it('Español', async () => {
		const mnemonic = MnemonicES.fromBinary(binary)
		assert.equal(mnemonic.toString(), "bahía reunir agudo rato gimnasio justo tono catorce aliado tapia lima arder")
	});

	it('中文(简体)', async () => {
		const mnemonic = MnemonicZH_CN.fromBinary(binary)
		assert.equal(mnemonic.toString(), "基 掘 面 胸 唱 绍 涨 今 里 曹 润 心")
	});

	it('中文(繁體)', async () => {
		const mnemonic = MnemonicZH_HK.fromBinary(binary)
		assert.equal(mnemonic.toString(), "基 掘 面 胸 唱 紹 漲 今 裡 曹 潤 心")
	});

	it('Français', async () => {
		const mnemonic = MnemonicFR.fromBinary(binary)
		assert.equal(mnemonic.toString(), "bateau recruter adulte profond fautif hangar tétine central alchimie source imposer armure")
	});

	it('Italiano', async () => {
		const mnemonic = MnemonicIT.fromBinary(binary)
		assert.equal(mnemonic.toString(), "bavosa segregato alce sbarra idillio mana trafila cirrosi amalgama svolta minerale arringa")
	});

	it('한국어', async () => {
		const mnemonic = MnemonicKO.fromBinary(binary)
		assert.equal(mnemonic.toString(), "귀국 증거 같이 조용히 상품 시댁 풍경 단점 게임 태풍 실정 공연")
	});

	it('Čeština', async () => {
		const mnemonic = MnemonicCZ.fromBinary(binary)
		assert.equal(mnemonic.toString(), "datel starosta batoh slunce madam nepokoj vybrat fotbal blecha vchod obrna cejn")
	});

	it('Português', async () => {
		const mnemonic = MnemonicPT.fromBinary(binary)
		assert.equal(mnemonic.toString(), "auditor ranger aditivo prensar fadiga gritaria terno cafezal agitado soprano imortal animar")
	});

});

describe('Create mnemonic from entropy bytes', function () {
	const entropy = new Uint8Array([0x1a, 0xb9, 0x1c, 0x19, 0x61, 0x16, 0x3c, 0xf0, 0xfa, 0x91, 0x65, 0x09, 0x5c, 0x25, 0xfe, 0x08])
	it('English', async () => {
		const mnemonic = MnemonicEN.fromBytes(entropy)
		assert.equal(mnemonic.toString(), "boy similar alien season glow journey tumble coach announce thrive legend bag");
	});

	it('日本語', async () => {
		const mnemonic = MnemonicJA.fromBytes(entropy)
		assert.equal(mnemonic.toString(), "えいせい　はんめい　あんこ　はさん　しちりん　ぜんあく　むらさき　かまう　いじょう　まつり　そつえん　いわば")
	});

	it('Español', async () => {
		const mnemonic = MnemonicES.fromBytes(entropy)
		assert.equal(mnemonic.toString(), "bahía reunir agudo rato gimnasio justo tono catorce aliado tapia lima arder")
	});

	it('中文(简体)', async () => {
		const mnemonic = MnemonicZH_CN.fromBytes(entropy)
		assert.equal(mnemonic.toString(), "基 掘 面 胸 唱 绍 涨 今 里 曹 润 心")
	});

	it('中文(繁體)', async () => {
		const mnemonic = MnemonicZH_HK.fromBytes(entropy)
		assert.equal(mnemonic.toString(), "基 掘 面 胸 唱 紹 漲 今 裡 曹 潤 心")
	});

	it('Français', async () => {
		const mnemonic = MnemonicFR.fromBytes(entropy)
		assert.equal(mnemonic.toString(), "bateau recruter adulte profond fautif hangar tétine central alchimie source imposer armure")
	});

	it('Italiano', async () => {
		const mnemonic = MnemonicIT.fromBytes(entropy)
		assert.equal(mnemonic.toString(), "bavosa segregato alce sbarra idillio mana trafila cirrosi amalgama svolta minerale arringa")
	});

	it('한국어', async () => {
		const mnemonic = MnemonicKO.fromBytes(entropy)
		assert.equal(mnemonic.toString(), "귀국 증거 같이 조용히 상품 시댁 풍경 단점 게임 태풍 실정 공연")
	});

	it('Čeština', async () => {
		const mnemonic = MnemonicCZ.fromBytes(entropy)
		assert.equal(mnemonic.toString(), "datel starosta batoh slunce madam nepokoj vybrat fotbal blecha vchod obrna cejn")
	});

	it('Português', async () => {
		const mnemonic = MnemonicPT.fromBytes(entropy)
		assert.equal(mnemonic.toString(), "auditor ranger aditivo prensar fadiga gritaria terno cafezal agitado soprano imortal animar")
	});

});

describe('E2E test', function () {
	const entropy = new Uint8Array([0x1a, 0xb9, 0x1c, 0x19, 0x61, 0x16, 0x3c, 0xf0, 0xfa, 0x91, 0x65, 0x09, 0x5c, 0x25, 0xfe, 0x08])
	it('EN > JA > ZH_HK > KO', async () => {
		const mnemonic = MnemonicKO.fromBytes(MnemonicZH_HK.fromBinary(MnemonicJA.fromHex(MnemonicEN.fromBytes(entropy).toHex()).toBinary()).toBytes())
		assert.equal(mnemonic.toString(), "귀국 증거 같이 조용히 상품 시댁 풍경 단점 게임 태풍 실정 공연");
	});
});

describe('NFKD Normalisation', function () {
	const entropy = new Uint8Array([0x1a, 0xb9, 0x1c, 0x19, 0x61, 0x16, 0x3c, 0xf0, 0xfa, 0x91, 0x65, 0x09, 0x5c, 0x25, 0xfe, 0x08])
	const key = new Uint8Array([0xe3, 0x81, 0x88, 0xe3, 0x81, 0x84, 0xe3, 0x81, 0x9b, 0xe3, 0x81, 0x84, 0x20, 0xe3, 0x81, 0xaf, 0xe3, 0x82, 0x93, 0xe3, 0x82, 0x81, 0xe3, 0x81, 0x84, 0x20, 0xe3, 0x81, 0x82, 0xe3, 0x82, 0x93, 0xe3, 0x81, 0x93, 0x20, 0xe3, 0x81, 0xaf, 0xe3, 0x81, 0x95, 0xe3, 0x82, 0x93, 0x20, 0xe3, 0x81, 0x97, 0xe3, 0x81, 0xa1, 0xe3, 0x82, 0x8a, 0xe3, 0x82, 0x93, 0x20, 0xe3, 0x81, 0x9b, 0xe3, 0x82, 0x99, 0xe3, 0x82, 0x93, 0xe3, 0x81, 0x82, 0xe3, 0x81, 0x8f, 0x20, 0xe3, 0x82, 0x80, 0xe3, 0x82, 0x89, 0xe3, 0x81, 0x95, 0xe3, 0x81, 0x8d, 0x20, 0xe3, 0x81, 0x8b, 0xe3, 0x81, 0xbe, 0xe3, 0x81, 0x86, 0x20, 0xe3, 0x81, 0x84, 0xe3, 0x81, 0x97, 0xe3, 0x82, 0x99, 0xe3, 0x82, 0x87, 0xe3, 0x81, 0x86, 0x20, 0xe3, 0x81, 0xbe, 0xe3, 0x81, 0xa4, 0xe3, 0x82, 0x8a, 0x20, 0xe3, 0x81, 0x9d, 0xe3, 0x81, 0xa4, 0xe3, 0x81, 0x88, 0xe3, 0x82, 0x93, 0x20, 0xe3, 0x81, 0x84, 0xe3, 0x82, 0x8f, 0xe3, 0x81, 0xaf, 0xe3, 0x82, 0x99])
	const salt = new Uint8Array([0x6d, 0x6e, 0x65, 0x6d, 0x6f, 0x6e, 0x69, 0x63])
	it('JA', async () => {
		const mnemonic = MnemonicJA.fromBytes(entropy).toBIP39Seed()
		assert.equal(key.toString(), mnemonic.key.toString())
		assert.equal(salt.toString(), mnemonic.salt.toString())
		// console.log(mnemonic.salt.toString())
	});
});