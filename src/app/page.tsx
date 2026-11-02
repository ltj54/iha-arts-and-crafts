import styles from "./page.module.css";

const contactEmail = "iha.amaza@gmail.com";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className={styles.previewNote}>
        Første nettsideskisse · Bilder, verkstitler og tekster avklares før publisering
      </div>

      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="IHA Arts and Crafts – til toppen">
          <span>IHA</span>
          <span>Arts &amp; Crafts</span>
        </a>
        <nav aria-label="Hovedmeny">
          <a href="#arbeider">Arbeider</a>
          <a href="#om">Om</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Maleri · Treskulptur · Oslo</p>
          <h1>Kunst med spor av hånd og materiale.</h1>
          <p className={styles.lead}>
            Et sted for å oppdage maleri og treskulptur – og for å spørre om arbeider som er
            tilgjengelige.
          </p>
          <a className={styles.textLink} href="#arbeider">
            Se retningen for galleriet <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className={styles.heroComposition} aria-label="Visuell plassholder for utvalgte kunstverk">
          <div className={styles.canvasOne} aria-hidden="true" />
          <div className={styles.canvasTwo} aria-hidden="true" />
          <div className={styles.sculpture} aria-hidden="true" />
          <p>Utvalgte verk får hovedplassen her.</p>
        </div>
      </section>

      <section className={styles.gallery} id="arbeider" aria-labelledby="gallery-title">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionNumber}>01</p>
          <div>
            <h2 id="gallery-title">Arbeider</h2>
            <p>
              En enkel galleristruktur som lar hvert arbeid få ro. Når bildene er klare, kan hvert
              verk vises med tittel, materiale, mål og tilgjengelighet.
            </p>
          </div>
        </div>

        <div className={styles.workGrid}>
          <article className={`${styles.workCard} ${styles.paintingCard}`}>
            <div className={styles.paintingStudy} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className={styles.workMeta}>
              <h3>Maleri</h3>
              <p>Originalarbeider presentert uten støy rundt.</p>
            </div>
          </article>

          <article className={`${styles.workCard} ${styles.woodCard}`}>
            <div className={styles.woodStudy} aria-hidden="true">
              <span />
            </div>
            <div className={styles.workMeta}>
              <h3>Treskulptur</h3>
              <p>Form, overflate og detalj vist fra flere vinkler.</p>
            </div>
          </article>

          <article className={`${styles.workCard} ${styles.detailCard}`}>
            <div>
              <p className={styles.smallLabel}>For hvert arbeid</p>
              <h3>Det besøkende faktisk trenger å vite.</h3>
            </div>
            <ul>
              <li>Tittel og materiale</li>
              <li>Størrelse og årstall</li>
              <li>Pris eller forespørsel</li>
              <li>Henting eller levering</li>
            </ul>
          </article>
        </div>
      </section>

      <section className={styles.about} id="om" aria-labelledby="about-title">
        <p className={styles.sectionNumber}>02</p>
        <div className={styles.aboutTitle}>
          <p className={styles.eyebrow}>IHA Arts and Crafts</p>
          <h2 id="about-title">Et lite kunststed i Oslo.</h2>
        </div>
        <div className={styles.aboutCopy}>
          <p>
            IHA Arts and Crafts arbeider med maleri og kjøp og salg av treskulpturer. Nettsiden kan
            bli et oversiktlig sted for å presentere arbeidene, fortelle mer om bakgrunnen deres og
            gjøre det enkelt å ta kontakt.
          </p>
          <p>
            Før siden ferdigstilles, velges bilder og verk sammen med Hamisi. Da kan uttrykket
            bygges rundt den faktiske kunsten – ikke rundt en ferdig mal.
          </p>
        </div>
      </section>

      <section className={styles.contact} id="kontakt" aria-labelledby="contact-title">
        <div>
          <p className={styles.sectionNumber}>03</p>
          <p className={styles.eyebrow}>Kontakt</p>
          <h2 id="contact-title">Spør om et arbeid.</h2>
        </div>
        <div className={styles.contactDetails}>
          <p>
            For spørsmål om maleri, treskulpturer eller tilgjengelige arbeider kan du kontakte
            Hamisi direkte.
          </p>
          <a className={styles.contactButton} href={`mailto:${contactEmail}`}>
            Send e-post <Arrow />
          </a>
          <div className={styles.directContact}>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a href="tel:+4793873400">+47 938 73 400</a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>IHA Arts and Crafts</p>
        <p>Oslo · Org.nr. 838 750 702</p>
        <a href="#top">Til toppen ↑</a>
      </footer>
    </main>
  );
}
