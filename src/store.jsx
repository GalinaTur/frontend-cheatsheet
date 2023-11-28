const store = [
    {
        title: "HTML",
        subsections: [
            {
                title: 'Основне',
                questions: [
                    {
                        question: 'Що таке DOM?',
                        answer: <div><p>DOM - об'єктна модель документа (Document Object Model). DOM це зовсім інше представлення веб-сторінки ніж HTML код.
                            Браузер по вказаній URL адресі відправляє запит і отримує (завантажує) з сервера веб-сторінку у вигляді HTML коду, який часто називається вихідний код сторінки.
                            І якщо у коді вказані інші файли такі як стилі css, js - то завантажує і їх. І уже з завантаженого з сервера HTML коду браузер формує - DOM.
                            Браузер створює DOM для того щоб за допомогою JavaScript можна було швидко маніпулювати веб-документом: шукати потрібний елемент, додавати нові елементи, отримати наступний дочірний елемент і т.п..
                            DOM схожий на вихідний код HTML але не є ним, а лише формується з нього. DOM має деревоподібну ієархію. Документ DOM складається з вузлів Node. Кожен вузол може містити у собі вбудований вузол, елемент, текст чи коментар.
                        </p>
                            <a target='_blank' href='https://w3schoolsua.github.io/js/js_htmldom.html#gsc.tab=0'>Click!</a>
                        </div>
                    },
                ]
            }
        ]
    },
    {
        title: "CSS",
        subsections: [
            {
                title: 'Основне',
                questions: [
                    {
                        question: 'Що таке специфічність селекторів?',
                        answer: <div><p>Специфічність – це алгоритм, що використовується браузерами для визначення того оголошення CSS, яке найбільше відповідає елементові. І котре, своєю чергою, визначає те значення властивості, яке буде застосовано до елемента. Алгоритм специфічності обчислює вагу селектора CSS, щоб визначити, яке правило серед суперницьких оголошень CSS застосовується до елемента.</p>
                            <a target='_blank' href='https://developer.mozilla.org/ru/docs/Web/CSS/Specificity'>Click!</a>
                        </div>
                    },
                    {
                        question: 'What are the advantages of External Style Sheets?',
                        answer: `You can create classes for reusing it in many documents.
                        By using it, you can control the styles of multiple documents from one file.
                        In complex situations, you can use selectors and grouping methods to apply styles.`
                    },
                ]
            }
        ]
    },
    {
        title: "Javascript",
        subsections: [
            {
                title: 'Основне',
                questions: [
                    {
                        question: 'Які існують типи даних у JS?',
                        answer: <div>Стандарт ECMAScript виокремлює 8 типів:
                            <ul>7 типів даних являються примітивами:
                                <li><i>undefined</i> (невизначений тип) - змінна, якій не присвоїли значення.</li>
                                <li><i>Boolean</i> - логічний (булевий) тип даних: <code>true</code> і <code>false</code>;</li>
                                <li><i>Number</i> - числа цілі, наприклад: <code>3</code> або з плаваючою крапкою наприклад: <code>1.6</code>;</li>
                                <li><i>String</i> - рядок, символьний тип даних, тобто послідовність символів;</li>
                                <li><i>BigInt</i> - представляє числові значення, які завеликі для примітиву <i>Number</i>. Створюються додаванням <code>n</code> в кінці</li>
                                <li><i>Symbol</i> - унікальний та незмінний тип даних, який може бути використаний як ідентифікатор для властивостей об'єктів. З'явився в специфікації ES6);</li>
                                <li><i>null</i> - нульове значення, "пусте значення".</li>
                                Для визначення типу використовують <code>typeof</code> (окрім <i>null</i>).
                            </ul>
                            <ul>1 непримітивний тип даних:
                                <li><i>Object</i> - набір властивостей, що використовується не тільки для зберігання даних, але й для створення інших структур, де будь-яка структура створюється з використанням ключового слова <code>new</code>: <code>new Object</code>, <code>new Array</code>, <code>new Map</code>, <code>new Set</code>, <code>new WeakMap</code>, <code>new WeakSet</code>, <code>new Date</code> та безліч інших структур;.</li>
                            </ul>
                            <a target='_blank' href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures'>Click!</a>
                        </div>
                    },

                ]
            }
        ]
    },
    {
        title: "Загальне",
        subsections: [
            {
                title: 'HTTP',
                questions: [
                    {
                        question: 'Що таке HTTP?',
                        answer: (
                            <p><i>Hypertext Transfer Protocol</i> - Протокол передачі гіпертексту (HTTP) призначений для забезпечення зв’язку між клієнтами та серверами.
                                HTTP працює як протокол запиту-відповіді між клієнтом та сервером.
                                Веб-браузер може бути клієнтом, а додаток на комп’ютері, на якому розміщений вебсайт, може бути сервером.
                                Приклад: клієнт (браузер) відправляє HTTP-запит на сервер; потім сервер повертає відповідь клієнту. Відповідь містить інформацію про стан запиту і може також містити запитуваний контент.
                            </p>)
                    },
                    {
                        question: 'Які версії HTTP-протоколу існують?',
                        answer: <div><i>HTTP/1.0</i>, <i>HTTP/1.1</i> та <i>HTTP/2</i>.
                            <ul>Властивості HTTP/1.1:
                                <li>HTTP 1.0 допускає лише один запит на з'єднання, а HTTP 1.1 допускає кілька запитів.</li>
                                <li>HTTP 1.1 підтримує постійні з'єднання, що дозволяє швидше завантажувати веб-сайти, а HTTP 1.0 – ні.</li>
                                <li>HTTP 1.1 має ефективнішe стискання заголовків, ніж HTTP 1.0, що знижує використання смуги пропускання.</li>
                                <a target='_blank' href='https://askanydifference.com/ru/difference-between-http-1-0and-http-1-1-with-table/'>Click!</a>
                            </ul>
                            <ul>Властивості HTTP/2:
                                <li>Можливість вибирати протокол, наприклад, HTTP/1.1, HTTP/2 чи інший.</li>
                                <li>Висока сумісність з HTTP/1.1 — методи, коди статусів, поля хедерів.</li>
                                <li>Поліпшення швидкості завантаження завдяки стисненню хедерів запитів, бінарному протоколу, надсиланню даних з ініціативи сервера, блокуванню пакетів та запиту багаторазової передачі даних.</li>
                                <a target='_blank' href='https://vps.ua/blog/ukr/protocol-http-2-benefits/'>Click!</a>
                            </ul>
                        </div>
                    },
                    {
                        question: 'Які є методи HTTP-запитів?',
                        answer: <div>
                            <ul>Існує 7 HTTP методів:
                                <li><i>GET</i> - використовується для запиту даних від вказаного ресурсу.</li>
                                <li><i>POST</i> - використовується для надсилання даних на сервер для створення/оновлення ресурсу.</li>
                                <li><i>PUT</i> - використовується для надсилання даних на сервер для створення/оновлення ресурсу.
                                    Різниця між POST та PUT полягає в тому, що PUT-запити є ідентичними. Тобто, виклик одного і того ж запиту PUT кілька разів завжди буде призводити до одного й того ж результату. Напроти, виклик POST-запиту неодноразово має побічні ефекти від створення одного й того ж ресурсу кілька разів.</li>
                                <li><i>DELETE</i> - видаляє вказаний ресурс.</li>
                                <li><i>HEAD</i> - майже ідентичний GET, але без тіла відповіді. Корисний для перевірки того, що буде повернуто запитом GET, перед тим, як фактично виконати запит GET</li>
                                <li><i>PATCH</i> - унікальний та незмінний тип даних, який може бути використаний як ідентифікатор для властивостей об'єктів. З'явився в специфікації ES6);</li>
                                <li><i>OPTIONS</i> - описує параметри зв’язку для цільового ресурсу.</li>
                            </ul>
                        </div>
                    },
                    {
                        question: 'Які є коди відповіді (стану) HTTP?',
                        answer: <div>Код відповіді (стану) HTTP показує, чи був успішно виконаний певний запит HTTP. Коди згруповані у 5 класів:
                            <ul>
                                <li>Інформаційні 100 – 199</li>
                                <li>Успішні 200 – 299</li>
                                <li>Перенаправлення 300 - 399</li>
                                <li>Клієнтські помилки 400 – 499</li>
                                <li>Серверні помилки 500 - 599</li>
                                <a target='_blank' href='https://developer.mozilla.org/ru/docs/Web/HTTP/Status'>Click!</a>
                            </ul>
                        </div>
                    },
                    {
                        question: 'Що таке Cross-Origin Resource Sharing? Як усунути проблеми з CORS?',
                        answer: <div><p><i>Cross-Origin Resource Sharing</i> (CORS або “спільне використання ресурсів різними джерелами”) – це контрольований та застосовуваний у примусовому порядку клієнтом (браузером) механізм забезпечення безпеки на основі HTTP.
                            Він дозволяє службі (API) вказувати будь-яке джерело (origin), крім себе, з якого клієнт може запитувати ресурси.</p>
                            <p>Щоб браузер дозволив доступ до ресурсів з іншого джерела, він повинен отримати певні заголовки у відповіді від сервера, які вказують, чи дозволяє сервер запити з інших джерел:</p>
                            <ul>
                                <li><code>Access-Control-Allow-Origin</code> вказує, яке джерело може отримувати ресурси.</li>
                                <li><code>Access-Control-Allow-Methods</code> вказує, які HTTP-методи дозволені.</li>
                                <li><code>Access-Control-Allow-Headers</code> вказує, які заголовки запитів дозволено. </li>
                                <li><code>Access-Control-Allow-Credentials</code> вказує, чи дозволено надсилання файлів cookie. Типово: false.</li>
                                <li><code>Access-Control-Max-Age</code> вказує в секундах, як довго має кешуватися результат запиту. Типово: 0.</li>
                                <a target='_blank' href='https://habr.com/ru/companies/otus/articles/706908/'>Click!</a>
                            </ul>
                        </div>
                    },
                    {
                        question: 'Що таке cookie і який їх максимальний розмір?',
                        answer: <div><p>HTTP cookie (web cookie, cookie браузера) - це невеликий фрагмент даних, який сервер надсилає браузеру користувача. Браузер може зберегти цей фрагмент у себе та відправляти на сервер з кожним наступним запитом. Це, зокрема, дозволяє дізнатися, чи з одного браузера надійшло кілька запитів (наприклад, для автентифікації користувача).</p>
                            <p>Куки часто використовуються для:</p>
                            <ul>
                                <li>Управління сеансом (логіни, кошики для віртуальних покупок)</li>
                                <li>Персоналізації (уподобання користувача)</li>
                                <li>Трекінгу (відстеження поведінки користувачів)</li>
                            </ul>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Web Browser</th>
                                        <th>Maximum cookies</th>
                                        <th>Maximum size per cookie</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Google Chrome</td>
                                        <td>180</td>
                                        <td>4096 bytes</td>
                                    </tr>
                                    <tr>
                                        <td>Firefox</td>
                                        <td>150</td>
                                        <td>4097 bytes</td>
                                    </tr>
                                    <tr>
                                        <td>Opera</td>
                                        <td>180</td>
                                        <td>4096 bytes</td>
                                    </tr>
                                    <tr>
                                        <td>Android</td>
                                        <td>50</td>
                                        <td>4096 bytes</td>
                                    </tr>
                                </tbody>
                            </table>
                            <a target='_blank' href='https://developer.mozilla.org/ru/docs/Web/HTTP/Cookies'>Click!</a>
                        </div>
                    },
                ]
            }
        ]
    },
]

export default store;