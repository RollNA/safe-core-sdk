interface NetworkShortName {
  shortName: string
  chainId: bigint
}

// https://github.com/ethereum-lists/chains/tree/master/_data/chains
export const networks: NetworkShortName[] = [
  { chainId: 1n, shortName: 'eth' },
  { chainId: 3n, shortName: 'rop' },
  { chainId: 4n, shortName: 'rin' },
  { chainId: 5n, shortName: 'gor' },
  { chainId: 10n, shortName: 'oeth' },
  { chainId: 11n, shortName: 'meta' },
  { chainId: 12n, shortName: 'kal' },
  { chainId: 18n, shortName: 'tst' },
  { chainId: 25n, shortName: 'cro' },
  { chainId: 28n, shortName: 'bobarinkeby' },
  { chainId: 30n, shortName: 'rsk' },
  { chainId: 31n, shortName: 'trsk' },
  { chainId: 39n, shortName: 'u2u' },
  { chainId: 40n, shortName: 'telosevm' },
  { chainId: 41n, shortName: 'telosevmtestnet' },
  { chainId: 42n, shortName: 'kov' },
  { chainId: 43n, shortName: 'pangolin' },
  { chainId: 44n, shortName: 'crab' },
  { chainId: 46n, shortName: 'darwinia' },
  { chainId: 50n, shortName: 'xdc' },
  { chainId: 51n, shortName: 'txdc' },
  { chainId: 56n, shortName: 'bnb' },
  { chainId: 57n, shortName: 'sys' },
  { chainId: 61n, shortName: 'etc' },
  { chainId: 63n, shortName: 'metc' },
  { chainId: 69n, shortName: 'okov' },
  { chainId: 71n, shortName: 'cfxtest' },
  { chainId: 81n, shortName: 'joc' },
  { chainId: 82n, shortName: 'meter' },
  { chainId: 83n, shortName: 'meter-test' },
  { chainId: 88n, shortName: 'tomo' },
  { chainId: 97n, shortName: 'bnbt' },
  { chainId: 100n, shortName: 'gno' },
  { chainId: 106n, shortName: 'vlx' },
  { chainId: 108n, shortName: 'tt' },
  { chainId: 109n, shortName: 'shibariumecosystem' },
  { chainId: 111n, shortName: 'etl' },
  { chainId: 122n, shortName: 'fuse' },
  { chainId: 123n, shortName: 'spark' },
  { chainId: 137n, shortName: 'matic' },
  { chainId: 148n, shortName: 'shimmerevm-mainnet' },
  { chainId: 155n, shortName: 'tenet-testnet' },
  { chainId: 169n, shortName: 'manta' },
  { chainId: 195n, shortName: 'tokb' },
  { chainId: 196n, shortName: 'okb' },
  { chainId: 204n, shortName: 'opbnb' },
  { chainId: 246n, shortName: 'ewt' },
  { chainId: 250n, shortName: 'ftm' },
  { chainId: 252n, shortName: 'fraxtal' },
  { chainId: 255n, shortName: 'kroma' },
  { chainId: 280n, shortName: 'zksync-goerli' },
  { chainId: 288n, shortName: 'boba' },
  { chainId: 291n, shortName: 'orderly' },
  { chainId: 300n, shortName: 'ogn' },
  { chainId: 321n, shortName: 'kcs' },
  { chainId: 322n, shortName: 'kcst' },
  { chainId: 324n, shortName: 'zksync' },
  { chainId: 336n, shortName: 'sdn' },
  { chainId: 338n, shortName: 'tcro' },
  { chainId: 369n, shortName: 'pls' },
  { chainId: 420n, shortName: 'ogor' },
  { chainId: 424n, shortName: 'PNG' },
  { chainId: 480n, shortName: 'world-chain' },
  { chainId: 530n, shortName: 'FxCore' },
  { chainId: 570n, shortName: 'sys-rollux' },
  { chainId: 588n, shortName: 'metis-stardust' },
  { chainId: 592n, shortName: 'astr' },
  { chainId: 595n, shortName: 'maca' },
  { chainId: 599n, shortName: 'metis-goerli' },
  { chainId: 686n, shortName: 'kar' },
  { chainId: 690n, shortName: 'redstone' },
  { chainId: 787n, shortName: 'aca' },
  { chainId: 919n, shortName: 'modesep' },
  { chainId: 943n, shortName: 't4pls' },
  { chainId: 1001n, shortName: 'baobab' },
  { chainId: 1008n, shortName: 'eun' },
  { chainId: 1030n, shortName: 'cfx' },
  { chainId: 1088n, shortName: 'metis-andromeda' },
  { chainId: 1101n, shortName: 'zkevm' },
  { chainId: 1111n, shortName: 'wemix' },
  { chainId: 1112n, shortName: 'twemix' },
  { chainId: 1115n, shortName: 'tcore' },
  { chainId: 1116n, shortName: 'core' },
  { chainId: 1135n, shortName: 'lisk' },
  { chainId: 1230n, shortName: 'UltronTestnet' },
  { chainId: 1221n, shortName: 'cycleTestnet' },
  { chainId: 1223n, shortName: 'cycleTestnetJellyFish' },
  { chainId: 1231n, shortName: 'UltronMainnet' },
  { chainId: 1284n, shortName: 'mbeam' },
  { chainId: 1285n, shortName: 'mriver' },
  { chainId: 1287n, shortName: 'mbase' },
  { chainId: 1294n, shortName: 'bobabeam' },
  { chainId: 1329n, shortName: 'sei' },
  { chainId: 1337n, shortName: 'geth' },
  { chainId: 1442n, shortName: 'testnet-zkEVM-mango' },
  { chainId: 1559n, shortName: 'tenet' },
  { chainId: 1625n, shortName: 'gravity' },
  { chainId: 1663n, shortName: 'Gobi' },
  { chainId: 1729n, shortName: 'reya' },
  { chainId: 1807n, shortName: 'rana' },
  { chainId: 1890n, shortName: 'lightlink_phoenix' },
  { chainId: 1891n, shortName: 'lightlink_pegasus' },
  { chainId: 1984n, shortName: 'euntest' },
  { chainId: 1998n, shortName: 'kyoto-testnet' },
  { chainId: 2000n, shortName: 'dc' },
  { chainId: 2001n, shortName: 'milkada' },
  { chainId: 2002n, shortName: 'milkalgo' },
  { chainId: 2008n, shortName: 'cloudwalk_testnet' },
  { chainId: 2019n, shortName: 'pmint_test' },
  { chainId: 2020n, shortName: 'pmint' },
  { chainId: 2021n, shortName: 'edg' },
  { chainId: 2039n, shortName: 'aleph' },
  { chainId: 2221n, shortName: 'tkava' },
  { chainId: 2222n, shortName: 'kava' },
  { chainId: 2331n, shortName: 'rss3-testnet' },
  { chainId: 2358n, shortName: 'kroma-sepolia' },
  { chainId: 2810n, shortName: 'hmorph' },
  { chainId: 3636n, shortName: 'BTNX' },
  { chainId: 3737n, shortName: 'csb' },
  { chainId: 3776n, shortName: 'astrzk' },
  { chainId: 4002n, shortName: 'tftm' },
  { chainId: 4078n, shortName: 'muster' },
  { chainId: 4157n, shortName: 'crossfi-testnet' },
  { chainId: 4202n, shortName: 'lisksep' },
  { chainId: 4337n, shortName: 'beam' },
  { chainId: 4460n, shortName: 'orderlyl2' },
  { chainId: 4653n, shortName: 'gold' },
  { chainId: 4689n, shortName: 'iotex-mainnet' },
  { chainId: 4918n, shortName: 'txvm' },
  { chainId: 4919n, shortName: 'xvm' },
  { chainId: 5000n, shortName: 'mantle' },
  { chainId: 5001n, shortName: 'mantle-testnet' },
  { chainId: 5003n, shortName: 'mnt-sep' },
  { chainId: 5700n, shortName: 'tsys' },
  { chainId: 6001n, shortName: 'bouncebit-mainnet' },
  { chainId: 6102n, shortName: 'cascadia' },
  { chainId: 6322n, shortName: 'aura-mainnet' },
  { chainId: 7000n, shortName: 'zetachain-mainnet' },
  { chainId: 7001n, shortName: 'zetachain-athens' },
  { chainId: 7171n, shortName: 'bitrock' },
  { chainId: 7332n, shortName: 'EON' },
  { chainId: 7341n, shortName: 'shyft' },
  { chainId: 7560n, shortName: 'cyeth' },
  { chainId: 7700n, shortName: 'canto' },
  { chainId: 7771n, shortName: 'tbitrock' },
  { chainId: 8192n, shortName: 'tqf' },
  { chainId: 8194n, shortName: 'ttqf' },
  { chainId: 8217n, shortName: 'cypress' },
  { chainId: 8329n, shortName: 'lrz' },
  { chainId: 8453n, shortName: 'base' },
  { chainId: 8822n, shortName: 'iotaevm' },
  { chainId: 9000n, shortName: 'evmos-testnet' },
  { chainId: 9001n, shortName: 'evmos' },
  { chainId: 9728n, shortName: 'boba-testnet' },
  { chainId: 10000n, shortName: 'smartbch' },
  { chainId: 10001n, shortName: 'smartbchtest' },
  { chainId: 10081n, shortName: 'joct' },
  { chainId: 10200n, shortName: 'chi' },
  { chainId: 10242n, shortName: 'aa' },
  { chainId: 10243n, shortName: 'aat' },
  { chainId: 10849n, shortName: 'lamina1' },
  { chainId: 11111n, shortName: 'WAGMI' },
  { chainId: 11235n, shortName: 'islm' },
  { chainId: 11437n, shortName: 'shyftt' },
  { chainId: 11891n, shortName: 'Arianee' },
  { chainId: 12324n, shortName: 'l3x' },
  { chainId: 12325n, shortName: 'l3x-testnet' },
  { chainId: 12357n, shortName: 'rei-testnet' },
  { chainId: 12553n, shortName: 'rss3' },
  { chainId: 13337n, shortName: 'beam-testnet' },
  { chainId: 13371n, shortName: 'imx' },
  { chainId: 13473n, shortName: 'imx-testnet' },
  { chainId: 17000n, shortName: 'holesky' },
  { chainId: 17069n, shortName: 'garnet' },
  { chainId: 17172n, shortName: 'eclipse' },
  { chainId: 18231n, shortName: 'unreal-old' },
  { chainId: 18233n, shortName: 'unreal' },
  { chainId: 23294n, shortName: 'sapphire' },
  { chainId: 23295n, shortName: 'sapphire-testnet' },
  { chainId: 28979n, shortName: 'kimbonet-testnet' },
  { chainId: 32769n, shortName: 'zil' },
  { chainId: 33101n, shortName: 'zil-testnet' },
  { chainId: 34443n, shortName: 'mode' },
  { chainId: 42161n, shortName: 'arb1' },
  { chainId: 42170n, shortName: 'arb-nova' },
  { chainId: 42220n, shortName: 'celo' },
  { chainId: 42793n, shortName: 'etherlink-mainnet' },
  { chainId: 43113n, shortName: 'fuji' },
  { chainId: 43114n, shortName: 'avax' },
  { chainId: 43288n, shortName: 'boba-avax' },
  { chainId: 44787n, shortName: 'alfa' },
  { chainId: 45000n, shortName: 'autobahnnetwork' },
  { chainId: 47805n, shortName: 'rei' },
  { chainId: 48899n, shortName: 'zircuit-testnet' },
  { chainId: 53457n, shortName: 'dodochain' },
  { chainId: 54211n, shortName: 'islmt' },
  { chainId: 56288n, shortName: 'boba-bnb' },
  { chainId: 57000n, shortName: 'tsys-rollux' },
  { chainId: 58008n, shortName: 'sepPNG' },
  { chainId: 59140n, shortName: 'linea-testnet' },
  { chainId: 59141n, shortName: 'linea-sepolia' },
  { chainId: 59144n, shortName: 'linea' },
  { chainId: 71401n, shortName: 'gw-testnet-v1' },
  { chainId: 71402n, shortName: 'gw-mainnet-v1' },
  { chainId: 73799n, shortName: 'vt' },
  { chainId: 77677n, shortName: 'cycleMainnet' },
  { chainId: 80001n, shortName: 'maticmum' },
  { chainId: 80002n, shortName: 'polygonamoy' },
  { chainId: 80084n, shortName: 'berachain-bartio' },
  { chainId: 80085n, shortName: 'berachainArtio' },
  { chainId: 81457n, shortName: 'blastmainnet' },
  { chainId: 83291n, shortName: 'lrz-testnet' },
  { chainId: 84531n, shortName: 'basegor' },
  { chainId: 84532n, shortName: 'basesep' },
  { chainId: 90001n, shortName: 'dhobyghaut' },
  { chainId: 103454n, shortName: 'masatest' },
  { chainId: 105105n, shortName: 'stratis' },
  { chainId: 111188n, shortName: 're-al' },
  { chainId: 128123n, shortName: 'etherlink-testnet' },
  { chainId: 167000n, shortName: 'tko-mainnet' },
  { chainId: 167008n, shortName: 'tko-katla' },
  { chainId: 167009n, shortName: 'tko-hekla' },
  { chainId: 200101n, shortName: 'milktada' },
  { chainId: 200202n, shortName: 'milktalgo' },
  { chainId: 200810n, shortName: 'btrt' },
  { chainId: 205205n, shortName: 'auroria' },
  { chainId: 333999n, shortName: 'olympus' },
  { chainId: 421611n, shortName: 'arb-rinkeby' },
  { chainId: 421613n, shortName: 'arb-goerli' },
  { chainId: 421614n, shortName: 'arb-sep' },
  { chainId: 444444n, shortName: 'syndr' },
  { chainId: 534351n, shortName: 'scr-sepolia' },
  { chainId: 534352n, shortName: 'scr' },
  { chainId: 534353n, shortName: 'scr-alpha' },
  { chainId: 555666n, shortName: 'eclipset' },
  { chainId: 622277n, shortName: 'rth' },
  { chainId: 656476n, shortName: 'open-campus-codex' },
  { chainId: 713715n, shortName: 'sei-devnet' },
  { chainId: 764984n, shortName: 'lamina1test' },
  { chainId: 810180n, shortName: 'zklink-nova' },
  { chainId: 7225878n, shortName: 'saakuru' },
  { chainId: 7777777n, shortName: 'zora' },
  { chainId: 6038361n, shortName: 'azkyt' },
  { chainId: 11155111n, shortName: 'sep' },
  { chainId: 11155420n, shortName: 'opsep' },
  { chainId: 94204209n, shortName: 'polygon-blackberry' },
  { chainId: 111557560n, shortName: 'cysep' },
  { chainId: 123420111n, shortName: 'opcelestia-raspberry' },
  { chainId: 161221135n, shortName: 'plume-testnet' },
  { chainId: 168587773n, shortName: 'blastsepolia' },
  { chainId: 222000222n, shortName: 'kanazawa' },
  { chainId: 245022926n, shortName: 'neonevm-devnet' },
  { chainId: 245022934n, shortName: 'neonevm-mainnet' },
  { chainId: 333000333n, shortName: 'meld' },
  { chainId: 666666666n, shortName: 'degen-chain' },
  { chainId: 999999999n, shortName: 'zsep' },
  { chainId: 1313161554n, shortName: 'aurora' },
  { chainId: 1313161555n, shortName: 'aurora-testnet' },
  { chainId: 1666600000n, shortName: 'hmy-s0' },
  { chainId: 1666700000n, shortName: 'hmy-b-s0' },
  { chainId: 11297108099n, shortName: 'tpalm' },
  { chainId: 11297108109n, shortName: 'palm' },
  { chainId: 88153591557n, shortName: 'arb-blueberry' }
]

if (process.env.TEST_NETWORK === 'hardhat') {
  networks.push({ shortName: 'local', chainId: 31337n })
}
