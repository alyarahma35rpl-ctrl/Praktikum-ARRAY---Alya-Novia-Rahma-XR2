let siswa = ['Budi', 'Ani', 'Citra', 'Dedi'];
let nilai = [
    [80, 75, 90], // Budi: MTK, PBO, Basis Data
    [85, 90, 95], // Ani
    [70, 80, 85], // Citra
    [75, 85, 80]  // Dedi (Siswa baru)
];

console.log('Rata-rata Nilai per Siswa');

for (let b = 0; b < nilai.length; b++) {
    let total = 0;
    for (let k = 0; k < nilai[b].length; k++) {
        total += nilai[b][k];}
        let rata = total / nilai[b].length;
console.log(siswa[b] + ': total = ' + total + ', rata-rata = ' + rata.toFixed(1));}

let mapel = ['MTK', 'PBO', 'Basis Data'];
console.log('Rata-rata Nilai per Mata Pelajaran');

for (let k = 0; k < mapel.length; k++) {
    let totalKolom = 0;
    for (let b = 0; b < nilai.length; b++) {
        totalKolom += nilai[b][k];}
        let rataKolom = totalKolom / nilai.length;
        
console.log('Rata-rata ' + mapel[k] + ': ' + rataKolom.toFixed(1));}
console.log('Analisis nilai[2][1]');
console.log('Nilai dari nilai[2][1] adalah: ' + nilai[2][1]);//