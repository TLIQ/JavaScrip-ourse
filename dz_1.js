var Tc = prompt ('Введите температуру в градусах Цельсия', '');
var Tf = (9 / 5) * Tc  + 32;
alert(Tf);


var name, admin;
name = 'Василий';
admin = name;
alert(admin);



// Чему будет равно JS-выражение 1000 + "108"

a=1000; //переменная с типом NUMBER
b="108"; //переменнас с типом STRING

alert(a+b); //при сложение, как я понимаю, происходит неявное приведение типов данных и в итоге выводится 1000108(склеивается число со строкой)

//Самостоятельно разобраться с атрибутами тега script (async и defer)/
document.write ("Атрибут тега script async При наличии атрибута async браузер при возможности запускает скрипт асинхронно. Это означает, что указанный в атрибуте src файл будет выполняться без ожидания загрузки и отображения веб-страницы. В то же время и страница не ожидает результата выполнения скрипта, а продолжает загружаться как обычно.\n Атрибут тега script defer Атрибут defer откладывает выполнение скрипта до тех пор, пока вся страница не будет загружена полностью.")
