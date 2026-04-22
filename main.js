// var a = prompt("bog'ni tomnini yoz, men senga yuzini topib beraman")
// var natija = a*a
// console.log(natija);

// 1. kvadrat shaklidagi bog'ning tomoni 10m. Bog'ning yuzini topadigan dastur tuzilsin.

const masala2 = document.querySelector(".masala2");

masala2.addEventListener("click", () => {
  let a = prompt("bog'ni yuzini kiriting");
  let yuzi = a * a;
  console.log(yuzi);

  console.log(`Sizning bog'ingizni yuzi ${yuzi}.`);
  const masala2 = document.querySelector(".masala2");
  masala2.textContent = `Sizning bog'ingizni yuzi ${yuzi} metr.`;
});

// 2. Foydalanuvchidan Ismi va yoshi so'ralsin va console da "Assalomu alaykum ISM. Siz falonchi yilda tug'ilgansiz" deb chiqsin.
// let ism = prompt("ismiz");
// let yosh = prompt("yoshiz");
// let hisob = 2026 - yosh;

const title = document.querySelector(".title");

title.addEventListener("click", () => {
  let ism = prompt("ismiz");
  let yosh = prompt("yoshiz");
  let hisob = 2026 - yosh;

  console.log(`Assalomu alaykum ${ism}. Siz ${hisob} yilda tug'ilgansiz.`);

  const title = document.querySelector(".title");

  title.textContent = `Assalomu alaykum ${ism}. Siz ${hisob}-yilda tug'ilgansiz.`;
});

// 3. foydalanuvchidan 3 ta son so'ralsin bu sonlarning yig'indisi va ko'paytmasining o'rta arifmetigi hisoblansin.

const orta = document.querySelector(".orta");
orta.addEventListener("click", () => {
  let a1 = +prompt("1-son");
  let b2 = +prompt("2-son");
  let c3 = +prompt("3-son");
  let arifmetik = (a1 + b2 + c3) / 3;
  console.log(arifmetik);
  orta.textContent = `O'rta arifmetikgi ${arifmetik}`;
});

// 4. kvadrat shaklidagi bog'ning tomoni 8m. Bog'ning yuzi va perimetrini topadigan dastur tuzilsin.

let bog2 = 8;
let perimetr4 = 2 * (bog2 + bog2);
let yuz4 = bog2 * bog2;
console.log(yuz4);
let masala4 = document.querySelector(".masala4");
let yuzi4 = document.querySelector(".yuzi4");
let per4 = document.querySelector(".per4");
yuzi4.addEventListener("click", () => {
  alert(yuz4);
});

per4.addEventListener("click", () => {
  alert(perimetr4);
});

// 5. Foydalanuvchidan Ismi va  yoshi va kasbi so'ralsin va console da "Assalomu alaykum ISM. Siz falonchi yilda tug'ilgansiz kasbingiz ——" deb chiqsin.

let masala5 = document.querySelector(".masala5");

masala5.addEventListener("click", () => {
  let ism5 = prompt("Ismingiz");
  let yosh5 = prompt("Yoshingiz");
  let kasb5 = prompt("Kasbingiz");
  let hisob5 = 2026 - yosh5;
  console.log(
    `Assalomu alaykum ${ism5}. Siz ${hisob5} yilda tug'ilgansiz. Sizning kasbingiz ${kasb5}.`,
  );
  masala5.textContent = `Assalomu alaykum ${ism5}. Siz ${hisob5} yilda tug'ilgansiz. Sizning kasbingiz ${kasb5}.`;
});

// 6. foydalanuvchidan 3 ta son so'ralsin bu sonlarning yig'indisi va ko'paytmasining o'rta arifmetigi hisoblansin.

let masala6 = document.querySelector(".masala6");
masala6.addEventListener("click", () => {
  let son1 = +prompt("birinchi son");
  let son2 = +prompt("ikkinchi son");
  let son3 = +prompt("uchinchi son");
  let yigindi = son1 + son2 + son3;
  let kopaytma = son1 * son2 * son3;
  let arifmetik6 = (son1 + son2 + son3) / 3;

  console.log(
    `Sonlarning yig'indisi ${yigindi}, kopaytmasi ${kopaytma}, o'rta arifmetigi ${arifmetik6}.`,
  );
  masala6.textContent = `Sonlarning yig'indisi ${yigindi}, kopaytmasi ${kopaytma}, o'rta arifmetigi ${arifmetik6}.`;
});

