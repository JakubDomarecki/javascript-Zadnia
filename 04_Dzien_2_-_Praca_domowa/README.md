![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `04_Dzien_2_-_Praca_domowa/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

W pliku `app.js` za pomocą konstruktora stwórz funkcję `Tree`. Niech funkcja ta ma jedną właściwość `type`, która będzie przechowywać typ drzewa. Następnie stwórz 2-3 instancje (obiekty) na podstawie konstruktora Tree, będące różnymi drzewami.

Dopisz do prototypu konstruktora również metodę `bloom()`, która będzie zwracała tekst "I am blooming".


## Zadanie 2

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `04_Dzien_2_-_Praca_domowa/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Do każdego podpunktu stwórz odpowiednią funkcję o nazwie podanej w treści zadania.

### 1. Pobranie informacji z atrybutu data

- znajdź element o **id** `menu`,
- stwórz funkcję `getDataInfo(element)` do której przekaż, jako argument, znaleziony element,
- stwórz w funkcji nową tablicę i wypełnij ją wartościami pobranymi z atrybutu data-info każdego elementu **li**. Zauważ, że elementy **li** to dzieci elementu o id `menu`.
- zwróć tę tablicę.

### 2. Szukanie elementu po id

- Znajdź element o **id** `main-container`.
- stwórz funkcję `getElementClass(element)` do której przekaż, jako argument, znaleziony element.
- zwróć tablicę złożoną z nazw klas tego elementu.

### 3. Szukanie elementu po klasie

- Znajdź element o **klasie** `pink-color`.
- stwórz funkcję `getElementText(element)` do której przekaż, jako argument, znalezione elementy.
- zwróć z funkcji tekst, znajdujący się w tym elemencie.

### 4. Szukanie elementu po klasie

- Znajdź elementy o **klasie** `images`.
- stwórz funkcję `getElementAlt(element)` do której przekaż, jako argument, znalezione elementy.
- stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu alt obrazków. Pobierz te atrybuty z przekazanych jako argument elementów.

### 5. Szukanie elementu po klasie

- Znajdź elementy o **klasie** `my-link`.
- stwórz funkcję `getElementHref(element)` do której przekaż, jako argument, znalezione elementy.
- stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu href linków. Pobierz te atrybuty z przekazanych jako argument elementów.
