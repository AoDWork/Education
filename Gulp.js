 //                                             ========    УСТАНОВКА GULP  ========


{/*                                             ========    NODE, GIT, GULP global  ========

Для установки gulp нужно чтобы на компьютере был установлен node.js для использования пакетного менеджера npm и  
    установить git( можно в гугле прописать git bash и перекинет на сайт gitforwindows) для использования терминала git bash
    (этот терминал позволяет работать без дополнительных разрешений для администратора и выполнять спец. команды типа rm).



Создаем папку для первоначального проекта gulp. Папка не должна называться просто gulp, а также в названии и пути к папке
    не должно быть пробелов(и других спецсимволов) и букв кирилицы. Хотя у автора в пути к папке было users\Evhen Andrikanych\..

    То есть не допустимо //! D:\элКниги\My projects\gulp 
               допустимо     D:\DigitalBooks\My-projects\gulp-2023



Если gulp НЕ был установлен ранее - устанавливаем глобально на компьютер, в git bash терминале(можно найти в пуске) прописываем
    !npm i --global gulp-cli

Если gulp старый то для его обновления нужно написать: npm rm --global gulp


    Открываем папку в VScode(//! нужно запускать редактор от имени администратора)
    
    желательно поменять стандартный терминал на терминал bash как терминал по умолчанию(когда открыт терминал, справа
    выбрать пункт - выбрать терминал по умолчанию) и перезапустить VSCode 
    

    npm init
    Инициализируем проект, при этом создасться файл package.json с теми настройками которые введем после ввода строки init, со 
    всем соглашаемся, можем изменить только автора. Остальное можно будет изменить в package.json уже после если нужно.
    //! npm init - пишем только раз при создании сборки, для последующего использования сборки просто копируем папку со сборкой и
    //! будем писать уже : npm i --save-dev gulp

    //! Возможно для работы с модулями ES6 (то есть чтобы работали импорт и экспорт нужно в этом файле дописать после "main" и перед
    //! scripts, еще строку "type": "module", (по умолчанию идет common). Также main можно изменить название файла с index.js на 
    !название нашего главного файла gulpfile.js)

    npm i --save-dev gulp 
    Эта комманда непосредственно скачиваем файлы gulp в папку проекта( нужно находиться в папке проекта, после установки появиться
    папка - modules. Эту папку не нужно копировать для того чтобы начать работу над новым проектом, для нового проекта нужно будет
    прописать npm install  и все нужные модули(которые пропишуться по мере создания сборки в файле package.json в devDependencies)
    установяться автоматически).

        --save-dev прописывается и при установке плагинов чтобы информация о плагине сохранилась в  devDependencies и тогда если
        через время мы скопируем проект и напишем npm install установились именно те версии плагинов которые были в этом проекте
        при это избегая возможных проблемм с обратной совместимостью (если вервии плагинов обновились и что то изменилось).


*/}
        

{/*                                             ========    СТРУКТУРА ПРОЕКТА  ========

    gulpfile.js
    Создадим в корне файл для конфигурации gulp, он всегда должен называться gulpfile.js (он может быть и index.js который лежит 
        в корне папки - нужно читать документацию, этот файл также можно собрать из различных файлов js через импорт и експорт для 
        подключения отдельных задач в каждом из них). В нем будем прописывать взаимодействие всех плагинов с gulpom.

    Создадим структуру проекта папка app(или src) для работы с проектом и папка dist для готового результата. В app создадим 
    index.html, папки scss(с файлом style.scss), images, fonts, js(с файлом main.js). В index создадим структуру файла и подключим 
    стили в head <link rel="stylesheet" href="css/style.min.css"> 
    и в конце body подключим скрипты <script src="js/main.min.js"></script>
    - эти файлы и папка будет генерироваться автоматически плагинами.

        Вариант 1                   
        []app/src                       
            []scss               
            []images              
            []fonts              
            []js                    
            index.html 
        []dist
        gulpfile.js                     



    Также можно создать папку gulp для различных модулей которые будут соединяться в главном файле галпа, в этой папке можно
    создать папки config и tasks. ...

        Вариант 2
        []src 
            []scss
                []libs  _swiper.scss
                _fonts _footer _global _header _home _modal _reset _vars.scss
                style.scss
            []images
                []select
                cancel.svg
                down-arrow.svg
            []fonts
            []js
                []libs  gsap(lib).min.js jquery ScrollTrigger smooth-scroll swiper
                main.js     
                scripts.js 
            []components
                []Accordion
                []Counter
                []GSAP Animations
                []Header
                []Inputs
                []Modal
                []Phonemask
                []Select
                []StepForm
                []Swiper
                []Switch
                []Tabs
            []html
                _footer.html
                _header.html
                _modal.html
            []gulp
            index.html
        []dist/build
        gulpfile.js


*/}


