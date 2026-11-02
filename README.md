# IHA Arts and Crafts

Første, uforpliktende nettsideskisse for IHA Arts and Crafts. Prosjektet presenterer en mulig retning for maleri og treskulptur uten å fylle inn ukjente verkstitler, priser eller kundehistorier.

## Teknologi

- Next.js 16, React 19 og TypeScript
- Vanlig CSS uten komponentbibliotek
- Statisk eksport for GitHub Pages
- ESLint for kodekontroll

## Lokal utvikling

```powershell
npm install
npm run dev
```

Åpne `http://localhost:3000`.

## Kontroll og bygg

```powershell
npm run lint
npm run build
```

Produksjonsbygget eksporteres til `out/`.

## Publisering

Planlagt repository: `https://github.com/ltj54/iha-arts-and-crafts`

GitHub Actions bygger og publiserer til GitHub Pages etter en bevisst push til `main`. Den første publiseringen inngår i opprettelsen av prosjektet. Senere endringer skal ikke committes eller pushes før Lars uttrykkelig ber om det.

Offentlig forhåndsvisning er en skisse, ikke en bestilling eller endelig leveranse. Kundens faktiske bilder, verkstitler, priser, domene, drift og eventuelle funksjoner må avklares før ferdigstilling.

## Prosjektfiler

- `src/app/` – nettsiden og utformingen
- `KRAVSPESIFIKASJON.md` – bekreftede opplysninger, forslag og åpne spørsmål
- `AVTALEUTKAST_NETTSIDE_OG_DRIFT.md` – internt avtaleutkast
- `.github/workflows/deploy-pages.yml` – kontrollert GitHub Pages-bygg
