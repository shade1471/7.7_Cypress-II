# 7.7_Cypress-II
 ## Задача 1.Cypress - установка и настройка проекта

  Изучите [приложение](https://github.com/Evgeniy-Varlamov/FS21-diplom) для работы с бронирование билетов в кино
  
  Приложение находится в процессе разработки и многие функциональности еще не готовы, мы можем тестировать бронирование билетов, логин в админку
  
  Создайте новый проект для тестов на Cypress
  
  Создайте:
  
  1. тест-спек с тестами для проверки корректности отображения главной страницы

  2. тест-спек для проверки логина в админку - используйте фикстуру для хранения тестовых данных (мин. 2 набора - happy и sad path)
  
  3. тест-спек с UI тестом для бронирования фильма в доступный зал, название которого вы получаете из админки

  
  Сделайте рефакторинг кода так, чтобы данные обо всех селекторах хранились в фикстурах
  
  Пришлите ссылку на репозиторий в качестве результата выполнения домашнего задания
  
  *не забывайте заводить issue в случае отклонений в поведении системы (как приложения, так и в реализации тестов). Если технически невозможно реализовать тест по какой-либо причине, то добавьте issue, оставьте тест падающим. Тест должен присутствовать.
  

  ## Задача 2. Подключение Dashboard
  
  Поключите ваш проект к Dashboard. Помните, что ваш проект будет иметь уникальные идентификаторы
  
  Запустите тесты так, чтобы результаты отображались на Dashboard
  
  Настройте публичный доступ к вашему проекту и пришлите ссылку на ваш Dashboard, как результат здания

  ## Задача 3. Интеграционные тесты
  
  Создайте новый проект с test suite (используйте `describe()`) с API тестами для [проекта](https://petstore.swagger.io/#/)
  
  В вашем наборе тестов должны быть тесты для проверки:
  - создания пользователя
  - правки пользователя
  - удаления пользователя

  Тесты должны быть независимыми друг от друга и выполняться в любом порядке. Рекомендуем использовать кастомные команды, так как вам придется повторять одни и те же предусловия для разных тестов
  
  Поключите ваш проект к Dashboard. Помните, что ваш проект будет иметь уникальные идентификаторы
  
  Запустите тесты так, чтобы результаты отображались на Dashboard
  
  Настройте публичный доступ к вашему проекту и пришлите ссылку на ваш Dashboard, как результат здания
  
  Важно: не забывайте про использование принципа DRY везде, где это необходимо.
