![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `05_Dzien_3/01_Wiecej_o_elementach/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Zmodyfikuj listę w sekcji `.exercise` w następujący sposób:

1. Nastaw kolor tła co drugiego elementu listy na szary (`#9e9e9e`),
2. Nastaw piątemu elementowi listy **klasę** `big`,
3. Nastaw co trzeciemu elementowi podkreślenie.


## Zadanie 2

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `05_Dzien_3/01_Wiecej_o_elementach/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Dodaj do każdego elementu listy w sekcji `.exercise`, atrybut `data-id` przyjmujący kolejne liczby całkowite (zaczynając od 1).


## Zadanie 3

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `05_Dzien_3/01_Wiecej_o_elementach/03_Zadanie_3`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Na stronie jest lista, w której musisz wpisać swoje imię i nazwisko, swój ulubiony kolor i potrawę.

1. Wyszukaj odpowiednie elementy (spany) i zapisz je do zmiennych.
2. Za pomocą `innerText` wypełnij w nich odpowiednie informacje.


## Zadanie 4

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `05_Dzien_3/01_Wiecej_o_elementach/04_Zadanie_4`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Na stronie jest proste menu. Zarówno kod HTML, jak i CSS jest już do niego przygotowany. Niestety ktoś zapomniał dodać odpowiednie klasy do odpowiednich elementów.

1. Wyszukaj element `ul` w sekcji `.exercise` i dodaj mu klasę `menu`.
2. Wyszukaj wszystkie elementy `li` w sekcji `.exercise` i dodaj im klasę `menuElement` (użyj do tego pętli). Uważaj, żeby nie wykasować klasy `selected`.
3. Zauważ, że jeden z elementów ma czerwony kolor tła. Jest to spowodowane tym, że ma **klasę** `error`. Zabierz mu ją (najlepiej, jeżeli zabierzesz tę **klasę** wszystkim elementom, które ją mają).


## Zadanie 5

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `05_Dzien_3/01_Wiecej_o_elementach/05_Zadanie_5`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Na stronie są trzy obrazki z ikonami najpopularniejszych przeglądarek internetowych. Niestety zarówno obrazki, jak i linki prowadzące do ich stron zawierają błędy. Napisz kod JavaScript, który wprowadzi następujące zmiany:

1. Poprawi elementy tak, żeby do każdej przeglądarki było podpięte odpowiednie logo (obrazek jest nastawiany za pomocą `background-image`).
2. Poprawi linki tak, żeby każdy miał poprawny opis i atrybut `href`.
3. Poprawi szerokość elementu o klasie `chrome` (powinno być 100px).
