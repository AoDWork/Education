//!                              ========           ВОПРОСЫ ДЛЯ СОБЕСЕДОВАНИЯ от WEBDEV        ========
//                                          https://github.com/YauhenKavalchuk/interview-questions



{/*//!          ====    HTML (вопросы по языку гипертекстовой разметки)   ====

== 1 Что такое HTML и для чего он используется?


== 2 Какие глобальные атрибуты есть в HTML?


== 3 Что такое категории контента в HTML5?


== 4 Какие категории считаются основными категориями контента?


== 5 Что такое doctype? И для чего он используется?

    Используется для указания типа документа. Добавляется первой строкой любого html или xhtml документа, для того
        чтобы браузер мог понять как ему интерпретировать страницу и в соответствии с каким стандартом осуществлять
        парсинг документа, исходя из этого он будет считать какие теги считаются валидными, а какие устаревшими.


== 6 Опишите базовую структуру HTML-страницы?

    Первой строчкой обязательно Doctype. 
    Далее основной тег html - корневая обертка страницы, внутри себя он содержит два основных тега head и body. 
    Head(своеобразный вспомогательный тег который содержит все необходимые данные о    html документе: заголовок, 
    описание, сео информация, подключение стилей/шрифтов, мета информация) - данные внутри этого тега не отрисовываются 
    на странице.
    Body - тег которые содержит всю разметку html документа, она и отображается в браузере.


== 7 Что такое валидация? И какие типы проверок HTML документа вы знаете?

Основные этапы проверок валидности HTML-документа?

Если представить HTML5 как открытую веб-платформу, из каких блоков он состоит?

Какой тэг использовать для того, что бы сверстать кнопку?

Что такое инлайновый стиль? Можно ли его переопределить?

Есть ли у HTML элементов свои дефолтные специфичные стили?

Что такое семантика? Какие семантичные тэги вы знаете?

Как семантически правильно сверстать картинку с подписью?

Типы списков в HTML?

Для какого тэга используется атрибут alt и зачем он нужен?

Какая разница между тэгами <strong><em> и <b><i>?

Типы <input> элементов в HTML?

Для чего используют data-атрибуты?

Разница между <script>, <script async> и <script defer>?

Для чего используется элемент <datalist>?

Почему хорошей практикой считается располагать <link> для подключения CSS стилей внутри тэга <head>, а <script> для подключения JS ставить перед закрывающимся тэгом </body>?

Что такое мета-тэги?

Что описывается в тэге <head>?

Для чего используются тэги <tr>, <th>, <td>?

Расскажите о meta-теге с name="viewport"?

Что такое элемент <canvas>? И для чего он используется?

Что такое <svg> и <canvas>?

Разница между <canvas> и <svg>?

В каких случаях лучше использовать <canvas>s, а в каких <svg>?

Плюсы и минусы <canvas> и <svg>?

Для чего нужен атрибут autocomplete?

Что такое элемент <output> в HTML5?

Что такое свойство valueAsNumber?

Что такое атрибут target? Какие значения он принимает?

Что такое ApplicationCache в HTML5?

Для чего используется элемент <picture>?

Что такое srcset? Как работает srcset?

Как семантически верно сверстать навигационное меню?

Что такое <iframe>?

Для чего используются тэги <sub> и <sup>?

Как можно скрыть элемент разметки не используя CSS и JS?

Разница между <meter> и <progress>?

Как можно сгруппировать опции внутри тэга <select>?

Что такое скринридер?

Как можно изменить форму картинки или HTML элемента?

Чем отличается <article> от <section>?

Расскажите об особенностях стилизации <svg>?

Что такое ARIA роли в веб приложении?

Разница между кнопкой и ссылкой в HTML?

Для чего используется атрибут decoding?

Для чего используется атрибут enterkeyhint?

Для чего используют атрибут novalidate?

Для чего используют атрибут inputmode?

Для чего используется атрибут pattern?

Почему стоит использовать семантические теги в верстке?

Для чего используется тэг <label>?


*/}


