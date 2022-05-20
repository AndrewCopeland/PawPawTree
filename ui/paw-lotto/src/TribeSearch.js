import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import colors from "./colors"





const action = (params, value) => {
    const result = tribes.filter((tribe) => {
        return tribe.alias === value
    })
    if ( result.length !== 1 ) {
        console.error("Failed to find query, this should not happen")
        return
    }
    window.location.href = "/tribe/" + result[0].account
}


export default function TribeSearch() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="tribe-search"
        disableClearable
        options={tribes.map((option) => option.alias)}
        sx={{
            backgroundColor: colors.WHITE
        }}
        onChange={action}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search tribe name"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}

const tribes = [
    {
		"votingweight": 5.391436419858249e+35,
		"delegators": 323,
		"uptime": 99.23599320882852,
		"score": 0,
		"account": "paw_11sao8crjdd91iifeipkri5xaes98mgqh9zwcaxup8g9gw3o1p9cknqgy6xj",
		"alias": "🐘 WISE ELEPHANT TRIBE 🐘"
	},
    {
		"votingweight": 8.401936260684016e+35,
		"delegators": 355,
		"uptime": 94.44280224652675,
		"score": 1,
		"account": "paw_1ha8sgngsu7c4t1nh7jn95ckoa45ozz1h6n568935ays9bars4x8be9ci8ad",
		"alias": "🌞🐻 Grumpy Bears' Tribe 🐻🌞"
	},
	{
		"votingweight": 2.2788510711176676e+35,
		"delegators": 110,
		"uptime": 96.54115586690017,
		"score": 19,
		"account": "paw_34xp9szeo6qf6k4j4nobp6xnpahgiwxsd5mmihxtagpzr1eshzq4gppqhnd5",
		"alias": " 🐎 Lucky Luck Horse  🐎 "
	},
	{
		"votingweight": 6.38805458574788e+35,
		"delegators": 332,
		"uptime": 89.99172870140613,
		"score": 17,
		"account": "paw_1wcajz9cm5kcgyyg3mhjnhn46kxgggoqt6d8mzpu14um3w14fhknfrpb1dzk",
		"alias": "🐼 Funny Looking Cats 🐼"
	},
	{
		"votingweight": 9.055758619205249e+35,
		"delegators": 1193,
		"uptime": 93.54012521343199,
		"score": 17,
		"account": "paw_1eg4dyiy8g1ocg6er5ypgu6qgoofw8z8xn8uw4jjwn64e6ncegf4qs7kfo9p",
		"alias": "🦁 Lion's Rawr 🦁"
	},
	{
		"votingweight": 3.2740635957670408e+35,
		"delegators": 54,
		"uptime": 90.27939464493598,
		"score": 15,
		"account": "paw_3m5hcaxo4owz73kwcag1ta1bq1yit7hqamb7ez6zhwh1mqjcphh98krptw3m",
		"alias": "Good Doggo 🐕"
	},
	{
		"votingweight": 3.607957826856659e+35,
		"delegators": 347,
		"uptime": 87.12668757670802,
		"score": 15,
		"account": "paw_1xrzm6schbcck81ni4eqs3qyoo9sagwhpop7s41pbosp46a1bkf8mujrs7z8",
		"alias": "Unicorn Dog Tribe 🦄+🐶"
	},
	{
		"votingweight": 3.908739089214755e+35,
		"delegators": 57,
		"uptime": 89.01161144151799,
		"score": 15,
		"account": "paw_1dre1orfwfn43spbpohpjbgnt6artwjiycpa1q5zc1k5exc9rg4hp4h4uybg",
		"alias": "🐰 Rabbit Colony 🐇"
	},
	{
		"votingweight": 4.187966718868302e+35,
		"delegators": 286,
		"uptime": 96.59126123334366,
		"score": 15,
		"account": "paw_3jgkd9pihyahg7wttt35mzcrb54cr17pj8st9zcj7o9r695rdzxubu7h98hy",
		"alias": "Thunder Cat! ⚡🐈"
	},
	{
		"votingweight": 4.343915498457789e+35,
		"delegators": 198,
		"uptime": 90.41469364327736,
		"score": 15,
		"account": "paw_3x8jijmjf7gxbmx6rbd1gk3bhnaexadqojad8xsyu9zpfkofcs117tcwh9qn",
		"alias": "🐻 Bear loves Fishing 🎣🐟"
	},
	{
		"votingweight": 7.624358716381966e+35,
		"delegators": 511,
		"uptime": 85.6347589952478,
		"score": 14,
		"account": "paw_1nodemb9ttpgi6qqjmjuyjmb7nz1ty8mab587bcat7e7fd91ktcbqyo95kpx",
		"alias": "😼 Naked Cat ฅ^•ﻌ•^ฅ Tribe's 😼"
	},
	{
		"votingweight": 8.377550044210751e+34,
		"delegators": 9,
		"uptime": 92.0414673046252,
		"score": 13,
		"account": "paw_3hufk8opwpwsn5tp68ohs6zjiokx3rydnp8wijqpi19tnfiqupi7t1jdcd5y",
		"alias": "🐾 Pawmon Faucet 🐾 catcatcat"
	},
	{
		"votingweight": 6.593233004239028e+35,
		"delegators": 51,
		"uptime": 86.91091954022988,
		"score": 13,
		"account": "paw_36e36hysxd6qdyidi3mowqihm6ey1c74he4ipgr6oannq8583hmke6c97q76",
		"alias": "🦊 From the Tribes..Dogs Will Rise! 🦊"
	},
	{
		"votingweight": 5.163704643209351e+34,
		"delegators": 0,
		"uptime": 91.28489896652783,
		"score": 12,
		"account": "paw_3piggydj1zxrrgnjiaawc31hgie34f8eznarkafs8ruumd1pdzb3gp7awo65",
		"alias": "Three Little Piggies 🐖🐖🐖"
	},
	{
		"votingweight": 2.585207331423402e+35,
		"delegators": 68,
		"uptime": 89.10108659861706,
		"score": 12,
		"account": "paw_1catko768d6xptd5azrtpc67mioce1xc3kjccp5mmethtu5ft4qt4z3ajieo",
		"alias": "Naked Bear"
	},
	{
		"votingweight": 5.922758237330889e+35,
		"delegators": 20,
		"uptime": 89.38750758035174,
		"score": 12,
		"account": "paw_1ozzn4jni3zsuq8cuj3y18w4p655c7udeazem3b3hdjnow9n3pk8i7n1xo87",
		"alias": "[Horse] 🐴 The Secretariat 🐴 "
	},
	{
		"votingweight": 2.1686955070798492e+35,
		"delegators": 22,
		"uptime": 95.74621485219899,
		"score": 11,
		"account": "paw_1ftwc8e4gb7113ram3n7ddr8hgzrw4mhq4k3fqyek76wyonbsir663hq8guy",
		"alias": "Panda Bear PAW"
	},
	{
		"votingweight": 6.338162296456017e+35,
		"delegators": 31,
		"uptime": 97.48263888888889,
		"score": 11,
		"account": "paw_3s3dadj5hkd7hhs331cytgq4c94398bprqbhdcuizm4e3pirsrdh415yyse6",
		"alias": "Bear Rep"
	},
	{
		"votingweight": 6.175242683603113e+34,
		"delegators": 64,
		"uptime": 82.14285714285714,
		"score": 10,
		"account": "paw_3byu7aq1sobrpa4au7p448d85c9n4ucaqhrup5fmsyzrpuy95d5yucccoiy7",
		"alias": "Lion Tribe 🦁"
	},
	{
		"votingweight": 1.2735095069887085e+34,
		"delegators": 0,
		"uptime": 96.96969696969697,
		"score": 9,
		"account": "paw_3cuanimz7sypjayfhormk9jtddcnpczxzsj419jzbf8sch96i3qoky5oatno",
		"alias": "Vanessa Cat 😽"
	},
	{
		"votingweight": 5.4818965756207505e+34,
		"delegators": 0,
		"uptime": 95.33624454148472,
		"score": 9,
		"account": "paw_3rdfh5rfh53xf4e96ny339jz1ocmbiau8eqi1kjb8aaorhmuxwrx8z316stp",
		"alias": "🐶 Funkdog 🐶"
	},
	{
		"votingweight": 6.57973294618026e+33,
		"delegators": 9,
		"uptime": 90.38027435318632,
		"score": 8,
		"account": "paw_1it9bntd5emiwego9nmdhu3cd9dhjhts3mfiuy5dudfsu4dusnfnywudkyf1",
		"alias": "Dog-sitter 🐶"
	},
	{
		"votingweight": 2.621411533849076e+34,
		"delegators": 19,
		"uptime": 91.83130699088146,
		"score": 8,
		"account": "paw_1cuanrmb1hncs5784z7zoaj6f1y7tbz41xzs1q4nufrq8iuwge9fogfstwxs",
		"alias": "👑Cat Queen👑"
	},
	{
		"votingweight": 3.7454446742154198e+34,
		"delegators": 0,
		"uptime": 97.91955617198336,
		"score": 8,
		"account": "paw_3meowtfhctqn5uem6wz9unbpkrrqisi5uxdzkgh96ysphyuio1xs4h5zuxnt",
		"alias": "Green cat says MEOW"
	},
	{
		"votingweight": 8.487937762514601e+34,
		"delegators": 0,
		"uptime": 90.21850460908159,
		"score": 8,
		"account": "paw_1bo8pmixtph4qsbjea96wm7w1pyrpfpdmzpm4qegoidyaarb3d9wua753tub",
		"alias": "19monkeys"
	},
	{
		"votingweight": 2.525429635918639e+35,
		"delegators": 11,
		"uptime": 88.89480219975164,
		"score": 8,
		"account": "paw_3kmm9hy8kyzpxsrr536o1tari1isiqa87isgue6ajfi1egy147wsc8yza4ot",
		"alias": "🔥🐒 The Super Speedy Monkey 🐒🔥"
	},
	{
		"votingweight": 2.5413187428619146e+35,
		"delegators": 40,
		"uptime": 93.98759773523861,
		"score": 8,
		"account": "paw_3cuannbgpqqasb4dkbicbsxcwow7togrmi3uecpcwsac3cpayowb91h8ciru",
		"alias": "Mini Monkey 🐵"
	},
	{
		"votingweight": 2.5460339939637944e+35,
		"delegators": 14,
		"uptime": 94.79311947931195,
		"score": 8,
		"account": "paw_3cuanznhgs7ef97jeyb6msdzs8smofbrzao1n59dpfea778anzkif9a64s79",
		"alias": "🪐🐾 Cat In Space 🐾🪐"
	},
	{
		"votingweight": 3.7161563559757156e+35,
		"delegators": 102,
		"uptime": 90.1940401940402,
		"score": 8,
		"account": "paw_3cuanp6migjckxcfc7qepziw8s8ex1c4smjwcq7sipxjr67keid797id58pm",
		"alias": "👑Cat King👑"
	},
	{
		"votingweight": 5.506810057694227e+34,
		"delegators": 0,
		"uptime": 95.82535427039448,
		"score": 7,
		"account": "paw_3aszdi9qghre81yidjdj9uh1wabzsbkmaxci6esyor77gu74csd4w4etjbzj",
		"alias": "Monkey Miner"
	},
	{
		"votingweight": 3.6943311948645315e+34,
		"delegators": 0,
		"uptime": 88.48177743129995,
		"score": 6,
		"account": "paw_1cuan5rwkci9w8yesqhzz5dm8e451g4pbwknrcnji57o68woxcnrd33mhbp3",
		"alias": "🍗 Golden Fried Chicken 🐔"
	},
	{
		"votingweight": 8.993095950508153e+34,
		"delegators": 0,
		"uptime": 93.5862691960253,
		"score": 6,
		"account": "paw_1kaea6y9dksafbp9nspdr9847cnnhchbeax1kfa3sihu5ezi5g7c6kz4cpwf",
		"alias": "🐒🐒 Monkey Night Club ✨🕺💃 🎶"
	},
	{
		"votingweight": 9.937635787231153e+34,
		"delegators": 0,
		"uptime": 85.7405140758874,
		"score": 6,
		"account": "paw_3fr4dto75xorr71boxtoi7nejuym4eh91gbcpekak9ncxur5mehndbgb1os9",
		"alias": "Blond Lioness 🦁"
	},
	{
		"votingweight": 1.2077739404599857e+35,
		"delegators": 0,
		"uptime": 88.68885251863975,
		"score": 6,
		"account": "paw_1a3yp7gzn5sd5mr317wn1eswyw8pik7epe5ktbgcyrnj9joxxk5q13rkn5p1",
		"alias": "kucing cat 🐹🐹"
	},
	{
		"votingweight": 4.052625891587966e+34,
		"delegators": 0,
		"uptime": 87.808140645901,
		"score": 5,
		"account": "paw_3m3w59r5t8oeyb7cxzh5t6i6p9k3htq5rnpgtx6bdztsc4nk1mequot7gs8y",
		"alias": "🐷 getpaw.cc 🐷 Pig 🐷"
	},
	{
		"votingweight": 8.34693004289025e+34,
		"delegators": 0,
		"uptime": 86.65278303672851,
		"score": 5,
		"account": "paw_1oz8cd8y7b3gdy4upc6io86hetfw65boik3q59jedi7ontussdw6kdauukme",
		"alias": "Dauukme Pig"
	},
	{
		"votingweight": 3.437581924106389e+34,
		"delegators": 36,
		"uptime": 89.54525189478377,
		"score": 4,
		"account": "paw_3idqfzgi5wyjhycny973pdy7t7mmwtt1nmn49asf1deit8497iyjuc51r5p8",
		"alias": "🐷 Daddy Pig 🐷"
	},
	{
		"votingweight": 6.88942303974233e+34,
		"delegators": 0,
		"uptime": 96.8961625282167,
		"score": 4,
		"account": "paw_1pz913k1upxa9qejdomfkqs3gmgkowyrog7bhjqixnx69hfuy44jnyx555sh",
		"alias": "🐻 Grizzly Bear 🐻"
	},
	{
		"votingweight": 2.8671543892623652e+35,
		"delegators": 11,
		"uptime": 96.764771961357,
		"score": 4,
		"account": "paw_3winnies55mrshqqasnrrb7rzdjn6z43pii83xnw3npx48ah5xmsxcs9ibbz",
		"alias": "🍯 Winnie the paw bear 🍯"
	},
	{
		"votingweight": 3.217942055397622e+35,
		"delegators": 215,
		"uptime": 63.428098261109575,
		"score": 4,
		"account": "paw_1obpizjiqnxmpqw3f7oe38bc9nkj6psagahn5jx76gfjtkafhgxfac8sn6qr",
		"alias": "Tiny Elephant"
	},
	{
		"votingweight": 5.725762042476286e+34,
		"delegators": 12,
		"uptime": 88.98261758691206,
		"score": 3,
		"account": "paw_3urzw4nxdighnztacfkaoowmdar6czx8b435sd4hwso1pr1wy4ozg6xikbwf",
		"alias": "PandaMonkey19"
	},
	{
		"votingweight": 8.52514355023308e+34,
		"delegators": 0,
		"uptime": 97.80594831789371,
		"score": 3,
		"account": "paw_195xh8imq4d376rc9t14m6i3exm8e5x17m1oscw7959dwx75r4yjamwmtm4w",
		"alias": "🐕‍🦺   Old Dog   🐕‍🦺"
	},
	{
		"votingweight": 8.759711819755749e+34,
		"delegators": 0,
		"uptime": 83.99104963384866,
		"score": 3,
		"account": "paw_3sx5s6fwte7daine8w43mp9s6sjujing3d47xyr913isdwrm3ace47bsoer6",
		"alias": "BlueCatWhale 🐳"
	},
	{
		"votingweight": 1.902152086408552e+35,
		"delegators": 12,
		"uptime": 96.44630258688267,
		"score": 3,
		"account": "paw_1xquzjsauuox3t9ybu5y3qqt1oxdic9b8ebeiwhqfzdush8b8pkiepn7ir8f",
		"alias": "🐝🐝 The Elephant Sized Bees 🐝🐝"
	},
	{
		"votingweight": 1.4883123799398997e+34,
		"delegators": 0,
		"uptime": 87.93024323083984,
		"score": 2,
		"account": "paw_118ogspcfffu9heqk1nuzcjrikoj5ntd8nr45ctmiebz9oothwiiwtnawtp4",
		"alias": "😺 Miuw Cat 😺💕"
	},
	{
		"votingweight": 2.2397566929963863e+34,
		"delegators": 0,
		"uptime": 91.58557527189468,
		"score": 2,
		"account": "paw_1s539f6hqwh1h8b1kkztzfays9bd11sf1o7tgsnoikauc67du1krudduptzw",
		"alias": "🧸🇮🇹¸,ø¤º°`°º¤ø,¸ bear green ¸,ø¤º°`°º¤ø,¸ 🇮🇹 🧸"
	},
	{
		"votingweight": 2.5687927995992e+35,
		"delegators": 6,
		"uptime": 89.54352441613588,
		"score": 2,
		"account": "paw_19bumhhde579uxhptwmk7pdtruofqqf39z5u3b8mgi9dqsodu98n3h7nmxy6",
		"alias": "🐾 White 🐻 Bear 🐾"
	},
	{
		"votingweight": 3.267538915623804e+35,
		"delegators": 84,
		"uptime": 90.0306386990337,
		"score": 2,
		"account": "paw_3peo8pjgcd83eh6n933grzwy9pbqeq5s7r4qi95ouwao7tncyyy1m1orme6j",
		"alias": "Lion Family"
	},
	{
		"votingweight": 3.631983316423108e+35,
		"delegators": 172,
		"uptime": 94.26023962106437,
		"score": 2,
		"account": "paw_3muo34p8synuegrn4rcjamgjmh5nfaen8bgw55iqhz5h76i4g8jac86bgtso",
		"alias": "            😼 CatKayDee 😼"
	},
	{
		"votingweight": 2.2641040551713614e+32,
		"delegators": 0,
		"uptime": 85.68722943722943,
		"score": 1,
		"account": "paw_1cuan7uphmgyefr5zqdpntqgec7cgozkj55rcofr7ayiq4bept3bbiykb5kj",
		"alias": "🐈‍⬛ The Dark Side of Cat 🐈‍⬛"
	},
	{
		"votingweight": 3.862998653734776e+33,
		"delegators": 0,
		"uptime": 97.93971766501335,
		"score": 1,
		"account": "paw_37qmdofqpztpme3jqekeuc7p876zht9ju7xtmbbigcxaatr76a6nnws1dzey",
		"alias": "STAKING & TRIBE JOIN HERE BEAR"
	},
	{
		"votingweight": 9.471911627786416e+33,
		"delegators": 0,
		"uptime": 63.213610586011335,
		"score": 1,
		"account": "paw_3cko7ttqmkjtnozucou5d5f74zjefrjknr5af3ttftzjf63dtwk9hftw7yo9",
		"alias": "Chicken Paw! 🐓🐾"
	},
	{
		"votingweight": 7.794573903419687e+34,
		"delegators": 23,
		"uptime": 94.23250225292881,
		"score": 1,
		"account": "paw_1b9m4e1pmw7yxn9dg663ke48frx4ggtcm8fn5ca78d6dxww5pyaam431sktm",
		"alias": "RUBINO and MAGU DOGS"
	},
	{
		"votingweight": 1.1390513105882868e+35,
		"delegators": 0,
		"uptime": 91.47679324894514,
		"score": 1,
		"account": "paw_3qso8ktf37oen7t86wk883i4r56fasp3a6frmysdzadb1w6nyquxieaucjzj",
		"alias": "LILLO CAT"
	},
	{
		"votingweight": 1.256598016115377e+35,
		"delegators": 7,
		"uptime": 91.35029354207437,
		"score": 1,
		"account": "paw_354h4njjryhaonctk8thsjom3m48gd9h3ukojnnu6jpgue1zipa8g8xokoiy",
		"alias": "SIMBA CAT"
	},
	{
		"votingweight": 1.9119061097716974e+35,
		"delegators": 10,
		"uptime": 97.09618874773139,
		"score": 1,
		"account": "paw_1f595o3gbci95mh31cy57gfp17ajpz3ozb94n7boe4uarzwo35o3ec7eqyqf",
		"alias": "ROMPAS CAT"
	},
	{
		"votingweight": 3.0528431125763393e+35,
		"delegators": 5,
		"uptime": 93.7319468515309,
		"score": 1,
		"account": "paw_11wurjmsdnrn7omnahexxpnoknz13opmrepzsw4akzr3yqn11sc9hp4xxwft",
		"alias": "Hot Dog Tribe!"
	},
	{
		"votingweight": 3.3193364300246418e+35,
		"delegators": 29,
		"uptime": 92.57731958762886,
		"score": 1,
		"account": "paw_3ttmewzz3r84wcx5pxh8mdg973wx8jy18cdyrt3s1kstcw3swucncp4fq3pk",
		"alias": " Cat Diamonds"
	},
	{
		"votingweight": 4.723494547245781e+35,
		"delegators": 13,
		"uptime": 93.07387862796834,
		"score": 1,
		"account": "paw_31doaspp35zpbpe8o7hdwx448yiins7n1hkotzfypdk8oerygwnq6e5xg8rh",
		"alias": "🐾Scattered PAWniverse🐾"
	},
	{
		"votingweight": 5.97118350478176e+35,
		"delegators": 25,
		"uptime": 98.78085043116265,
		"score": 1,
		"account": "paw_1np4eo33jggasctu7kbwpux9pkborg1szfwanzzif6idskjohpjaemepxkzg",
		"alias": "🐾Scattered Paws🐾"
	},
	{
		"votingweight": 6.418108881311863e+31,
		"delegators": 0,
		"uptime": 88.04895608351332,
		"score": 0,
		"account": "paw_1owh9ro948mca3qt76ecw84foq3egtzwbc54ufkjasduz6b6qyg14mg4h9h7",
		"alias": "😺 Black Cat Murz 😺"
	},
	{
		"votingweight": 1.462449375012072e+32,
		"delegators": 0,
		"uptime": 87.30544747081711,
		"score": 0,
		"account": "paw_13x161cefkojm56bu195upztzdkkj9ze56qa7h7ycs1jwexkrzkd57rfh6xj",
		"alias": "Baby Pig George "
	},
	{
		"votingweight": 4.290456232269175e+33,
		"delegators": 0,
		"uptime": 99.80988593155894,
		"score": 0,
		"account": "paw_1as31s5gyrbbuqms6jd43ruin3xpo153koc65tp3g57chfkocs5iu3gk6atb",
		"alias": "SweetDog"
	},
	{
		"votingweight": 5.328476323785271e+33,
		"delegators": 0,
		"uptime": 99.6,
		"score": 0,
		"account": "paw_3kb7r5ddzo47ycey69uc4hfgcab6yxfe5uah4rwno15drfezhcbx9n6dim76",
		"alias": "🦁❤🦁 Kemdar Lion 🦁❤🦁"
	},
	{
		"votingweight": 1.2682596711412694e+34,
		"delegators": 0,
		"uptime": 95.79349904397706,
		"score": 0,
		"account": "paw_13tbi54mj4kats5dcp183o9r1x3zyc84ika1cdupwwqsuj8p1fcswjhoooar",
		"alias": "Legendary catty"
	},
	{
		"votingweight": 1.4109392424465607e+34,
		"delegators": 0,
		"uptime": 99.48805460750853,
		"score": 0,
		"account": "paw_1w1ssp5whp8mkwyg11fek7choipeeg3oaueytxcrip8f5b5aajns78g9pzah",
		"alias": "(͠≖ ͜ʖ͠≖)👌  👓 Smart Chicken! 👓  (͠≖ ͜ʖ͠≖)👌"
	},
	{
		"votingweight": 1.4267374911926863e+34,
		"delegators": 0,
		"uptime": 100,
		"score": 0,
		"account": "paw_1du3gbagih99xdkdkreno6c8bj44gnmj6d8srtex9exknptwc357igb738e7",
		"alias": "❄️🐱   SnowCat   🐱❄️"
	},
	{
		"votingweight": 1.5198750514812446e+34,
		"delegators": 0,
		"uptime": 94.36980166346768,
		"score": 0,
		"account": "paw_196msxzj74wukm9fxwn1nnyxxejy5wx8gayok5njbydwm7ztwirg9fe7ehzb",
		"alias": "DogKayDee"
	},
	{
		"votingweight": 2.413491120801437e+34,
		"delegators": 0,
		"uptime": 99.86824769433466,
		"score": 0,
		"account": "paw_36yq9ufopbbxwtiwurfwn8mtogqqzhk9dksdt58ujtjekxrwi5i6b3fehuwd",
		"alias": "🐕 Doggos UNLEASHED 🐩"
	},
	{
		"votingweight": 3.5021253396422477e+34,
		"delegators": 0,
		"uptime": 100,
		"score": 0,
		"account": "paw_349yzeb35jffd7zd8tfek935tzesaydwk1ur7zzwn5pehaxsujhx4rxeifhq",
		"alias": "Reading Cat"
	},
	{
		"votingweight": 5.391544911771988e+34,
		"delegators": 0,
		"uptime": 100,
		"score": 0,
		"account": "paw_35osqssxc3srf17wwys4o5ifuonaqbmdgeyk7tu7qf1hrf4yennccguk1d7x",
		"alias": "Naked cat Tribe"
	},
	{
		"votingweight": 5.679929539521233e+34,
		"delegators": 0,
		"uptime": 100,
		"score": 0,
		"account": "paw_3pqby14f8i5nxdtt6oxd5pgnfonm1zhanyhq579pmmahg1gyhdcmen77y1oa",
		"alias": "Blue Lion"
	},
	{
		"votingweight": 5.879288035674242e+34,
		"delegators": 0,
		"uptime": 97.73448119619393,
		"score": 0,
		"account": "paw_1u5fusj5n8qj1wfhcu7rmm8f4ndsed6ns934kua54k41a43in71brsn6d1jb",
		"alias": "Lazy Bear 🐻"
	},
	{
		"votingweight": 6.179284163745455e+34,
		"delegators": 0,
		"uptime": 99.33808553971487,
		"score": 0,
		"account": "paw_1mdj5ndjoo8rp7pp9fxeep6y1fadcndr4mcyxwer6fdgw5x57t8hh1qmc6wk",
		"alias": "Pig BabiLu"
	},
	{
		"votingweight": 1.068818221539953e+35,
		"delegators": 0,
		"uptime": 100,
		"score": 0,
		"account": "paw_1w48f7mfanihimhag658ip6uyhb3nrkyu1r4qstkb676hpzzj7pwh363sycu",
		"alias": "🦁❤Lucky Lion❤🦁"
	},
	{
		"votingweight": 1.1267009242255481e+35,
		"delegators": 0,
		"uptime": 97.98464491362763,
		"score": 0,
		"account": "paw_1mwiuq6s71az8s5bo6yq4h49b765wx7ipzw8appgyp3pqwjadhrufgjbhbnx",
		"alias": "✅ Rich 🐻 Bear ✅"
	},
	{
		"votingweight": 2.5539311682803833e+35,
		"delegators": 11,
		"uptime": 99.48849104859335,
		"score": 0,
		"account": "paw_1xstmkmj57qboz6j58trhub7gd8xgsbpxerzq6wwi14je7b16hcisbqq87fk",
		"alias": "🐻🐾 🐾Happy Bears 🐻🐾 🐾"
	},
	{
		"votingweight": 3.438443203235864e+35,
		"delegators": 9,
		"uptime": 96.42857142857143,
		"score": 0,
		"account": "paw_1q7ge7yrdwwu8ujq7ac99rso8uahnsfrzxd5ke7rmqywtpcnmyzwxkmxc5op",
		"alias": "🦁🔒 IronPaw - Feisty Secure Lion Tribe 🔒🦁 "
	},
	{
		"votingweight": 5.042543930918373e+35,
		"delegators": 12,
		"uptime": 94.00884599919583,
		"score": 0,
		"account": "paw_3trejik5s699iwzat1gqo49un4pj9d6xsbxyxiozc8un6b1fuxm7s4s3tr9m",
		"alias": "Rabbit- Paw Việt Nam"
	},
	{
		"votingweight": 7.653391343681973e+35,
		"delegators": 30,
		"uptime": 99.58890030832477,
		"score": 0,
		"account": "paw_1qzbowu6qehg3caduodyd5d1q1q1azumgdytdbf769pxegncg35gz8ucj1gt",
		"alias": "🐾✨ Cat Azure 父 PawVerse ✨🐾"
	}
]