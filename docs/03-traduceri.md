---
data: 18-07-2023
---

# Decizii tehnice 101 - 03. Traduceri

Table of contents:

- [Decizii tehnice 101 - 03. Traduceri](#decizii-tehnice-101---03-traduceri)
  - [Decizii](#decizii)
    - [`Content collections`](#content-collections)
    - [`File based routing`](#file-based-routing)
    - ["Sursa unica de adevar"](#sursa-unica-de-adevar)
      - [Exemplu](#exemplu)
  - [Configurarea unei noi pagini](#configurarea-unei-noi-pagini)
    - [Conventii pentru fisierele cu traduceri](#conventii-pentru-fisierele-cu-traduceri)
    - [Folosirea traducerilor](#folosirea-traducerilor)
      - [Exemplu](#exemplu-1)

Unul dintre requirement-urile pentru acest site a fost ca el sa fie disponibil in limba engleza, dar si in romana. Pentru a nu fi nevoie ca orice pagina predefinita (adica nu cele din blog) sa fie scrisa de 2 ori, dar cu un continut diferit, am decis sa managariez continutul independent de prezentarea acestuia.

Procesul de traducere(internationalization) are o prescurtare `i18n` din motive care imi sunt exterioare mie:))

Traducerile se gasesc in folderul [`src/content/i18n`](../src/content/i18n/) in format json.

Codul sursa care se ocupa cu acestea se gaseste in folderul [`src/lib/i18n`](../src/lib/i18n/).

## Decizii

### `Content collections`

M-am folosit de acest feature oferit de `Astro` pentru a manageria textele, fiind foarte usor de folosit in cadrul aplicatiei odata ce se specifica sursa traducerilor.

### `File based routing`

Astro se foloseste de conceptul de file based routing, adica fiecare fisier/folder din `src/pages` este o ruta a site-ului, in mod asemanator cu modul in care functioneaza fisierele html. Pentru a nu dubla codul necesar pentru pagini, acestea sunt incarcate dinamic in functie de limba curenta (aceasta e reprezentata in url de segmentul `lang` care poate avea valoarea `ro` sau `en`). Pentru ca este necesar ca toate routele si parametrii dinamici sa fie cunoscute in timpul compilarii, in paginile noastre trebuie specificat cum sa le construiasca ([citeste mai mult](#configurarea-unei-noi-pagini)).

### "Sursa unica de adevar"

Traducerile respecta o schema predefinita, care trebuie sa corespunda pentru ambele limbi, engleza si romana. Am ales ca schema originala sa fie cea in romana, iar daca orice alta schema nu corespunde in exactitate, atunci ar aparea o eroare, care specifica textul lipsa din schema.

#### Exemplu

```json
// ro.json

{
  "page.title": "titlul paginii",
  "page.subtitle": "subtitlul paginii"
}
```

```json
// en.json

{
  "page.title": "page title"
  // subtitlul lipseste
}
```

Cand cele doua scheme nu corespund, se va afisa acest mesaj in consola si in site:

```
 error   Translations are different! `en.json` is missing content:
    - page.subtitle

    Please check the files in `src/content/i18n` for differences
```

Mesajul cuprinde o lista cu toate elementele ce lipsesc din traduceri, care trebuie adaugate pentru ca site-ul sa fie functional.

## Configurarea unei noi pagini

Pentru ca `Astro` sa stie la timpul compilarii toate rutele create dinamic, este nevoie ca acestea sa fie specificate prin functia exportata `getStaticPaths`.

> Orice ruta de forma `/[ceva]/**` este una dinamica, iar paramtetrul dintre `[]` desemneaza variabila dupa care se construieste url-ul in mod dinamic

```astro
---
// [lang]/some-page.astro
// pagina ar corespunse unei rute de forma "en/some-page" sau "ro/some-page"

import { generateStaticPaths } from "~/lib/i18n"; //!!!

export const getStaticPaths = generateStaticPaths; //!!!
---

<!-- Continutul paginii -->
```

**In cazul in care orice ruta nu contine codul de mai sus, va aparea o eroare**:

```
 error   `getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.
```

### Conventii pentru fisierele cu traduceri

Formatul fisierelor care contin traduceri este de tip `json`, ele fiind pastrate sub forma de perechi `key-value`.
Cheile ar trebui sa respecte o conventie de nume specifica, pentru a pastra fisierul organizat si pentru a corela mai usor continutul tradus cu sectiunea in care apare.

> Formatul este `{namespace}.{sub-namespace(optional)}.{key}`.
> <br>
> ex: `index.landing.subtitle` ->
> <br> textul apare in pagina principala(index), in sectiunea de landing, continutul este subtitlul sectiunii

Legenda:

- `namespace`: componentul/sectiunea/locul in care acel text apare in site (ex: de mai sus `index` adica acel text apare pe pagina principala(index)).
- `sub-namespace`: (<u>optional</u>) subdiviziunea in care continutul apare (ex: de mai sus `landing` confera un scope mai explicit traducerii si poti sa iti dai seama mai usor unde este localizata in pagina).
- `key`: desemneaza cheia dupa care este identificat continutul(ex: de mai sus `subtitle`, adica (obvious) continutul este subtitlul paginii)

### Folosirea traducerilor

> ### Atentie!!!
>
> traducerile pot fi folosite doar in fisierele de tip "`*.astro`"; folosirea in orice alt loc va arunca o eroare!!

Pentru a folosi traducerile, este necesara invocarea functiei `useTranslations`, importata din modulul "`~/lib`". Apelul functiei `useTranslations` returneaza la randul sau o functie prin care se poate accesa continutul unei traduceri pe baza unei chei(O conventie este asignarea functiei in variabila "`t`" de la `translations`).

#### Exemplu

```astro
---
import { useTranslations } from "~/lib";

const t = useTranslations();
---

<!-- ⬇️ prin invocarea de acest tip se acceseaza titlul unei pagini -->
<h1>{t("page.title")}</h1>
```

> ### Atentie!!!
>
> Apelul functiei permite auto-completarea cheilor de catre IDE(editor) si va semnala o eroare daca accesezi o cheie inexistenta.
