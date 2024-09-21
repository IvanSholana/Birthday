const sentences = [
  "Selamat Ulang Tahun Feby!!!!🥳",
  "Semoga panjang umurrrr",
  "Semoga sehat selaluuu",
  "Semoga sukses selaluuu",
  "Sukses dunia dan akhirat",
  "Semoga semua impiannya tercapaii",
  "Lancar segala urusannyaaa",
  "Semoga selalu menebar hal positiff",
  "Semakin baik kedepannya",
  "Dijauhkan dari segala keburukan",
  "Didekatkan dengan segala kebaikan",
  "Semoga diberikan yang terbaik dari yang terbaik dari yang diridhoi-Nya",
  "Fii Amanillah🤲🏻",
];

let sentenceIndex = 0;
let charIndex = 0;

function typeWriter() {
  const currentSentence = sentences[sentenceIndex];
  if (charIndex < currentSentence.length) {
    document.getElementById("typewriter-text").textContent +=
      currentSentence.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 150); // Waktu penundaan antara setiap karakter (dalam milidetik)
  } else {
    // Jika sudah mencapai akhir kalimat, reset charIndex dan lanjut ke kalimat berikutnya
    charIndex = 0;
    sentenceIndex = (sentenceIndex + 1) % sentences.length; // Loop ke kalimat pertama jika sudah mencapai yang terakhir
    // Bersihkan teks sebelum menambahkan kalimat berikutnya
    setTimeout(() => {
      document.getElementById("typewriter-text").textContent = "";
      typeWriter(); // Panggil fungsi typeWriter untuk menampilkan kalimat berikutnya
    }, 1500); // Waktu penundaan sebelum menampilkan kalimat berikutnya (dalam milidetik)
  }
}

// Panggil fungsi typeWriter saat dokumen selesai dimuat
document.addEventListener("DOMContentLoaded", typeWriter);
