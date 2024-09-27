const students = [
{ name: "AINA ASYIFA" , id: "002" },
{ name: "AKHMAD NURFIKRI" , id: "003" },
{ name: "ALFI BARIRAH" , id: "004" },
{ name: "ALIFA RAMADHINA" , id: "005" },
{ name: "ALVIRA AMALIA" , id: "006" },
{ name: "AMIRAH FIRJATUL" , id: "007" },
{ name: "ANNISA NOOR ATIQAH" , id: "008" },
{ name: "ARA SALSABILA" , id: "009" },
{ name: "ASSYIFA MAWADDAH" , id: "010" },
{ name: "AZZAHRA" , id: "011" },
{ name: "DIMAS EDRA" , id: "012" },
{ name: "FADLAN RAUSUL S" , id: "013" },
{ name: "HAFIDZA KHAIRA YUMNA FAHLEVI" , id: "014" },
{ name: "JANNATI NUUR AZIZA" , id: "015" },
{ name: "KHALISA SALSABILA" , id: "016" },
{ name: "LUTFIA MUTMAINNAH" , id: "017" },
{ name: "M. FAUZI" , id: "018" },
{ name: "M. RAFI SYAHDILLA" , id: "019" },
{ name: "M. RIZKY" , id: "020" },
{ name: "M. RIZQI YAZID" , id: "021" },
{ name: "MAISARAH" , id: "022" },
{ name: "MUHAMMAD AUFA RAHMAN" , id: "023" },
{ name: "MUHAMMAD FAIREL ATHARIZZ" , id: "024" },
{ name: "MUHAMMAD NABIL RIADI" , id: "025" },
{ name: "MUHAMMAD SHIDQII FADHILLAH" , id: "026" },
{ name: "MUHAMMAD ZIDAN" , id: "027" },
{ name: "NAYLA RIZKY AMALIA" , id: "028" },
{ name: "NIHAYATUS SHOLIHAH" , id: "029" },
{ name: "NUR AFIFAH ZAIN" , id: "030" },
{ name: "NUR RAHADATUL SYALWA" , id: "031" },
{ name: "NURIATU KHOLILLAH" , id: "032" },
{ name: "QOONITAH SAFIINATUNNAJAH RUSFASA" , id: "033" },
{ name: "QOTHRUNNADAA NAKHWAH RUSFASA" , id: "034" },
{ name: "RAFLI DAFFA SANTOSO" , id: "035" },
{ name: "REGINA RAHADHATUL AISY" , id: "036" },
{ name: "RIANA AZMI" , id: "037" },
{ name: "SAYYID RAYHAN PRATAMA" , id: "038" },
{ name: "SITI NURHAYATUL HASANAH" , id: "039" },
{ name: "TIARA LUTHFIYAH" , id: "040" },
{ name: "ZHAFIRA ZIYADATUL KHAIR" , id: "041" },
{ name: "ZULFAA ZAHRA FAATIHATUL IKBAAR" , id: "042" },
{ name: "AKMAL BISMA AJI" , id: "043" },
{ name: "ALLISHA ZHAFIRADIVA FAISAL" , id: "044" },
{ name: "M. ALI REVAN" , id: "045" },
{ name: "MUHAMMAD FAEYZA NAUFAL" , id: "046" },
{ name: "MUHAMMAD RAFKA ANWAR" , id: "047" },
{ name: "MUHAMMAD SHOLIHIN" , id: "048" },
{ name: "NUR VIRDA AYUNDA" , id: "049" },
{ name: "SITI AFIQA ARTA AZALIA" , id: "050" },
{ name: "SITI ALIYAH" , id: "051" },
{ name: "MAHARANI" , id: "052" },
{ name: "ZAITUN NISA" , id: "053" },
{ name: "AFDALIA" , id: "054" },
{ name: "AHMAD ABIY TSAQIB" , id: "055" },
{ name: "AHMAD FURQON AZZIKRA" , id: "056" },
{ name: "AL FATHIR MUHAMMAD" , id: "057" },
{ name: "ANDI RIKA SANDRA RAHAYU" , id: "058" },
{ name: "AUFA YASMIN AYU ABDIFA" , id: "059" },
{ name: "AUFA ZAHRA AYU ABDITA" , id: "060" },
{ name: "BINTANG NADHIF NAFASAT" , id: "061" },
{ name: "DEALIVINA ADESTI ROHΜΑΝ" , id: "062" },
{ name: "KAYLA ATIIQAH SARI" , id: "063" },
{ name: "LAILY WARITSA" , id: "064" },
{ name: "LAKEISHA 'ARIFAH" , id: "065" },
{ name: "M RAPPA RAMADHAN" , id: "066" },
{ name: "M SAMMAN HAMIZAN" , id: "067" },
{ name: "M.HARIRI" , id: "068" },
{ name: "MAULIA RAHMA WATI" , id: "069" },
{ name: "META RAIHANA" , id: "070" },
{ name: "MIFTAHUR YUMNA MUFAKHAM" , id: "071" },
{ name: "MUHAMMAD ZAINI RAHMAN" , id: "072" },
{ name: "MUHAMMAD ZIYYAN FAIRUZ AL AQTAB" , id: "073" },
{ name: "NAYLA ZHAFIRA FITRIANI" , id: "074" },
{ name: "NOOR IKHSAN SUGI" , id: "075" },
{ name: "RAHMAT HIDAYAT" , id: "076" },
{ name: "RAMSES NAINGGOLAN" , id: "077" },
{ name: "RUBI ALYA MARETA" , id: "078" },
{ name: "SITI HAFIZHAH KHAIRA LUBNA" , id: "079" },
{ name: "ATHA ZHADA APRILIA" , id: "080" },
{ name: "RAYSA ALYA SHAKILA" , id: "081" },
{ name: "NUR HALIFAH LESTARI" , id: "082" },
{ name: "SAFWAN DANISH" , id: "083" },
{ name: "TALITA ANINDYA SYAKIRA" , id: "084" },
{ name: "M. ZAINUL SULTHON" , id: "085" },
{ name: "M.RIZKY RADITYA TOKAN" , id: "086" },
{ name: "MUHAMMAD EMIR AL FURQON" , id: "087" },
{ name: "NUR HUMAIRA AZ ZAHRA" , id: "088" },
{ name: "MUHAMMAD FAIQ JAYYIDAN" , id: "089" },
{ name: "NADIA RIZQI" , id: "090" },
{ name: "NUR'AINUN MARDHIYYAH" , id: "091" },
{ name: "QORIN NAESHA SYAWALUNA" , id: "092" },
{ name: "MUHAMMAD FAIZAR GHIFARI" , id: "093" },
{ name: "MUHAMMAD FARIZ AL FATIH" , id: "094" },
{ name: "MUHAMMAD YASIN" , id: "095" },
{ name: "MUHAMMAD RAMA FAKHRULAH" , id: "096" },
{ name: "RADEN FADIL PRATAMA" , id: "097" },
{ name: "FARHAN RASYAD FARANDY" , id: "098" },
{ name: "ABID AQILA PRANAJA" , id: "099" },
{ name: "FAEZA HASAN AZHARI" , id: "100" },
{ name: "GUSTI SATRIO HAFIDZ RAFIE RABBANI" , id: "101" },
{ name: "HARLY PRASETYO" , id: "102" },
{ name: "M. HABIBI DARUSSALAM" , id: "103" },
{ name: "MARLINA AMELIA" , id: "104" },
{ name: "MUHAMMAD ARYO MIDIKA" , id: "105" },
{ name: "NAJWA KHAIRI SILALAHI" , id: "106" },
{ name: "NAURA ZAIFA KHAIRA" , id: "107" },
{ name: "NOOR WAFA AQILA" , id: "108" },
{ name: "SITI AINUN AZZAHRA" , id: "109" },
{ name: "AIRA SA'DANA" , id: "110" },
{ name: "ATIKA MAHIRA ZALFA" , id: "111" },
{ name: "KHALIZA MOZZAHRA" , id: "112" },
{ name: "AHMAD FAIQ FAHMI" , id: "113" },
{ name: "AISYAH HUMAIRA" , id: "114" },
{ name: "ARIQA SYAHMINA" , id: "115" },
{ name: "AZQIYA TALITA PUTRI" , id: "116" },
{ name: "FARAH KAMILIA YASMIN" , id: "117" },
{ name: "FATIMAH AZKIA" , id: "118" },
{ name: "HERLINA" , id: "119" },
{ name: "KHANSA RAHMINI AZZAHRA" , id: "120" },
{ name: "M. RADITYA RAHMAN" , id: "121" },
{ name: "MUHAMMAD ADLI MAULANA" , id: "122" },
{ name: "QYTARA KHANSA ALHADDA" , id: "123" },
{ name: "SILVIA PUTRI RAMADHANI" , id: "124" },
{ name: "ELVIRA AISYAH AZZAHRA" , id: "125" },
{ name: "HAUZAN IRHAF NABIL" , id: "126" },
{ name: "HUMAIRA ASSYIFA NUR JANNAH" , id: "127" },
{ name: "NUR AFIQA HUMAIRA" , id: "128" },
{ name: "FAYRA NUR RABIYA" , id: "129" },
{ name: "ALISIA AURELIA" , id: "130" },
{ name: "AZWA SAFRINA DINIY NAZURAH" , id: "131" },
{ name: "ALIFA AZKIYA HUSNA" , id: "132" },
{ name: "KHADIJAH IZZATI" , id: "133" },
{ name: "M. ADAM AL FARIS" , id: "134" },
{ name: "AINAYYA FATIATUR RAHMA" , id: "135" },
{ name: "ALIKA NAILA PUTRI" , id: "136" },
{ name: "GHINA RAFHANDA" , id: "137" },
{ name: "FAIRA MEHRUNISA" , id: "138" },
{ name: "AHMAD FAKHRI AKBAR" , id: "139" },
{ name: "M.HANAN AL FAIZ" , id: "140" },
{ name: "NAYSYILA AZIZAH" , id: "141" },
{ name: "M. DAFFA RAHMAN" , id: "142" },
{ name: "NAFIATUL NAFISAH" , id: "143" },
{ name: "RIZKI AUFAR OKTAVIAN" , id: "144" },
{ name: "SYAILLA NAMIRA" , id: "145" },
{ name: "M. YAZID ANSHORI" , id: "146" },
{ name: "M. AFIF NAWABIGHNA" , id: "147" },
{ name: "NUR ZAHIDAH ZULFA" , id: "148" },
{ name: "MUHAMMAD ZAKY MIRZA" , id: "149" },
{ name: "MUHAMMAD ARYA PRATAMA" , id: "150" },
{ name: "AZZILA KHAIRUNNISA" , id: "151" },
{ name: "LATISHA PRAMESTI BUDIONO" , id: "152" },
{ name: "M. ARKAN RAMADHAN" , id: "153" },
{ name: "M. DAFFA NURRAMDANI" , id: "154" },
{ name: "M. AZKA ALFARO" , id: "155" },
{ name: "M. ALIF YAHSAN" , id: "156" },
{ name: "M. HAFIDZ RAMADANISH" , id: "157" },
{ name: "MUHAMMAD AZKA NAZHAN" , id: "158" },
{ name: "M. NASYID HAIKAL" , id: "159" },
{ name: "YUMNA GITA KINANTI" , id: "160" },
{ name: "HAIQAL FAIZ" , id: "161" },
{ name: "M. MALIK WAFI ROBBANI" , id: "162" },
{ name: "AHMAD ZEIN" , id: "163" },
{ name: "MUHAMMAD ZIKRIE" , id: "164" },
{ name: "MUHAMMAD RAIHAN HAFIZH" , id: "165" },
{ name: "MUHAMMAD FAJAR" , id: "166" },
{ name: "MUHAMMAD ZAIDAN RAHMAN" , id: "167" },
{ name: "MUHAMMAD HASAN" , id: "168" },
{ name: "MUHAMMAD TUBAGUS INDRA" , id: "169" },
{ name: "SITI AISYAH" , id: "170" },
{ name: "MUHAMMAD DZAKY AFFANDI" , id: "171" },
{ name: "MUHAMMAD AFDILLAH" , id: "172" },
{ name: "MUHAMMAD FATIH NAJIB" , id: "173" },
{ name: "AYSHA RAMADANI" , id: "174" },
{ name: "M. MUZHOFFAR WAJDI" , id: "175" },
{ name: "AHMAD AZRIL RAZZAN RAHMATULLAH" , id: "176" },
{ name: "MUHAMMAD FAHMI RAMADHAN" , id: "177" },
{ name: "IBNU AZZAM" , id: "178" },
{ name: "HAFIDZAH AZZAHRA" , id: "179" },
{ name: "MUHAMMAD AKBAR SAFARUDIN" , id: "180" },
{ name: "REVANA SAKEEZA AURORA DJIHAD" , id: "181" },
{ name: "MUHAMMAD GILANG PRATAMA" , id: "182" },
{ name: "MUHAMMAD KHAFID ALKHALIFI" , id: "183" },
{ name: "MUHAMMAD GHIFARI AR RAFIF" , id: "184" },
{ name: "ISMAH NUR RAMADHANI" , id: "185" },
{ name: "MUHAMMAD FATHIR ABIYYU" , id: "186" },
{ name: "MUHAMMAD GHANI HANAFI" , id: "187" },
{ name: "MUHAMMAD AIMAN ALPARUQ" , id: "188" },
{ name: "MUHAMMAD ABID JAUHAIR" , id: "189" },
{ name: "MARITZA SABRINA HAMIZA" , id: "190" },
{ name: "MUHAMMAD AYLABY FATHORY" , id: "191" },
{ name: "MIRANDA" , id: "192" },
{ name: "SITI ZAGIA GATI RAMADHANA" , id: "193" },
{ name: "SITI AMZAR JAMIL" , id: "194" },
{ name: "SAID FAUZAN ROSIDI" , id: "195" },
{ name: "MUHAMMAD ALKHALIFI ZIKRI HADY" , id: "196" },
{ name: "MUHAMMAD IRFAN" , id: "197" },
{ name: "MUHAMMAD RAFIF AL FARAZ" , id: "198" },
{ name: "RAISA NADHIFA CISHANDY PUTRI" , id: "199" },
{ name: "RAIHAN NURFAIZ" , id: "200" },
{ name: "RAISA AQILA PUTRI" , id: "201" },
{ name: "ZHARFAN EL RAFIF INDAH" , id: "202" },
{ name: "PUTRI NUR ASSIFA" , id: "203" },
{ name: "MUHAMMAD RAFKA FAIZAR" , id: "204" },
{ name: "MUHAMMAD YUSUF RACHMAN" , id: "205" },
{ name: "PUTRI NABILA AZZAHRA" , id: "206" },
{ name: "MUHAMMAD HABIBIE" , id: "207" },
{ name: "SITI SA'ADAH NAFISAH" , id: "208" },
{ name: "FAUZIAH" , id: "209" },
{ name: "FALYA ALIFA INDRAYANA" , id: "210" },
{ name: "ZHAFIRA RASYIFA SALWA" , id: "211" },
{ name: "MUHAMMAD IRSYAN GAZALI" , id: "212" },
{ name: "AZZAHRA MAISOUPA" , id: "213" },
{ name: "AHMAD ZIO ZAVIER AZZAM" , id: "214" },
{ name: "ALISHA RANIA AZZAHRA" , id: "215" },
{ name: "ATIFA AYUDYHA HASAN" , id: "216" },
{ name: "M. YUSUF HAMDANI" , id: "217" },
{ name: "AHMAD SYAMIL KHAIRAN" , id: "218" },
{ name: "NOOR AQILA FATIMAH" , id: "219" },
{ name: "ANNIDA ZAHRATUNNISA" , id: "220" },
{ name: "AZZAHRA NUR KAMILA" , id: "221" },
{ name: "AISHA NUR ZAHIRA" , id: "222" },
{ name: "FAHMA AHNAN" , id: "223" },
{ name: "M. MULTAZAM" , id: "224" },
{ name: "HAIDIR MUARAS" , id: "225" },
{ name: "NAZWA FAIRUZ" , id: "226" },
{ name: "M.HUSEIN ALFANI" , id: "227" },
{ name: "ASYIFA KURNIA DIRAMIX" , id: "228" },
{ name: "MUHAMMAD SAMMAN AL MADANI" , id: "229" },
{ name: "RIZQY NABILA ALMERA" , id: "230" },
{ name: "ARSY PUTRA FIRMANSYAH" , id: "231" },
{ name: "BARKATUL AULYA" , id: "232" },
{ name: "FAJRIANSYAH" , id: "233" },
{ name: "MUHAMMAD SALMAN ALFHARIZHI" , id: "234" },
{ name: "NIA NUR RAMADHANI" , id: "235" },
{ name: "MUHAMMAD NAHYAN AMIN" , id: "236" },
{ name: "RIZKA RAMADHANI" , id: "237" },
{ name: "ALYA IMANI" , id: "238" },
{ name: "AZKIA FILZIA PUTRI" , id: "239" },
{ name: "FAQIH GHANI KHAIRI" , id: "240" },
{ name: "MUHAMMAD ULIL ALBAB" , id: "241" },
{ name: "DARIN ADELLIA AZ-ZAHRA" , id: "242" },
{ name: "DHAFITHA ZAYDA ALWI" , id: "243" },
{ name: "ELSA RAIDA RAHMAWATI" , id: "244" },
{ name: "AQILA NIRMALA DEWI" , id: "245" },
{ name: "FATIMAH SHAQILA KHAIRINA" , id: "246" },
{ name: "NUR ATHIFAH" , id: "247" },
{ name: "GHAAZIYA LUBNAYYA" , id: "248" },
{ name: "TAMINA NUR ASSYIFA" , id: "249" },
{ name: "NADINE MIKAYLA SANDRIA" , id: "250" },
{ name: "NUR ADELIA SAFITRI" , id: "251" },
{ name: "RAQA MAFAZI AGFA" , id: "252" },
{ name: "RISKI ANANTA" , id: "253" },
{ name: "RISKY ANNISA RASYIDAH" , id: "254" },
{ name: "SELVIA KHAIRUN ASPIA" , id: "255" },
{ name: "SIRHAN FIKRI ROSIDI" , id: "256" },
{ name: "ZIKRA AMALIA" , id: "257" },
{ name: "AZKA RAYYAN AGFA" , id: "258" },
{ name: "SITI AISHA RIYANNA" , id: "259" },
{ name: "GUSTI FATHIYA RILLIE HASYAWAZA" , id: "260" },
{ name: "M. NOR RAHMAN" , id: "261" },
{ name: "GERRAD NAUVALAZKA" , id: "262" },
{ name: "ANDI RIZKI DAFA RAMADHAN" , id: "263" },
{ name: "AHMAD ZAMAN" , id: "264" },
{ name: "AHMAD ALFARIZKI" , id: "265" },
{ name: "AHMAD ZAIEN WAFA" , id: "266" },
{ name: "ALTHAF BASYA MISYARAJA" , id: "267" },
{ name: "AISHA ARSYIFA" , id: "268" },
{ name: "ALLYSA HASYA AFIQAH" , id: "269" },
{ name: "ABDUL MAJID" , id: "270" },
{ name: "AISYAH AQILAH" , id: "271" },
{ name: "ANDI AISYAH AYUDIA INARA" , id: "272" },
{ name: "KIOSI ALTAF" , id: "273" },
{ name: "ALMIRA AYU SAFITRI WIJAYA" , id: "274" },
{ name: "AGHNINA CARIESYA SIBARANI" , id: "275" },
{ name: "AHMAD NAZAMUDDIN" , id: "276" },
{ name: "MUHAMMAD ROYYANDI" , id: "277" },
{ name: "ALIFA FATHIYYA HAMZAH" , id: "278" },
{ name: "AISYAH RAIHANAH" , id: "279" },
{ name: "AKHMAD GALIH PRIHANDONO" , id: "280" },
{ name: "ALFARIZKY MELAN PRATAMA" , id: "281" },
{ name: "ALMEERA NURUL RASYADA" , id: "282" },
{ name: "ALMIRA SYIFA AZ ZAHRA" , id: "283" },
{ name: "MUHAMMAD ROYANDI" , id: "284" },
{ name: "ANISA AZAHRA" , id: "285" },
{ name: "MAULIDA FEBRIANI PUTRI" , id: "286" },
{ name: "INDRA LESMANA" , id: "287" },
{ name: "ADELIA ZAHRATUSSHOFA" , id: "288" },
{ name: "FAKHRI MUTASHIM" , id: "289" },
{ name: "M. ALI ZABER" , id: "290" },
{ name: "MAISARAH" , id: "291" },
{ name: "MUHAMMAD ARSHAD AL FATIH ASTADIWANGSA" , id: "292" },
{ name: "MUHAMMAD LUTFAN ABID" , id: "293" },
{ name: "MUHAMMAD MAULANA ISHAQ" , id: "294" },
{ name: "MUHAMMAD RAYHAN" , id: "295" },
{ name: "MUHAMMAD ROHIID AL ANIS" , id: "296" },
{ name: "MUHAMMAD TSAQIB HERSYA" , id: "297" },
{ name: "MUTIA NUR AZZAHRA" , id: "298" },
{ name: "NADHIFA AYU FAIQAH" , id: "299" },
{ name: "NATANIA AISYAH NUHA ZAHIRA" , id: "300" },
{ name: "NUR AINA" , id: "301" },
{ name: "NAYRA RAISA DINAR" , id: "302" },
{ name: "RAESHA YUMNA ADZKIA" , id: "303" },
{ name: "RAFFA MULYATAMA SARAGIH" , id: "304" },
{ name: "ARSYILA ROOMESA FARZANA" , id: "305" },
{ name: "RAIHANA AINUN MARDIAH" , id: "306" },
{ name: "RENDRA MAHARDIKA" , id: "307" },
{ name: "RIKO ADITYA" , id: "308" },
{ name: "RIZKY NUR AQILLA" , id: "309" },
{ name: "RUSNI ADAM" , id: "310" },
{ name: "RUWAIDA FATIMAH RAHMADANI" , id: "311" },
{ name: "SARAH AZMIRA" , id: "312" },
{ name: "TRIANA SAFITRI" , id: "313" },
{ name: "ZAFRAN YAPIQ" , id: "314" },
{ name: "ACHMAD SIDIQ ASSAMI" , id: "315" },
{ name: "AHMAD AQILA MIRZA" , id: "316" },
{ name: "ZULFA HUMAIRA" , id: "317" },
{ name: "MUHAMMAD GILANG HAMIZAN" , id: "318" },
{ name: "AQUINNA ZAHRATU NIDA" , id: "319" },
{ name: "GUSTI ALI MUHAMMAD AR RAYYAN" , id: "320" },
{ name: "HABIBIE YUSUF HIDAYAT" , id: "321" },
{ name: "MUHAMMAD DAFFA ARYA GHOSSAN" , id: "322" },
{ name: "KEYRA ANDITA BALQIS" , id: "323" },
{ name: "KHAIRA LUBNA ALTHAFUNNISA" , id: "324" },
{ name: "KHALISA PUTRI" , id: "325" },
{ name: "ALESHA KAYLA NADHIFA" , id: "326" },
{ name: "FAIZ HAZMI ANWARI" , id: "327" },
{ name: "KA'AB AHMAD BUSTANI NUR" , id: "328" },
{ name: "NABILA AFIQOH" , id: "329" },
{ name: "INDRA MAULANA" , id: "330" },
{ name: "SITI ALYA HUMAIRO" , id: "331" },
{ name: "GUSTI ALIFIA KIRANA" , id: "332" },
{ name: "NAZIA ARSYIFA" , id: "333" },
{ name: "ZAINAL ILMI" , id: "334" },
{ name: "M.AZKA APRILIO ADINATA PRASETYA" , id: "335" },
{ name: "MUHAMMAD MUHAJIR ANSHORY" , id: "336" },
{ name: "SYABILA FATHIYA RAMADHANI" , id: "337" },
{ name: "ASYILA APRILIA" , id: "338" },
{ name: "SITI MAYSAROH" , id: "339" },
{ name: "JALALLUDIN AS-SYAYUTI" , id: "340" },
{ name: "JAUDAH" , id: "341" },
{ name: "AYANA MUKHBITA MARYAM" , id: "342" },
{ name: "ALIFA AZKADINA" , id: "343" },
{ name: "ANANDITHA ASSYABIYA ISLAMI" , id: "344" },
{ name: "NUR 'AINA" , id: "345" },
{ name: "NUR SALSABILA" , id: "346" },
{ name: "MUHAMMAD FARIS RAMADHAN" , id: "347" },
{ name: "MUHAMMAD REZA EFANSYAH" , id: "348" },
{ name: "ABDILLAH ALGHIFARI IBERAHIM" , id: "349" },
{ name: "ALIFA AZZAHRA" , id: "350" },
{ name: "IQBAL MURISKI" , id: "351" },
{ name: "KUMALA AFIFA NAHDA RAFANDA" , id: "352" },
{ name: "FEBRIYANI" , id: "353" },
{ name: "M. ALMAN. B" , id: "354" },
{ name: "AMALIA PUTRI" , id: "355" },
{ name: "FAUZA NUR RIZKY" , id: "356" },
{ name: "AYSHA NABILA PRANTAU" , id: "357" },
{ name: "RAYA NOVITA SARI." , id: "358" },
{ name: "MUHAMMAD AZHAR ALRISAM" , id: "359" },
{ name: "M. HAFIZH FATURRAHMAN" , id: "360" },
{ name: "RINDANG RIZKI ANANDA" , id: "361" },
{ name: "AKIFAH NAYLA NURHIJRAH" , id: "362" },
{ name: "FATIA AULIA ANNISA" , id: "363" },
{ name: "M. FADILLAH RAMLAN" , id: "364" },
{ name: "AHMAD ZAINI DAHLAN" , id: "365" },
{ name: "WIRDA HALIMATUS SADIAH" , id: "366" },
{ name: "MUHAMMAD HUD AR RAYYAN" , id: "367" },
{ name: "MUHAMMAD YAZID RAMADHAN" , id: "368" },
{ name: "JIHAN MAULIDA AZKIA" , id: "369" },
{ name: "HAVA HARAIDAN SAFIRA" , id: "370" },
{ name: "MUHAMMAD FIKRI" , id: "371" },
{ name: "GUSTI ALI M AR RAYYAN" , id: "372" },
{ name: "AKBAR ZAIN ADITYA" , id: "373" },
{ name: "SYAFIRA ALFATHUNNISA" , id: "374" },
{ name: "MUHAMMAD ZAUFAN ALL BAKRIE" , id: "375" },
{ name: "ZAKIA ANIQ MUFLIHAH" , id: "376" },
{ name: "MUHAMMAD AMIN KUTBI" , id: "377" },
{ name: "NUR ALIYA TABINA" , id: "378" },
{ name: "NADHIRA IMADINA ADIBA" , id: "379" },
{ name: "FARID ATALLAH SALEH" , id: "380" },
{ name: "MARLINA NUR ZAHRA" , id: "381" },
{ name: "M. HAIKAL BAGUS" , id: "382" },
{ name: "ABIMANYU" , id: "383" },
{ name: "AMALIA NUR RIZQA" , id: "384" },
{ name: "MUHAMMAD AQRA HAZAIRIN RABBANI" , id: "385" },
{ name: "MUHAMMAD AZKA RAQILLA" , id: "386" },
{ name: "NASWA SALSABILA" , id: "387" },
{ name: "PUTRI FATMA ZAHIRA" , id: "388" },
{ name: "SELLYN RIZKI MARSHANTI" , id: "389" },
{ name: "BAILUL ZAKI ALFIN" , id: "390" },
{ name: "M. YUSUF MADANI" , id: "391" },
{ name: "MUHAMMAD FADILUL AKBAR" , id: "392" },
{ name: "NADIYA MAULIDA" , id: "393" },
{ name: "QONITA HAFIDZAH" , id: "394" },
{ name: "SHAFIRA SALSABILA" , id: "395" },
{ name: "SITI AMIRA NAJMUTSAQIBAH" , id: "396" },
{ name: "MUHAMMAD RIZKY ZAIDAN" , id: "397" },
{ name: "RAKHA NURHAFIDZAN" , id: "398" },
{ name: "M.RIFAT AZIZI RAHMAN" , id: "399" },
{ name: "USTADZ JUFRI" , id: "400" },
{ name: "ALIYA ANISAH" , id: "401" },
{ name: "FINA MAULINA" , id: "402" },
{ name: "LISA AMELIA" , id: "403" },
{ name: "MUHAMMAD BILAL AL-FATTAAH" , id: "404" },
{ name: "MUHAMMAD SHOLAHUDDIN" , id: "405" },
{ name: "NAYLA FAUJIAH" , id: "406" },
{ name: "STEVANNY MARIETA JASA" , id: "407" },
{ name: "ZAHARA ALHENA DINAR" , id: "408" },
{ name: "ANGGI NUR ASY-SYIFA DALILLAH" , id: "409" },
{ name: "AYDIN KHALFANI REAGAN" , id: "410" },
{ name: "MUHAMMAD DZAKY MAULANA" , id: "411" },
{ name: "MUHAMMAD RAFIF IMANSYAH" , id: "412" },
{ name: "MUHAMMAD ADITYA SAPUTRA" , id: "413" },
{ name: "AZKA MAULIDA NURRACHMAH" , id: "414" },
{ name: "RAFFA ATHAYA CISHANDY PUTRI" , id: "415" },
{ name: "MUHAMMAD TIRTA FARSYA UTAMA" , id: "416" },
{ name: "AISYA HUMAIRA (MEMEY)" , id: "417" },
{ name: "ALDANIA PUTRI SILVANA" , id: "418" },
{ name: "FATIMAH SARAH" , id: "419" },
{ name: "M. AS'AD ALI DAROHMAN" , id: "420" },
{ name: "MUHAMMAD HAFI KHOLILURRAHMAN" , id: "421" },
{ name: "MUHAMMAD KHAIRIL AKMAL" , id: "422" },
{ name: "MUHAMMAD KHAIRIL KAFA" , id: "423" },
{ name: "MUHAMMAD NAHRU ROHMAN" , id: "424" },
{ name: "MUHAMMAD SAMMAN" , id: "425" },
{ name: "MUHAMMAD NABHAN AHNAF" , id: "426" },
{ name: "NAFEEZA IQLIMA ANDENI" , id: "427" },
{ name: "KHANSA HUMAIRA" , id: "428" },
{ name: "M. RABBANI FAQIH" , id: "429" },
{ name: "M. RESTU FIRDAUS" , id: "430" },
{ name: "MUHAMMAD DZAKY SIRAJ" , id: "431" },
{ name: "MUHAMMAD NAJIBILKHAIRY" , id: "432" },
{ name: "MUHAMMAD RAHMAN" , id: "433" },
{ name: "MUHAMMAD RAJENDRA RAFAEL" , id: "434" },
{ name: "NOOR AZIZAH" , id: "435" },
{ name: "SYARIFAH FARAH ATHIRA SALSABILA" , id: "436" },
{ name: "ANGGITA AZZAHRA" , id: "437" },
{ name: "ADITIYA DARMA PUTRA" , id: "438" },
{ name: "AHMAD ADIB MUHARAM" , id: "439" },
{ name: "AHMAD PUTRA PRATAMA" , id: "440" },
{ name: "AHMAD RAMADANI" , id: "441" },
{ name: "AISYAH NUR RAHMAH" , id: "442" },
{ name: "AMIRAH HASNA HAKIMAH" , id: "443" },
{ name: "AYESHA HAYFA MAHIRA" , id: "444" },
{ name: "DAFA RADITIYA" , id: "445" },
{ name: "FATIMAH ZAHRA" , id: "446" },
{ name: "GUSTI HANIF AL KHALIFI" , id: "447" },
{ name: "HERMI MULIA SARI" , id: "448" },
{ name: "KURNIAWATI" , id: "449" },
{ name: "MUHAMMAD  ZAKY AL FATIH" , id: "450" },
{ name: "MUHAMMAD  INSYIRA RAMADHAN" , id: "451" },
{ name: "MUHAMMAD  RIFA'I" , id: "452" },
{ name: "MUHAMMAD  YAZID" , id: "453" },
{ name: "MUHAMMAD NAUFAL FAEYZA" , id: "454" },
{ name: "AZIZAH APRILIANI" , id: "455" },
{ name: "MUHAMMAD LUTH NAUSHADAZKA" , id: "456" },
{ name: "LINGGA DANISH AMINUDIN PURWANTO" , id: "457" },
{ name: "MENTARI AQILA PUTRI MAHARANI" , id: "458" },
{ name: "MUHAMMAD ABIZHAR" , id: "459" },
{ name: "MUHAMMAD AZKA AZAMY BAHRI" , id: "460" },
{ name: "MUHAMMAD AZKA RIDHONI" , id: "461" },
{ name: "MUHAMMAD AZKA SAPUTRA" , id: "462" },
{ name: "MUHAMMAD FAJAR ALFANDI" , id: "463" },
{ name: "MUHAMMAD SAKHA AT THAHIR RAMADHAN" , id: "464" },
{ name: "RIFKY ARDIANSYAH" , id: "465" },
{ name: "SITI KHADIJAH RIANI" , id: "466" },
{ name: "SYAILLA NUR RAMADHANI" , id: "467" },
{ name: "AKHMAD HABIBIE" , id: "468" },
{ name: "HAFIY AHMAD SUBAKTI" , id: "469" },
{ name: "ARIANSYAH" , id: "470" },
{ name: "ANDRA HARIYADI" , id: "471" },
{ name: "MUHAMMAD AL FATIH" , id: "472" },
{ name: "MUHAMMAD ARJUNA" , id: "473" },
{ name: "FATIMAH AL KHAIROH" , id: "474" },
{ name: "YUSYA RIZKA" , id: "475" },
{ name: "ANISA AZAHRA" , id: "476" },
{ name: "SASKIA ANASTASYA" , id: "477" },
{ name: "NUR EFMA WAHIDHA" , id: "478" },
{ name: "ISNA NUR JANNAH" , id: "479" },
{ name: "DHAFIN ARYA ROSADI" , id: "480" },
{ name: "MUHAMMAD KHALIQ AL KHALIFY" , id: "481" },
{ name: "MUHAMMAD DAFFA FAGHFIRLY" , id: "482" },
{ name: "HAFIDZ ROYYAN" , id: "483" },
{ name: "M. AZKA ALFARIZI" , id: "484" },
{ name: "NORMA LINDA EKA PRADELLA" , id: "485" },
{ name: "BILQIS KHAIRUN NISA" , id: "486" },
{ name: "M. RASYID RIDHO" , id: "487" },
{ name: "NADILA PUTRI HALIMAH" , id: "488" },
{ name: "M. RASYID FAUZI" , id: "489" },
{ name: "AMIRA SYIFA AZ ZAHRA" , id: "490" },
{ name: "AKHMAD VIQRI SAPUTRA" , id: "491" },
{ name: "SAN ALI AHMAD" , id: "492" },
{ name: "NUR LATIFAH ALIFA" , id: "493" },
{ name: "M. NABIL ASY'ARI" , id: "494" },
{ name: "MUHAMMAD ALFAL KHAIRY" , id: "495" },
{ name: "M. AQSAN MUSYAFA" , id: "496" },
{ name: "MUHAMMAD YUSUF" , id: "497" },
{ name: "MUHAMMAD ZAKY RAMADHAN" , id: "498" },
{ name: "NUR AMELIA NAZIHA" , id: "499" },
{ name: "AHMAD RAFFASYA ALFARIZI" , id: "500" },
{ name: "NAYSILLA NUR MAYDINI" , id: "501" },
{ name: "AUFA WAHYUNI" , id: "502" },
{ name: "MUHAMMAD AZKA RANENDRA" , id: "503" },
{ name: "SITI FADILLAH" , id: "504" },
{ name: "NUR AULIA SAFITRI" , id: "505" },
{ name: "RULLITA AZZAHRA" , id: "506" },
{ name: "NUR AVIFAH TRIYANI" , id: "507" },
{ name: " ALISHA NAILA MIZA" , id: "508" },
{ name: "NADA NURANI ALIANSYAH" , id: "509" },
{ name: "AHMAD KEMAL REIS LIZVIRABIH" , id: "510" },
{ name: "RAYYA STARLA ADZKADINA" , id: "511" },
{ name: "ALMAIRA NURFAUZIAH" , id: "512" },
{ name: "FATIH YASIR MUBAROK" , id: "513" },
{ name: "RAISYA NUR AQIFA NAYLA" , id: "514" },
{ name: "MUHAMMAD RAJANDRA ABDILLAH" , id: "515" },
{ name: "AHMAD AL-FATIH NUR ADABY" , id: "516" },
{ name: "MUHAMMAD ADELLIO BRAMASTA " , id: "517" },
{ name: "MUHAMMAD ARKHA AL FAIRUZ" , id: "518" },
{ name: "KHUMAIRA PUTRI ASY'ARI" , id: "519" },
{ name: "MUHAMMAD ALTHAF HAFIZY" , id: "520" },
{ name: "MUHAMMAD LUTFI SAPUTRA" , id: "521" },
{ name: "NARLA AZKADINA" , id: "522" },
{ name: "M. ABYAN ARJUNA PASURA " , id: "523" },
{ name: "ANDI ARSYILA HUMAIRA" , id: "524" },
{ name: "FARYZA ANNISA FITRIA" , id: "525" },
{ name: "AHMAD RIYADI" , id: "526" },
{ name: "LULU AZKIA ZIDNIE" , id: "527" },
{ name: "SOFITUS ZAHRA" , id: "528" },
{ name: "ALMATARA KHUMAIRA" , id: "529" },
{ name: "ALYA NUR A" , id: "530" },
{ name: "ALMIRA ZHAFIRA" , id: "531" },
{ name: "WILDA HAFIZ MAULANA" , id: "532" },
{ name: "M. FAIZ IRAWAN" , id: "533" },
{ name: "HIDAYATUL AZKIA" , id: "534" },
{ name: "RAIHAN FERDIAN" , id: "535" },
{ name: "M. HAUFAN HAZZA ABQORY" , id: "536" },
{ name: "RISKA NUR BAINAH" , id: "537" },
{ name: "ARKAAN HARITH HAFI " , id: "538" },
{ name: "ALI RAYYAN RIZKY" , id: "539" },
{ name: "JAINA ALIFAH" , id: "540" },
{ name: "MUHAMMAD ALFA RIZQI" , id: "541" },
{ name: "NAFISA SHARIN NASYWA" , id: "542" },
{ name: "REYNA AURELIA" , id: "543" },
{ name: "MUHAMMAD ARIF FADIL" , id: "544" },
{ name: "FAHRIL RIZKY PRATAMA" , id: "545" },
{ name: "MUHAMMAD ADEB AL GAZALI" , id: "546" },
{ name: "HAFIZAN NUR AULIA" , id: "547" },
{ name: "KAYLA AZZAHRA RIFAI " , id: "548" },
{ name: "M. IQRAM SYARIF" , id: "549" },
{ name: "M. ZAINI ALFAT" , id: "550" },
{ name: "ABDULLAH ARAFAT ATTA" , id: "551" },
{ name: "M. AIDIL SYAFI'I" , id: "552" },
{ name: "HIDAYATUL AZKIA" , id: "553" },
{ name: "M. ROYYAN KHIAR ABQORY" , id: "554" },
{ name: "M. RAIHAN FERDIAN" , id: "555" },
{ name: "SHIREEN ZEA ASSYIFA" , id: "556" },
{ name: "NADHIFA ZAFIRA" , id: "557" },
{ name: "ZAHRA" , id: "558" },
{ name: "ALIFIA NAVISHA" , id: "559" },
{ name: "SYARIFAH SHIDQIA" , id: "560" },
{ name: "M. RIFDHIL ARHAMY" , id: "561" },
{ name: "M. MAHDI YUSUF" , id: "562" },
{ name: "ARFABIAN MUSYAFA - A" , id: "563" },
{ name: "FATHIN AULIA" , id: "564" },
{ name: "M. ALZHAFRAN FARDILA" , id: "565" },
{ name: "NUR MIFTAHUL JANNAH" , id: "566" },
{ name: "AKIFAH NAILA" , id: "567" },
{ name: "M. ARFAN" , id: "568" },
{ name: "MUHAMMAD AL FATIH RAMADHAN" , id: "569" },
{ name: "GUSTI KHALID RAHMAN SADI'" , id: "570" },
{ name: "ABDU RAHDIKA NAHRY" , id: "571" },
{ name: "KHAIRUL SAPUTRA" , id: "572" },
{ name: "MAULANA MALIK IBRAHIM" , id: "573" },
{ name: "M. MAHASIN NAUVAL" , id: "574" },
{ name: "M. UMAR ZAFLAN ALTTUDA" , id: "575" },
{ name: "NUR AISYAH HUMAIRA" , id: "576" },
{ name: "NUR RAZIBUIA HANDAYANI" , id: "577" },
{ name: "SYAHILA AZMY" , id: "578" },
{ name: "SYARIFAH NUR HAFIZHAN" , id: "579" },
{ name: "A. SYAUQI HABIBI" , id: "580" },
{ name: "ALIFAH RAHMANTI PUTRI" , id: "581" },
{ name: "ALSYAH NUR ALMIRA" , id: "582" },
{ name: "ARUNA GHAISAN A. F" , id: "583" },
{ name: "FAQIH NAZRIL KHALIF" , id: "584" },
{ name: "GT. DAFA" , id: "585" },
{ name: "IZZFAHIM ANAQI" , id: "586" },
{ name: "MUH. AL-FATIH" , id: "587" },
{ name: "M. KANFI ARRAHMAN" , id: "588" },
{ name: "MUHAMMAD MIRZA ALIANDRA" , id: "589" },
{ name: "M. RASYID RAIHAN" , id: "590" },
{ name: "M. SULTHAN MALIK" , id: "591" },
{ name: "M. ZAYD RYS ALGHIFARI" , id: "592" },
{ name: "QONITA HANIFA ALMAHIRA" , id: "593" },
];

const tableBody = document.getElementById('table-body');
const searchInput = document.getElementById('search-input');

function renderTable(data) {
  tableBody.innerHTML = '';
  data.forEach(student => {
    const row = `<tr>
      <td>${student.id}</td>
      <td>${student.name}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

function filterStudents(query) {
  return students.filter(student =>
    student.name.toLowerCase().includes(query.toLowerCase())
  );
}

searchInput.addEventListener('input', (e) => {
  const filteredStudents = filterStudents(e.target.value);
  renderTable(filteredStudents);
  tableBody.classList.toggle('hidden', e.target.value.length === 0);
});

// Initial state: table is hidden
tableBody.classList.add('hidden');
