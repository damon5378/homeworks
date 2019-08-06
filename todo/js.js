let task1 = document.querySelector('#task1');

task1.innerHTML = task1.innerHTML.replace(/функ[а-яё]+/gi, '<strong>функция</strong>');

// время и так уже обернуто в <b></b>. а как получить именно время 25:35 - не знаю
let task2 = document.querySelector('#task2');
task2.innerHTML = task2.innerHTML.replace(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/gi, '<b>25:35</b>');


//нашел такой код на поиск текста в кавычках. а как написать, чтобы mark применялся - не знаю. в первом задании понятно,
// указали конкретно слово
let body = document.body;
body.innerHTML = body.innerHTML.replace(/\(\s*(?:"(?:[^"\\]+|\\.)*"|'(?:[^'\\]+|\\.)*')(?:\s*,\s*(?:"(?:[^"\\]+|\\.)*"|'(?:[^'\\]+|\\.)*'))*\s*\)/gi, '<mark>" "</mark>');

//так получилось, но одну ссылку, если указать конкретно
let body2 = document.body;

body2.innerHTML = body2.innerHTML.replace(/http\:\/\/[\w\-\.\/]+/gi, '<a href="http://www.psychologies.ru/articles/tsirkadnyie-ritmyi-kogda-luchshe-vstavat-est-rabotat-i-zanimatsya-sportom">www.psychologies.ru</a>');


//так не получается, перебивается. а как одним кодом сделать, чтобы влияло на все ссылки - не знаю
// let body3 = document.body;

// body3.innerHTML = body3.innerHTML.replace(/http\:\/\/[\w\-\.\/]+/gi, '<a href="http://sleep.ru">sleep.ru</a>');
console.log('task1');
console.log('task2');
console.log('body');
console.log('body2');

//задание про цвет, что-то даже мыслей нету


