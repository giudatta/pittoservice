# PittoService — Sito Web Completo

## Struttura del sito (12 pagine)

```
pittoservice/
├── index.html                    ← Homepage
├── portfolio.html                ← Portfolio lavori
├── chi-siamo.html                ← Chi siamo
├── css/style.css                 ← Stili condivisi
├── js/main.js                    ← Script condivisi
├── servizi/
│   ├── imbiancatura.html
│   ├── ristrutturazioni.html
│   ├── idraulica.html
│   ├── manutenzioni.html
│   └── arredo-ferro.html
└── blog/
    ├── index.html
    ├── come-scegliere-colore-imbiancatura.html
    ├── cosa-fare-perdita-acqua-urgente.html
    └── quanto-costa-ristrutturazione-casa-milano.html
```

---

## Deploy consigliato: Netlify (gratuito)

1. Vai su https://netlify.com e crea un account gratuito
2. Trascina l'intera cartella `pittoservice/` sulla dashboard
3. Il sito va online in meno di 30 secondi
4. Puoi collegare il tuo dominio `pittoservice.it` nelle impostazioni DNS

---

## Come aggiungere le foto dei lavori

### Hero pages (ogni pagina servizio)
Trova il div con class `hero-visual` e sostituisci il contenuto:
```html
<!-- PRIMA -->
<div class="hero-visual">
  <div class="hero-visual-placeholder">🎨</div>
</div>

<!-- DOPO -->
<div class="hero-visual">
  <img src="../img/imbiancatura-appartamento.jpg" 
       alt="Imbiancatura professionale Milano" 
       width="600" height="400" loading="lazy">
</div>
```

### Portfolio grid
Trova ogni `.portfolio-item` e sostituisci il placeholder:
```html
<!-- PRIMA -->
<div class="portfolio-item" data-cat="imbiancatura">
  <div class="portfolio-placeholder">...</div>

<!-- DOPO -->
<div class="portfolio-item" data-cat="imbiancatura">
  <img src="img/lavoro-01.jpg" alt="Imbiancatura Milano Navigli" loading="lazy">
```

### Cartella consigliata per le immagini
Crea una cartella `img/` nella root del sito e carica tutte le foto lì.

---

## SEO — Cosa è già implementato

- ✅ Title tag unico per ogni pagina con keyword + città
- ✅ Meta description ottimizzata su ogni pagina
- ✅ Schema markup JSON-LD (LocalBusiness + FAQPage su ogni servizio)
- ✅ Breadcrumb schema per le pagine servizio
- ✅ Sitemap manuale tramite link interni
- ✅ Gerarchia H1 → H2 → H3 corretta
- ✅ Open Graph per social sharing
- ✅ Link canonici su ogni pagina

## SEO — Cosa fare dopo il deploy

1. **Google Search Console** — Aggiungi il sito e invia la sitemap
2. **Google My Business** — Crea/ottimizza il profilo con:
   - Foto lavori
   - Orari aggiornati
   - Risposta alle recensioni
3. **Sitemap.xml** — Crea un file `sitemap.xml` nella root
4. **Acquisisci backlink** — Registra PittoService su:
   - PagineGialle.it
   - Habitissimo.it
   - Trovaprezzi lavori
   - Edilizia Network

---

## Form contatti

Attualmente il form usa `mailto:` (apre il client email).
Per un form che invia direttamente via web, usa uno di questi servizi gratuiti:
- **Formspree** (formspree.io) — Sostituisci `action="mailto:..."` con `action="https://formspree.io/f/TUOID"`
- **Netlify Forms** — Aggiungi `netlify` come attributo al tag form se deploji su Netlify

---

## Contatti nel codice

Numero telefono: `351 576 6753` (cerca e sostituisci se cambia)
Email: `pittoniluca93@gmail.com`
WhatsApp: `393515766753` (formato internazionale senza +)
Instagram: `@Pittoservice`
