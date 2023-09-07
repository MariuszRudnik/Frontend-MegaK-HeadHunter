<!-- Spis treści -->
# :notebook_with_decorative_cover: Spis treści

- [Wstęp](#pushpin-wstęp)
- [Opis projektu](#star2-opis-projektu)
    * [Screenshoty](#camera-screenshoty)
    * [Zastosowane technologie](#space_invader-zastosowane-technologie)
    * [Funkcjonalności](#dart-funkcjonalności)
    * [Konfiguracja projektu](#key-konfiguracja-projektu)
    * [Kolorystyka](#art-kolorystyka)
- [Uruchomienie projektu](#toolbox-uruchomienie-projektu)
    * [Instalacja](#gear-instalacja)
    * [Uruchomienie lokalne](#running-uruchomienie-lokalne)
- [Przeznaczenie projektu](#eyes-przeznaczenie-projektu)
- [Endpointy](#mailbox_with_mail-endpointy)
- [Przyszłe aktualizacje](#compass-przyszłe-aktualizacje)
- [Licencja](#warning-licencja)
- [Użyte paczki](#gem-użyte-paczki)
- [Backend](#small_red_triangle_down-backend)
- [Podziękowania](#handshake-podziękowania)

<!-- Wstęp -->
## :pushpin: Wstęp

Headhunter to projekt powstały w ramach etapu bonusowego kursu MegaK, w którym uczestnicy próbują stworzyć platformę ułatwiającą kontakt z przedstawicielami HR w celu znalezienia przyszłej pracy.

<!-- Opis projektu -->
## :star2: Opis projektu

- Specyfikacja projektu: https://docs.google.com/document/d/1j3iltSfaJXB8lVi5dwApL9UU0ze7A8kz9DBDChIVwfw/edit
- Makiety widoków: https://xd.adobe.com/view/864faeb9-d762-4277-a5d1-5b7565dcf543-d31c/

<!-- Screenshoty -->
### :camera: Screenshoty

<div align="center"> 
  <img src="https://user-images.githubusercontent.com/105609653/184940009-5e9aa2f6-fe55-491e-a177-2a261132eafe.png" alt="screenshot" />
  <img src="https://user-images.githubusercontent.com/105609653/184940333-0363cf8c-ad0c-4fce-820f-c7a22bd9e8f4.png" alt="" />
  <img src="https://user-images.githubusercontent.com/105609653/184940609-3a19c8c4-6ba6-418d-bd9c-71da95a4899f.png" alt="" />
  <img src="https://user-images.githubusercontent.com/105609653/184940697-1c06ffe8-5f53-4651-846f-81fb6d59398a.png" alt="" />
  <img src="https://user-images.githubusercontent.com/105609653/184940742-d96c8f74-120c-4e15-a0f4-8809b525d80f.png" alt="" />
  <img src="https://user-images.githubusercontent.com/105609653/184940777-9f2d255b-eccd-46b5-b22b-ef077edd363d.png" alt="" />
  <img src="https://user-images.githubusercontent.com/105609653/184940888-eddae72a-4217-4fab-a33f-03843e27ad71.png" alt="" />
</div>

<!-- Zastosowane technologie -->
### :space_invader: Zastosowane technologie

Strona klienta
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://sass-lang.com/">Sass</a></li>
  </ul>

Strona serwera
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://nestjs.com/">Nest.js</a></li>
  </ul>

Baza danych
  <ul>
    <li><a href="https://www.mysql.com/">MySQL</a></li>
  </ul>

<!-- Kolorystyka -->
### :art: Kolorystyka

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary Color |  #222224 |
| Secondary Color | #292A2B |
| Accent Color | #E02735 |
| Text Color | #F7F7F7, #7E7E7E |

<!-- Funkcjonalności -->
### :dart: Funkcjonalności

- Dodawanie użytkowników z pliku JSON
- Rejestrowanie użytkowników przy użyciu linka aktywacyjnego
- Zaimplemetowanie autoryzacji i autentykacji przy użyciu JWT
- Aktualizowanie danych profilowych
- Zaimplementowanie powiadomień mailowych z użyciem cron
- Podział na role z ograniczonym dostępem danych

<!-- Konfiguracja projektu -->
### :key: Konfiguracja projektu

W celu prawidłowego skonfigurowania projektu i połączenia z bazą danych należy odpowiednio wypełnić pola w zmiennej lokalnej `databaseConfig` znajdującej się w pliku `ormConfig.ts`

Ponadto w folderze `import` znajduje się plik `simple-student.json` do zaimportowania testowych danych dla użytkowników oraz wypełnione tabele dla bazy danych w kolejnym podkatalogu `sql-insert`

Admin dodawany ręcznie, po uruchomieniu aplikacji nest i powstaniu struktury bazy danych w tabeli user zamieszczamy dane opisane w linku, w sekcji "Endpointy".

<!-- Uruchomienie projektu -->
## 	:toolbox: Uruchomienie projektu

W tym projekcie domyślnym menadżerem paczek jest NPM.

<!-- Instalacja -->
### :gear: Instalacja

W katalogu projektu zainstaluj niezbędne zależności i paczki za pomocą komendy:

```bash
  npm install
```
<!-- Uruchomienie lokalne -->
### :running: Uruchomienie lokalne

Uruchomienie aplikacji

```bash
  npm start
```

Zbudowanie wersji produkcyjnej aplikacji

```bash
  npm run build
```

<!-- Przeznaczenie projektu -->
## :eyes: Przeznaczenie projektu

Aplikacja pozwala w prosty sposób łączyć osoby z działów HR firm, w tym Headhunterów [HR], z osobami poszukującymi pracy w IT.

Aplikacja ma pozwolić Kursantom Mega K [Kursant] zaprezentowanie swoich umiejętności, w sposób zunifikowany.

Aplikacja ma pozwolić HR na łatwe znalezienie odpowiednich kandydatów do pracy, przeprowadzenie z nimi rozmów i zaproponowanie współpracy.

Aplikacja ma pozwolić Administratorowi w zarządzaniu dostępem do bazy Kursantów.

Aplikacja nie ma stanowić bezpośredniej konkurencji dla portali pracy. Celem produktu jest uzupełnienie rynku, ze szczególnym uwzględnieniem Kursantów Mega K.


<!-- Endpointy -->

## :mailbox_with_mail: Endpointy

[Lista endpointów](https://drive.google.com/file/d/1fCRptKGHo0wQQazGJVz981u1Dqv9MKOQ/view?usp=sharing)

<!-- Przyszłe aktualizacje -->
## :compass: Przyszłe aktualizacje

* [ ] widok RWD
* [ ] dodanie testów jednostkowych i integracyjnych
* [ ] zoptymalizowanie aplikacji

<!-- Licencja -->
## :warning: Licencja

Distributed under the no License. See LICENSE.txt for more information.

<!-- Użyte paczki -->
## :gem: Użyte paczki

- [axios](https://www.npmjs.com/package/axios)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [uuid](https://www.npmjs.com/package/uuid)


<!-- Backend -->
## :small_red_triangle_down: Backend

[Readme](https://github.com/Bartlomiej95/GR12-HeadHunter-backend/blob/main/README.md)

<!-- Podziękowania -->
## :handshake: Podziękowania

Serdeczne podziękowania dla grupy 12 za podjęcie wyzwania i wspólną pracę przy projekcie.

W skład naszej grupy wchodzą:

[Bartek](https://github.com/Bartlomiej95),
[Hubert](https://github.com/hugobosy),
[Arek](https://github.com/arekmastalerczuk),
[Andrzej](https://github.com/enrju),
[Mariusz](https://github.com/MariuszRudnik),
[Mateusz](https://github.com/mogiel),
[Darek](https://github.com/darone90),
[Jakub](https://github.com/swierczekjakub),
