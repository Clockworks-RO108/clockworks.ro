---
data: 18-07-2023
---

# Decizii tehnice 101 - 02. Structura proiectului

- [Decizii tehnice 101 - 02. Structura proiectului](#decizii-tehnice-101---02-structura-proiectului)
  - [Structura generala](#structura-generala)
  - [`Feature folders`](#feature-folders)
    - [1. TL;DR](#1-tldr)
    - [2. Folderul radacina](#2-folderul-radacina)
    - [3. Fisierul radacina](#3-fisierul-radacina)
    - [4. Alte foldere/fisiere "private"](#4-alte-folderefisiere-private)

## Structura generala

```bash
.
├── docs
├── public
├── src
│   ├── assets
│   ├── components
│   ├── content
│   │   └── i18n
│   ├── lib
│   │   ├── i18n
│   │   └── site-info.ts
│   ├── pages
│   │   └── [lang]
│   │       ├── [...blog]
│   │       └── [...index]
│   │           ├── _01
│   │           │   └── section.astro
│   │           ├── _02
│   │           │   └── section.astro
│   │           ├── _03
│   │           │   └── section.astro
│   │           ├── _04
│   │           │   └── section.astro
│   │           ├── _05
│   │           │   └── section.astro
│   │           ├── _06
│   │           │   └── section.astro
│   │           └── index.astro
│   └── styles
├── astro.config.mjs
├── components.json
├── package.json
├── tailwind.config.cjs
└── tsconfig.json
```

Legenda:

- [`docs`](/docs): documentatia pentru a parcurge tot site-ul cu succes:))
- [`public`](/public): asseturi publice(favicon, robots.txt)
- [`src`](/src): folderul in care se afla codul sursa
  - [`src/assets`](/src/assets): asseturi media optimizate de `Astro`; sunt grupate in foldere dupa sectiunea in care apar
  - [`src/components`](/src/components): componente generice care nu sunt specifice pentru o sectiune anume(butoane, carduri, layouts)
  - [`src/content`](/src/content): folderul in care este organizat continutul site-ului(traduceri, blog posts etc...)
    - [`src/content/i18n`](/src/content/i18n): traducerile
    - more to come...
  - [`src/lib`](/src/lib): feature-uri care adauga functionalitate, functii pentru utilitate(ex: traduceri, site-info, etc...)
    - [`src/lib/i18n`](/src/lib/i18n): implementarea functionalitatii de traduceri
    - [`src/lib/site-info`](/src/lib/site-info.ts): aici se gasesc mai multe informatii de baza despre site(titlu, descriere, liba de baza, linkuri de social media, linkuri de navigare)
  - [`src/pages`](/src/pages): paginile care sunt afisate pe site
    - [`src/pages/[lang]`](/src/pages/[lang]): folderul radacina sub care trebuie sa stea toate rutele pentru a fi traduse
      - [`src/pages/[lang]/[...blog]`](/src/pages/[lang]/[...blog]): pagina de blog
        - [`src/pages/[lang]/[...blog]/blog.astro`](/src/pages/[lang]/[...blog]/blog.astro): pagina principala in care sunt afisate toate articolele
      - [`src/pages/[lang]/[...index]`](/src/pages/[lang]/[...index]/): pagina principala, care este impartita pe sectiuni
        - `src/pages/[lang]/[...index]/[_01 -> _06]`: folderele care corespund fiecarei sectiuni din pagina principala
          - `src/pages/[lang]/[...index]/[_01 -> _06]/section.astro`: sectiunea in sine care va aparea pe pagina; orice alt fisier din folder este pentru organizare
        - [`src/pages/[lang]/[...index]/index.astro`](/src/pages/[lang]/[...index]/index.astro): pagina principala in sine care afiseaza fiecare sectiune
  - [`src/styles`](/src/styles/): aici se gasesc fisierele de css
- [`astro.config.mjs`](/astro.config.mjs): fisierul de configurare pentru `Astro`
- [`components.json`](/components.json): fisierul de configurare pentru `Shadcn UI`
- [`package.json`](/package.json): fisierul de configurare pentru proiect, scripturi, package management
- [`tailwind.config.cjs`](/tailwind.config.cjs): fisierul de configurare pentru `Tailwind CSS`
- [`tsconfig.json`](/tsconfig.json): fisierul de configurare pentru `Typescript`

> ### Atentie!
>
> Nici o ruta nou creata nu trebuie sa existe in afara folderului [`src/pages/[lang]`](../src/pages/[lang])

## `Feature folders`

O pagina pentru site contine mai multe sectiuni care nu au vreo corelare intre ele, alta decat ca apar sub acelasi url. Daca toate ar fi definite in acelasi fisier, fara sa fie separate in vreun fel, acesta ar ajunge monstruos de mare si de greu de modificat in vreun fel. De aceea am ales ca fiecare pagina sa fie cat mai granulara cu putiinta, pentru a fi usor de manageriat codul, dar si de inteles structura in sine.

Functionalitatea de `feature folder` e folosita in special pentru afisarea paginilor website-ului(folderul [`/src/pages`](/src/pages/)), care au destul de multe sectiuni, componente care sunt specifice (nu sunt folosite in alt loc) si care sunt impartite in mai multe sectiuni care nu au vreo legatura intre ele.

Un `feature folder` este un folder care contine tot codul care este specific pentru acel feature (care nu mai este folosit in alt loc). Pentru ca gruparea dupa feature sa fie posibila, este nevoie de o conventie anume pentru ca "`File based routing`"-ul sa poata afisa paginile asa cum trebuie.

### 1. TL;DR

Pentru a crea o pagina noua, care e suficient de mare incat sa fie sparta in mai multe sectiuni pentru a fi inteligibila(cum e pagina `index`(principala)), trebuie sa respecte sintaxa:

```bash
src/pages
└── [...{feature}]
    ├── _folder-privat
    │   └── fisier-privat.*
    ├── _fisier-privat.*
    └── {feature}.astro
```

Legenda:

- {feature}: numele featureului implementat
- \_folder-privat: un folder al carui continut nu constituie o ruta de url
- \_fisier-privat.\* sau \_folder-privat/fisier-privat.\*: orice fisier care nu este o ruta pentru url; poate fi de orice format(unde \* poate fi orice, ex: .astro, .ts, .tsx, .json, .md, .mdx, etc)

### 2. Folderul radacina<br>

Numele acestui folder semnifica o sectiune, o functionalitate(exemplu: blog, index, about...)
<br><br>

> Folderul are o sintaxa specifica:<br> > `[...{nume-folder}]`
> care trebuie respectata intrutocmai!!!

### 3. Fisierul radacina<br>

Daca folderul `[...{nume}]` reprezinta un grup de rute care au legatura intre ele(deci nu creeaza o ruta de url noua), fisierul `[...{nume}]/{nume}.astro` reprezinta pagina in sine care ar fi accesata la acea ruta, si este obligatoriu sa existe.

### 4. Alte foldere/fisiere "private"

Pentru ca functionalitatea de `Feature folders` sa aiba vreo utilitate, ea trebuie sa faca publica doar o ruta de url, iar restul codului sa fie inaccesibil din orice alt loc in afara de interiorul folderului. Pentru ca aceasta sa fie posibila, orice fisier/folder "privat" trebuie sa fie prefixat cu "`_`"
pentru a fi ignorat de `file-based routing`.

> Daca un folder este prefixat cu "`_`", atunci orice fisier din interiorul folderului este privat si nu trebuie prefixat la randul sau.
