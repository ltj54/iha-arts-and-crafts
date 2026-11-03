"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const contactEmail = "iha.amaza@gmail.com";
const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Jegerveien%204B%2C%200777%20Oslo%2C%20Norway";
const sections = {
  top: "#top",
  works: "#arbeider",
  about: "#om",
  contact: "#kontakt",
} as const;
const copy = {
  no: {
    preview: "Nettsiden er under arbeid · Verk vises etter godkjenning",
    top: "IHA Arts and Crafts – til toppen", menu: "Hovedmeny", works: "Arbeider", about: "Om IHA", contact: "Kontakt",
    oslo: "Oslo, Norge", disciplines: "Maleri / treskulptur", heroFirst: "Maleri.", heroSecond: "Tre.", heroThird: " Oslo.",
    intro: "IHA Arts and Crafts i Oslo arbeider med maleri og kjøp og salg av treskulpturer.", toWorks: "Til arbeidene",
    worksFirst: "Maleri &", worksSecond: "treskulptur.", worksText: "Bilder av malerier og treskulpturer legges inn når Iha har valgt og godkjent dem.",
    painting: "Maleri", sculpture: "Treskulptur", photosSoon: "Bilder kommer",
    aboutText: "IHA Arts and Crafts er et enkeltpersonforetak drevet av Hamisi Kaingu Iha. Virksomheten omfatter malekunst og kjøp og salg av treskulpturer.",
    writeTo: "Skriv til", contactText: "Spør om maleri, treskulpturer eller IHA Arts and Crafts.",
    form: "Meldingsskjema", yourMessage: "Din melding", name: "Navn", nameHint: "Hva heter du?", email: "E-post", emailHint: "din@epost.no",
    message: "Melding", messageHint: "Skriv meldingen din her …", send: "Send melding",
    formNote: "Skjemaet åpnes for innsending når kontakttjenesten er klar. Bruk e-postadressen ved siden av i mellomtiden.",
    org: "Org.nr.", backToTop: "Til toppen",
    findUs: "Finn fram", businessAddress: "Forretningsadresse", directions: "Åpne veibeskrivelse i Google Maps",
  },
  en: {
    preview: "Website in progress · Artwork will appear after approval",
    top: "IHA Arts and Crafts – back to top", menu: "Main navigation", works: "Works", about: "About IHA", contact: "Contact",
    oslo: "Oslo, Norway", disciplines: "Painting / wood sculpture", heroFirst: "Painting.", heroSecond: "Wood.", heroThird: " Oslo.",
    intro: "IHA Arts and Crafts in Oslo works with painting and the buying and selling of wood sculptures.", toWorks: "Explore the works",
    worksFirst: "Painting &", worksSecond: "wood sculpture.", worksText: "Photographs of paintings and wood sculptures will be added once Iha has selected and approved them.",
    painting: "Painting", sculpture: "Wood sculpture", photosSoon: "Photos to come",
    aboutText: "IHA Arts and Crafts is a sole proprietorship run by Hamisi Kaingu Iha. Its activities are painting and the buying and selling of wood sculptures.",
    writeTo: "Write to", contactText: "Ask about paintings, wood sculptures or IHA Arts and Crafts.",
    form: "Contact form", yourMessage: "Your message", name: "Name", nameHint: "Your name", email: "Email", emailHint: "you@example.com",
    message: "Message", messageHint: "Write your message here …", send: "Send message",
    formNote: "The form will accept messages once the contact service is ready. You can use the email address alongside it for now.",
    org: "Org. no.", backToTop: "Back to top",
    findUs: "Find us", businessAddress: "Business address", directions: "Open directions in Google Maps",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<"no" | "en">("no");
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language === "no" ? "nb" : "en";
  }, [language]);

  return (
    <main id="top">
      <div className={styles.preview}>{t.preview}</div>
      <header className={styles.header}>
        <a className={styles.brand} href={sections.top} aria-label={t.top}>IHA<span>.</span><small>Arts and<br />Crafts</small></a>
        <div className={styles.headerActions}>
          <nav aria-label={t.menu}><a href={sections.works}>{t.works}</a><a href={sections.about}>{t.about}</a><a href={sections.contact}>{t.contact} ↗</a></nav>
          <fieldset className={styles.language}>
            <legend className={styles.visuallyHidden}>Language / Språk</legend>
            <button type="button" onClick={() => setLanguage("no")} aria-pressed={language === "no"}>NO</button>
            <span aria-hidden="true">/</span>
            <button type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
          </fieldset>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.topline}><span>{t.oslo}</span><span>{t.disciplines}</span></div>
        <h1 id="hero-title">{t.heroFirst}<br /><em>{t.heroSecond}</em>{t.heroThird}</h1>
        <div className={styles.heroBottom}>
          <p>{t.intro}</p>
          <a href={sections.works}>{t.toWorks} ↘</a>
        </div>
        <div className={styles.stamp} aria-hidden="true">IHA<br />A&amp;C</div>
      </section>

      <section className={styles.works} id="arbeider" aria-labelledby="works-title">
        <div className={styles.sectionHead}>
          <p>{t.works}</p>
          <h2 id="works-title">{t.worksFirst}<br /><em>{t.worksSecond}</em></h2>
          <p>{t.worksText}</p>
        </div>
        <div className={styles.slots}>
          <div className={styles.slot}><span aria-hidden="true">✳</span><div><h3>{t.painting}</h3><p>{t.photosSoon}</p></div></div>
          <div className={styles.slot}><span aria-hidden="true">↗</span><div><h3>{t.sculpture}</h3><p>{t.photosSoon}</p></div></div>
        </div>
      </section>

      <section className={styles.about} id="om" aria-labelledby="about-title">
        <p className={styles.label}>{t.about}</p>
        <div><h2 id="about-title">Hamisi<br />Kaingu <em>Iha.</em></h2>
          <p>{t.aboutText}</p>
        </div>
      </section>

      <section className={styles.contact} id="kontakt" aria-labelledby="contact-title">
        <div className={styles.contactIntro}>
          <p className={styles.label}>{t.contact}</p>
          <h2 id="contact-title">{t.writeTo}<br /><em>Hamisi.</em></h2>
          <p>{t.contactText}</p>
          <a href={`mailto:${contactEmail}`}>{contactEmail} ↗</a>
        </div>
        <form className={styles.form} aria-label={t.form}>
          <div className={styles.formHead}><span>{t.yourMessage}</span><span>↘</span></div>
          <label htmlFor="name">{t.name}</label>
          <input id="name" name="name" type="text" autoComplete="name" placeholder={t.nameHint} required />
          <label htmlFor="email">{t.email}</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder={t.emailHint} required />
          <label htmlFor="message">{t.message}</label>
          <textarea id="message" name="message" rows={5} placeholder={t.messageHint} required />
          <button type="submit" disabled>{t.send} <span aria-hidden="true">↗</span></button>
          <p className={styles.formNote}>{t.formNote}</p>
        </form>
      </section>
      <section className={styles.location} aria-labelledby="location-title">
        <div><p className={styles.label}>{t.businessAddress}</p><h2 id="location-title">{t.findUs}.</h2></div>
        <address>Jegerveien 4B<br />0777 Oslo, Norge</address>
        <a href={directionsUrl} target="_blank" rel="noopener noreferrer">{t.directions} ↗</a>
      </section>
      <footer className={styles.footer}><p>IHA Arts and Crafts</p><p>Oslo · {t.org} 838 750 702</p><a href={sections.top}>{t.backToTop} ↑</a></footer>
    </main>
  );
}
