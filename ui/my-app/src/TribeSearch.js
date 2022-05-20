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
		"votingweight": 6.13617173546273e+35,
		"delegators": 367,
		"uptime": 99.4430693069307,
		"score": 0,
		"account": "paw_11sao8crjdd91iifeipkri5xaes98mgqh9zwcaxup8g9gw3o1p9cknqgy6xj",
		"alias": "🐘 WISE ELEPHANT TRIBE 🐘"
	},
	{
		"votingweight": 6.13617173546273e+35,
		"delegators": 367,
		"uptime": 99.4430693069307,
		"score": 0,
		"account": "paw_1z9ihd9f54xkbcqznz738ippz69cfnrx3pn6k8o75xtpbjnp9uixg9qhyao1",
		"alias": "🐘 WISE ELEPHANT COVE 🐘"
	},
	{
		"votingweight": 9.076583799833217e+35,
		"delegators": 463,
		"uptime": 95.0798220361162,
		"score": 2,
		"account": "paw_1ha8sgngsu7c4t1nh7jn95ckoa45ozz1h6n568935ays9bars4x8be9ci8ad",
		"alias": "🌞🐻 Grumpy Bears' Tribe 🐻🌞"
	},
	{
		"votingweight": 4.297563063689537e+35,
		"delegators": 41,
		"uptime": 100,
		"score": 0,
		"account": "paw_3kya1jocsspqmhhzgbb6ffw3pkcu8oabzc79sgcekdysprkipznm7jj8fhm5",
		"alias": "🐻Grumpy Bears' Hideout🐻"
	},
	{
		"votingweight": 3.4741626793462457e+34,
		"delegators": 0,
		"uptime": 19.689922480620154,
		"score": 0,
		"account": "paw_15y9wqd5omsz71cymxc7j8xb8rrer6t3wj8srcbjhw6pth581fxhbu5azpt4",
		"alias": "RacoonsPAW"
	},
	{
		"votingweight": 1.3066540129156311e+36,
		"delegators": 517,
		"uptime": 86.44111239266948,
		"score": 17,
		"account": "paw_1nodemb9ttpgi6qqjmjuyjmb7nz1ty8mab587bcat7e7fd91ktcbqyo95kpx",
		"alias": "😼 Naked Cat ฅ^•ﻌ•^ฅ Tribe's 😼"
	},
	{
		"votingweight": 1.3066540129156311e+36,
		"delegators": 517,
		"uptime": 86.44111239266948,
		"score": 17,
		"account": "paw_1td13znd6j9hbzomtdfdjod5n4zz9ej1tr3za7f1z6h4ma4k5pht7emyo1gs",
		"alias": "🐒🍌 Monkeys Of Dolomiti 🏔🌿"
	},
	{
		"votingweight": 3.4972717482074816e+35,
		"delegators": 216,
		"uptime": 96.74897119341563,
		"score": 23,
		"account": "paw_34xp9szeo6qf6k4j4nobp6xnpahgiwxsd5mmihxtagpzr1eshzq4gppqhnd5",
		"alias": " 🐎 Lucky Luck Horse  🐎 "
	},
	{
		"votingweight": 7.528221545290849e+35,
		"delegators": 320,
		"uptime": 90.56162246489859,
		"score": 21,
		"account": "paw_1wcajz9cm5kcgyyg3mhjnhn46kxgggoqt6d8mzpu14um3w14fhknfrpb1dzk",
		"alias": "🐼 Funny Looking Cats 🐼"
	},
	{
		"votingweight": 1.0764975429699777e+36,
		"delegators": 1225,
		"uptime": 93.91909991963568,
		"score": 21,
		"account": "paw_1eg4dyiy8g1ocg6er5ypgu6qgoofw8z8xn8uw4jjwn64e6ncegf4qs7kfo9p",
		"alias": "🦁 Lion's Rawr 🦁"
	},
	{
		"votingweight": 4.9225449165626776e+35,
		"delegators": 202,
		"uptime": 90.98150398271905,
		"score": 19,
		"account": "paw_3x8jijmjf7gxbmx6rbd1gk3bhnaexadqojad8xsyu9zpfkofcs117tcwh9qn",
		"alias": "🐻 Bear loves Fishing 🎣🐟"
	},
	{
		"votingweight": 5.4586327344520295e+35,
		"delegators": 309,
		"uptime": 96.80789320951828,
		"score": 19,
		"account": "paw_3jgkd9pihyahg7wttt35mzcrb54cr17pj8st9zcj7o9r695rdzxubu7h98hy",
		"alias": "Thunder Cat! ⚡🐈"
	},
	{
		"votingweight": 3.732174587221223e+35,
		"delegators": 61,
		"uptime": 90.86183310533515,
		"score": 18,
		"account": "paw_3m5hcaxo4owz73kwcag1ta1bq1yit7hqamb7ez6zhwh1mqjcphh98krptw3m",
		"alias": "Good Doggo 🐕"
	},
	{
		"votingweight": 3.9328203770172966e+35,
		"delegators": 351,
		"uptime": 87.85227126495947,
		"score": 18,
		"account": "paw_1xrzm6schbcck81ni4eqs3qyoo9sagwhpop7s41pbosp46a1bkf8mujrs7z8",
		"alias": "Unicorn Dog Tribe 🦄+🐶"
	},
	{
		"votingweight": 4.0018976887980676e+35,
		"delegators": 64,
		"uptime": 89.65333333333334,
		"score": 18,
		"account": "paw_1dre1orfwfn43spbpohpjbgnt6artwjiycpa1q5zc1k5exc9rg4hp4h4uybg",
		"alias": "🐰 Rabbit Colony 🐇"
	},
	{
		"votingweight": 1.740726401900427e+35,
		"delegators": 26,
		"uptime": 92.56112104949314,
		"score": 16,
		"account": "paw_3hufk8opwpwsn5tp68ohs6zjiokx3rydnp8wijqpi19tnfiqupi7t1jdcd5y",
		"alias": "🐾 Pawmon Faucet 🐾 catcatcat"
	},
	{
		"votingweight": 7.18354205894533e+35,
		"delegators": 53,
		"uptime": 87.56420654230872,
		"score": 16,
		"account": "paw_36e36hysxd6qdyidi3mowqihm6ey1c74he4ipgr6oannq8583hmke6c97q76",
		"alias": "🦊 From the Tribes..Dogs Will Rise! 🦊"
	},
	{
		"votingweight": 6.798968825098654e+33,
		"delegators": 68,
		"uptime": 89.83415233415234,
		"score": 15,
		"account": "paw_1catko768d6xptd5azrtpc67mioce1xc3kjccp5mmethtu5ft4qt4z3ajieo",
		"alias": "Naked Bear"
	},
	{
		"votingweight": 6.153746104655316e+34,
		"delegators": 0,
		"uptime": 91.83643982083514,
		"score": 15,
		"account": "paw_3piggydj1zxrrgnjiaawc31hgie34f8eznarkafs8ruumd1pdzb3gp7awo65",
		"alias": "Three Little Piggies 🐖🐖🐖"
	},
	{
		"votingweight": 6.125840502248818e+35,
		"delegators": 20,
		"uptime": 90.04833665055445,
		"score": 15,
		"account": "paw_1ozzn4jni3zsuq8cuj3y18w4p655c7udeazem3b3hdjnow9n3pk8i7n1xo87",
		"alias": "[Horse] 🐴 The Secretariat 🐴 "
	},
	{
		"votingweight": 2.741866386804353e+35,
		"delegators": 22,
		"uptime": 96.32627646326276,
		"score": 14,
		"account": "paw_1ftwc8e4gb7113ram3n7ddr8hgzrw4mhq4k3fqyek76wyonbsir663hq8guy",
		"alias": "Panda Bear PAW"
	},
	{
		"votingweight": 6.887459600021186e+35,
		"delegators": 34,
		"uptime": 97.66053565666344,
		"score": 14,
		"account": "paw_3s3dadj5hkd7hhs331cytgq4c94398bprqbhdcuizm4e3pirsrdh415yyse6",
		"alias": "Bear Rep"
	},
	{
		"votingweight": 6.451707697512041e+34,
		"delegators": 64,
		"uptime": 83.19440709868245,
		"score": 13,
		"account": "paw_3byu7aq1sobrpa4au7p448d85c9n4ucaqhrup5fmsyzrpuy95d5yucccoiy7",
		"alias": "Lion Tribe 🦁"
	},
	{
		"votingweight": 7.10914675704016e+34,
		"delegators": 0,
		"uptime": 97.56756756756756,
		"score": 12,
		"account": "paw_3cuanimz7sypjayfhormk9jtddcnpczxzsj419jzbf8sch96i3qoky5oatno",
		"alias": "Vanessa Cat 😽"
	},
	{
		"votingweight": 1.1284579577602682e+35,
		"delegators": 0,
		"uptime": 95.66769430472173,
		"score": 12,
		"account": "paw_3rdfh5rfh53xf4e96ny339jz1ocmbiau8eqi1kjb8aaorhmuxwrx8z316stp",
		"alias": "🐶 Funkdog 🐶"
	},
	{
		"votingweight": 1.1393721229371753e+34,
		"delegators": 9,
		"uptime": 91.0601904147168,
		"score": 11,
		"account": "paw_1it9bntd5emiwego9nmdhu3cd9dhjhts3mfiuy5dudfsu4dusnfnywudkyf1",
		"alias": "Dog-sitter 🐶"
	},
	{
		"votingweight": 8.773438437825248e+34,
		"delegators": 0,
		"uptime": 90.8989834815756,
		"score": 11,
		"account": "paw_1bo8pmixtph4qsbjea96wm7w1pyrpfpdmzpm4qegoidyaarb3d9wua753tub",
		"alias": "19monkeys"
	},
	{
		"votingweight": 1.375162475215349e+35,
		"delegators": 25,
		"uptime": 92.45878639074009,
		"score": 11,
		"account": "paw_1cuanrmb1hncs5784z7zoaj6f1y7tbz41xzs1q4nufrq8iuwge9fogfstwxs",
		"alias": "👑Cat Queen👑"
	},
	{
		"votingweight": 2.538615975656819e+35,
		"delegators": 38,
		"uptime": 94.6226187605498,
		"score": 11,
		"account": "paw_3cuannbgpqqasb4dkbicbsxcwow7togrmi3uecpcwsac3cpayowb91h8ciru",
		"alias": "Mini Monkey 🐵"
	},
	{
		"votingweight": 2.579988270798493e+35,
		"delegators": 18,
		"uptime": 95.67400540749324,
		"score": 11,
		"account": "paw_3cuanznhgs7ef97jeyb6msdzs8smofbrzao1n59dpfea778anzkif9a64s79",
		"alias": "🪐🐾 Cat In Space 🐾🪐"
	},
	{
		"votingweight": 6.664779348383868e+34,
		"delegators": 0,
		"uptime": 96.14840989399293,
		"score": 10,
		"account": "paw_3aszdi9qghre81yidjdj9uh1wabzsbkmaxci6esyor77gu74csd4w4etjbzj",
		"alias": "Monkey Miner"
	},
	{
		"votingweight": 1.3191006669090074e+35,
		"delegators": 102,
		"uptime": 90.88566827697262,
		"score": 10,
		"account": "paw_3cuanp6migjckxcfc7qepziw8s8ex1c4smjwcq7sipxjr67keid797id58pm",
		"alias": "👑Cat King👑"
	},
	{
		"votingweight": 2.528145057089592e+35,
		"delegators": 11,
		"uptime": 89.6954732510288,
		"score": 10,
		"account": "paw_3kmm9hy8kyzpxsrr536o1tari1isiqa87isgue6ajfi1egy147wsc8yza4ot",
		"alias": "🔥🐒 The Super Speedy Monkey 🐒🔥"
	},
	{
		"votingweight": 3.699835245298798e+34,
		"delegators": 0,
		"uptime": 89.38768181001974,
		"score": 9,
		"account": "paw_1cuan5rwkci9w8yesqhzz5dm8e451g4pbwknrcnji57o68woxcnrd33mhbp3",
		"alias": "🍗 Golden Fried Chicken 🐔"
	},
	{
		"votingweight": 1.0585885137257675e+35,
		"delegators": 0,
		"uptime": 94.33359936153232,
		"score": 8,
		"account": "paw_1kaea6y9dksafbp9nspdr9847cnnhchbeax1kfa3sihu5ezi5g7c6kz4cpwf",
		"alias": "🐒🐒 Monkey Night Club ✨🕺💃 🎶"
	},
	{
		"votingweight": 1.0838693626292979e+35,
		"delegators": 0,
		"uptime": 87.42579600647599,
		"score": 8,
		"account": "paw_3fr4dto75xorr71boxtoi7nejuym4eh91gbcpekak9ncxur5mehndbgb1os9",
		"alias": "Blond Lioness 🦁"
	},
	{
		"votingweight": 1.3158677287208993e+35,
		"delegators": 0,
		"uptime": 89.52332828027623,
		"score": 8,
		"account": "paw_1a3yp7gzn5sd5mr317wn1eswyw8pik7epe5ktbgcyrnj9joxxk5q13rkn5p1",
		"alias": "kucing cat 🐹🐹"
	},
	{
		"votingweight": 4.0934225645912806e+34,
		"delegators": 0,
		"uptime": 88.74977958032093,
		"score": 7,
		"account": "paw_3m3w59r5t8oeyb7cxzh5t6i6p9k3htq5rnpgtx6bdztsc4nk1mequot7gs8y",
		"alias": "🐷 getpaw.cc 🐷 Pig 🐷"
	},
	{
		"votingweight": 8.565955678004082e+34,
		"delegators": 0,
		"uptime": 87.67482517482517,
		"score": 7,
		"account": "paw_1oz8cd8y7b3gdy4upc6io86hetfw65boik3q59jedi7ontussdw6kdauukme",
		"alias": "Dauukme Pig"
	},
	{
		"votingweight": 3.848533099102791e+34,
		"delegators": 36,
		"uptime": 90.47522339561333,
		"score": 6,
		"account": "paw_3idqfzgi5wyjhycny973pdy7t7mmwtt1nmn49asf1deit8497iyjuc51r5p8",
		"alias": "🐷 Daddy Pig 🐷"
	},
	{
		"votingweight": 3.887280417486723e+34,
		"delegators": 12,
		"uptime": 97.05461239517284,
		"score": 6,
		"account": "paw_3winnies55mrshqqasnrrb7rzdjn6z43pii83xnw3npx48ah5xmsxcs9ibbz",
		"alias": "🍯 Winnie the paw bear 🍯"
	},
	{
		"votingweight": 6.035018657732208e+34,
		"delegators": 12,
		"uptime": 90.0919540229885,
		"score": 5,
		"account": "paw_3urzw4nxdighnztacfkaoowmdar6czx8b435sd4hwso1pr1wy4ozg6xikbwf",
		"alias": "PandaMonkey19"
	},
	{
		"votingweight": 8.72300992365387e+34,
		"delegators": 0,
		"uptime": 98.01762114537445,
		"score": 5,
		"account": "paw_195xh8imq4d376rc9t14m6i3exm8e5x17m1oscw7959dwx75r4yjamwmtm4w",
		"alias": "🐕‍🦺   Old Dog   🐕‍🦺"
	},
	{
		"votingweight": 8.783352566206985e+34,
		"delegators": 0,
		"uptime": 97.08689100954294,
		"score": 5,
		"account": "paw_1pz913k1upxa9qejdomfkqs3gmgkowyrog7bhjqixnx69hfuy44jnyx555sh",
		"alias": "🐻 Grizzly Bear 🐻"
	},
	{
		"votingweight": 9.260819754521077e+34,
		"delegators": 0,
		"uptime": 85.30070974971984,
		"score": 5,
		"account": "paw_3sx5s6fwte7daine8w43mp9s6sjujing3d47xyr913isdwrm3ace47bsoer6",
		"alias": "BlueCatWhale 🐳"
	},
	{
		"votingweight": 1.5364958373930155e+34,
		"delegators": 0,
		"uptime": 89.0325271059216,
		"score": 4,
		"account": "paw_118ogspcfffu9heqk1nuzcjrikoj5ntd8nr45ctmiebz9oothwiiwtnawtp4",
		"alias": "😺 Miuw Cat 😺💕"
	},
	{
		"votingweight": 2.487820868283667e+34,
		"delegators": 0,
		"uptime": 92.52288911495422,
		"score": 4,
		"account": "paw_1s539f6hqwh1h8b1kkztzfays9bd11sf1o7tgsnoikauc67du1krudduptzw",
		"alias": "🧸🇮🇹¸,ø¤º°`°º¤ø,¸ bear green ¸,ø¤º°`°º¤ø,¸ 🇮🇹 🧸"
	},
	{
		"votingweight": 2.1351119667158893e+35,
		"delegators": 14,
		"uptime": 96.81125439624853,
		"score": 4,
		"account": "paw_1xquzjsauuox3t9ybu5y3qqt1oxdic9b8ebeiwhqfzdush8b8pkiepn7ir8f",
		"alias": "🐝🐝 The Elephant Sized Bees 🐝🐝"
	},
	{
		"votingweight": 3.285712091023134e+35,
		"delegators": 85,
		"uptime": 90.96346934415723,
		"score": 4,
		"account": "paw_3peo8pjgcd83eh6n933grzwy9pbqeq5s7r4qi95ouwao7tncyyy1m1orme6j",
		"alias": "Lion Family"
	},
	{
		"votingweight": 3.295899307513118e+35,
		"delegators": 214,
		"uptime": 62.27225403435711,
		"score": 4,
		"account": "paw_1obpizjiqnxmpqw3f7oe38bc9nkj6psagahn5jx76gfjtkafhgxfac8sn6qr",
		"alias": "Tiny Elephant"
	},
	{
		"votingweight": 1.513896156301075e+35,
		"delegators": 171,
		"uptime": 94.88452942637198,
		"score": 3,
		"account": "paw_3muo34p8synuegrn4rcjamgjmh5nfaen8bgw55iqhz5h76i4g8jac86bgtso",
		"alias": "            😼 CatKayDee 😼"
	},
	{
		"votingweight": 1.0134113484390161e+34,
		"delegators": 0,
		"uptime": 68.4398313331171,
		"score": 2,
		"account": "paw_3cko7ttqmkjtnozucou5d5f74zjefrjknr5af3ttftzjf63dtwk9hftw7yo9",
		"alias": "Chicken Paw! 🐓🐾"
	},
	{
		"votingweight": 6.309839817867515e+34,
		"delegators": 5,
		"uptime": 94.43589743589743,
		"score": 2,
		"account": "paw_11wurjmsdnrn7omnahexxpnoknz13opmrepzsw4akzr3yqn11sc9hp4xxwft",
		"alias": "Hot Dog Tribe!"
	},
	{
		"votingweight": 9.295672415342691e+34,
		"delegators": 23,
		"uptime": 94.9031059198301,
		"score": 2,
		"account": "paw_1b9m4e1pmw7yxn9dg663ke48frx4ggtcm8fn5ca78d6dxww5pyaam431sktm",
		"alias": "RUBINO and MAGU DOGS"
	},
	{
		"votingweight": 1.2445045056350198e+35,
		"delegators": 0,
		"uptime": 92.80626780626781,
		"score": 2,
		"account": "paw_3qso8ktf37oen7t86wk883i4r56fasp3a6frmysdzadb1w6nyquxieaucjzj",
		"alias": "LILLO CAT"
	},
	{
		"votingweight": 1.3818503389334418e+35,
		"delegators": 5,
		"uptime": 92.6161042432342,
		"score": 2,
		"account": "paw_354h4njjryhaonctk8thsjom3m48gd9h3ukojnnu6jpgue1zipa8g8xokoiy",
		"alias": "SIMBA CAT"
	},
	{
		"votingweight": 2.7501784105955735e+35,
		"delegators": 6,
		"uptime": 90.63242986210176,
		"score": 2,
		"account": "paw_19bumhhde579uxhptwmk7pdtruofqqf39z5u3b8mgi9dqsodu98n3h7nmxy6",
		"alias": "🐾 White 🐻 Bear 🐾"
	},
	{
		"votingweight": 3.092138783388573e+35,
		"delegators": 15,
		"uptime": 98.73717442778216,
		"score": 2,
		"account": "paw_1np4eo33jggasctu7kbwpux9pkborg1szfwanzzif6idskjohpjaemepxkzg",
		"alias": "🐾Scattered Paws🐾"
	},

	{
		"votingweight": 2.774720072365923e+32,
		"delegators": 0,
		"uptime": 85.68722943722943,
		"score": 1,
		"account": "paw_1cuan7uphmgyefr5zqdpntqgec7cgozkj55rcofr7ayiq4bept3bbiykb5kj",
		"alias": "🐈‍⬛ The Dark Side of Cat 🐈‍⬛"
	},
	{
		"votingweight": 4.631770128635495e+33,
		"delegators": 0,
		"uptime": 98.23471722785224,
		"score": 1,
		"account": "paw_37qmdofqpztpme3jqekeuc7p876zht9ju7xtmbbigcxaatr76a6nnws1dzey",
		"alias": "STAKING & TRIBE JOIN HERE BEAR"
	},
	{
		"votingweight": 2.435182887849413e+34,
		"delegators": 0,
		"uptime": 95.60219890054972,
		"score": 1,
		"account": "paw_196msxzj74wukm9fxwn1nnyxxejy5wx8gayok5njbydwm7ztwirg9fe7ehzb",
		"alias": "DogKayDee"
	},
	{
		"votingweight": 6.0634345193217125e+34,
		"delegators": 0,
		"uptime": 98.10964083175804,
		"score": 1,
		"account": "paw_1u5fusj5n8qj1wfhcu7rmm8f4ndsed6ns934kua54k41a43in71brsn6d1jb",
		"alias": "Lazy Bear 🐻"
	},
	{
		"votingweight": 2.0968552585776187e+35,
		"delegators": 18,
		"uptime": 97.49451926088318,
		"score": 1,
		"account": "paw_1f595o3gbci95mh31cy57gfp17ajpz3ozb94n7boe4uarzwo35o3ec7eqyqf",
		"alias": "ROMPAS CAT"
	},
	{
		"votingweight": 3.4179949925629386e+35,
		"delegators": 29,
		"uptime": 93.54838709677419,
		"score": 1,
		"account": "paw_3ttmewzz3r84wcx5pxh8mdg973wx8jy18cdyrt3s1kstcw3swucncp4fq3pk",
		"alias": " Cat Diamonds"
	},
	{
		"votingweight": 3.451126201565761e+35,
		"delegators": 10,
		"uptime": 96.98924731182795,
		"score": 1,
		"account": "paw_1q7ge7yrdwwu8ujq7ac99rso8uahnsfrzxd5ke7rmqywtpcnmyzwxkmxc5op",
		"alias": "🦁🔒 IronPaw - Feisty Secure Lion Tribe 🔒🦁 "
	},
	{
		"votingweight": 5.5380676821900205e+35,
		"delegators": 11,
		"uptime": 94.42735042735043,
		"score": 1,
		"account": "paw_3trejik5s699iwzat1gqo49un4pj9d6xsbxyxiozc8un6b1fuxm7s4s3tr9m",
		"alias": "Rabbit- Paw Việt Nam"
	},
	{
		"votingweight": 8.074251638518527e+35,
		"delegators": 24,
		"uptime": 93.94812680115274,
		"score": 1,
		"account": "paw_31doaspp35zpbpe8o7hdwx448yiins7n1hkotzfypdk8oerygwnq6e5xg8rh",
		"alias": "🐾Scattered PAWniverse🐾"
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
		"votingweight": 1.6954063973292717e+32,
		"delegators": 0,
		"uptime": 87.30544747081711,
		"score": 0,
		"account": "paw_13x161cefkojm56bu195upztzdkkj9ze56qa7h7ycs1jwexkrzkd57rfh6xj",
		"alias": "Baby Pig George "
	},
	{
		"votingweight": 1.800002179825787e+33,
		"delegators": 0,
		"uptime": 100,
		"score": 0,
		"account": "paw_1sd6txj93bupp1tp35nkgjauu3p7rkpctp1boy1dc4ircoktprryewx4rkzr",
		"alias": "Blue Frog Lagoon Chicken"
	},
	{
		"votingweight": 4.936087316261071e+33,
		"delegators": 0,
		"uptime": 99.89626556016597,
		"score": 0,
		"account": "paw_1as31s5gyrbbuqms6jd43ruin3xpo153koc65tp3g57chfkocs5iu3gk6atb",
		"alias": "SweetDog"
	},
	{
		"votingweight": 5.15909510514437e+33,
		"delegators": 0,
		"uptime": 99.8546511627907,
		"score": 0,
		"account": "paw_3kb7r5ddzo47ycey69uc4hfgcab6yxfe5uah4rwno15drfezhcbx9n6dim76",
		"alias": "🦁❤🦁 Kemdar Lion 🦁❤🦁"
	},
	{
		"votingweight": 9.928682860575198e+33,
		"delegators": 0,
		"uptime": 100,
		"score": 0,
		"account": "paw_1du3gbagih99xdkdkreno6c8bj44gnmj6d8srtex9exknptwc357igb738e7",
		"alias": "❄️🐱   SnowCat   🐱❄️"
	},
	{
		"votingweight": 1.1937641342218276e+34,
		"delegators": 0,
		"uptime": 100,
		"score": 0,
		"account": "paw_3t17cz3auihtd87511qmgu58edc96buqhgi6njzr964p5eky5f1ooome3z3p",
		"alias": "🐇 Rabbit Hole 🐇"
	},
	{
		"votingweight": 1.2956659780594024e+34,
		"delegators": 0,
		"uptime": 97.03504043126685,
		"score": 0,
		"account": "paw_13tbi54mj4kats5dcp183o9r1x3zyc84ika1cdupwwqsuj8p1fcswjhoooar",
		"alias": "Legendary catty"
	},
	{
		"votingweight": 1.9670145695085044e+34,
		"delegators": 0,
		"uptime": 98.33984375,
		"score": 0,
		"account": "paw_1w1ssp5whp8mkwyg11fek7choipeeg3oaueytxcrip8f5b5aajns78g9pzah",
		"alias": "(͠≖ ͜ʖ͠≖)👌  👓 Smart Chicken! 👓  (͠≖ ͜ʖ͠≖)👌"
	},
	{
		"votingweight": 2.7197663558530123e+34,
		"delegators": 0,
		"uptime": 99.91645781119465,
		"score": 0,
		"account": "paw_36yq9ufopbbxwtiwurfwn8mtogqqzhk9dksdt58ujtjekxrwi5i6b3fehuwd",
		"alias": "🐕 Doggos UNLEASHED 🐩"
	},

	{
		"votingweight": 3.5905596930820863e+34,
		"delegators": 0,
		"uptime": 100,
		"score": 0,
		"account": "paw_349yzeb35jffd7zd8tfek935tzesaydwk1ur7zzwn5pehaxsujhx4rxeifhq",
		"alias": "🐈🐈🐈 Lucky 👉 Cat's 😻😻😻"
	},
	{
		"votingweight": 4.639896733595722e+34,
		"delegators": 0,
		"uptime": 100,
		"score": 0,
		"account": "paw_1369etbztqh9t395hq4f6e4io6fg3rpn9k83eeijd495tb7krg6i1z8iz1xc",
		"alias": "PawNodeRabbit"
	},
	{
		"votingweight": 5.786623314844481e+34,
		"delegators": 0,
		"uptime": 100,
		"score": 0,
		"account": "paw_3pqby14f8i5nxdtt6oxd5pgnfonm1zhanyhq579pmmahg1gyhdcmen77y1oa",
		"alias": "Blue Lion"
	},
	{
		"votingweight": 6.056151973374963e+34,
		"delegators": 0,
		"uptime": 100,
		"score": 0,
		"account": "paw_35osqssxc3srf17wwys4o5ifuonaqbmdgeyk7tu7qf1hrf4yennccguk1d7x",
		"alias": "Naked cat Tribe"
	},
	{
		"votingweight": 6.544976929812395e+34,
		"delegators": 0,
		"uptime": 99.45878434637801,
		"score": 0,
		"account": "paw_1mdj5ndjoo8rp7pp9fxeep6y1fadcndr4mcyxwer6fdgw5x57t8hh1qmc6wk",
		"alias": "Pig BabiLu"
	},
	{
		"votingweight": 8.99849846674296e+34,
		"delegators": 0,
		"uptime": 88.88888888888889,
		"score": 0,
		"account": "paw_1td13znd6j9hbzomtdfdjod5n4zz9ej1tr3za7f1z6h4ma4k5pht7emyo1gs",
		"alias": " 4️⃣2️⃣0️⃣ Cat Privé 🐈"
	},
	{
		"votingweight": 1.1776969284819578e+35,
		"delegators": 0,
		"uptime": 98.33465503568596,
		"score": 0,
		"account": "paw_1mwiuq6s71az8s5bo6yq4h49b765wx7ipzw8appgyp3pqwjadhrufgjbhbnx",
		"alias": "✅ Rich 🐻 Bear ✅"
	},
	{
		"votingweight": 2.2241982512824107e+35,
		"delegators": 16,
		"uptime": 100,
		"score": 0,
		"account": "paw_1w48f7mfanihimhag658ip6uyhb3nrkyu1r4qstkb676hpzzj7pwh363sycu",
		"alias": "🦁❤Lucky Lion❤🦁"
	},
	{
		"votingweight": 7.697387116970295e+35,
		"delegators": 42,
		"uptime": 99.7165131112686,
		"score": 0,
		"account": "paw_1qzbowu6qehg3caduodyd5d1q1q1azumgdytdbf769pxegncg35gz8ucj1gt",
		"alias": "🐾✨ Cat Azure 父 PawVerse ✨🐾"
	},
	{
		"votingweight": 1.7014461791637275e+37,
		"delegators": 28,
		"uptime": 98.95533141210375,
		"score": 0,
		"account": "paw_3cuan7h7uoagaarj45xuqzwib5wuu8uusf6bgo8m5z7zcsnud6wps8faizft",
		"alias": "🐈🐈🐈 The Big Cat Guy 🐈🐈🐈"
	},
	{
		"votingweight": 1.7014614619662547e+37,
		"delegators": 23,
		"uptime": 99.47963394939889,
		"score": 0,
		"account": "paw_3cuanuit1q6z5yashgqa98zikw5f6mckk3epd5wie6zha46kpbtgyop87pa4",
		"alias": "Lucky 🐕‍🦺 Dog Online"
	},
	{
		"votingweight": 1.7016111549247891e+37,
		"delegators": 29,
		"uptime": 99.91348233597694,
		"score": 0,
		"account": "paw_1k94ieq4xj8jjniryf33ot7cehkx3k9k13bcnwnsm986w7fwu6f3zym9srhn",
		"alias": "Yellow Elephant Tribe!"
	},
	{
		"votingweight": 1.7145939395699974e+37,
		"delegators": 48,
		"uptime": 95.99743425272611,
		"score": 0,
		"account": "paw_14k4fm5pqnyyzgdzfdr76wdsy65kg5zgpbeihzczt198kcitf6hwmrk7hkx4",
		"alias": "🐶🐾 PAWsome Dogimal 🐾🐶"
	},
	{
		"votingweight": 1.7170466194424421e+37,
		"delegators": 364,
		"uptime": 95.58355437665782,
		"score": 0,
		"account": "paw_3sqgqno4bpc7xenjn5rno7fxyku33u8ct8thunyds1cio9w595cbqz9185ds",
		"alias": "🐵🎩The monkey private club🐵🎩"
	},
	{
		"votingweight": 1.750425381959144e+37,
		"delegators": 744,
		"uptime": 96.22022536014833,
		"score": 0,
		"account": "paw_13wemmuc616hqtbrhnxrato7ruit799owmnwpady8cgyn845sipmy9bys8rx",
		"alias": "🐶 ViNo Community - Dog 🐶"
	},
	{
		"votingweight": 1.867388536688334e+37,
		"delegators": 8117,
		"uptime": 97.07241910631741,
		"score": 0,
		"account": "paw_36yxozosuwcqu4yqra7amciorb6pbkk8zawqw7zsmz63kaq18qpyud7y3kx8",
		"alias": "Bear Tribe"
	},
	{
		"votingweight": 2.367851572686247e+37,
		"delegators": 59,
		"uptime": 99.9458434876794,
		"score": 0,
		"account": "paw_1anhdw5b8mthmjsf9od8r1joj9mpzdsr4mtrnrbmrq171879y98fkoo64az1",
		"alias": "Fastest Horse 🐎"
	},
	{
		"votingweight": 3.4122968149724756e+37,
		"delegators": 44,
		"uptime": 95.47967929223114,
		"score": 0,
		"account": "paw_3u6q6ajduzuzjiqifd4qbszm9nz8u4yhqqhywgw3haaywzttnntt1u8uwh63",
		"alias": "🐻‍❄️Polar Bear🐻‍❄️"
	},
	{
		"votingweight": 3.4173094342592016e+37,
		"delegators": 82,
		"uptime": 97.88106630211894,
		"score": 0,
		"account": "paw_1quujjs8bprs57etha8fgsoc8d64639yhirhwxw8x967m938tge3w3s6hdpr",
		"alias": "🦊 Mischievous Fox Gang 🦊 catcatcat"
	},
	{
		"votingweight": 6.164464256453635e+37,
		"delegators": 160,
		"uptime": 99.86997977463162,
		"score": 0,
		"account": "paw_3rqrwkhmepnryu7f44aubrwjycrahpjaquep491784bpt5ee5f5cdhjtrp6n",
		"alias": "🦓🦓 Crazy Zebra Horse 🦓🦓"
	}
]