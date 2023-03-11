gazda = ["72645348200", "72807979676", "72798017042", "72741410562"];
gepesztech = [
  "72656242353",
  "72717948868",
  "72741410562",
  "72719470987",
  "72629106748",
  "72687748529",
  "72793761681",
];
ru = [
  "72645348200",
  "72773331709",
  "72741410562",
  "72629073119",
  "72734705451",
  "72731683691",
  "72795292151",
  "72741414632",
  "72645393322",
  "72719470987",
  "72763205924",
  "72793761681",
];
szf = [
  "72790631576",
  "72792913840",
  "72638797501",
  "72629111579",
  "72629097219",
];
konnyu = ["72798017042", "72629088784"];
divat = [
  "72645344239",
  "72729954652",
  "72645346037",
  "72793857942",
  "72680582288",
];
forgacsolo = [
  "72793791330",
  "72645348200",
  "72717948868",
  "72754959530",
  "72793960246",
  "72793476249",
  "72763446982",
  "72794869939",
  "72754660043",
  "72645317554",
  "72741407128",
  "72645393322",
  "72734163265",
  "72611146841",
  "72793761681",
  "72790108795",
  "72703691824",
  "72793738674",
  "72794194960",
  "72698350247",
  "72645369443",
  "72645370696",
  "72736660214",
];
hegeszto = [
  "72793791330",
  "72717948868",
  "72798735343",
  "72645362999",
  "72762456124",
  "72741418201",
  "72705147784",
  "72741400092",
  "72764356674",
  "72719470987",
  "72793476249",
  "72763446982",
  "72794869939",
  "72741407128",
  "72645393322",
  "74037121719",
  "72687748529",
  "72720026685",
  "72734163265",
  "72739217260",
  "72794194960",
  "72698350247",
  "72762726678",
  "72645369443",
  "72645370696",
  "72629100065",
  "72736660214"
];
kereskedo = [
  "72794022705",
  "72645403106",
  "72755360800",
  "72645346037",
  "72793476249",
  "72741407128",
  "72741414632",
  "72793857942",
  "72794910991",
  "72793966366",
];
szocgond = [
  "72794022705",
  "72794078460",
  "72645346037",
  "72684054186",
  "72793857942",
  "72680582288",
  "72793934237",
  "72794910991",
];

function keres() {
  kiir.innerHTML = "";
  if (om.value.length != 11)
    kiir.innerHTML += "Az OM azonosító hossza 11 karakter!";
  else {
    for (i = 0; i <= gepesztech.length; i++) {
      if (om.value == gepesztech[i])
        kiir.innerHTML +=
          "- Gépészet ágazat Tagozatkód: 0302, Gépésztechnikus Rangsorban " +
          (i + 1) +
          ".helyen<br>";
    }
    for (i = 0; i <= ru.length; i++) {
      if (om.value == ru[i])
        kiir.innerHTML +=
          "- Informatika és távközlés ágazat  Tagozatkód: 0301, Informatikai rendszer és alk. üzemeltető  Rangsorban " +
          (i + 1) +
          ".helyen<br>";
    }
    for (i = 0; i <= szf.length; i++) {
      if (om.value == szf[i])
        kiir.innerHTML +=
          "- Informatika és távközlés ágazat  Tagozatkód: 0301, Szoftverfejlesztő és tesztelő  Rangsorban " +
          (i + 1) +
          ".helyen<br>";
    }
    for (i = 0; i <= gazda.length; i++) {
      if (om.value == gazda[i])
        kiir.innerHTML +=
          "- Gazdálkodás és menedzsment ágazat  Tagozatkód: 0303, Pénzügyi-számviteli ügyintéző Rangsorban " +
          (i + 1) +
          ".helyen<br>";
    }
    for (i = 0; i <= konnyu.length; i++) {
      if (om.value == konnyu[i])
        kiir.innerHTML +=
          "- Kreatív ágazat Tagozatkód: 0304, Könnyűipari technikus Rangsorban " +
          (i + 1) +
          ".helyen<br>";
    }
    for (i = 0; i <= divat.length; i++) {
      if (om.value == divat[i])
        kiir.innerHTML +=
          "- Kreatív ágazat Tagozatkód: 0314, Divatszabó Rangsorban " +
          (i + 1) +
          ".helyen<br>";
    }
    for (i = 0; i <= forgacsolo.length; i++) {
      if (om.value == forgacsolo[i])
        kiir.innerHTML +=
          "- Gépészet ágazat Tagozatkód: 0311, Gépi és CNC forgácsoló Rangsorban " +
          (i + 1) +
          ".helyen<br>";
    }
    for (i = 0; i <= hegeszto.length; i++) {
      if (om.value == hegeszto[i])
        kiir.innerHTML +=
          "- Gépészet ágazat Tagozatkód: 0312, Hegesztő Rangsorban " +
          (i + 1) +
          ".helyen<br>";
    }

    for (i = 0; i <= kereskedo.length; i++) {
      if (om.value == kereskedo[i])
        kiir.innerHTML +=
          "- Kereskedelem ágazat Tagozatkód: 0315, Kereskedelmi értékesítő Rangsorban " +
          (i + 1) +
          ".helyen<br>";
    }
    for (i = 0; i <= szocgond.length; i++) {
      if (om.value == szocgond[i])
        kiir.innerHTML +=
          "- Szociális ágazat Tagozatkód: 0316, Szociális ápoló és gondozó Rangsorban " +
          (i + 1) +
          ".helyen<br>";
    }
    if (kiir.innerHTML == "")
      kiir.innerHTML +=
        " Nincs ilyen oktatási azonosító a nyilvántartásunkban! ";
  }
}