{/*//!          ====    CSS (вопросы по каскадным таблицам стилей)   ====

Что такое CSS? И для чего он используется?
Что такое CSS-правило?
Варианты добавление CSS стилей на страницу?
Типы позиционирования в CSS?
Блочная модель CSS?
Что такое селектор? И какие селекторы существуют?
Что такое специфичность селектора? Как считать вес селектора?
Разница между Reset.css и Normalize.css?
Разница между margin и padding?
Разница между display: none и visibility: hidden?
Разница между блочным и строчным (инлайновым) элементами?
Разница между классом и идентификатором в CSS?
Что такое CSS спрайт? И для чего он используется?
Что такое вендорные префиксы? И для чего они используются?
Что такое псевдоэлементы? И для чего они используются?
Что такое схлопывание границ (margin collapsing)?
Что такое CSS препроцессор?
Что такое z-index? Как формируется контекст наложения?
Порядок наложения элементов в CSS (Stacking Order)?
Как с помощью CSS определить, поддерживается ли свойство в браузере?
Как поддерживать страницы в браузерах с ограниченными функциями?
Как исправлять специфичные проблемы со стилями для разных браузеров?
Глобальные ключевые слова в CSS?
Что такое CSS-атрибут (attr)?
Что такое перечисление селекторов?
Для чего используется ключевое слово currentColor в CSS?
Какие псевдоклассы были добавлены в CSS3?
Какие фильтры есть в CSS?
Для чего используется псевдокласс :invalid?
Расскажите про свойство display в CSS?
В каком случае лучше использовать translate() вместо абсолютного позиционирования?
Что такое плавающие элементы (floats)? Как они работают?
Расскажите о свойстве text-rendering?
Расскажите о свойстве text-decoration-skip-ink?
Расскажите о свойстве pointer-events?
Почему не стоит использовать краткую запись свойств CSS?
Расскажите о свойстве outline?
Назовите псевдоэлементы для подсветки текста?

*/}


{/*//!          ====    JavaScript (вопросы по языку JavaScript)   ====

Типы данных в JavaScript?
Разница между == и === (нестрогое/строгое равенство)?
Что такое Strict mode в JavaScript?
Разница между function declaration и function expression?
Разница между null и undefined?
Типы таймеров в JavaScript?
Что такое поднятие (Hoisting)?
Что такое область видимости (Scope)?
Разница между var, let и const?
Что такое замыкание (Closure)?
Что обозначает this в JavaScript?
Что такое функции высшего порядка (Higher Order Functions)?
Как превратить любой тип данных в булевый? Перечислите ложные значения в JS?
Методы строк в JavaScript?
Методы массивов в JavaScript?
Что такое чистая функция?
Разница между .forEach() и .map()?
Разница между .call(), .apply() и bind()?
Почему в JS функции называют объектами первого класса?
Как определить наличие свойства в объекте?
Что такое IIFE?
Что такое псевдомассив arguments?
Разница между host-объектами и нативными объектами?
Почему результат сравнения 2х объектов это false?
Что такое прототипное наследование? Как создать объект без прототипа?
Почему расширение нативных JavaScript-объектов это плохая практика?
Что такое NaN? Как определить, что значение равно NaN?
Что такое объектная обертка (Wrapper Objects)?
Как в JavaScript создать объект?
Для чего используется ключевое слово new?
Операторы «И» и «ИЛИ» (&& и ||)?
Для чего используется оператор двойного отрицания (!!)?
Для чего используется оператор остатка (%)?
Как проверить, является ли значение массивом?
Как работает boxing/unboxing в JavaScript?
Что такое мемоизация? Реализуйте базовую логику функции для мемоизации?
Разница между оператором in и методом .hasOwnProperty()?
Разница между глубокой (deep) и поверхностной (shallow) копиями объекта? Как сделать каждую из них?
Что такое цепочка вызовов функций (chaining)? Как реализовать такой подход?
Что такое необъявленная переменная?
Как передаются параметры в функцию: по ссылке или по значению?
Что такое прототип объекта в JavaScript?
Как работает метод Object.create()?
Разниц между Object.freeze() и Object.seal()?
Разница между методами .slice() и .splice()?
Как работают методы .find(), .findIndex() и .indexOf()?
Плюсы и минусы использования use strict?
Разница между методами .push(), .pop(), .shift() и .unshift()?
Плюсы и минусы иммутабельности? Как достичь иммутабельности в JS?
Типы всплывающих окон в JavaScript?
Типы объектов JavaScript?
Парадигмы программирования в JavaScript?
Типы ошибок в JavaScript?
Разница между typeof и instanceof?
JavaScript статически, или динамически типизированный язык?
Что такое регулярное выражение (Regular Expression)?
Что такое рекурсия?
Что такое прототип (Prototype) объекта?
Какие методы используются в регулярных выражениях?
Что такое полифил (polyfill)?
Что такое switch/case? Правила использования switch/case?
Типы функций по способности принимать другие функции?
Что такое выражения (expression) и инструкции (statement) в JavaScript?
Разница между .some() и .every()?
Как сгенерировать случайное число в JavaScript?
Типы операторов в JavaScript?
Разница между параметром и аргументом функции?
Правила задания имён для переменных и функций в JavaScript?
Разница между явным и неявным преобразованием (Implicit and Explicit Coercion)?
Для чего применяется метод Array.from()?
Назовите способы преобразования массива в объект?
Разница между Object и Map?
Что такое каррирование?
Для чего используются метод Object.seal()?
Для чего используется свойство .dataset?
Каким образом можно обмениваться кодом между файлами?
Как работает «сборщик мусора» в JavaScript?
Что такое утечки памяти?
Назовите основные типы утечек памяти в JavaScript?

*/}


