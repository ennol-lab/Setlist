# Setlist – Noten-App fürs iPad/iPhone

## Online stellen (einmalig, kostenlos über GitHub Pages)
1. Auf github.com ein neues Repository anlegen (z. B. `setlist`, Public).
2. „Add file → Upload files“ → den **Inhalt** dieses Ordners hochladen (index.html, manifest.json, sw.js, Ordner `lib` und `icons`) → Commit.
3. Settings → Pages → Source: „Deploy from a branch“, Branch `main`, Ordner `/ (root)` → Save.
4. Nach ca. 1 Minute läuft die App unter `https://DEINNAME.github.io/setlist/`.

## Auf dem iPad/iPhone installieren
Die Adresse in **Safari** öffnen → Teilen-Symbol → „Zum Home-Bildschirm“.
Ab dann startet sie wie eine normale App im Vollbild und funktioniert **offline**.
Wichtig: immer über das Home-Bildschirm-Symbol öffnen, nicht über Safari. Dort liegen deine Daten.

## Bedienung
- **Lieder**: „+ PDFs“ → mehrere PDFs auf einmal oder eine Zip-Datei voller PDFs wählen. Dateiname = Liedname. Antippen zum Umbenennen, Ersetzen, Löschen.
- **Setlists**: „+ Neu“ → leer (Lieder antippen), **aus Foto/Screenshot** (z. B. deiner Excel-Liste) oder aus eingefügtem Text. Erkannte Zeilen werden mit deinen Liednamen abgeglichen, du prüfst kurz und speicherst. Sortieren durch Ziehen an ≡.
- **Auftritt**: ▶ Start. Rechts tippen = weiter, links = zurück (blättert erst durch alle Seiten eines Lieds, dann zum nächsten). Mitte = Menü (Beenden, Nachtmodus, Sprung zu einem Lied).
- Bluetooth-Pedale (die Pfeiltasten/Bild-auf/ab senden) funktionieren auch.
- Der Bildschirm bleibt während des Auftritts an.

## Backup
Daten liegen nur auf dem Gerät. Über „⋯ → Backup exportieren“ eine Datei in iCloud Drive sichern; auf einem anderen Gerät per „Backup importieren“ einspielen.

## Noten aus GoodNotes holen
In GoodNotes Seiten auswählen → Teilen → Exportieren als PDF → in Dateien sichern. Dann in der App über „+ PDFs“ hinzufügen.

## Update von einer älteren Version
Im GitHub-Repo „Add file → Upload files“ → wieder den gesamten Inhalt des Ordners hineinziehen (überschreibt die alten Dateien) → Commit. Auf dem iPad die App einmal schließen und neu öffnen, ggf. zweimal. Deine Lieder und Setlists bleiben erhalten.

## Updates der App
Nach Änderungen an den Dateien in `sw.js` die Zeile `VERSION = 'setlist-v3'` hochzählen, sonst zeigt das iPad noch die alte Version aus dem Cache.
