//Single Comment
/*
Multiple Comment 1
Multiple Comment 2
*/
// console.log("loglama");
// console.info("Bilgilendirme");
// console.warn("Uyarı");
// console.error("Hata");

// alert("pop-up bilgilendirme-1")
// window.alert("pop-up bilgilendirme-2") //window en tepedeki obje

// document.writeln("ekrana yazı yazıyorum")

// Variable

/** 
var result = 4343;
console.log(typeof result + " ==> " + result);

var result = 43.43;
console.log(typeof result + " ==> " + result);

var result = true;
console.log(typeof result + " ==> " + result);

var result = "Js öğrenmek";
console.log(typeof result + " ==> " + result);

//Naming Convensition

var deneme = "JS Data";
console.log(deneme);

var deneme44 = "JS Data";
console.log(deneme44);

var _$deneme44 = "JS Data";
console.log(_$deneme44);

var denemeVerisi = "JS Data";
console.log(denemeVerisi);

// var 44deneme = "JS Data" sayıyla başlayamazsın

//whoisting

result2 = 56;
var result2;

*/

/////////////////////////////////////////////////

// Operators

// + - * ** / %
// x++
// x--
// ++x
// --x
// = atama
// == EŞİT (TüRÜNE BAKMA)
// === EŞİT (TÜRÜNE BAK)
// ! DEĞİL
// && ve || veya


/** 
var number1 = 40;
var number2 = 5;

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 / number2);
console.log(number1 * number2);
console.log(number1 % number2);

var userData = Number(prompt("Lütfen birşeyler  yazınız: "))
console.error(userData + 50);
*/

// // undefined
// var result;
// console.log(result);

// //NaN: Not a Number
// var result= "asd"/3;
// console.log(result);

// // isNaN
// var result = 4;
// console.log(isNaN(result)); // falsedır çünkü sayı çıkar...

// // infinity

// console.log(5/0);

// //Math
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.min(1,2999,234234,-1));
// console.log(Math.max(12,14,2,13,18));
// console.log(Math.sqrt(81));
// console.log(Math.abs(-31));
// console.log(Math.pow(2,5));
// console.log(Math.floor(3.9));
// console.log(Math.ceil(3.1));
// console.log(Math.round(6.4));
// console.log(Math.round(6.1));
// console.log(Math.sin(90));

// console.log(Math.round(Math.random()*9+1));


// Number 
// var sayi=15000;
// console.log(sayi);

// var sayi2=1.5E+4;
// console.log(sayi2);

// binary,octal,decimal, hexadecimal

// binary : 0-1
// var binary=0b00011;
// console.log(binary);

// octal : 0-1-2-3-4-5-6-7
// var octal=0o7612;
// console.log(octal);

// decimal : 0-1-2-3-4-5-6-7-8-9
// var decimal=123456;
// console.log(decimal);

// hexdecimal : 0-1-2-3-4-5-6-7-8-9-A-B-C-D-E-F
// var hexadecimal=0xffa;
// console.log(hexadecimal);

//Cast

// console.log(Number("10.2") + 10);
// console.log(parseInt("10.2") + 10);

// console.log(String(30) + 10);
// var number = 30;
// console.log(number.toString()+10);



//  var, let, const

// var data1=11;
// console.log(data1);

// var data1=22;
// console.log(data1);

// let data2=33;
// console.log(data2);

// let data3=33;
// data3=44;
// console.log(data3);

// const data4=55;
// console.log(data4);

// const data5=55;
// data5=66;
// console.log(data5);


//String
// let str = " js ÖĞreniyorum js ";
// console.log(str);
// console.log(str.length);
// console.log(str.trim().length); //başındaki ve sonundaki boşlukları alır
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// console.log(str.charAt(0));

// console.log(str.indexOf("js"));
// console.log(str.lastIndexOf("js"));

// console.log(str.concat("sona")); //sona ekleme yapar
// console.log(str.replace("js", "javascript",));

// console.log(str.substring(0,6));

// Function 

// function fonksiyon(){
//     console.log("deneme");
// }

// fonksiyon();

// function salut(adi){
//     console.log("hoşgeldin " + adi);
// }

// salut("Fatih");

// function returnlufonk(){
//     return "deneme";
// }

// let result = returnlufonk();
// console.log(result);


// //Normal Function
// function normal(){};

// //Anonymous Function
// let anonymous = function(){};

// //Arrow function
// let arrow = ()=>{};