{/*//!          ====    JS in Browser (вопросы из браузерного JavaScript)   ====

Что такое DOM?
Что такое распространение события (Event Propagation)?
Что такое делегирование событий (Event Delegation)?
Разница между e.preventDefault() и e.stopPropagation()?
Методы поиска элементов в DOM?
Разница между event.target и event.currentTarget?
Разница между .stopPropagation() и .stopImmediatePropagation()?
Разница между событиями load и DOMContentLoaded?
Разница между attribute и property у DOM-элементов?
Разница между HTMLCollection и NodeList?
Как динамически добавить элемент на HTML-страницу?
Типы узлов DOM-дерева?
Свойства для перемещения по DOM-дереву?
Виды событий в JavaScript?
Как добавить обработчик события на DOM-элемент?
Как удалить обработчик события с DOM-элемента?
Сколько аргументов принимает addEventListener?
Разница между innerHTML и outerHTML?
Расскажите про координаты в браузере?
Разница между JSON и XML?
Как узнать об использовании метода event.preventDefault()?
Для чего используется свойство window.navigator?
Для чего используется метод .focus()?
Для чего используется свойство .forms?
Для чего используется метод .scrollIntoView()?
Как использовать media выражения в JavaScript?
Разница между методами .submit() и .requestSubmit()?

*/}


{/*//!          ====    Async JS (вопросы из асинхронного JavaScript)   ====

Разница между синхронными и асинхронными функциями?
Что такое AJAX?
Что такое same-origin policy в контексте JavaScript?
Что такое цикл событий (event loop) и как он работает?
Что такое промисы (Promises)?
Плюсы и минусы использовании Ajax?
Подходы при работе с асинхронным кодом?
Преимущества использовании промисов вместо колбэков?
Что такое коллбэк-функция (Callback)? Что такое Callback Hell?
Что такое async/await?
Разница между Promise.all(), Promise.any() и Promise.race()?
Расскажите про статический метод .allSettled()?

*/}


