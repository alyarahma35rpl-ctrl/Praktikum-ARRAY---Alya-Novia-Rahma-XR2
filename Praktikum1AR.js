// let teman = ['Budi','Ani','Citra','Dedi','Eka'];
// console.log('Jumlah teman:'+ teman.length);
// console.log('Teman pertama:'+ teman[0]);
// console.log('Teman terakhir:'+ teman[teman.length-1]);
// for (let i = 0; i < teman.length; i++) {
// console.log((i + 1) + '. ' + teman[i]);}

let nilaiUjian =[85,90,78,92,88];
let total = 0;
let tertinggi=nilaiUjian[0];
let terendah=nilaiUjian[0];

for (let i = 0; i < nilaiUjian.length; i++) {
    total += nilaiUjian[i];
    if (nilaiUjian[i] > tertinggi) {
        tertinggi = nilaiUjian[i];
    }
    if (nilaiUjian[i] < terendah) {
        terendah = nilaiUjian[i];
    }}

let rataRata = total / nilaiUjian.length;

console.log('Daftar Nilai: ' + nilaiUjian);
console.log('Total Nilai: ' + total);
console.log('Rata-rata: ' + rataRata);
console.log('Nilai Tertinggi: ' + tertinggi);
console.log('Nilai Terendah: ' + terendah);

let campur = ['Budi', 16, true, 3.5];
for (let i = 0; i < campur.length; i++) {
    console.log(campur[i] + ' : ' + typeof campur[i]);
}

console.log('Apakah variabel campur adalah array? ' + Array.isArray(campur));