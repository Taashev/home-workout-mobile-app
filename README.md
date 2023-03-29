# Home Workout

Гибридное Android приложение c WebView экраном: \
Нативная часть - приложение с информацией о тренировках в домашних условиях. \
WebView окно с настроенным firebase remote config позволяющий удаленно передавать/изменять ссылку которая будет открыта вместо нативной части приложения.

---

## Технологии при разработке:

- React native cli
- React navigation
- React native WebView
- Firebase (remote config)
- AsyncStorage

---

## Развертывание:

#### Клонировать репозиторий:

- открыть терминал и перейти в директорию куда будет клонирован репозиторий

- клонировать репозиторий командой `git clone https://github.com/Taashev/home-workout-mobile-app.git`

- перейти в директорию проекта и установить зависимоти командой `npm i`

#### Настройка окружения:

- Для начала установить и настроить [Android Studio](https://developer.android.com/studio)

- Следующим шагом потребуется настроить окружение вот пару ресурсов которые в этом помогут

  - [официальная документация](https://reactnative.dev/docs/environment-setup)
  - [статья на habr](https://habr.com/ru/company/neoflex/blog/428912/)

    Внимание! Для успешного запуска проекта в эмуляторе потребуется версия [jdk11](https://www.oracle.com/cis/java/technologies/downloads/#java11) (именно ее указываем в перменной окружения!)

### Запускаем проект локально:

1. Запустить эмулятор в Android Studio
2. Открыть терминал и перейти в директорию проекта
3. Командой `npm run start` запустить сборщик "Метро"
4. Нажать латинскую клавишу `a` это сбилдит проект и запустить его на эмуляторе андройд.

---

## Настройка Firebase remote config:

### Создаем новый проект в Firebase:

1. Зайти на сайт [Firebase](https://console.firebase.google.com/) и создать проект с именем 'homeWorkout'

<img src="./assets/images/readme/firebase-new-project.jpg" width="500" alt="firebase new project" />

### Создаем новое приложение в Firebase:

2. В созданном проект "homeWorkout" создаем новое приложение для Android. \

<img src="./assets/images/readme/firebase-new-app.jpg" width="500" alt="firebase new app" />

3. Заполнить регстрационные данные. \
   (package name должен совпадать с локальным именем проекта)

```
Package name - com.homworkout
Nickname - Home Workout

```

<img src="./assets/images/readme//firebase-register-app-step1.jpg" width="500" alt="firebase new app step 1" />

4. Скачать файл google-services.json (нужен для подключения приложения к firebase)

<img src="./assets/images/readme//firebase-register-app-step2.jpg" width="500" alt="firebase new app step 2" />

5. Шаг 3 можно пропустить (эти данные уже настроены в приложении)

6. Регистрация приложения в firebase завершена.

### Настройка соединения с Firebase:

7. Скаченый файл google-services.json добавить в проект в директорию `./android/app`. \
   Следующим шагом настроим Remote config.

### Настройка Firebase Remote Config:

8. На сайте Firebase во вкладке "Builld" выбрать пункт "Remote Confgi"

9. Добавить (обновить) переменную "url" с нужным значением которое будет переданно в приложение или оставить поле пустым пустым .\

(по аналогии можно создавать и передовать в приложение сколько угодно перменных).

<img src="./assets/images/readme/firebase-remote-config-create.jpg" width="500" alt="remote config create variable" />
<img src="./assets/images/readme/remote-config-add-variables.jpg" width="500" alt="remote config create variable" />
