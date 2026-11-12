# Mensch und Land – Tollensetaler Stimme (`mensch-und-land.de`)

Statisches Gesamtarchiv von **Mensch und Land** (`mensch-und-land.de` / *Tollensetaler Stimme*), überführt aus der früheren WordPress- und phpBB-Installation (`mensch_und_land_de`) in wartungsfreies HTML, CSS und JavaScript.

## Inhalt
- **76 Ausgaben der *Tollensetaler Stimme* (August 2009 – August 2026)** als PDF inkl. Cover (`assets/pdfs/` & `assets/covers/`)
- **7 ergänzende Dokumente** (Masterplan, Stellungnahmen, Genehmigungsbescheid, Offener Brief unter `assets/docs/`)
- **56 Themenseiten** unter ihren ursprünglichen URLs (z. B. `/aktuelle-ausgabe/`, `/schlossanlage-brock/`, `/mahnwache/`, `/infoarchiv/`) sowie die Gesamtübersicht unter `themen/index.html`
- **21 Blogbeiträge (2018–2021)** unter `beitraege/index.html` und ihren jeweiligen Slugs
- **163 historische Termine** unter `termine/index.html`
- **Statisches Forum-Archiv (`ade/`, 2013–2018)** mit allen Themen, Beiträgen und Dateianhängen unter `ade/index.html`

## Lokale Vorschau
```bash
python -m http.server 8000
```
Anschließend im Browser öffnen: `http://localhost:8000`

## Deployment (Strato / GitHub Pages)
Da keine Datenbank und kein PHP benötigt werden, genügt es, den Inhalt dieses Ordners (ohne `.git/`, `archive_mensch_und_land/` und `prototype.zip`) per FTP/SFTP auf den Webspace hochzuladen oder über GitHub Pages auszuliefern.
