# Maximal_UI

> Веб интерфейс(UI) проекта

---

# Технологии в этом части:
- **React**;
- **Sass**;
- **Vite**;
- **[Jotai](https://jotai.org)** — для создание обший *state* в проекте (как *Redux*).

---

# Для запуска коды Веб интерфейса(UI):

1. Скачайте или клонируйте исходники — [здесь(Maximal_UI)](https://github.com/maximal-controller/Maximal_UI);
```bash
$ git clone https://github.com/maximal-controller/Maximal_UI.git
$ cd Maximal_UI
```

2. Установите пакеты с помощью ***npm***:
```bash
$ npm install 
```

3. Создайте новый файл с названием `.env` и добавьте нужные переменные(***Environment Variables***);
```env
VITE_BASE_URL=<это URL на серверная часть, в текущем формате http://example.com >
// Если еще не запускали сервер,
// вы можете написать URL текущую удаленную сервер — https://talented-blazer-fawn.cyclic.app
```

4. Запускайте проект локально:
```bash
$ npm run dev
```

---

# Требования
- Node.js v16.0.0 или новее (предпочтительно v18).