{/*                                             ========    ПЛАГИНЫ GULP  ========


Gulp-   sass    конвертирование sass, scss файлов в css. В одном видео кроме установки gulp-sass потом из него еще нужно установить
                отдельно sass. Смотреть документацию по плагину.


*/}


{/*                                             ========    НАСТРОЙКА GULPFILE  ========



*/}



{/*                                             ========    НАПОЛНЕНИЕ ФАЙЛОВ HTML по ВЕР.2  ========

    В этой папке хранятся переиспользуемые части html.




    index.html  - в него подключаем переиспользуемые файлы html
        <!DOCTYPE html>
        <html lang="ru">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Title</title>
            <link rel="stylesheet" href="./css/style.min.css">
        </head>

        <body class="main-body">
            <-!--- Header --->
            @@include('./html/_header.html')
            <-!--- Main Page --->
            <main></main>
            <-!--- Footer --->
            <-!--- @@include('./html/_footer.html') --->
        </body>

        <script src=".js/scripts.min.js">

        </html> 




    _header.html
        <header>
            <!-- Header -->
            <div class="header">
                <div class="container">
                    <div class="navbar">
                        <div class="logo"> <a href="#"> Logo Link </a></div>
                        <nav>
                            <ul class="menu">
                                <li class="menu__item"><a href="#" class="menu__item-link" data-scroll>Portfolio</a></li>
                                <li class="menu__item"><a href="#" class="menu__item-link" data-scroll>Info</a></li>
                                <li class="menu__item"><a href="#" class="menu__item-link" data-scroll>About</a></li>
                                <li class="menu__item"><a href="#" class="menu__item-link" data-scroll>Contacts</a></li>
                            </ul>
                        </nav>
                        <button class="burger">
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>




    _footer
        ......
        



    _modal.html
        ....


*/}


{/*                                             ========    НАПОЛНЕНИЕ ФАЙЛОВ SCSS по ВЕР.2  ========

    В папке libs - swiper scss - скопировать содержимое с офф сайта свайпера.

    style.scss - импортируем scss файлы которые используем(не обязательно все)(изначально _vars, reset, global, header, home)
        // Global scss files
        @import './vars';
        @import './reset';
        @import './global';

        // Sections or Pages scss
        @import './header';
        @import './home';
        // @import './footer';

        // Libs
        // @import './libs/swiper';




    _reset  - обнуление(загуглить взять стандартное)
    _home   - изначально пустой, используется дла главной страницы




    _fonts.scss
        @font-face {
            font-family: '';
            src: url('') format('');
        } 




    _footer.scss
        // Footer
        .footer {
            display: block;
        }




    _vars.scss  - переменные
        // Container & Breakpoints
        @use 'sass:math';
        $containerWidth: 1200;
        $containerPadding: 40;
        $containerSidePadding: math.div(containerPadding/2);
        $breakpoint1450: 1449.98 + px;
        $breakpoint992: 991.98 + px;
        $breakpoint768: 767.98 + px;
        $breakpoint480: 479.98 + px;

        // Colors
        $mainColor: #000;

        // Burger Menu
        $burgerBreakpoint: $breakpoint992;
        $burgerColor:  #000;
        $burgerActiveColor: #fff;

        // Fonts
        $fontMain: sans-serif;
        $fontSecondary: '';




    _global.scss    - используемые глобально
        // Container
        .container {
            max-width: ($containerWidth +  $containerPadding) + px;
            width: 100%;
            margin: 0 auto;
            padding: 0  $containerSidePadding + px;

            @media (max-width:  $breakpoint1450){
                max-width: 1200px;
            }

            @media (max-width:  $breakpoint992){
                max-width: 970px;
            }

            @media (max-width:  $breakpoint768){
                max-width: 740px;
            }

            @media (max-width:  $breakpoint480){
                max-width: none;
            }
        }

        // Body & Locked  - для меню(скрытие)
        body {
            font-family: $fontMain;
            &.locked {
                overflow: hidden;
            }
        }

        // Animantions
        // Fade
        @keyframes fade {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }
        



    _header.scss    - стили для хедера(там где навигация и бургер меню)
        // === [ Header Styles ] ===
        .header {
            background-color: gray;

            &.fixed {
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                z-index: 2;
            }
        }
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }
        .logo {
            a{
                color: white;
            }
        }

        // === [ Menu Styles ] ===
        .menu {
            display: flex;
            gap: 30px;

            // .menu__item
            &__item {
                display: flex;
                position: relative;
            }

            // .menu__item-link
            &__item-link {
                color: white;
                display: flex;
                position: relative;
                transition: 0.5s color;
                &:after {
                    position: absolute;
                    content: '';
                    left: 0;
                    bottom: -3px;
                    background: green;
                    height: 1px;
                    width: 100%;
                    transform: scale(0);
                    transition: 0.5s transform;
                }
                &:hover {
                    color: green;
                    &:after {
                        transform: scale(1);
                    }
                }
            }

            // Mobile menu styles
            @media screen and (max-width: $burgerBreakpoint) {
                position: fixed;
                background: $ burgerColor;
                left: 0;
                top: 0;
                height: 100vh;
                width: 100vw;
                display: none;

                &.active {
                    display: flex
                    left: 0;
                    top: 0;
                    height: 100vh;
                    width: 100vw;
                    flex-direction: column;
                    pointer-events: all;
                    justify-content: center;
                    align-items: center;
                    z-index: 2;
                    animation: fade 0.1s linear; 
                }
            }
        }

        ....




    _modal.scss
        // === Modal window ===
        // mf - ???
        .modal__wrapper {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
            // display: none;

            .modal {
                background: white;
                padding: 25px;
                border-radius: 5px;
                height: 350px;
                width: 300px;

                &__title {
                    text-align: center;
                }

                &__close {
                    cursor: pointer;
                    display: flex;
                    ....
                }
            }
        }

        .....











*/}