// 7. ikkita ixtiyoriy sonlarni yig'indisi, ko'paytmasi va har bir sonning kvadratlari aniqlansin.

let masala7 = document.querySelector(".masala7");

masala7.addEventListener("click", () => {
  let a7 = +prompt("birinchi son");
  let b7 = +prompt("ikkinchi son");

  let yigindi7 = a7 + b7;
  let kopaytma7 = a7 * b7;

  let kvadrat7 = `${a7 ** 2}, ${b7 ** 2}`;

  console.log(
    `Sonlarning yig'indisi = ${yigindi7}, ko'paytmasi = ${kopaytma7}, kvadrati = ${kvadrat7}.`,
  );
  masala7.textContent = `Sonlarning yig'indisi = ${yigindi7}, ko'paytmasi = ${kopaytma7}, kvadrati = ${kvadrat7}.`;
});

// 8. 2 ta uchburchak berilgan. uchburchaklarning perimetrlari o'rta arifmetigi topilsin.
// 1-uchburchak tomonlari 3, 4, 5
// 2-uchburchak tomonlari 6, 8 , 10

let masala8 = document.querySelector(".masala8");

masala8.addEventListener("click", () => {
  let uch1 = 3 + 4 + 5;
  let uch2 = 6 + 8 + 10;
  let perimetr8 = (uch1 + uch2) / 2;
  console.log("Javob=", perimetr8);
  console.log(`Uchburchakni o'rta arifmetigi = ${perimetr8}`);
  masala8.textContent = `Uchburchakni o'rta arifmetigi = ${perimetr8}`;
});

// 9. foydalanuvchidan yoshi so'ralsin va unga siz 50 ga kirishizga falon yil bor deb chqarib bersin.

let masala9 = document.querySelector(".masala9");

masala9.addEventListener("click", () => {
  let yosh9 = prompt("yoshingiz");
  let hisob9 = 50 - yosh9;
  console.log(
    `Sizning yoshingiz ${yosh9}, 50 ga kirishingizga ${hisob9} yil bor.`,
  );
  masala9.textContent = `Sizning yoshingiz ${yosh9} da,   50 ga kirishingizga ${hisob9} yil bor.`;
});

// 10. let yordamida o‘z ismingizni saqlang va alert orqali ekranga chiqaring.

let masala10 = document.querySelector(".masala10");

masala10.addEventListener("click", () => {
  let ism10 = prompt("Ismingiz");
  let hisob10 = alert(`Sizning ismingiz -  ${ism10}`);
  console.log(`Sizning ismingiz -  ${ism10}`);
  masala10.textContent = `Sizning ismingiz -  ${ism10}`;
});

// 11. Foydalanuvchidan bitta son so‘rang va uning kvadratini alert bilan chiqaring.

let masala11 = document.querySelector(".masala11");

masala11.addEventListener("click", () => {
  let son11 = prompt("son");
  let hisob11 = alert(`Kvadrati = ${son11 * son11}`);
  console.log(`Kvadrati = ${son11 * son11}`);
  masala11.textContent = `Kvadrati = ${son11 * son11}`;
});

// 12. Foydalanuvchidan ism va familiyasini alohida prompt bilan so‘rab, "Familiya Ism" shaklida alert bilan chiqaring.

let masala12 = document.querySelector(".masala12");

masala12.addEventListener("click", () => {
  let ism12 = prompt("Ismingiz");
  let familya = prompt("Familya");
  let hisob12 = alert(`Ismingiz = ${ism12}, Familyangiz = ${familya}.`);
  console.log(`Ismingiz = ${ism12}, Familyangiz = ${familya}.`);
  masala12.textContent = `Ismingiz = ${ism12}, Familyangiz = ${familya}.`;
});
