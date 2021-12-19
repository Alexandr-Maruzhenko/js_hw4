function task_item_1() {
    let arr = [1, 2, 3, 4, 5];
    document.write('<h2>1. Выводим элементы массива (' + arr + ') на экран, циклом "FOR".</h2 \>');
    for (let i = 0; i < arr.length; i++){
        document.write(arr[i] + '<br /\>');
    }
}

function task_item_2() {
    let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
    document.write('<h2>2. Из массива с числами (' + arr + '), выбираем те числа которые больше -10, но меньше -3.</h2 \>');
    for (let i = 0; i < arr.length; i++){
        if( (arr[i] > -10) && (arr[i] < -3) ) {
            document.write(arr[i] + '<br /\>');
        }
    }

}

function task_item_3() {
    let arr = [],
        arr2 = [],
        index = 0,
        result = 0;

    for (let i = 23; i <= 57; i++){
        arr[index] = i;
        result += arr[index];
        index++;
    }

    let j = 23;
    index = 0;
    while (j <= 57){
        arr2[index] = j;
        j++;
        index++;
    }
    document.write('<h2>3. Создаём массивы и заполняем их значениями от 23 до 57 циклами "FOR" и "WHILE". Находим сумму элементов массивов.</h2 \>');
    document.write('Полученный массив циклом "FOR": ' + arr + '<br /\><br /\>')
    document.write('Полученный массив циклом "WHILE": ' + arr2 + '<br /\><br /\>')
    document.write('Сумма чисел массива = ' + result + '<br /\>')
}

function task_item_4() {
    let arr = ['10', '20', '30', '50', '235', '3000'],
        str = '';
    document.write('<h2>4. Из массива (строчного типа) с цифрами (' + arr + '), выводим на экран те которые начинаются на цифры 1, 2 или 5.</h2 \>');
    for (let i = 0; i < arr.length; i++){
        str = arr[i];
        if ( (str[0] === '1') || (str[0] === '2') || (str[0] === '5') ){
            document.write(arr[i] + '<br /\>');
        }
    }
}

function task_item_5() {
    let arr = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
    document.write('<h2>5. Циклом "for" выводим все дни недели (выходные дни - жирным).</h2 \>');
    for (let i = 0; i < arr.length; i++){
        if ( (arr[i] !== 'СБ') && (arr[i] !== 'ВС')){
            document.write(arr[i] + '<br /\>');}
        else{
            document.write('<b>' + arr[i] + '</b \>' + '<br /\>');
        }
    }
}

function task_item_6() {
    let arr = ['зима','весна','лето'];
    arr.push('осень');
    document.write('<h2>6. Получаем последний элемент массива (' + arr + ').</h2 \>');
    document.write('Последним элементом массива (' + arr + '), является элемент (' + arr[arr.length-1] + ').');
}

let count = 0,
    string = '',
    array = [];

function task_item_7(value) {
    value = Number(value);
    if (!isNaN(value)) {
        array[count] = value;
        string = string + ',' + String(value);
        if (!count) string = string.substr(1, 3);
        count++
        document.getElementById("myText").value = "";
        document.getElementById("getting_value").innerHTML = 'Ваш начальный массив: ' + string;
    }else {
        document.getElementById("myText").value = "Поле ввода отключено.";
        document.getElementById('myText').setAttribute('disabled', 'disabled');
        alert('Отлично! Сортируем массив и выводим на экран.');

        array.sort(function (a, b) {
            return a-b; // // Сортировка числовых массивов
        });
        document.getElementById("output_value").innerHTML = 'Ваш отсортированный массив: ' + array;
    }
}

function task_item_8() {
    let arr = [12, false, 'Текст', 4, 2, -5, 0],
        i = arr.length - 1;
    document.write('<h2>8. Выводим в обратном порядке массив (' + arr + ').</h2 \>');
    document.write('При помощи цикла WHILE: (')
    while (i >= 0){
        if (i !== 0) {
            document.write(arr[i] + ',');
        }else {
            document.write(arr[i] + ')<br /\><br /\>');
        }
        i--;
    }
    document.write('При помощи метода REVERSE: (' + arr.reverse() + ')');
}

function task_item_9() {
    let arr = [5, 9, 21, , , 9, 78, , , , 6],
        count = 0;
    document.write('<h2>9. Находим количество нулевых (пустых) элементов в массиве  (' + arr + ').</h2 \>');
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === undefined){
            count += 1;
        }
    }
    document.write('Количество нулевых (пустых) элементов в заданном масиве = ' + count);
}

function task_item_10() {
let arr = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];

let indexFirstElement= arr.indexOf(0),
    indexLastElement = arr.lastIndexOf(0);

let sum = 0;
    document.write('<h2>10. Находим сумму элементов массива (' + arr + ') между двумя нулями.</h2 \>');
    if (indexLastElement > indexFirstElement) {
        for (let i = indexFirstElement + 1; i < indexLastElement; i++) {
            sum = sum + arr[i];
        }
        document.write('Сумма чисел между первым и последним нулём = ' + sum);
    }else if ( (indexFirstElement === -1) && (indexLastElement === -1) ){
        alert('В данном массиве ВООБЩЕ нет нулей! Не дурите голову!')
    }else {
        alert('В данном массиве только один нуль! Будьте внимательны!')
    }
}

function task_item_11(value) {
    let len = Number(value);                            // на всякий случай преобразование в число
    let arrTriangle = new Array(len);                   // создаём многомерный массив
    for (let x = 0; x < arrTriangle.length; x++) {      // в зависимости
        arrTriangle[x] = new Array((len * 2 - 1));      // от высоты, переданной
    }                                                   // в аргументе функции

    let i = 0,
        j = 0,
        empty = '',                                     // объявляем переменные
        birdie = '',
        fullString = '';

    while (i < len){                                    // цикл прохода по всему массиву
        empty = '';
        birdie = '';

        for (j = 0; j < len - i - 1; j++) {             // в зависимости от номера строки
            empty = empty + " ";                        // формируем нужное количество пробелов
        }

        for (j = 0; j < 2 * i + 1; j++) {               // в зависимости от номера строки
            birdie = birdie + "^";                      // формируем нужное количество ёлок (^)
        }

        fullString = empty + birdie + empty;            // объединяем (пробелы + елки + пробелы) в полную строку
        arrTriangle[i] = fullString.split('');  // из полной строки формируем элементы ВЛОЖЕННОГО массива на уровне i
        i++;
    }

    for (i = 0; i < arrTriangle.length; i++) {          // цикл для прохода по длинне (высоте) главного массива (переменная i)
        for (j = 0; j < len * 2 - 1; j++) {             // цикл для прохода по длинне (ширине) вложенного массива (переменная j)
            if (arrTriangle[i][j] !== ' '){             // если элемент в массиве не равен " ",
                document.write(arrTriangle[i][j]);      // то выводим его на экран
            }else {
                document.write('&nbsp');                // иначе выводим символ-мнемоник "неразрывный пробел"
            }
        }
        document.write('<br /\>');                      // после вывода всех элементов вложенного массива делаем перевод строки
    }
}
