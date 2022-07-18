var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
require("../models/User");
require("../models/Item");
require("../models/Comment");

var User = mongoose.model("User");
var Item = mongoose.model("Item");
var Comment = mongoose.model("Comment");

const MOCK_USERS = [
  {
    id: 1,
    username: "dlawee0",
    email: "ahalloway0@kickstarter.com",
    password: "JOIJv8",
  },
  {
    id: 2,
    username: "sboarder1",
    email: "spraundlin1@edublogs.org",
    password: "omsP8miAY",
  },
  {
    id: 3,
    username: "kocrigane2",
    email: "lmorais2@vk.com",
    password: "esUbPFRL",
  },
  {
    id: 4,
    username: "wmcelvogue3",
    email: "bpaddemore3@cdc.gov",
    password: "GimzwUiA",
  },
  {
    id: 5,
    username: "rkunes4",
    email: "cgascoyne4@issuu.com",
    password: "ohGoTJ1WkR",
  },
  {
    id: 6,
    username: "ggout5",
    email: "jfranchioni5@yale.edu",
    password: "YuOyPbd",
  },
  {
    id: 7,
    username: "pbaltzar6",
    email: "hloody6@friendfeed.com",
    password: "6yYXaqhRdQ",
  },
  {
    id: 8,
    username: "ssarre7",
    email: "ldenerley7@about.com",
    password: "sfnbAx2XD52",
  },
  {
    id: 9,
    username: "kcoveny8",
    email: "pipgrave8@shop-pro.jp",
    password: "k7YgHG0CEhs",
  },
  {
    id: 10,
    username: "gmaffin9",
    email: "pgunton9@tinypic.com",
    password: "o7Wch6UV",
  },
  {
    id: 11,
    username: "twoolwaya",
    email: "ytraisea@merriam-webster.com",
    password: "lZFe21iVK",
  },
  {
    id: 12,
    username: "hbyreb",
    email: "cgensavageb@nature.com",
    password: "hzM846JR",
  },
  {
    id: 13,
    username: "dmatzelc",
    email: "cstockdalec@icq.com",
    password: "pWNR43kkiue",
  },
  {
    id: 14,
    username: "rpaolillod",
    email: "itirted@go.com",
    password: "S6IsLItG",
  },
  {
    id: 15,
    username: "hbirkbecke",
    email: "gjeandote@github.com",
    password: "MdfXPEKlG4v",
  },
  {
    id: 16,
    username: "fdenricof",
    email: "sarnaldif@domainmarket.com",
    password: "y32AGyFycBL",
  },
  {
    id: 17,
    username: "wgonnelg",
    email: "nrheltong@exblog.jp",
    password: "flVj28R2A",
  },
  {
    id: 18,
    username: "swhitwhamh",
    email: "dmageeh@example.com",
    password: "m7Viss",
  },
  {
    id: 19,
    username: "jtunnicki",
    email: "cjochananyi@discuz.net",
    password: "VYjKJxA",
  },
  {
    id: 20,
    username: "mrookesbyj",
    email: "edenysj@un.org",
    password: "V8tNhDS3a",
  },
  {
    id: 21,
    username: "dhewinsk",
    email: "jriddlesk@alexa.com",
    password: "UTqQY8",
  },
  {
    id: 22,
    username: "eskewesl",
    email: "yearlaml@usgs.gov",
    password: "20TcyGonX1",
  },
  {
    id: 23,
    username: "sdousem",
    email: "bbithanym@sciencedirect.com",
    password: "7e8U3K",
  },
  {
    id: 24,
    username: "tvereyn",
    email: "srosenbuschn@fastcompany.com",
    password: "9W7rq1nw4",
  },
  {
    id: 25,
    username: "dsleito",
    email: "dvonhelmholtzo@paginegialle.it",
    password: "hUuiXJO8",
  },
  {
    id: 26,
    username: "ayoungerp",
    email: "sbonehillp@amazon.com",
    password: "PojMdWwm",
  },
  {
    id: 27,
    username: "njennawayq",
    email: "cspeersq@geocities.com",
    password: "NLTkQg",
  },
  {
    id: 28,
    username: "csaffillr",
    email: "prowthorner@mozilla.org",
    password: "r3YThL",
  },
  {
    id: 29,
    username: "mallners",
    email: "stullochs@reference.com",
    password: "Cct6Ab",
  },
  {
    id: 30,
    username: "hmarchentt",
    email: "cderlet@ucla.edu",
    password: "5VZXD0ydf",
  },
  {
    id: 31,
    username: "flowenu",
    email: "sdreweu@sakura.ne.jp",
    password: "JqTi2qfT",
  },
  {
    id: 32,
    username: "rdanilowiczv",
    email: "rlowdenv@newsvine.com",
    password: "IiEiKNmiN5M",
  },
  {
    id: 33,
    username: "nrevelandw",
    email: "wgutridgew@house.gov",
    password: "esNjrbcGXvW",
  },
  {
    id: 34,
    username: "lickovx",
    email: "sarkleyx@posterous.com",
    password: "jxHajDLb",
  },
  {
    id: 35,
    username: "lmcinallyy",
    email: "acurneeny@clickbank.net",
    password: "2k3or0U",
  },
  {
    id: 36,
    username: "lgillinghamsz",
    email: "gelleringtonz@arizona.edu",
    password: "ZIl0Bzj",
  },
  {
    id: 37,
    username: "lrosewall10",
    email: "cknoller10@cdc.gov",
    password: "ZYDRexP",
  },
  {
    id: 38,
    username: "mblaasch11",
    email: "psafhill11@dmoz.org",
    password: "OEnjOfV",
  },
  {
    id: 39,
    username: "avarlow12",
    email: "jrowlin12@archive.org",
    password: "yC5KPQkf",
  },
  {
    id: 40,
    username: "kjancik13",
    email: "volford13@nbcnews.com",
    password: "8TebgYK",
  },
  {
    id: 41,
    username: "ihenzley14",
    email: "mmaccurlye14@miibeian.gov.cn",
    password: "IQ3v1jgn",
  },
  {
    id: 42,
    username: "dculley15",
    email: "bcoulman15@etsy.com",
    password: "bLijCSv",
  },
  {
    id: 43,
    username: "apharro16",
    email: "ddudbridge16@umich.edu",
    password: "CfmSIRDk",
  },
  {
    id: 44,
    username: "mswaby17",
    email: "akitchenham17@tuttocitta.it",
    password: "z4JByrtTr7",
  },
  {
    id: 45,
    username: "criddick18",
    email: "acollett18@mlb.com",
    password: "7ApUKgsPwfiz",
  },
  {
    id: 46,
    username: "hbartali19",
    email: "gtownend19@cnn.com",
    password: "bofqTS",
  },
  {
    id: 47,
    username: "march1a",
    email: "tsayer1a@zdnet.com",
    password: "Kt6JUqfO",
  },
  {
    id: 48,
    username: "bkillgus1b",
    email: "dmayfield1b@sourceforge.net",
    password: "si2VGWc9SP",
  },
  {
    id: 49,
    username: "cgooday1c",
    email: "psamuel1c@reference.com",
    password: "CwwDBDdiSkx",
  },
  {
    id: 50,
    username: "crenoden1d",
    email: "bchesney1d@xrea.com",
    password: "sZdOUS",
  },
  {
    id: 51,
    username: "mrobken1e",
    email: "rhancke1e@google.fr",
    password: "M8Le5BLb",
  },
  {
    id: 52,
    username: "okingcott1f",
    email: "lcosstick1f@tiny.cc",
    password: "njtkH6NJS",
  },
  {
    id: 53,
    username: "mhaysar1g",
    email: "mleverington1g@narod.ru",
    password: "DOpE0u",
  },
  {
    id: 54,
    username: "cjereatt1h",
    email: "dfader1h@sourceforge.net",
    password: "Bj700njvl",
  },
  {
    id: 55,
    username: "elambshine1i",
    email: "cpalatino1i@weibo.com",
    password: "88Sf7u",
  },
  {
    id: 56,
    username: "ogiorgiutti1j",
    email: "lflarity1j@nbcnews.com",
    password: "j3Fq2Ikk",
  },
  {
    id: 57,
    username: "gtenman1k",
    email: "rrudeforth1k@blogspot.com",
    password: "hpEWIhFVohsa",
  },
  {
    id: 58,
    username: "lissakov1l",
    email: "aminall1l@parallels.com",
    password: "E7DTjz",
  },
  {
    id: 59,
    username: "gsharram1m",
    email: "elowell1m@reference.com",
    password: "9A5FnZX0qsJ",
  },
  {
    id: 60,
    username: "odorset1n",
    email: "gsymes1n@360.cn",
    password: "qp49Pg",
  },
  {
    id: 61,
    username: "cworvill1o",
    email: "ehowels1o@etsy.com",
    password: "0xuw51VJ03c",
  },
  {
    id: 62,
    username: "jcoyne1p",
    email: "eskahill1p@meetup.com",
    password: "ybepHbOos",
  },
  {
    id: 63,
    username: "gmaas1q",
    email: "gkissick1q@shareasale.com",
    password: "Bh1NvIIEJQ",
  },
  {
    id: 64,
    username: "bcrotch1r",
    email: "rpardal1r@barnesandnoble.com",
    password: "lVdlKdI7oRa",
  },
  {
    id: 65,
    username: "croles1s",
    email: "uneubigging1s@fc2.com",
    password: "u4BNrQVGDyO",
  },
  {
    id: 66,
    username: "rstraker1t",
    email: "ogravey1t@qq.com",
    password: "2noDsVWnW",
  },
  {
    id: 67,
    username: "uroper1u",
    email: "cpodd1u@earthlink.net",
    password: "z7FUZaH6fVG",
  },
  {
    id: 68,
    username: "mbehn1v",
    email: "fcadigan1v@gravatar.com",
    password: "l1FNhqvrjh",
  },
  {
    id: 69,
    username: "dblaxlande1w",
    email: "hoday1w@a8.net",
    password: "W6fiGEa77dP",
  },
  {
    id: 70,
    username: "pschulter1x",
    email: "ahorsley1x@dropbox.com",
    password: "CvEcEVovzKqy",
  },
  {
    id: 71,
    username: "dostler1y",
    email: "jyarr1y@github.com",
    password: "oQSYpYn",
  },
  {
    id: 72,
    username: "livey1z",
    email: "bbackman1z@sohu.com",
    password: "Tk3OWptf3B",
  },
  {
    id: 73,
    username: "wmeatyard20",
    email: "hsmorthit20@gravatar.com",
    password: "LXsMCP0w",
  },
  {
    id: 74,
    username: "dwahncke21",
    email: "tmoseley21@github.com",
    password: "Lz3LIbZbGr5h",
  },
  {
    id: 75,
    username: "mplunkett22",
    email: "dscafe22@digg.com",
    password: "OwAMD7hX68",
  },
  {
    id: 76,
    username: "obrogi23",
    email: "rceresa23@behance.net",
    password: "oEkJ4FrcS",
  },
  {
    id: 77,
    username: "rkroin24",
    email: "elarter24@nhs.uk",
    password: "ZvwcBVQk",
  },
  {
    id: 78,
    username: "klow25",
    email: "bjancik25@multiply.com",
    password: "Of19Edub3F",
  },
  {
    id: 79,
    username: "rchong26",
    email: "dsaddleton26@oakley.com",
    password: "IwX5OKNl4jYz",
  },
  {
    id: 80,
    username: "candrys27",
    email: "ebrookbank27@yale.edu",
    password: "oUBtSB8MjDB8",
  },
  {
    id: 81,
    username: "abosward28",
    email: "naylwin28@ed.gov",
    password: "aMhHno",
  },
  {
    id: 82,
    username: "landriveau29",
    email: "sgoncalo29@engadget.com",
    password: "W4ijXPPn",
  },
  {
    id: 83,
    username: "oaleksashin2a",
    email: "kblachford2a@list-manage.com",
    password: "JrpvEA6",
  },
  {
    id: 84,
    username: "kdebischof2b",
    email: "hhuison2b@cornell.edu",
    password: "YefdFDsFrn",
  },
  {
    id: 85,
    username: "mlisett2c",
    email: "mwasylkiewicz2c@list-manage.com",
    password: "IJITVPe",
  },
  {
    id: 86,
    username: "fhutson2d",
    email: "sshepstone2d@microsoft.com",
    password: "WdsDjC",
  },
  {
    id: 87,
    username: "lstollmeyer2e",
    email: "lespinoy2e@google.com.br",
    password: "eQUibT8RM7Cf",
  },
  {
    id: 88,
    username: "gclemont2f",
    email: "sbuick2f@apple.com",
    password: "E067RTm05z",
  },
  {
    id: 89,
    username: "sbrigginshaw2g",
    email: "hreiners2g@abc.net.au",
    password: "xX0e22Brske",
  },
  {
    id: 90,
    username: "asmout2h",
    email: "pburnitt2h@state.tx.us",
    password: "aWYjsPxiC3Mh",
  },
  {
    id: 91,
    username: "bphizakarley2i",
    email: "gclaque2i@europa.eu",
    password: "gjsng0TUDHA",
  },
  {
    id: 92,
    username: "cadrianello2j",
    email: "atockell2j@nymag.com",
    password: "PCKtgeJwR1",
  },
  {
    id: 93,
    username: "dwarratt2k",
    email: "clarmouth2k@istockphoto.com",
    password: "6jNdpmc",
  },
  {
    id: 94,
    username: "acombe2l",
    email: "hjedrzejkiewicz2l@hibu.com",
    password: "l5S7OuuKZ3B",
  },
  {
    id: 95,
    username: "anorwich2m",
    email: "jgartell2m@edublogs.org",
    password: "ngAVvWa3u0G",
  },
  {
    id: 96,
    username: "ghazeman2n",
    email: "gschouthede2n@yolasite.com",
    password: "NZjtTmQ7",
  },
  {
    id: 97,
    username: "ksilman2o",
    email: "jatwater2o@ustream.tv",
    password: "Od5lX7Q6",
  },
  {
    id: 98,
    username: "wsvanini2p",
    email: "jzylberdik2p@amazon.co.jp",
    password: "iHE8szj51O",
  },
  {
    id: 99,
    username: "shaddock2q",
    email: "zsandiland2q@dailymotion.com",
    password: "H8bN1Z2Jf6I",
  },
  {
    id: 100,
    username: "probinson2r",
    email: "lburns2r@sciencedaily.com",
    password: "8BtLFLI7oCF",
  },
];
const MOCK_ITEMS = [
  {
    id: 1,
    title:
      "LBEL SUPREMACIE NX JOUR Replenishing Treatment Daytime Face SPF 15 Normal To Oily Skin",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    image: "http://dummyimage.com/289x220.png/ff4444/ffffff",
  },
  {
    id: 2,
    title: "Infants Pain Reliever",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    image: "http://dummyimage.com/264x346.png/dddddd/000000",
  },
  {
    id: 3,
    title: "Myambutol",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    image: "http://dummyimage.com/356x309.png/5fa2dd/ffffff",
  },
  {
    id: 4,
    title: "arthricream",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    image: "http://dummyimage.com/378x216.png/ff4444/ffffff",
  },
  {
    id: 5,
    title: "Extra Strength Cold n Hot Pain Relief Medicated",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    image: "http://dummyimage.com/347x394.png/ff4444/ffffff",
  },
  {
    id: 6,
    title: "Enoxaparin Sodium",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    image: "http://dummyimage.com/278x326.png/dddddd/000000",
  },
  {
    id: 7,
    title: "Foaming Hand Wash Antibacterial",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    image: "http://dummyimage.com/227x287.png/cc0000/ffffff",
  },
  {
    id: 8,
    title: "VANACOF",
    description:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    image: "http://dummyimage.com/359x261.png/5fa2dd/ffffff",
  },
  {
    id: 9,
    title: "Sleep-Aid",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    image: "http://dummyimage.com/301x204.png/dddddd/000000",
  },
  {
    id: 10,
    title: "Dakins Quarter",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    image: "http://dummyimage.com/201x344.png/dddddd/000000",
  },
  {
    id: 11,
    title: "Losartan Potassium",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    image: "http://dummyimage.com/317x374.png/ff4444/ffffff",
  },
  {
    id: 12,
    title: "Facility Maintenance Instant Hand Sanitizer HS-67",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "http://dummyimage.com/348x311.png/cc0000/ffffff",
  },
  {
    id: 13,
    title: "smart sense antibiotic",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    image: "http://dummyimage.com/337x249.png/ff4444/ffffff",
  },
  {
    id: 14,
    title: "Antacid",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    image: "http://dummyimage.com/374x213.png/dddddd/000000",
  },
  {
    id: 15,
    title: "Oxacillin",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    image: "http://dummyimage.com/281x287.png/ff4444/ffffff",
  },
  {
    id: 16,
    title: "Diethylpropion HCl",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    image: "http://dummyimage.com/387x399.png/dddddd/000000",
  },
  {
    id: 17,
    title: "PHENERGAN",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    image: "http://dummyimage.com/367x386.png/5fa2dd/ffffff",
  },
  {
    id: 18,
    title: "VITALUMIERE AQUA",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    image: "http://dummyimage.com/349x375.png/5fa2dd/ffffff",
  },
  {
    id: 19,
    title: "Food - Plant Source, Peanut Arachis hypogaea",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    image: "http://dummyimage.com/358x258.png/ff4444/ffffff",
  },
  {
    id: 20,
    title: "Lisinopril 2.5mg",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    image: "http://dummyimage.com/267x286.png/dddddd/000000",
  },
  {
    id: 21,
    title: "Pramipexole Dihydrochloride",
    description:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    image: "http://dummyimage.com/325x213.png/ff4444/ffffff",
  },
  {
    id: 22,
    title: "ASPERGILLUS NIGER VAR NIGER",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    image: "http://dummyimage.com/240x204.png/cc0000/ffffff",
  },
  {
    id: 23,
    title: "Hydrating Lip Balm SPF 15 sunscreen",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    image: "http://dummyimage.com/245x285.png/dddddd/000000",
  },
  {
    id: 24,
    title:
      "Pollens - Weeds and Garden Plants, Sagebrush, Mugwort Artemisia vulgaris",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    image: "http://dummyimage.com/287x381.png/5fa2dd/ffffff",
  },
  {
    id: 25,
    title: "ANTACID",
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    image: "http://dummyimage.com/366x261.png/5fa2dd/ffffff",
  },
  {
    id: 26,
    title: "Exelderm",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    image: "http://dummyimage.com/355x252.png/ff4444/ffffff",
  },
  {
    id: 27,
    title: "Sore Throat Relief",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    image: "http://dummyimage.com/322x292.png/cc0000/ffffff",
  },
  {
    id: 28,
    title: "PAROXETINE HYDROCHLORIDE",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    image: "http://dummyimage.com/236x240.png/cc0000/ffffff",
  },
  {
    id: 29,
    title: "Kynamro",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    image: "http://dummyimage.com/342x369.png/dddddd/000000",
  },
  {
    id: 30,
    title: "GenRx All Purpose Cleansing",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    image: "http://dummyimage.com/348x350.png/5fa2dd/ffffff",
  },
  {
    id: 31,
    title:
      "LOreal Paris Age Perfect Glow Renewal Day Moisturizer Broad Spectrum SPF 30 Sunscreen",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    image: "http://dummyimage.com/339x358.png/cc0000/ffffff",
  },
  {
    id: 32,
    title: "LEADER Loratadine",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    image: "http://dummyimage.com/307x267.png/ff4444/ffffff",
  },
  {
    id: 33,
    title: "Nitrogen",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    image: "http://dummyimage.com/336x395.png/ff4444/ffffff",
  },
  {
    id: 34,
    title: "Pepsodent Complete Care",
    description:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    image: "http://dummyimage.com/330x316.png/5fa2dd/ffffff",
  },
  {
    id: 35,
    title: "Thiothixene",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    image: "http://dummyimage.com/348x351.png/cc0000/ffffff",
  },
  {
    id: 36,
    title: "Tandem DHA",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    image: "http://dummyimage.com/362x257.png/5fa2dd/ffffff",
  },
  {
    id: 37,
    title: "ENALAPRIL MALEATE",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    image: "http://dummyimage.com/372x381.png/cc0000/ffffff",
  },
  {
    id: 38,
    title: "CYCLESSA",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    image: "http://dummyimage.com/358x306.png/cc0000/ffffff",
  },
  {
    id: 39,
    title: "Hydralazine Hydrochloride",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    image: "http://dummyimage.com/241x372.png/5fa2dd/ffffff",
  },
  {
    id: 40,
    title: "pravastatin sodium",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    image: "http://dummyimage.com/254x265.png/5fa2dd/ffffff",
  },
  {
    id: 41,
    title: "Carvedilol",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    image: "http://dummyimage.com/214x340.png/cc0000/ffffff",
  },
  {
    id: 42,
    title: "Badger Unscented SPF 15 Sunscreen",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    image: "http://dummyimage.com/301x315.png/dddddd/000000",
  },
  {
    id: 43,
    title:
      "True Blue Spa Cooling Sunscreen Mist Broad Spectrum SPF 25 Water Resistant (40 minutes) Monoi Oil",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    image: "http://dummyimage.com/210x251.png/dddddd/000000",
  },
  {
    id: 44,
    title: "Nasal Four",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    image: "http://dummyimage.com/351x266.png/5fa2dd/ffffff",
  },
  {
    id: 45,
    title: "Norethindrone Acetate",
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "http://dummyimage.com/310x340.png/5fa2dd/ffffff",
  },
  {
    id: 46,
    title: "CHAETOMIUM GLOBOSUM",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    image: "http://dummyimage.com/390x272.png/dddddd/000000",
  },
  {
    id: 47,
    title: "SHISEIDO UV PROTECTIVE COMPACT (REFILL)",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    image: "http://dummyimage.com/326x363.png/5fa2dd/ffffff",
  },
  {
    id: 48,
    title: "Proactiv Solution Deep Cleansing Wash",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    image: "http://dummyimage.com/347x229.png/dddddd/000000",
  },
  {
    id: 49,
    title: "Hydrocortisone",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    image: "http://dummyimage.com/271x378.png/dddddd/000000",
  },
  {
    id: 50,
    title: "HYDROCODONE BITARTRATE AND IBUPROFEN",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    image: "http://dummyimage.com/383x216.png/ff4444/ffffff",
  },
  {
    id: 51,
    title: "HYDRACLEAR HYDRATING ACNE GEL",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    image: "http://dummyimage.com/265x393.png/cc0000/ffffff",
  },
  {
    id: 52,
    title: "Tizanidine Hydrochloride",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    image: "http://dummyimage.com/309x372.png/cc0000/ffffff",
  },
  {
    id: 53,
    title: "Atovaquone and Proguanil Hydrochloride",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    image: "http://dummyimage.com/384x326.png/dddddd/000000",
  },
  {
    id: 54,
    title: "Multi-Symptom Non-Aspirin Cold Daytime",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    image: "http://dummyimage.com/257x267.png/5fa2dd/ffffff",
  },
  {
    id: 55,
    title: "Lorazepam",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    image: "http://dummyimage.com/373x297.png/dddddd/000000",
  },
  {
    id: 56,
    title: "Hair Regrowth Treatment for Women",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    image: "http://dummyimage.com/349x387.png/5fa2dd/ffffff",
  },
  {
    id: 57,
    title: "Clonazepam",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    image: "http://dummyimage.com/239x282.png/ff4444/ffffff",
  },
  {
    id: 58,
    title: "CVP",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    image: "http://dummyimage.com/296x250.png/5fa2dd/ffffff",
  },
  {
    id: 59,
    title: "SSD",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    image: "http://dummyimage.com/276x369.png/5fa2dd/ffffff",
  },
  {
    id: 60,
    title: "TOURCIA NUTRI TONER",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    image: "http://dummyimage.com/238x218.png/ff4444/ffffff",
  },
  {
    id: 61,
    title: "Gentamicin Sulfate",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    image: "http://dummyimage.com/241x230.png/ff4444/ffffff",
  },
  {
    id: 62,
    title: "Regular Strength QPAP",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    image: "http://dummyimage.com/351x217.png/5fa2dd/ffffff",
  },
  {
    id: 63,
    title: "Venlafaxine Hydrochloride",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    image: "http://dummyimage.com/218x238.png/dddddd/000000",
  },
  {
    id: 64,
    title: "Ibutilide Fumarate",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    image: "http://dummyimage.com/231x372.png/5fa2dd/ffffff",
  },
  {
    id: 65,
    title: "Al CaFoam",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    image: "http://dummyimage.com/229x243.png/5fa2dd/ffffff",
  },
  {
    id: 66,
    title: "TERCONAZOLE",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    image: "http://dummyimage.com/383x297.png/dddddd/000000",
  },
  {
    id: 67,
    title: "Helium",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    image: "http://dummyimage.com/255x207.png/dddddd/000000",
  },
  {
    id: 68,
    title: "BENZOCAINE and RESORCINOL",
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "http://dummyimage.com/331x287.png/cc0000/ffffff",
  },
  {
    id: 69,
    title: "Perphenazine",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    image: "http://dummyimage.com/242x389.png/cc0000/ffffff",
  },
  {
    id: 70,
    title: "Treatment Set TS333246",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    image: "http://dummyimage.com/224x284.png/5fa2dd/ffffff",
  },
  {
    id: 71,
    title: "Lisinopril and hydrochlorothiazide",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    image: "http://dummyimage.com/400x395.png/ff4444/ffffff",
  },
  {
    id: 72,
    title: "Quinapril Hydrochloride/Hydrochlorothiazide",
    description:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    image: "http://dummyimage.com/334x332.png/ff4444/ffffff",
  },
  {
    id: 73,
    title: "ALLI",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    image: "http://dummyimage.com/261x383.png/dddddd/000000",
  },
  {
    id: 74,
    title: "flu and severe cold and cough",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    image: "http://dummyimage.com/234x356.png/ff4444/ffffff",
  },
  {
    id: 75,
    title: "ENALAPRIL MALEATE",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    image: "http://dummyimage.com/295x251.png/5fa2dd/ffffff",
  },
  {
    id: 76,
    title: "Butalbital, Acetaminophen and Caffeine",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    image: "http://dummyimage.com/370x372.png/dddddd/000000",
  },
  {
    id: 77,
    title: "SHISEIDO PURENESS MATIFYING COMPACT OIL-FREE (REFILL)",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    image: "http://dummyimage.com/331x389.png/dddddd/000000",
  },
  {
    id: 78,
    title: "ZINC OXIDE",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    image: "http://dummyimage.com/335x210.png/5fa2dd/ffffff",
  },
  {
    id: 79,
    title: "PLANTSCRIPTION ANTI-AGING BROAD SPECTRUM SPF 25",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    image: "http://dummyimage.com/329x264.png/ff4444/ffffff",
  },
  {
    id: 80,
    title: "Methylene Blue",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    image: "http://dummyimage.com/318x259.png/cc0000/ffffff",
  },
  {
    id: 81,
    title: "Leader Enema",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    image: "http://dummyimage.com/255x368.png/dddddd/000000",
  },
  {
    id: 82,
    title: "Sodium Sulfacetamide",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    image: "http://dummyimage.com/322x215.png/cc0000/ffffff",
  },
  {
    id: 83,
    title: "METFORMIN HYDROCHLORIDE",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    image: "http://dummyimage.com/367x396.png/5fa2dd/ffffff",
  },
  {
    id: 84,
    title: "ACETAMINOPHEN, BUTALBITAL AND CAFFEINE",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    image: "http://dummyimage.com/341x293.png/dddddd/000000",
  },
  {
    id: 85,
    title: "levofloxacin",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    image: "http://dummyimage.com/390x343.png/dddddd/000000",
  },
  {
    id: 86,
    title: "aspirin",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    image: "http://dummyimage.com/385x383.png/ff4444/ffffff",
  },
  {
    id: 87,
    title: "Hickory Pollen Mixture",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    image: "http://dummyimage.com/284x258.png/dddddd/000000",
  },
  {
    id: 88,
    title: "Childrens Acetaminophen Oral Suspension",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    image: "http://dummyimage.com/288x369.png/dddddd/000000",
  },
  {
    id: 89,
    title: "Progesterone Injection",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    image: "http://dummyimage.com/384x372.png/5fa2dd/ffffff",
  },
  {
    id: 90,
    title: "Etodolac",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    image: "http://dummyimage.com/369x399.png/cc0000/ffffff",
  },
  {
    id: 91,
    title: "Clobetasol Propionate",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    image: "http://dummyimage.com/251x358.png/ff4444/ffffff",
  },
  {
    id: 92,
    title: "Allergy Multi-Symptom",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    image: "http://dummyimage.com/313x400.png/ff4444/ffffff",
  },
  {
    id: 93,
    title: "Buenos Dias de Personna",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "http://dummyimage.com/288x364.png/ff4444/ffffff",
  },
  {
    id: 94,
    title: "Tuna Fish",
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    image: "http://dummyimage.com/375x309.png/cc0000/ffffff",
  },
  {
    id: 95,
    title: "GALACTOMYCES MAN BOOSTER",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    image: "http://dummyimage.com/279x308.png/dddddd/000000",
  },
  {
    id: 96,
    title: "AMARANTHUS TUBERCULATUS POLLEN",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    image: "http://dummyimage.com/237x295.png/ff4444/ffffff",
  },
  {
    id: 97,
    title: "Clonidine Hydrochloride",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    image: "http://dummyimage.com/380x356.png/5fa2dd/ffffff",
  },
  {
    id: 98,
    title: "Fluvoxamine Maleate",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    image: "http://dummyimage.com/217x275.png/ff4444/ffffff",
  },
  {
    id: 99,
    title: "Orapred",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    image: "http://dummyimage.com/225x329.png/cc0000/ffffff",
  },
  {
    id: 100,
    title: "Albuminar-20",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    image: "http://dummyimage.com/368x350.png/dddddd/000000",
  },
];
const MOCK_COMMENTS = [
  {
    id: 1,
    comment:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
  },
  {
    id: 2,
    comment:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
  },
  {
    id: 3,
    comment:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    id: 4,
    comment:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
  },
  {
    id: 5,
    comment:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    id: 6,
    comment:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
  },
  {
    id: 7,
    comment:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
  },
  {
    id: 8,
    comment:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  {
    id: 9,
    comment:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
  },
  {
    id: 10,
    comment:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
  },
  {
    id: 11,
    comment:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    id: 12,
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
  },
  {
    id: 13,
    comment:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
  },
  {
    id: 14,
    comment: "Aliquam non mauris. Morbi non lectus.",
  },
  {
    id: 15,
    comment:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
  },
  {
    id: 16,
    comment:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
  },
  {
    id: 17,
    comment:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
  },
  {
    id: 18,
    comment: "Morbi a ipsum.",
  },
  {
    id: 19,
    comment:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
  },
  {
    id: 20,
    comment:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
  },
  {
    id: 21,
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
  },
  {
    id: 22,
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
  },
  {
    id: 23,
    comment:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    id: 24,
    comment:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    id: 25,
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
  },
  {
    id: 26,
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    id: 27,
    comment:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    id: 28,
    comment: "Nullam varius. Nulla facilisi.",
  },
  {
    id: 29,
    comment: "Integer a nibh.",
  },
  {
    id: 30,
    comment:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
  },
  {
    id: 31,
    comment:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
  },
  {
    id: 32,
    comment:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 33,
    comment:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
  },
  {
    id: 34,
    comment: "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    id: 35,
    comment:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
  },
  {
    id: 36,
    comment:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
  },
  {
    id: 37,
    comment:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
  },
  {
    id: 38,
    comment:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    id: 39,
    comment:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
  },
  {
    id: 40,
    comment:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
  },
  {
    id: 41,
    comment:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    id: 42,
    comment:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    id: 43,
    comment:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
  },
  {
    id: 44,
    comment: "In congue.",
  },
  {
    id: 45,
    comment: "Donec ut dolor.",
  },
  {
    id: 46,
    comment: "Sed accumsan felis.",
  },
  {
    id: 47,
    comment:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
  },
  {
    id: 48,
    comment: "Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    id: 49,
    comment:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
  },
  {
    id: 50,
    comment:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    id: 51,
    comment: "Curabitur convallis.",
  },
  {
    id: 52,
    comment:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
  },
  {
    id: 53,
    comment:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
  },
  {
    id: 54,
    comment:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    id: 55,
    comment:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    id: 56,
    comment:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
  },
  {
    id: 57,
    comment:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    id: 58,
    comment:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    id: 59,
    comment: "Quisque ut erat.",
  },
  {
    id: 60,
    comment:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
  },
  {
    id: 61,
    comment:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  },
  {
    id: 62,
    comment:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
  },
  {
    id: 63,
    comment:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    id: 64,
    comment:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
  },
  {
    id: 65,
    comment:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
  },
  {
    id: 66,
    comment:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
  },
  {
    id: 67,
    comment:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
  },
  {
    id: 68,
    comment:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    id: 69,
    comment:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
  },
  {
    id: 70,
    comment:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
  },
  {
    id: 71,
    comment:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
  },
  {
    id: 72,
    comment: "In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    id: 73,
    comment:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    id: 74,
    comment:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
  },
  {
    id: 75,
    comment:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
  },
  {
    id: 76,
    comment:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
  },
  {
    id: 77,
    comment:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    id: 78,
    comment:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    id: 79,
    comment:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    id: 80,
    comment: "Nullam sit amet turpis elementum ligula vehicula consequat.",
  },
  {
    id: 81,
    comment:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
  },
  {
    id: 82,
    comment:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
  },
  {
    id: 83,
    comment:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
  },
  {
    id: 84,
    comment:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    id: 85,
    comment:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  {
    id: 86,
    comment:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    id: 87,
    comment:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
  },
  {
    id: 88,
    comment:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
  },
  {
    id: 89,
    comment:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
  },
  {
    id: 90,
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
  },
  {
    id: 91,
    comment:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
  },
  {
    id: 92,
    comment:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
  },
  {
    id: 93,
    comment:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    id: 94,
    comment:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
  },
  {
    id: 95,
    comment:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    id: 96,
    comment:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
  },
  {
    id: 97,
    comment:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    id: 98,
    comment:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
  },
  {
    id: 99,
    comment:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    id: 100,
    comment:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
  },
];

const destroyAll = async () => {
  await User.deleteMany({}, () => {
    console.log("all users deleted");
  });
  await Item.deleteMany({}, () => {
    console.log("all items deleted");
  });
  await Comment.deleteMany({}, () => {
    console.log("all comments deleted");
  });
};
//TODO: seeds script should come here, so we'll be able to put some data in our local env
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getRandomUser = async () => {
  const UsersCount = await User.count(); // or just use 100 because we just insert that
  const random = Math.floor(Math.random() * UsersCount);
  const randomUser = await User.findOne().skip(random);
  return randomUser;
};
const getRandomItem = async () => {
  const ItemsCount = await Item.count(); // or just use 100 because we just insert that
  const random = Math.floor(Math.random() * ItemsCount);
  const randomItem = await Item.findOne().skip(random);
  return randomItem;
};
const createMockUsers = async () => {
  for (const mockUserData of MOCK_USERS) {
    const user = new User();
    user.username = mockUserData.username;
    user.email = mockUserData.email;
    user.setPassword(mockUserData.password);
    try {
      await user.save();
      console.log("User created: " + user._id);
    } catch (error) {
      console.log(error);
    }
  }
  console.log("_______________________________________________");
  console.log("finish inserting users");
  console.log("_______________________________________________");
};

const createMockItems = async () => {
  commentCount = 1;
  for (const mockItemData of MOCK_ITEMS) {
    const randomUser = await getRandomUser();
    const item = new Item();
    item.seller = randomUser;
    item.title = mockItemData.title;
    item.description = mockItemData.description;
    const chanceToHavePhoto = Math.floor(Math.random() * 100);
    if (chanceToHavePhoto < 80) {
      const photoText = mockItemData.title.split(" ")[0];
      item.image = mockItemData.image + "&text=" + photoText;
    }
    try {
      await item.save();
      console.log("item created: " + item._id);
    } catch (error) {
      console.log(error);
    }
  }
  console.log("_______________________________________________");
  console.log("finish inserting items");
  console.log("_______________________________________________");
};
const createMockComments = async () => {
  for (const commentText of MOCK_COMMENTS) {
    const comment = new Comment({ body: commentText.comment });
    const commentItem = await getRandomItem();
    const user = await getRandomUser();
    comment.item = commentItem;
    comment.seller = user;
    try {
      console.log(commentItem._id);
      await comment.save();
      await Item.findOneAndUpdate(
        { _id: commentItem._id },
        { $push: { comments: comment } }
      );
    } catch (error) {
      console.log(error);
    }
  }
  console.log("_______________________________________________");
  console.log("finish inserting comments");
  console.log("_______________________________________________");
};

const start = async () => console.log("starting...");
const end = () => process.exit();
start()
  .then(() => destroyAll())
  .then(() => createMockUsers())
  .then(() => createMockItems())
  .then(() => createMockComments())
  .then(() => end());