{/*//!          ====    ECMAScript (вопросы из стандарта ECMAScript)   ====

Что такое ECMAScript? В чём отличие от JavaScript?
Разница между let, const и var?
Можно ли изменить значение определённое через const?
Что такое временная мёртвая зона (temporal dead zone)?
Разница между Rest и Spread операторами?
Что такое деструктуризация?
Для чего используется цикл for…of?
Что такое шаблонные литералы (Template Literals)?
Что такое Set, Map, WeakMap и WeakSet?
Разница между обычными функциями и стрелочными?
Разница между методом Object.freeze() и const?
Что такое итераторы?
Что такое генераторы? Когда стоит использовать генераторы?
Что такое ES6 модули?
Что такое символ (Symbol) в ES6?
Для чего используется метод .includes()?
Для чего используется метод .getOwnPropertyDescriptors()?
Расскажите о методах .keys(), .values(), .entries()?
Для чего используется метод .fromEntries()?
Для чего используются методы .flat() и .flatMap()?
Для чего используются методы .padStart() и .padEnd()?
Для чего используются методы .startsWith() и .endsWith()?
Как в JavaScript удалять пробельные символы в начале и в конце строки?
Расскажите об операторе Optional Chaining (?.)?
Для чего используется метод .replaceAll()?
Что такое оператор логического присваивания?
Как увеличить читаемость больших чисел?
Что такое приватные аксессоры?
Разница между ES6-классами и конструкторами функций?
Что такое оператор нулевого слияния (??)?
В чём отличие оператора нулевого слияния (??) и оператора “ИЛИ” (||)?
Назовите основные методы и свойства работы с коллекцией Map?
Назовите основные методы и свойства работы с коллекцией Set?
Как осуществить перебор элементов в коллекциях Map и Set?

*/}


{/*//!          ====    Web Technologies (общие вопросы по веб-разработке)   ====

Что такое прогрессивный рендеринг?
Что такое прогрессивный SSR?
Что такое поток документа?
Разница между адаптивным (adaptive) и отзывчивым (responsive) дизайнами?
Разница между Progressive Enhancement и Graceful Degradation?
Что такое кроссбраузерность?
Что такое Babel? Для чего он используется?
Разница между feature detection, feature inference и анализом строки user-agent?
Что такое Веб-компоненты и какие технологии в них используются?
Способы уменьшения времени загрузки веб-страницы?
Особенности разработки мультиязычных сайтов?
Что такое Flash Of Unstyled Content (FOUC)? Как его избежать?
Разница между layout, painting и compositing?
Что такое Progressive Web Application?
Что такое межсайтовый скриптинг (XSS)?
Что Такое API?
Что такое CDN?
Что такое REST?
Что такое IP-адрес?
Разница между host и domain?
Разница между URI и URL?
Почему очищать кэш важно? Как это можно сделать?
Назовите критические этапы рендеринга?

*/}


{/*//!          ====    Web API (вопросы из веб API)   ====

Что такое HTTP?
Из чего состоит HTTP-запрос?
Какие методы может иметь HTTP-запрос?
Что такое HTTP cookie? Для чего они используются?
Что такое WebSocket? В чем принцип его работы?
Разница между HTTP и HTTPS?
Разница между Long-Polling, Websockets и Server-Sent Events?
Разница между PUT- и POST-запросами?
Что такое безопасные (Secure) и HttpOnly cookies?
Что такое Content Security Policy (CSP)?
Что такое CORS?
Разница между протоколами TCP и UDP?
Как работает JSONP?
Что такое IndexedDB в браузере? Преимущества IndexedDB?
Что такое Service Workers?
Что такое Web Workers?
Что такое History API в браузере?
Что такое веб-хранилище (web storage)?
Что такое BOM?
Разница между cookie, sessionStorage и localStorage?

*/}


