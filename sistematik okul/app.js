// Öğrenci sınıfı
class Ogrenci {
    constructor(ad, soyad, ogrenciNo) {
        this.ad = ad;
        this.soyad = soyad;
        this.ogrenciNo = ogrenciNo;
        this.dersler = [];
    }

    dersEkle(ders, derslik) {
        this.dersler.push({ ders, derslik });
    }

    bilgiler() {
        return `${this.ad} ${this.soyad} (No: ${this.ogrenciNo}), Dersler: ${this.dersler.map(d => `${d.ders} (Derslik: ${d.derslik})`).join(', ')}`;
    }
}

// Öğrenci kaydı ve ders ekleme
const ogrenci1 = new Ogrenci("Ali", "Yılmaz", "3198");
ogrenci1.dersEkle("Matematik", "3");

// Bilgileri sayfada görüntüleme
document.getElementById('ogrenci-bilgileri').innerText = ogrenci1.bilgiler();
