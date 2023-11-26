Table of contents:

- [Continutul scris](#continutul-scris)
  - [1. Blog](#1-blog)
    - [Linkuri](#linkuri)
    - [Explicatie](#explicatie)
    - [Exemplu](#exemplu)
  - [2. Categorii](#2-categorii)
    - [Linkuri](#linkuri-1)
    - [Explicatie](#explicatie-1)
    - [Exemplu](#exemplu-1)
  - [3. Traduceri (i18n)](#3-traduceri-i18n)
  - [4. Proiecte](#4-proiecte)
    - [Linkuri](#linkuri-2)
    - [Explicatie](#explicatie-2)
    - [Exemplu](#exemplu-2)
  - [5. Testimoniale](#5-testimoniale)
    - [Linkuri](#linkuri-3)
    - [Explicatie](#explicatie-3)
    - [Exemplu](#exemplu-3)
- [Continutul media](#continutul-media)
  - [1. Sponsori](#1-sponsori)
  - [2. Galeriile de pe pagina principala](#2-galeriile-de-pe-pagina-principala)

Site-ul clockworks este orientat pe afisarea si publicarea continutului, fara sa aiba vreo functionalitate prea dinamica. De aceea, sectiunea asta este relevanta pentru mentinerea ordinii si coeziunii in repo.

Continutul nostru este stocat in doua formate, dupa caz: `Markdown`[(Link)](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) si `JSON`[(Link)](https://www.coderstool.com/json-cheat-sheet) pentru text, sau imagini media.

> Rule of thumb: continutul scris e tinut in folderul [`src/content`](https://github.com/Clockworks-RO108/clockworks.ro/tree/master/src/content/), si cel media in [`src/assets`](https://github.com/Clockworks-RO108/clockworks.ro/tree/master/src/assets/)

## Continutul scris

### 1. Blog

#### Linkuri

Folder: [`src/content/blog`](https://github.com/Clockworks-RO108/clockworks.ro/tree/master/src/content/blog)
Template: [`src/content/blog/_model.mdx`](https://github.com/Clockworks-RO108/clockworks.ro/tree/master/src/content/blog/_model.mdx)
Imagini: [`src/content/blog/images`](https://github.com/Clockworks-RO108/clockworks.ro/tree/master/src/content/blog/images)

#### Explicatie

Continutul blogului trebuie tradus in doua limbi, de aceea in folder exista doua alte subfoldere: `en` si `ro`.

Pentru a crea o postare noua, trebuie sa existe in ambele foldere un fisier cu acelasi nume (va rog ca numele fisierului sa fie kebab-case), care sa respecte prima parte a template-ului.

Pentru a adauga o imagine in postare, aceasta trebuie salvata intai in folderul de imagini linkuit mai sus, intr-un folder cu acelasi nume ca postarea(TOT KEBAB-CASE).

#### Exemplu

```bash
.
└── src/content/blog
    ├─── en
    │    └─── postare-no-1.mdx
    ├─── ro
    │    └─── postare-no-1.mdx
    └─── images
         └─── postare-no-1
              ├─── img-1.jpg
              └─── img-2.png
```

### 2. Categorii

#### Linkuri

Folder: [`src/content/categories`](https://github.com/Clockworks-RO108/clockworks.ro/tree/master/src/content/categories)
Template: [`src/content/categories/_model.mdx`](https://github.com/Clockworks-RO108/clockworks.ro/tree/master/src/content/categories/_model.json)

#### Explicatie

Pentru a crea o categorie noua, trebuie sa existe in folderul linkuit mai sus un nou fisier (va rog ca numele fisierului sa fie kebab-case), care sa respecte template-ul.

Pentru a traduce numele categoriei in engleza si romana, in traduceri ar trebui sa existe cate o linie de forma:

```json
{
  // alt continut de mai sus
  "categories.nume-categorie": "Label"
}
```

#### Exemplu

Foldere:

```bash
.
└── src/content
    ├── i18n
    │   ├── en.json
    │   └── ro.json
    └── categories
        └─── new-category.json
```

Fisiere:

```json
// src/content/categories/new-category.json

{
  "slug": "new-category" //doar copiezi numele fisierului
}
```

```json
// src/content/i18n/ro.json
{
  "foo.fighters": "Ceva in romana",

  "categories.new-category": "Numele categoriei noi"
}
```

```json
// src/content/i18n/en.json
{
  "foo.fighters": "Something in english",

  "categories.new-category": "Name of the new category"
}
```

### 3. Traduceri (i18n)

Citeste te rog la [docs/03-traduceri](https://github.com/Clockworks-RO108/clockworks.ro/wiki/03.-Traduceri)

### 4. Proiecte

#### Linkuri

Folder: [`src/content/projects`](https://github.com/Clockworks-RO108/clockworks.ro/tree/master/src/content/projects)
Template: [`src/content/projects/_model.mdx`](https://github.com/Clockworks-RO108/clockworks.ro/tree/master/src/content/projects/_model.mdx)
Imagini: [`src/content/projects/images`](https://github.com/Clockworks-RO108/clockworks.ro/tree/master/src/content/projects/images)

#### Explicatie

Continutul proiectelor trebuie tradus in doua limbi, de aceea in folder exista doua alte subfoldere: `en` si `ro`.

Pentru a crea un proiect nou, trebuie sa existe in ambele foldere un fisier cu acelasi nume (va rog ca numele fisierului sa fie kebab-case), care sa respecte prima parte a template-ului.

Pentru a adauga o imagine in proiect, aceasta trebuie salvata intai in folderul de imagini linkuit mai sus, intr-un folder cu acelasi nume ca postarea(TOT KEBAB-CASE).

#### Exemplu

```bash
.
└── src/content/project
    ├─── en
    │    └─── project-no-1.mdx
    ├─── ro
    │    └─── project-no-1.mdx
    └─── images
         └─── project-no-1
              ├─── img-1.jpg
              └─── img-2.png
```

### 5. Testimoniale

#### Linkuri

Folder: [`src/content/testimonials`](https://github.com/Clockworks-RO108/clockworks.ro/tree/master/src/content/testimonials)
Template: [`src/content/testimonials/_model.mdx`](https://github.com/Clockworks-RO108/clockworks.ro/tree/master/src/content/testimonials/_model.json)
Imagini: [`src/content/testimonials/images`](https://github.com/Clockworks-RO108/clockworks.ro/tree/master/src/content/testimonials/images)

#### Explicatie

Pentru a crea un testimonial nou, trebuie sa existe in folderul linkuit mai sus un nou fisier (va rog ca numele fisierului sa fie kebab-case), care sa respecte template-ul.

Daca vreti ca autorul testimonialului sa aiba o fotografie, ea trebuie pusa in folderul de imagini linkuit mai sus.

#### Exemplu

Foldere:

```bash
.
└── src/content
    └── testimonials
        ├─── images
        │    └─── optional-image.png
        └─── new-testimonial.json
```

## Continutul media

Continutul media este stocat in `/assets`, fiind o conventie pentru ca `Astro` sa poata gasii imaginile si sa le optimizeze.

### 1. Sponsori

Locatie: [`src/assets/about/sponsors`](https://github.com/Clockworks-RO108/clockworks.ro/tree/master/src/assets/about/sponsors)

### 2. Galeriile de pe pagina principala

Locatie: [`src/assets/galleries/section-[3/4]`](https://github.com/Clockworks-RO108/clockworks.ro/tree/master/src/assets/galleries/)