{/*                                             ========    НАПОЛНЕНИЕ ФАЙЛОВ JS по ВЕР.2  ========

    main.js     - изначально скрипт на бургер меню, тут пишем кастомные скрипты
        // Mobile burger
        function burgerMenu() {
            const burger = document.querySelector('.burger')
            const menu = document.querySelector('.menu')
            const body = document.querySelector('.body')
            burger.addEventListener('click', () => {
                if(!menu.classList.contains('active')) {
                    menu.classList.add('active')
                    burger.classList.add('active')
                    body.classList.add('locked')
                }else{
                    menu.classList.remove('active')
                    burger.classList.remove('active')
                    body.classList.remove('locked')
                }
            })
            // Тут ставим брейкпоинт навбара
            window.addEventListener('resize', () => {
                if(window.innerWidth > 991.98) {
                    menu.classList.remove('active')
                    burger.classList.remove('active')
                    body.classList.remove('locked')
                }
            })
        }
        burgerMenu()





    scripts.js  - сюда @@include('main.js') и другие библиотеки, потом он минимизируется и подключается в index 
        // Custom scripts
        @@include('main.js')



        Для подключения локального файла 
        @@include('./libs/gsap(lib).min.js')


        Для подключения через CDN ( если нет локального файла) с офф сайта библиотеки копируем путь к скрипту и вставляем в index в
        body перед scripts.min.js (основным нашим файлом)

        <script src="https://unpkg.com/imask"></script>  - библиотека PnoneMask

        Также можно подключить и библиотеку если ее файл есть у нас локально, в основном это делается если не хотим тянуть
        на все страницы все библиотеки, тоесть можно подключить библиотеку только на той странице где она используется.

*/}


{/*                                             ========    НАПОЛНЕНИЕ ФАЙЛОВ Components по ВЕР.2  ========

    В каждой папке лежат файлы скопировав содержимое которых в нужные файлы можно "подключить" библиотеку.
    

    Например в Header 3 файла: header.html -> _header.html, header.js -> main.js, header.scss -> _header.scss.
        В файле header.js кроме того кода который есть в main.js дописано еще:

        // Вызываем эту ф-ю если нужо зафиксировать меню при скролле
        function fixedHeader() {
            const nav = document.querySelector('.header')

            // Указываем в пикселях сколько нужно проскролить чтобы меню стало фиксированным
            const breakpoint = 1
            if (window.scrollY >= breakpoint) {
                nav.classList.add('fixed')
            } else {
                nav.classList.remove('fixed')
            }
        }
        window.addEventListener('scroll', fixedHeader)





        


*/}