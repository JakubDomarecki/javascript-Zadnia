![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/01_Obiekty/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz obiekt `country`. Dopisz do niego następujące właściwości:

- `capital` - string,
- `population` - number,
- `president` - string,
- `ministers` - tablica stringów

Wypisz w konsoli wszystkie właściwości.


## Zadanie 2 - rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/01_Obiekty/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz obiekt `timeMachine`. Dopisz do niego następujące właściwości:

- `shape` - string,
- `model` - string,
- `run(date, place)` - metoda, dzięki której można się przenieść w czasie. Argument `date` to data, do jakiej chcemy się przenieść, a `place` to miejsce, do którego chcemy się przenieść. Oba argumenty to stringi.

Wypisz w konsoli wszystkie właściwości i uruchom metodę `run`.


## Zadanie 3

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/01_Obiekty/03_Zadanie_3`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz obiekt `book`. Dopisz do niego następujące właściwości:

- `title`,
- `author`,
- `numberOfPages`

Wypisz te właściwości w konsoli.


## Zadanie 4

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/01_Obiekty/04_Zadanie_4`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz obiekt `person`. Dopisz do niego następujące właściwości i metodę:

- `name`,
- `age`,
- `sayHello()` - wypisującą string "hello"

Wypisz właściwości w konsoli, wywołaj metodę.


## Zadanie 5

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/01_Obiekty/05_Zadanie_5`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz obiekt, który będzie przetrzymywał Twój ulubiony przepis. Obiekt powinien mieć własność `title` (string), `servings` (number) oraz `ingredients` (tablica stringów).

Dodaj pole `ingredients` poza ciałem obiektu.

Wypisz w konsoli te wszystkie informacje.


## Zadanie 6

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/01_Obiekty/06_Zadanie_6`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Do pliku `js/app.js` przekopiuj poniższy kod:

```js
const spoon = {
  isExist: true,
};

const fork = spoon;
fork.isExist = false;
```

Następnie sprawdź czy łyżka istnieje.