{/*//!          ====    React (вопросы по библиотеке React)   ====

Что такое React?
Перечислите особенности React?
Что такое Virtual DOM? Как он работает с React?
Для чего нужен атрибут key при рендере списков?
Что такое PureComponent?
Что такое Компонент высшего порядка (Higher-Order Component/HOC)?
Разница между управляемыми (controlled) и не управляемыми (uncontrolled) компонентами?
Методы жизненного цикла компонента в React?
Стадии жизненного цикла компонента в React?
Что такое React Reconciliation?
Что такое портал (Portal)?
Что такое контекст (Context)?
Что такое React хуки (Hooks)?
Что Такое JSX?
Разница между состоянием(state) и пропсами(props)?
Что такое React Fiber?
Что такое фрагмент (Fragment)? Почему фрагмент лучше, чем div?
Что такое синтетические события в React?
Что такое React-ссылка (ref)? Как создать ссылку?
Разница между теневым (Shadow) и виртуальным (Virtual) DOM?
Назовите преимущества использования React?
Что такое условный рендеринг (Conditional Rendering)? Как его выполнить?
Что такое компонент-переключатель (Switching Component)?
Разница между React и ReactDOM?
Разница между компонентом и контейнером?
Как React обрабатывает, или ограничивает использование пропсов определенного типа?
Что такое строгий режим в React? Его преимущества?
Что такое «бурение пропсов» (Prop Drilling)? Как его избежать?
Что такое «опрос» (Polling)? Как его реализовать в React?
Разница между элементом и компонентом?
Что такое ReactDOMServer?
Что такое предохранители (Error Boundaries)?
Что такое «ленивая» (Lazy) функция?
Разница между рендерингом и монтированием?
Что такое сhildren?
Что такое события указателя (Pointer Events)?
Что такое инверсия наследования (Inheritance Inversion)?
Как в React реализовать двустороннее связывание данных?
Разница между классовым и функциональным компонентами?
Разница между useEffect() и componentDidMount()?
Преимущества хуков?
Правила (ограничения) использования хуков?
Что такое поднятие состояния вверх (Lifting State Up)?
Что делает метод shouldComponentUpdate?
Разница между createElement() и cloneElement()?
Что такое useReducer()?
Как реализовать однократное выполнение операции при начальном рендеринге?
Что такое распределенный компонент?
Расскажите о хуках useCallback(), useMemo(), useImperativeHandle(), useLayoutEffect()?
Как отрендерить HTML код в React-компоненте?
Зачем в setState() нужно передавать функцию?
Для чего предназначен метод registerServiceWorker() в React?
Чем React Router отличается от обычной маршрутизации?
Какие хуки были добавлены в React Router версии 5?
Как передавать пропсы в React Router?
Что такое Reselect и как он работает?
Назовите основную цель React Fiber?
Какие типы данных может возвращать render?
Разница между memo и useMemo?
Что такое синтетические события (SyntheticEvent) в React?
Является ли React реактивным?

*/}


{/*//!          ====    State management (вопросы по менеджменту состояния   ====

Что такое Flux?
Что такое Redux? Ключевые принципы Redux?
Разница между Redux и Flux?
Ключевые концепции Redux?
Что такое «единственный источник истины» (Single Source of Truth)?
Что такое редьюсер (Reducer)?
Разница между React State и Redux State?
Как выглядит поток данных в Redux-приложении?
Плюсы и минусы Redux?

*/}


{/*//!          ====    OOP & FP (вопросы из объектно-ориентированного и функционального программирования)   ====

Основные принципы ООП?
Что такое SOLID?
Разница между классовым и прототипным наследованием?
Однонаправленный поток данных и двусторонняя связь данных? В чем между ними разница?
Что такое функциональное программирование?
Что такое MVC?
Что такое MVVM?
Что такое MVP?
Недостатки паттерна MVW?
Разница между функцией и методом?
Что такое каррирование (Currying)?
Плюсы и минусы ФП и ООП?
Разница между монолитной и микросервисной архитектурами?
Плюсы и минусы монолитной и микросервисной архитектур?
Какие принципы можно использовать вместе с наследованием?
Какие ещё принципы кроме SOLID вы знаете?
Что такое дескрипторы свойств объектов?
В чем заключаются особенности геттеров и сеттеров?
Что такое статический метод класса (static)? Как осуществляется его вызов?
Разница между композицией и наследованием?
Что такое композиция в контексте JavaScript?
Что такое паттерн, или шаблон проектирования?
Типы паттернов?
Что такое GOF паттерны?
Что такое GRASP паттерны?

*/}


