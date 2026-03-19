# KLAPI Käyttöohjeet: Admin

## Yleistä

Admin-käyttäjällä on laajennetut oikeudet hallita kalustoa, käyttäjiä, varauksia ja järjestelmän asetuksia. Admin-paneeli löytyy osoitteesta `/admin`.

---

## 1. Kaluston hallinta

### 1.1. Uuden tavaran lisääminen

- Siirry sivulle **Admin → Luo uusi kama** (`/admin/createItem`)
- Täytä lomakkeeseen tavaran nimi, kuvaus, määrä, kategoriat ja sijainti
- Voit lisätä kuvan tavaralle
- Tallenna painamalla **Luo kama** tai **Luo ja lisää toinen** (jos haluat lisätä useita peräkkäin)

### 1.2. Tavaran muokkaaminen

- Siirry tavaran sivulle ja paina **Muokkaa** (näkyy vain adminille)
- Muokkaa tarvittavat tiedot ja tallenna

### 1.3. Tavaran poistaminen

- Siirry tavaran sivulle ja paina **Poista**
- Vahvista poisto

---

## 2. Varausten hallinta

### 2.1. Kaikkien varausten tarkastelu

- Siirry **Varaukset**-sivulle (`/loan`)
- Näet kaikki varaukset, niiden tilat ja raportit

### 2.2. Varauksen hyväksyminen ja aloittaminen

- Kaikki varaukset ovat hyväksytty-tilassa lähtökohtaisesti
- Käyttäjän tulisi itse merkitä nouto ja palautus kaluston koneella, mutta admin voi tarvittaessa aloittaa varauksen

### 2.3. Varauksen muokkaaminen

- Siirry varauksen muokkaussivulle (`/admin/editLoan/[id]`)
- Voit muuttaa kuvausta, päivämääriä, lisätä/poistaa tavaroita
- Muutokset tallennetaan painamalla **Tallenna**

### 2.4. Varauksen palauttaminen

- Voit merkitä varauksen palautetuksi
- Voit tarkastella ja käsitellä raportteja (esim. puutteet, vauriot)

---

## 3. Käyttäjien hallinta

### 3.1. Käyttäjien listaaminen

- Näet kaikki käyttäjät admin-paneelissa
- Näet käyttäjän nimen, sähköpostin ja roolin

### 3.2. Roolin vaihtaminen

- Voit vaihtaa käyttäjän roolin (ADMIN ↔ USER)
- Kiosk-käyttäjän roolia ei voi muuttaa

### 3.3. Käyttäjän poistaminen

- Voit poistaa käyttäjän painamalla **Poista**
- Poisto vaatii vahvistuksen

### 3.4. Kiosk-salasanan luominen

- Voit luoda uuden kiosk-käyttäjän (kaluston kone) salasanan admin-paneelista
- Salasana näytetään modaalissa

### 3.5. Admin PIN-koodin asettaminen

- Voit asettaa admin PIN-koodin, jota käytetään admin-oikeuksien käyttöönottoon kaluston koneella

---

## 4. Kaluston organisointi

### 4.1. Kategoriat ja sijainnit

- Voit lisätä, muokata ja poistaa kategorioita ja sijainteja
- Kategoriat ja sijainnit näkyvät vain adminille

### 4.2. Laatikot

- Näet kaikki laatikot ja niiden sisällön (`/admin/boxes`)
- Näet boksissa olevat varaukset ja niiden tilat
- Voit tarkastella raportteja bokseista

---

## 4.3. Kiosk elevate (admin-oikeudet kioskissa)

- Kiosk-käyttäjä voi nostaa itselleen admin-oikeudet syöttämällä PIN-koodin (asetetaan admin-paneelissa)
- PIN-koodin syöttö avaa admin-oikeudet kioskissa määräajaksi (30 min)
- Oikeudet vanhenevat automaattisesti, jonka jälkeen rooli palautuu kioskiksi
- PIN-koodin voi asettaa admin-paneelissa kohdasta "Aseta admin pin-koodi"

---

## 5. Raportit

- Näet kaikki raportit (`/admin/reports`)
- Raportit liittyvät puutteisiin, vaurioihin ja muihin ongelmiin (esim. tavara rikki, puuttuu, väärä määrä)
- Raportti yhdistetään aina koko lainaan, mutta voi liittyä vain yhteen tavaraan
- Raportin tiedoista näet mm. sisällön, kohteet, liittyvän lainan ja raportin tilan

### Raportin tilat ja käsittely

- **Avoin (OPEN):** Raportti on juuri jätetty ja odottaa käsittelyä.
- **Käsittelyssä (IN_PROGRESS):** Raportin käsittely on aloitettu, esim. vika tarkistetaan tai puute selvitetään.
- **Ratkaistu (RESOLVED):** Raportti on käsitelty ja merkitty valmiiksi (esim. tavara korjattu, puute kuitattu, muu toimenpide tehty).

Raportin tilaa voi muuttaa raporttisivulla. Suositeltu prosessi:

1. Uusi raportti on tilassa "Avoin" (OPEN)
2. Kun käsittely aloitetaan, vaihda tila "Käsittelyssä" (IN_PROGRESS)
3. Kun asia on hoidettu, vaihda tila "Ratkaistu" (RESOLVED)

### Affected items (vaikuttavat tavarat)

- Mikäli raportti liittyy tiettyihin tavaroihin (esim. puuttuva tai rikki), voit määrittää ne "Affected items" -osiossa
- Admin voi muokata raporttia ja määrittää, mihin tavaroihin ja kuinka moneen kappaleeseen raportti vaikuttaa. Tavarat eivät ole lainattavissa niin kauan kuin raportti on **Käsittelyssä** (IN_PROGRESS)

---

## 6. Sähköposti-ilmoitukset

- Admin voi ottaa käyttöön viikottaisen muistutuksen bokseissa olevista varauksista
- Admin saa ilmoituksen uusista varauksista, jos ilmoitukset ovat päällä

---

## 7. Ilmoitukset (Announcements)

- Ilmoitukset näkyvät sivulla `/item/announcements`
- Ilmoitukset liittyvät tiettyyn tavaraan ja näkyvät käyttäjille sekä adminille
- Admin voi poistaa ilmoituksen ennen sen vanhentumista ("Poista ilmoitus")
- Ilmoituksella voi olla vanhenemisaika, jonka jälkeen se ei enää näy oletuksena
- Admin voi tarkastella myös vanhentuneita ilmoituksia ("Näytä vanhentuneet ilmoitukset")
- Ilmoitukset ovat hyödyllisiä esimerkiksi huolto-, käyttö- tai varoitusviesteihin

---

## 10. Vinkkejä ja huomioita

- Muista tarkistaa raportit ja palautukset säännöllisesti
- Käytä PIN-koodia admin-oikeuksien nostoon vain tarvittaessa
- Varmista, että tavaroiden tiedot ovat ajan tasalla
- Käyttäjien poistaminen on lopullista – varmista ennen vahvistusta

---

## 11. Tuki ja yhteydenotto

- Ongelmatilanteissa ota yhteyttä järjestelmän ylläpitäjään
- Sähköposti-ilmoitukset tulevat automaattisesti, älä vastaa niihin

---

**Päivitetty: 27.1.2026**

---
