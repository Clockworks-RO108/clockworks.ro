---
data: 18-07-2023
---

# Decizii tehnice 101 - 01. Tech stack

- [Decizii tehnice 101 - 01. Tech stack](#decizii-tehnice-101---01-tech-stack)
  - [Overview](#overview)
  - [Motivatii](#motivatii)
    - [`Astro`](#astro)
    - [`React`](#react)
    - [`Tailwind CSS`](#tailwind-css)
    - [`Typescript`](#typescript)
    - [`Shadcn UI`](#shadcn-ui)

## Overview

Tech stack-ul ales pentru site-ul clockworks este urmatorul:

- [Astro](https://astro.build/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Shadcn UI](https://ui.shadcn.com/)

## Motivatii

### `Astro`

`Astro` este un web framework creat pentru site-uri statice si aplicatii web, in special orientate pe continut si redactarea acestuia. Site-ul Clockworks este unul de prezentare a echipei, care trebuie sa fie usor de utilizat de catre aceasta si
de modifiat. Continutul nostru este static, si de aceea `Astro` este perfect pentru noi.

**De ce `Astro`**? [Aici](https://docs.astro.build/en/concepts/why-astro/) sunt cateva idei care sunt fundamentale pentru orientarea acestui framework.

Alte feature-uri foarte nice care m-au facut sa il aleg sunt:

1. interoperabilitatea foarte facila cu alte tehnologii de front-end [Link](https://docs.astro.build/en/guides/integrations-guide/)
2. redactarea foarte naturala si usor de integrat a continutului in format md, mdx sau markdoc [Link](https://docs.astro.build/en/guides/content-collections/)
3. `File-based routing` [Link](https://docs.astro.build/en/core-concepts/routing/)
4. optimizarea in timpul compilarii a continutului media [Link](https://docs.astro.build/en/guides/assets/)
5. `Astro` faciliteaza reducerea bundle-ului de javascript, ceea ce duce la imbunatatirea performantei paginii [Link](https://docs.astro.build/en/concepts/why-astro/#fast-by-default)

### `React`

`React` este cel mai folosit framework pentru crearea elementelor de front-end, avand un ecosistem vast in jurul sau.
Conceptul principal dupa care se ghideaza este impartirea paginilor in componente independente, cat mai modulare, care sa se ocupe cu afisarea unui element specific de pe pagina. Fragmentarea unei paginii in bucati cat mai mici si independente duce la o coerenta mai buna a aspectului paginii noastre si la refolosirea codului.

Caracteristicile și conceptele cheie ale React includ:

1. Componente: React permite dezvoltatorilor să construiască interfețe complexe prin împărțirea acestora în componente reutilizabile și independente. Aceste componente pot fi apoi asamblate pentru a forma interfețele complexe ale aplicației.

2. Reconciliere virtuală: React utilizează un "DOM virtual" pentru a efectua schimbările în interfața utilizator în mod eficient. Aceasta înseamnă că, în loc să actualizeze direct DOM-ul browser-ului, React efectuează schimbări într-un copil virtual al DOM-ului și apoi le compară cu copilul real, actualizând doar elementele care diferă. Această reconciliere virtuală face React să fie foarte rapid și eficient.

3. Unidirectional Data Flow: Fluxul de date în React urmează o abordare unidirecțională, ceea ce înseamnă că datele se deplasează într-o singură direcție, de la componentele părinte către cele copil. Acest lucru face gestionarea stării aplicației mai ușoară și mai previzibilă.

4. JSX (JavaScript XML): React folosește JSX, o extensie a limbajului JavaScript, care permite integrarea directă a codului HTML-like în codul JavaScript. Acest lucru face crearea de componente mai intuitivă și ușoară, combinând logica de afișare cu codul funcțional.

5. Comunitate puternică: React are o comunitate vastă și activă de dezvoltatori care contribuie cu biblioteci, componente și resurse pentru a sprijini dezvoltarea aplicațiilor React.

React a devenit extrem de popular datorită performanței sale excelente, arhitecturii bine gândite și ecosistemului bogat de biblioteci și resurse. Este folosit în mod extensiv în industria dezvoltării web pentru a construi aplicații web interactive și scalabile.

### `Tailwind CSS`

`Tailwind CSS` este un framework CSS extrem de popular și în rapidă creștere. Acesta utilizează o abordare utilitară, având ca scop facilitarea și eficientizarea construirii interfețelor utilizator prin furnizarea unui set de clase utilitare care pot fi aplicate direct elementelor HTML pentru a le stiliza.

Iată câteva puncte cheie despre Tailwind CSS:

1. Abordare utilitară: Tailwind CSS adoptă o metodă utilitară, oferind o gamă largă de clase mici, fiecare responsabilă de o proprietate CSS specifică. De exemplu, clasele precum `bg-blue-500` pot seta culoarea de fundal la o nuanță de albastru, iar `text-xl` poate fi folosit pentru a seta dimensiunea fontului ca fiind foarte mare (extra-large).

2. Personalizabil: Spre deosebire de alte framework-uri CSS care vin cu stiluri și componente predefinite, `Tailwind CSS` permite dezvoltatorilor să personalizeze design-ul prin configurarea culorilor, fonturilor, spațierilor și altele, prin intermediul unui fișier de configurare.

3. Flexibilitate: Deoarece `Tailwind CSS` se bazează pe clase utilitare individuale, dezvoltatorii au flexibilitatea să le mixeze și asocieze pentru a crea design-uri unice, fără a fi necesară scrierea de CSS personalizat. Această abordare poate duce la fișiere CSS mai eficiente și mai mici în comparație cu framework-urile tradiționale.

4. Prietenos cu componente: Deși `Tailwind CSS` se concentrează pe clase utilitare, acesta nu împiedică utilizarea de componente reutilizabile. Dezvoltatorii pot crea propriile componente și pot folosi clasele `Tailwind CSS` în cadrul lor pentru a construi interfețe mai complexe.

5. Design responsiv: `Tailwind CSS` oferă clase utilitare responsive integrate, care permit dezvoltatorilor să creeze cu ușurință aspecte responsive pentru diferite dimensiuni de ecran și dispozitive.

6. Comunitate activă: Până în 2021, `Tailwind CSS` câștigase o popularitate semnificativă și avea o comunitate dinamică care contribuia la dezvoltarea sa, oferea suport și împărtășea extensii și plugin-uri.

### `Typescript`

`TypeScript` este un limbaj de programare open-source dezvoltat de Microsoft. Acesta reprezintă o extensie a limbajului JavaScript și adaugă funcționalități de tipizare statică și alte caracteristici avansate la sintaxa JavaScript existentă.

Principalele caracteristici ale `TypeScript` includ:

1. Tipizare statică (static typing): O diferență majoră între `TypeScript` și JavaScript este că `TypeScript` permite specificarea tipurilor de date pentru variabile, parametri de funcții și valori de returnare. Aceasta înseamnă că dezvoltatorii pot defini clar și în mod explicit tipurile de date așteptate în cod, facilitând detectarea erorilor în timpul dezvoltării și îmbunătățind înțelegerea codului.

2. Caracteristici avansate ale ECMAScript: `TypeScript` oferă suport pentru ultimele caracteristici ale standardului ECMAScript (ES), ceea ce înseamnă că dezvoltatorii pot utiliza funcționalități moderne ale limbajului, chiar dacă browser-urile nu le susțin încă pe deplin.

3. Compatibilitate cu JavaScript: Codul JavaScript existent poate fi inclus și utilizat în proiectele `TypeScript` fără probleme, deoarece `TypeScript` este un superset al JavaScript-ului. Aceasta înseamnă că dezvoltatorii pot treptat să adauge tipizare în codul lor fără a schimba în mod radical arhitectura existentă.

4. Instrumente de dezvoltare: `TypeScript` vine cu instrumente puternice de dezvoltare, cum ar fi transpilerul care convertește codul `TypeScript` în JavaScript, astfel încât să poată fi executat în browsere sau medii de execuție JavaScript.

`TypeScript` este folosit pe scară largă în dezvoltarea de aplicații web, aplicații mobile, aplicații desktop și în alte proiecte de programare. Acesta oferă o experiență de dezvoltare mai robustă și mai sigură în comparație cu JavaScript, deoarece ajută la identificarea mai rapidă a erorilor și la crearea de cod mai structurat și mai ușor de întreținut.

### `Shadcn UI`

`Shadcn UI` este o librarie de componente `React` + `Tailwind CSS` + `Typescript` foarte bine realizata, care dispune de mai multe componente create special pentru a fi usor customizabile, codul sursa fiind importat direct.

Am ales sa folosesc o librarie de componente, deoarece este inutil sa "reinventez roata" si sa fac de la 0 ceea ce altii au facut deja (si mult mai bine decat mine).

Fiind usor de customizat, am aplicat styling-ul de care avem nevoie, incat sa nu disrupa estetica site-ului nostru.