{/*//!          ====    TypeScript (вопросы по языку TypeScript)   ====

Что такое TypeScript?
Основные компоненты TypeScript?
Назовите особенности TypeScript?
Плюсы использования TypeScript?
Минусы использования TypeScript?
Типы в TypeScript?
Что такое декораторы?
Поддерживает ли TypeScript перегрузку функций?
Разница между типом (type) и интерфейсом (interface)?
Что такое JSX в TypeScript? Какие режимы JSX поддерживает TypeScript?
Что такое директивы с тремя наклонными чертами (Triple-Slash Directives), их типы?
Что такое внешние объявления переменных (ambient declaration) в TypeScript?
Разница между абстрактным классом (abstract class) и интерфейсом (interface)?
Какие элементы ООП поддерживаются в TypeScript?
Модификаторы доступа в TypeScript?
Разница между внутренним (Internal Module) и внешним модулями (External Module)?
Что такое декораторы в TypeScript?
Как TypeScript поддерживает необязательные и дефолтные параметры в функции?
Что такое перечисление (enum)?
Для чего в TypeScript используется NoImplicitAny?
Разница между типами “Объединение” (|) и “Пересечение” (&)?
Что такое общие типы (generic) в TypeScript?
Какие области видимости доступны в TypeScript?
Что такое .map файл, как и зачем его использовать?
Можно ли использовать TypeScript в серверной разработке?
Для чего в TypeScript используют ключевое слово declare?

*/}


{/*//!          ====    Testing (базовые вопросы по тестированию)   ====

Какие бывают виды тестирования?
Что такое Fake в unit тестировании?
Что такое Stub в unit тестировании?
Что такое Mock в unit тестировании?
Разница между Mock и Stub?

*/}


{/*//!          ====    Практические задачи (решения типовых задач)   ====

Функция проверки палиндрома?
Функция поиска самого короткого слова?
Функция создания инициалов?
Функция суммирования всех цифр числа?
Функция поиска минимального и максимального значений в массиве?
Функция создания набора дубликатов символов строки?
Функция возврата индексов заглавных букв строки?
Функция вывода чисел от 1 до n (n - передаваемый аргумент)
Функция возврата уникальных значений из нескольких массивов?
Функция форматирования цифр в телефонный номер?
Функция поиска гласных букв в строке?
Функция трансформации букв в заглавный регистр?

*/}





{/*//!          ====    Node.js (вопросы по платформе Node.js)   ====

Что такое Node.js?
Разница между Node.js и JavaScript?
Когда следует использовать Node.js?
Плюсы Node.js?
Что такое цикл событий (event loop)?
Разница между асинхронной и неблокирующей функциями?
Преимущества однопоточного веб-сервера по сравнению с многопоточным?
Что такое поток (stream)? Типы потоков в Node.js?
Разница между createReadStream и readFile?
Что такое REPL в Node.js?
Что такое Continuation-passing Style (CPS)?
Как избежать Callback Hell?
Что такое модуль Cluster?
Почему использование блокирующих, или синхронных операций является плохой практикой в Node.js?
Что такое npm?
Разница между module.exports и exports?
Почему в модулях переменные верхнего уровня не являются глобальными?
Что такое циклические зависимости модулей в Node?

*/}

