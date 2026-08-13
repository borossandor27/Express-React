-- Minta adatbázis a "Kedvelés számláló" alkalmazáshoz
-- Adatbázis modell: { "_id": "string", "text": "string", "likes": "number" }

CREATE DATABASE IF NOT EXISTS kedveles_szamlalo
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE kedveles_szamlalo;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(500) NOT NULL,
  likes INT NOT NULL DEFAULT 0
);

INSERT INTO products (text, likes) VALUES
('Miért nem játszik sakkot a kalóz? Mert fél a d(a)-lomtól.', 24),
('A tanár megkérdezi: Ki tudja, mi a jég? Egy diák: Fagyott víz. Tanár: És mi a víz? Diák: Olvadt jég.', 31),
('Bemegy egy bagoly a könyvtárba. A könyvtáros: Csendet kérek! A bagoly: Húú?', 18),
('Miért nem fél a informatikus a sötétben? Mert ismeri a path-ot.', 42),
('A programozó felesége azt mondja: Menj el a boltba, végy egy kenyeret, és ha van tojás, hozz hatot. A programozó hat kenyérrel jön haza.', 57),
('Miért szomorú a számítógép? Mert elvesztette a byte-ját.', 15),
('Két bit beszélget: Te milyen szinten vagy? Alacsonyon.', 9),
('Miért ment el a fejlesztő terápiára? Mert túl sok kivétele volt.', 22),
('Hány programozó kell egy izzó kicseréléséhez? Egy sem, az hardveres probléma.', 33),
('Mi a különbség a matematikus és a fizikus között? A fizikus tudja, hogy közelítőleg mennyi 2+2.', 27),
('Miért nem megy strandra a algebra tanár? Mert fél a négyzetgyöktől.', 11),
('A robot bemegy a kocsmába, és azt mondja: Egy sört kérek, és egy csavarhúzót a barátomnak.', 19),
('Miért utálják a macskák az internetet? Mert túl sok az egér, de egyiket sem lehet elkapni.', 46),
('Mit mond a null pointer a másiknak? Semmi, mert nem létezik.', 38),
('Miért nem bíznak a rekurzióban? Mert önmagát ismétli, amíg valaki le nem állítja.', 29),
('Egy byte bemegy a kórházba. Az orvos megkérdezi: Mi a panasza? A byte: Bitesésem van.', 13),
('Miért lett szomorú a felhő? Mert nem volt hova mentenie az adatait.', 21),
('A tanár kérdezi: Ki találta fel a telefont? Egy diák: Nem tudom, de nem veszi fel.', 35),
('Miért nem eszik banánt a szerver? Mert nem majom, hanem gép.', 8),
('Két antenna találkozik a tetőn. Összeházasodnak. Az esküvő nem volt nagy szám, de a vétel kiváló.', 44),
('Miért fáradt mindig a Wi-Fi router? Mert egész nap sugároz.', 17),
('A programozó azt mondja a barátjának: Az életem egy nagy bug, de legalább reprodukálható.', 40),
('Miért nem szeret kártyázni a matematikus? Mert utálja, ha valaki lapot húz belőle.', 12),
('Mi a kedvenc itala a robotnak? Az akkumulátor-víz.', 6),
('Miért ment el orvoshoz a laptop? Mert vírusa volt.', 30),
('A tanár kérdezi: Mennyi 7x8? A diák: Ez most komoly kérdés vagy csak barátkozunk?', 52),
('Miért nem lehet megbízni az atomokban? Mert mindent kitalálnak.', 25),
('Két szál beszélget: Te blokkolva vagy? Nem, csak várok valamire.', 16),
('Miért ment el a kód pszichológushoz? Mert nem tudta feldolgozni az érzéseit.', 20),
('A géppel beszélgetve: Kérlek indulj újra. A gép: Miért, valami baj van velem is?', 28),
('Miért nem játszik a szerver bújócskát? Mert mindig megtalálják a logban.', 14),
('Egy ciklus bemegy egy bárba. Egy ciklus bemegy egy bárba. Egy ciklus bemegy egy bárba...', 61),
('Miért lett tanár a régi debugger? Mert szeretett kérdéseket feltenni: mi történt itt pontosan?', 23),
('A hálózati mérnök kedvenc étele: a routeros csirke.', 7),
('Miért nem fél a hacker a sötét szobától? Mert mindig van backdoor-ja.', 36),
('Mi a kedvenc zenéje az adatbázisnak? A tábla-tánc.', 10),
('Miért lett bizonytalan a változó? Mert nem tudta, milyen típusú akar lenni.', 26),
('A fejlesztő éjjel kettőkor: Csak még egy commit, aztán alszom. Hajnal négy: Csak még egy commit...', 48),
('Miért nem megy moziba a tűzfal? Mert mindent blokkol, ami gyanús.', 5),
('Két algoritmus versenyez. Az egyik gyorsabb, de a másik jobb történeteket mesél útközben.', 32),
('Miért örült a fejlesztő, amikor megtalálta a hibát? Mert végre volt kire mutogatnia: a saját kódjára.', 39),
('A gép azt kérdezi az emberétől: Miért vagy szomorú? Az ember: Mert te sosem felejtesz el semmit.', 43),
('Miért nem lesz soha éhes a ciklus? Mert mindig van benne még egy iteráció.', 18),
('A junior fejlesztő megkérdezi: Mi a különbség a bug és a feature között? A senior: A dokumentáció.', 55),
('Miért csendes mindig a némító gomb? Mert megtanulta, mikor kell hallgatni.', 9);
