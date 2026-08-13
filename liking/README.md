# Kedvelés számláló

Van egy adatbázis, amelyben termékeket tárolunk. A webalkalmazás lehetővé teszi a felhasználók számára, hogy kedveljék a termékeket. A kedvelések számát minden termékhez nyomon követjük. Az egyszerűség kedvéért a kedvelések számát egy `likes` mezőben tároljuk minden termék dokumentumban. A termék jelenleg egy vicc, amelyhez csak szöveg tartozik, de a jövőben bővíthetjük a termékeket további mezőkkel, például képekkel, árakkal stb.

## Adatbázis modell

Az alábbi adatbázis modellt használjuk a termékek tárolására:

```json
{
  "_id": "string",
  "text": "string",
  "likes": "number"
}
```

Aadatbázis kezelőnek a MySQL-t használjuk.

## Express backend

Az Express.js keretrendszert használjuk a backend fejlesztéséhez.
Felelős a termékek kezeléséért és a kedvelések számának frissítéséért az adatbázisban.

### Végpontjai

- `GET /api/products`: Lekéri az összes terméket az adatbázisból.
- `POST /api/products/:id/like`: Növeli a megadott termék kedveléseinek számát.
- `DELETE /api/products/:id/like`: Csökkenti a megadott termék kedveléseinek számát.
- `PUT /api/products/:id`: Frissíti a megadott termék adatait.
- `DELETE /api/products/:id`: Törli a megadott terméket az adatbázisból.
- `POST /api/products`: Létrehoz egy új terméket az adatbázisban.

## Kedvelés számláló React alkalmazás
