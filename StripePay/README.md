# Online fizetés [Stripe](https://stripe.com/en-hu) segítségével
A Stripe integrációja egy React alkalmazásban két részből áll:
1. **Frontend** (React) – ahol a vásárló megadja a kártyaadatokat
2. **Backend** (Node.js / Express) – ahol a fizetési szándék (`PaymentIntent`) létrejön

## Stripe regisztráció és API kulcsok

Menj a [Stripe Dashboard-ra](https://dashboard.stripe.com/login) és:
- Regisztrálj vagy jelentkezz be
- Másold ki a `Publishable key` és `Secret key` értékeket
- Használj teszt üzemmódot a fejlesztéshez