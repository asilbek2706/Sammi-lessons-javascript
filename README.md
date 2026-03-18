# JavaScript darslari

Ushbu repozitoriy JavaScript asoslaridan tortib ilg'or mavzulargacha bo'lgan amaliy darslarni o'z ichiga oladi. Darslar ikki modulga bo'lingan.

---

## 📦 Module 1 — JavaScript Asoslari

### 1. DOM Manipulyatsiya (`js/`)

DOM (Document Object Model) bilan ishlashning asosiy usullari o'rgatiladi.

- **main.js** — Tugmalar, `classList`, hodisa tinglovchilar va dinamik elementlar yaratish
- **events.js** — DOM traversal, hodisa tinglovchilar va hodisa delegatsiyasi
- **workingDom.js** — Element tanlash, CSS manipulyatsiyasi va elementlar yaratish
- **script.js** — Ob'ektlar va forma validatsiyasiga asoslangan TV seriallar ma'lumotlar bazasi ilovasi

---

### 2. Function Constructor (`functionConstructor/`)

ES6 sinflaridan oldingi prototipga asoslangan OOP yondashuvi o'rgatiladi.

- `function Person(firstName, lastName) { ... }` ko'rinishidagi funksiya konstruktorlari
- `new` kalit so'zi bilan nusxa yaratish
- `Person.prototype.convertAge = function() { ... }` usuli orqali prototip metodlari

---

### 3. Sinflar — Classes (`classes/`)

ES6 sintaksisidagi sinflar va meros olish tushunchalari o'rgatiladi.

- `class` va `constructor` kalit so'zlari
- Sinf metodlari
- `extends` va `super` orqali sinflar meros olish
- Rest parametrlari (`...args`) va standart parametrlar

---

### 4. Context va `this` (`context-this/`)

JavaScriptdagi `this` kalit so'zi va kontekst bog'lash o'rgatiladi.

- Oddiy funksiyalarda `this` → `window` (yoki `use strict` da `undefined`)
- Ob'ekt metodlarida `this` → ob'ektning o'zi
- Arrow funksiyalarda `this` → ota kontekstdan meros olish
- Funksiya konstruktorlarida `this` → yangi nusxa
- `.call()`, `.apply()`, `.bind()` metodlari orqali explicit kontekst bog'lash

---

### 5. Sana va Vaqt — Date (`date/`)

JavaScript `Date` ob'ekti va vaqt o'lchash tushunchalari o'rgatiladi.

- `new Date()` orqali sana yaratish
- `getFullYear()`, `getMonth()`, `getDate()`, `getHours()`, `getTime()`, `getUTCHours()`
- `setHours()` metodi
- Vaqt zonasi ofsetini hisoblash
- `for` tsikli vaqtini `Date` orqali o'lchash

---

### 6. Animatsiya — Interval (`dars23/`)

`setInterval` / `clearInterval` yordamida animatsiya yaratish o'rgatiladi.

- `setInterval()` orqali avtomobil animatsiyasi (1000px o'ngga siljish)
- `clearInterval()` orqali animatsiyani to'xtatish
- DOM elementlarini joylashtirishni boshqarish

---

### 7. Document va Window (`document-window/`)

DOM o'lchamlari va oyna operatsiyalari bilan ishlash o'rgatiladi.

- `getComputedStyle()` — elementning stillarini olish
- `getBoundingClientRect()` — elementning pozitsiyasi va o'lchami
- `scrollHeight`, `scrollTop`, `scrollWidth` — scroll o'lchamlari
- `clientWidth`, `clientHeight` — ko'rinadigan o'lchamlar
- `offsetWidth`, `offsetHeight` — chegaralar bilan umumiy o'lchamlar

---

## 📦 Module 2 — Ilg'or JavaScript (`New-Module/`)

> Bu modul ilg'or JavaScript mavzularini qamrab oladi.

### 1. JSON va XMLHttpRequest (`New-Module/first/`)

JSON formati va so'rov yuborish usullari o'rgatiladi.

- `JSON.parse()` va `JSON.stringify()` orqali ob'ektni klonlash
- `XMLHttpRequest` orqali API so'rovlari
- Tashqi JSON ma'lumotlaridan foydalanib valyuta konvertatsiyasi

---

### 2. LocalStorage (`New-Module/localStorage/`)

Brauzer xotirasida ma'lumotlarni saqlash va boshqarish o'rgatiladi.

- `localStorage.setItem()` / `getItem()` orqali ma'lumot saqlash
- Forma ma'lumotlarini qayta tiklash (persistence)
- Mavzu (theme) almashtirish demosi

---

### 3. Fetch API (`New-Module/third-json_placeholder/`)

`fetch` API va REST so'rovlari bilan ishlash o'rgatiladi.

- `fetch()` yordamida GET/POST so'rovlari
- JSONPlaceholder API bilan ishlash
- Promise va `.then()` zanjiri orqali dinamik postlar yaratish

---

### 4. Promislar (`New-Module/Promises/`)

Asinxron dasturlash va Promise tushunchasi o'rgatiladi.

- `new Promise(resolve, reject)` orqali promis yaratish
- `.then()`, `.catch()`, `.finally()` zanjirlash
- `Promise.all()` orqali bir nechta promisni boshqarish

---

### 5. Array Metodlari (`New-Module/Array-methods/`)

Massivlar ustida amal bajaruvchi yuqori darajali metodlar o'rgatiladi.

- `.map()` — massiv elementlarini o'zgartirish
- `.filter()` — shartga ko'ra elementlarni filtrlash
- `.every()` / `.some()` — massiv elementlarini tekshirish
- `.reduce()` — qiymatlarni birlashtirish

---

### 6. Regulyar Ifodalar — Regular Expressions (`New-Module/Regular-expression/`)

Satrlarni tekshirish va qidirish uchun regex pattern'lar o'rgatiladi.

- Regex pattern'lar va satr mosligi
- Webpack bilan modul tizimi sozlanishi

---

## 🛠️ Ishlatilgan Texnologiyalar

- **Til:** JavaScript (ES6+)
- **Build vositasi:** Webpack (Regular-expression moduli uchun)
- **Xorijiy API:** JSONPlaceholder

---

## 🚀 Boshlash

```bash
# Repozitoriyni klonlash
git clone https://github.com/asilbek2706/Sammi-lessons-javascript.git

# Kerakli papkaga kirish
cd Sammi-lessons-javascript

# Istalgan darsning index.html faylini brauzerda ochish
```
