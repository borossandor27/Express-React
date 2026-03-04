# JWT autentikáció implementálása a szerveren

Ebben a részben egy egyszerű Express szervert hozunk létre, amely JWT alapú autentikációt használ. A szerver egy MySQL adatbázissal fog kommunikálni, ahol a felhasználói adatok tárolódnak.

Megvalósítjuk a regisztrációt és a bejelentkezést, valamint egy védett útvonalat, amely csak érvényes JWT tokennel érhető el.

Regisztráció és bejelentkezés során a szerver létrehozza a JWT tokent, amelyet a kliens használhat a védett útvonalak eléréséhez. A token érvényességét a szerver ellenőrzi minden védett kérésnél.

Csak POST kéréseket fogadunk a regisztrációhoz és a bejelentkezéshez, és a válaszokat JSON formátumban küldjük vissza. A szerver egy egyszerű üzenetet is visszaküld a gyökeres útvonalon, hogy jelezze, hogy a szerver fut és készen áll a kérések fogadására.