{/*//!          ====    Vue.js (вопросы по фрэймворку Vue.js)   ====

Что такое Vue.js?
Перечислите особенности Vue.js?
Перечислите преимущества Vue.js?
Назовите хуки жизненного цикла компонента во Vue.js?
Опишите жизненный цикл компонента во Vue.js?
Что такое условные директивы (conditional directives)?
Разница между директивами v-show и v-if?
Что такое вычисляемые свойства?
Какие модификаторы событий предоставляет Vue.js?
Какие модификаторы кнопок предоставляет Vue.js?
Какие модификаторы кнопок мыши предоставляет Vue.js?
Что такое компонент?
Что такое пропсы? Типы пропсов?
Разница между локальной и глобальной регистрацией компонента?
Что такое миксины Vue.js?
Что такое Vue CLI?
Что такое Vuex?
Что общего у React и Vue.js?
Разница между React и Vue.js?
Разница между Angular и Vue.js?
Что такое SFC? Какие проблемы он решает?
Как реализована реактивность во Vue2 и Vue3?
Что такое Vue Router? Назовите его особенности?
Что такое вложенные роуты (Routes)?
Что такое фильтры? Как создать цепочку фильтров?
Перечислите варианты коммуникации компонентов во Vue.js?
Какие модификаторы поддерживаются в модели (v-model)?
Что такое плагины? Какие возможности дают плагины для Vue.js?
Что такое слот (<slot>) во Vue.js?
Какие хуки предоставляют директивы?
Что такое аргументы директивных хуков?
Что такое vue-loader?
Что такое рендер-функция (render function)? Преимущества рендер-функции?
Что такое динамические (<keep-alive>) компоненты?
Что такое асинхронные компоненты?

*/}

{/*//!          ====    Angular (вопросы по фрэймворку Angular)   ====

Что такое Angular?
Разница между AngularJS и Angular?
Методы жизненного цикла Angular компонента?
Разница между constructor и ngOnInit?
Что такое Data Binding в Angular?
Разница между AOT и JIT?
Что такое Change Detection, как работает механизм Change Detection?
Что такое ngZone?
Cтратегии обнаружения изменений в Angular?
Что такое декораторы в TypeScript?
Назовите плюсы использования Angular?
Назовите минусы использования Angular?
Что такое внедрение зависимостей в Angular?
Что такое директивы в Angular?
Для чего нужны директивы <ng-template>, <ng-container>, <ng-content>?
Что такое динамические компоненты в Angular?
Назовите последовательность действий для отображения динамического компонента?
Основные формы привязки данных в Angular?
Типы стратегий загрузки в Angular?
Что такое роутинг и как его создать в Angular?
Что такое интерполяция в Angular?
Жизненный цикл в Angular Router?
Разница между RouterModule.forRoot() и RouterModule.forChild()?
Когда нужно использовать ngrx/store?
Разница между умным и презентационным компонентами?
Разница между @ViewChild() и @ContentChild()?
Что такое template variable? Как ее использовать?
Что такое View Encapsulation?
Как можно хранить данные в Angular?
Когда нужно использовать стандартные (template driven), а когда реактивные (reactive) формы?
Как внедрить сервис в Angular приложение?
Как улучшить производительность Angular приложения?
Разница между компонентом и модулем в Angular?
Как защитит компонент активируемый через роутер?
Разницу между Promise и Observable в Angular?
Разница между declarations, providers и import в NgModule?
Что такое реактивное программирование? Как оно используется в Angular?
Лучшие практики безопасности в Angular?
Разница между BehaviorSubject и Observable?
Приведите хороший пример использования NgZone сервиса?
Как сделать компонент для показа сообщений об ошибках?
Как передать данные из дочернего компонента в родительский?
Разница между NgForm, FormGroup, и FormControl?
Что такое Shared модуль?
Почему импортировать сервис из SharedModule в lazy loaded модуль считается плохой практикой?
Разница между switchMap, concatMap и mergeMap?
Разница между BehaviorSubject, ReplaySubject и AsyncSubject?
Принцип работы ChangeDetectionStrategy.onPush?
Что такое пайп (pipe) в Angular? Разница между чистыми и нечистыми пайпами?
Назовите ключевые компоненты Angular?
Разница между компонентом и директивой?
Что такое HttpClient, перечислите его преимущества?
Что такое пользовательский элемент (Custom Element)? Как он работает?
Как трансформировать Angular-компоненты в пользовательские элементы?
Назовите преимущества AOT компиляции?
Преимущества использования сервис-воркеров в Angular приложении?
Что такое платформа в Angular?
Для чего используется связка ngFor и trackBy?

*/}















