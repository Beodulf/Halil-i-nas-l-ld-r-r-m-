// DOSYANIN BAŞI

//-----------------------------------------------------
// BÖLÜM 1: ZAMAN KONTROLÜ (SİTE AÇILIŞ MANTIĞI)
//-----------------------------------------------------

// Bu satır, kodun o anki saati kaç olarak anladığını görmek için
// Geliştirici Araçları'ndaki "Konsol" sekmesine bir not düşer.
// Bu, hata ayıklamak için kullandığımız bir araçtır, kullanıcı görmez.
console.log("Tarayıcının anladığı saat:", new Date().getHours());

// "const", bir daha değeri değişmeyecek bir değişken (sabit) oluşturur.
// "anlikSaat" adında bir değişken yaratıyoruz.
// "new Date()" : JavaScript'e o anki tarih ve saat bilgisini içeren bir nesne yaratmasını söyler.
// ".getHours()" : Bu tarih nesnesinin içinden sadece "saat" bilgisini (0-23 arasında bir sayı) çekip almamızı sağlar.
const anlikSaat = new Date().getHours();

// "if", bir koşul başlatır. "Eğer parantez içindeki şey doğruysa, süslü parantezlerin içini yap" demektir.
// Koşulumuz: "anlikSaat" değişkeni 0'dan küçükse VEYA (|| işareti "veya" anlamına gelir) "anlikSaat" değişkeni 3'ten büyük veya eşitse...
// Bu, sitenin kapalı olmasını istediğimiz zaman dilimini (00:00-03:00 DIŞINDAKİ tüm saatler) kontrol eder.
if (anlikSaat < 0 || anlikSaat >= 3) {
    // Bu koşul doğruysa (yani site kapalıysa) aşağıdaki kodlar çalışır:

    // "document", o anki HTML sayfasının tamamını temsil eden bir nesnedir.
    // ".title", bu sayfa nesnesinin "başlık" özelliğidir (tarayıcı sekmesinde görünen yazı).
    // Bu satır, sayfa başlığını "404 Not Found" olarak değiştirerek sahte hata hissini güçlendirir.
    document.title = "404 Not Found";

    // "document.getElementById('ID_ADI')" komutu, HTML içinde belirttiğimiz ID'ye sahip olan elemanı bulup yakalar.
    // '#site-icerigi' ID'li div'i yakalayıp "siteIcerigiDiv" isimli bir değişkene atıyoruz.
    const siteIcerigiDiv = document.getElementById('site-icerigi');
    // '#hata-sayfasi' ID'li div'i yakalayıp "hataSayfasiDiv" isimli bir değişkene atıyoruz.
    const hataSayfasiDiv = document.getElementById('hata-sayfasi');

    // Yakaladığımız site içeriği div'inin stil özelliklerine erişiyoruz (.style).
    // Onun "display" (görünüm) özelliğini 'none' (yok) olarak ayarlıyoruz. Bu, div'i tamamen gizler.
    siteIcerigiDiv.style.display = 'none';
    
    // Yakaladığımız hata sayfası div'inin stilini 'flex' olarak ayarlıyoruz.
    // CSS'te `#hata-sayfasi` için `display: none` demiştik. Bu komut, o kuralı ezer ve div'i görünür hale getirir.
    // 'flex' yapıyoruz çünkü CSS'teki ortalama kurallarımızın (`justify-content` vs.) çalışması için bu gerekli.
    hataSayfasiDiv.style.display = 'flex';
}


//-----------------------------------------------------
// BÖLÜM 2: ETKİLEŞİM MANTIĞI (BUTON TIKLAMALARI)
//-----------------------------------------------------

// "document.querySelector('SEÇİCİ')" komutu, belirttiğimiz CSS seçicisine uyan HTML'deki İLK elemanı bulur ve yakalar.
// '#ilk-evet-btn' ID'li elemanı (ilk "EVET" butonumuz) yakalayıp "ilkEvetButonu" değişkenine atıyoruz.
const ilkEvetButonu = document.querySelector('#ilk-evet-btn');
// '#site-icerigi' ID'li div'i yakalayıp "siteIcerigiDiv" değişkenine atıyoruz. (NOT: Yukarıda da aynısını yapmıştık, normalde bunu en üste bir kere yazmak yeterlidir ama şimdilik zararı yok).
const siteIcerigiDiv = document.querySelector('#site-icerigi');
// '#soru-1' ID'li div'i yakalayıp "soru1Div" değişkenine atıyoruz.
const soru1Div = document.querySelector('#soru-1');
const soru1EvetBtn = document.querySelector('#soru-1 button:nth-child(3)'); // "Emin misin?" Evet butonu
const soru1HayirBtn = document.querySelector('#soru-1 button:nth-child(4)'); // "Emin misin?" Hayır butonu
const soru2Div = document.querySelector('#soru-2');
const gonderButonu = document.querySelector('#gonder-btn');
const animasyonKatmani = document.querySelector('#animasyon-katmani');
const soru3Div = document.querySelector('#soru-3');
const resimTablosu = document.querySelector('.resim-tablosu');
const resimDogrulaBtn = document.querySelector('#resim-dogrula-btn');
const resimHataMesaji = document.querySelector('#resim-hata-mesaji');
const soru4Div = document.querySelector('#soru-4');
const refleksBaslatBtn = document.querySelector('#refleks-baslat-btn');
const refleksMesaji = document.querySelector('#refleks-mesaji');
const soruIsareti = document.querySelector('#soru-isareti');
const soru5Div = document.querySelector('#soru-5');
const kodKutulari = document.querySelectorAll('.kod-kutusu');
const kodDogrulaBtn = document.querySelector('#kod-dogrula-btn');
const kodHataMesaji = document.querySelector('#kod-hata-mesaji');
const finalEkrani = document.querySelector('#final-ekrani');
const arkaplanMuzik = document.querySelector('#arkaplan-muzik');
const bombaSes = document.querySelector('#bomba-ses');
const patlamaSes = document.querySelector('#patlama-ses');
const finalMuzik = document.querySelector('#final-muzik');


// Yakaladığımız "ilkEvetButonu" elemanına bir olay dinleyici ekliyoruz.
// ".addEventListener('click', ...)" : "Bu elemana bir 'tıklama' (click) olayı olduğunda, takip eden fonksiyonu çalıştır" demektir.
// "() => { ... }" : Bu, "arrow function" (ok fonksiyonu) denilen modern bir JavaScript yazım şeklidir. Basitçe "şuradaki kod bloğunu çalıştır" anlamına gelir.
ilkEvetButonu.addEventListener('click', () => {
    // Kullanıcı butona tıkladığı anda bu süslü parantezlerin içi çalışır:
    // --- YENİ SES KOMUTU ---
    arkaplanMuzik.volume = 0.3; // Sesi biraz kısalım (%30)
    arkaplanMuzik.play(); // Arka plan müziğini başlat

    // Yakaladığımız site içeriği div'inin ".classList" özelliğine erişiyoruz. Bu, elemanın CSS sınıflarını yönetmemizi sağlar.
    // ".add('gizli')" metodu, bu elemanın class listesine "gizli" sınıfını ekler.
    // CSS dosyamızda ".gizli { display: none; }" kuralı olduğu için, bu sınıfı eklediğimiz anda div görünmez olur.
    siteIcerigiDiv.classList.add('gizli');

    // Yakaladığımız soru-1 div'inin class listesinden "gizli" sınıfını kaldırıyoruz.
    // HTML'de bu div'e başta "gizli" sınıfını vermiştik. Bu sınıfı kaldırdığımızda, `display: none` kuralı artık geçerli olmaz ve div görünür hale gelir.
    soru1Div.classList.remove('gizli');
});

// "Emin misin?" sorusundaki EVET butonuna tıklanınca...
soru1EvetBtn.addEventListener('click', () => {
    // Soru 1'i gizle
    soru1Div.classList.add('gizli');
    // Soru 2'yi göster
    soru2Div.classList.remove('gizli');
});

// "Emin misin?" sorusundaki HAYIR butonuna tıklanınca...
soru1HayirBtn.addEventListener('click', () => {
    // Sayfayı yeniden yükleyerek en başa dönsün
    window.location.href = "https://www.google.com";
});

// "GÖNDER" butonuna tıklanınca...
gonderButonu.addEventListener('click', () => {
    soru2Div.classList.add('gizli');
    animasyonKatmani.classList.remove('gizli');

    setTimeout(() => {
        animasyonKatmani.classList.add('gizli');

        // BURAYI GÜNCELLEDİK!
        // Artık alert yerine Soru 3'ü gösteriyoruz.
        soru3Div.classList.remove('gizli');
        
        // RESİM TABLOSUNU DOLDURMA KODU BURAYA GELECEK
        resimTablosunuDoldur(); // Tabloyu doldurma fonksiyonunu çağır
        
    }, 2000); // 2000 milisaniye = 2 saniye
});

const tumResimler = [
    { dosya: 'resimler/halil-1.jpg', dogruMu: true },
    { dosya: 'resimler/halil-2.jpg', dogruMu: true },
    { dosya: 'resimler/halil-3.jpg', dogruMu: true },
    { dosya: 'resimler/korku-1.jpg', dogruMu: false },
    { dosya: 'resimler/korku-2.jpg', dogruMu: false },
    { dosya: 'resimler/korku-3.jpg', dogruMu: false },
    { dosya: 'resimler/korku-4.jpg', dogruMu: false },
    { dosya: 'resimler/korku-5.jpg', dogruMu: false },
    { dosya: 'resimler/korku-6.jpg', dogruMu: false }
];

// Bu fonksiyon, bir diziyi (array) karıştırmaya yarar. (Fisher-Yates algoritması)
function karistir(dizi) {
    for (let i = dizi.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [dizi[i], dizi[j]] = [dizi[j], dizi[i]];
    }
    return dizi;
}

// Resim tablosunu dolduracak fonksiyon
function resimTablosunuDoldur() {
    // Önce mevcut içeriği temizle (tekrar doldurmamak için)
    resimTablosu.innerHTML = '';
    resimHataMesaji.classList.add('gizli'); // Hata mesajını gizle

    const karisikResimler = karistir(tumResimler);

    karisikResimler.forEach(resimBilgisi => {
        const resimKutusu = document.createElement('div');
        resimKutusu.classList.add('resim-kutusu');
        resimKutusu.style.backgroundImage = `url(${resimBilgisi.dosya})`; // Resmi arkaplan olarak ata
        resimKutusu.style.backgroundSize = 'cover'; // Resmi kutuya sığdır
        
        // Gizli bilgi: Bu resim doğru mu yanlış mı?
        resimKutusu.dataset.dogruMu = resimBilgisi.dogruMu;

        // Her kutuya tıklama olayı ekle
        resimKutusu.addEventListener('click', () => {
            resimKutusu.classList.toggle('secili'); // 'secili' sınıfını ekle/kaldır
        });
        
        resimTablosu.appendChild(resimKutusu);
    });
}

// Doğrulama butonuna tıklanınca ne olacağını belirleyelim
resimDogrulaBtn.addEventListener('click', () => {
    const seciliKutular = document.querySelectorAll('.resim-kutusu.secili');
    let dogruSecimSayisi = 0;
    let yanlisSecimSayisi = 0;

    seciliKutular.forEach(kutu => {
        if (kutu.dataset.dogruMu === 'true') {
            dogruSecimSayisi++;
        } else {
            yanlisSecimSayisi++;
        }
    });

    // KONTROL MANTIĞI: 3 doğru resim seçilmiş Mİ VE HİÇ yanlış resim seçilmemiş Mİ?
     if (dogruSecimSayisi === 3 && yanlisSecimSayisi === 0) {
        // BAŞARILI!
        soru3Div.classList.add('gizli'); // 3. soruyu gizle
        
        // --- BURAYI GÜNCELLEDİK ---
        soru4Div.classList.remove('gizli'); // 4. soruyu göster
        
    } else {
        // ... (başarısızlık mantığı aynı kalacak) ...
    }
});

// --- SORU 4: BOMBA YAKALAMA OYUNU MANTIĞI ---

let bombaZamanlayici;      // Bombanın ne zaman çıkacağını tutan zamanlayıcı
let patlamaZamanlayici;    // Bombanın ne kadar süre sonra patlayacağını tutan zamanlayıcı

// "BAŞLA" butonuna tıklandığında oyunu başlat
refleksBaslatBtn.addEventListener('click', () => {
    refleksBaslatBtn.classList.add('gizli'); // Başlat butonunu gizle
    refleksMesaji.classList.remove('gizli');

    // 2 ile 6 saniye arasında rastgele bir süre belirle
    const rastgeleSure = Math.random() * 7000 + 2000;

    // Belirlenen süre sonunda bombaGoster fonksiyonunu çalıştır
    bombaZamanlayici = setTimeout(bombaGoster, rastgeleSure);
});

// Bombayı ekranda gösteren ana fonksiyon
function bombaGoster() {
    bombaSes.play(); // Bomba belirme sesini çal

    // 1. Yeni bir <img> elemanı yarat
    const bomba = document.createElement('img');
    bomba.id = 'bomba-resmi';
    bomba.src = 'resimler/bomba.png'; // BOMBA RESMİNİN YOLU

    // 2. Ekranda rastgele bir konum belirle
    const x = Math.floor(Math.random() * 85); // Genişliğin %0-85'i arası
    const y = Math.floor(Math.random() * 85); // Yüksekliğin %0-85'i arası
    bomba.style.left = x + '%';
    bomba.style.top = y + '%';

    // 3. Yaratılan bombaya tıklanınca ne olacağını belirle
    bomba.addEventListener('click', () => {
        // KAZANDIN!
        clearTimeout(patlamaZamanlayici); // Patlamayı iptal et
        soru4Div.removeChild(bomba); // Bombayı ekrandan kaldır
        bombaSes.pause(); // Bomba sesini durdur
        
        refleksMesaji.textContent = 'BAŞARILI';
        refleksMesaji.classList.remove('gizli');
        
        // Bir sonraki adıma geç
        setTimeout(() => {
            soru4Div.classList.add('gizli');
            // BURAYA 5. SORU VEYA FİNAL GELECEK
            soru5Div.classList.remove('gizli'); 
        }, 2000);
    });

    // 4. Hazırlanan bombayı sayfaya (soru-4 div'inin içine) ekle
    soru4Div.appendChild(bomba);

    // 5. Patlama için geri sayımı başlat (kullanıcının 1.5 saniyesi var)
    patlamaZamanlayici = setTimeout(() => {
        // KAYBETTİN! (Bombaya zamanında tıklayamadı)
        patlamaSes.play(); // Patlama sesini çal
        bombaSes.pause(); // Bomba sesini durdur
        bomba.src = 'resimler/patlama.png'; // Resmi patlama resmiyle değiştir
        
        // 1 saniye sonra oyundan at
        setTimeout(() => {
            window.location.href = "https://www.google.com";
        }, 1000);

    }, 1500); 
}
// Dosyanın en sonuna ekle:
soruIsareti.addEventListener('click', () => {
    alert("KOD2:mov4m5omd");
});

// "document" yani sayfanın tamamı için bir klavye dinleyicisi ekliyoruz.
document.addEventListener('keydown', (event) => {
    // Bu fonksiyon, herhangi bir tuşa basıldığında çalışır.
    // "event" nesnesi, basılan tuşla ilgili bilgileri içerir.

    // Önce, 4. sorunun ekranda olup olmadığını kontrol edelim.
    // Çünkü bu kodun sadece o ekranda çalışmasını istiyoruz.
    // "offsetParent" bir eleman görünür değilse "null" döner. Bu basit bir kontrol yöntemidir.
    if (soru4Div.offsetParent !== null) {
        
        // Eğer basılan tuşun "key" (anahtar) değeri "ArrowUp" (Yukarı Ok) ise...
        if (event.key === 'ArrowUp') {
            // "refleks-mesaji" alanının içeriğini kodumuzla değiştir.
            refleksMesaji.textContent = 'KOD4:bnsdvm345';
            refleksMesaji.classList.remove('gizli'); // Mesajı görünür yap
        }
    }
});
const dogruKodlar = [
    "nıubupş45",
    "mov4m5omd",
    "urtbg3gf",
    "bnsdvm345",
    "xc4hg04tn" // 5. kodu da buraya ekledim
];

// 'SİSTEMİ AÇ' butonuna tıklama olayı
kodDogrulaBtn.addEventListener('click', () => {
    let girilenKodlar = [];
    kodKutulari.forEach(kutu => {
        // Girilen değeri alıyoruz. Büyük/küçük harf önemliyse toUpperCase() kaldırılır.
        // Şimdilik küçük harfe çevirelim ki "Nıubupş45" ile "nıubupş45" aynı olsun.
        girilenKodlar.push(kutu.value.toLowerCase());
    });

    let hepsiDogru = true;
    for (let i = 0; i < dogruKodlar.length; i++) {
        // Karşılaştırmayı da küçük harfle yapıyoruz.
        if (girilenKodlar[i] !== dogruKodlar[i].toLowerCase()) {
            hepsiDogru = false;
            break; 
        }
    }

    if (hepsiDogru) {
        // BAŞARILI! FİNALE GEÇ
        soru5Div.classList.add('gizli');
        finalEkrani.classList.remove('gizli');
        arkaplanMuzik.pause(); // Karanlık müziği durdur
        finalMuzik.volume = 0.3; // Final müziğinin sesini ayarla
        finalMuzik.play(); // Final müziğini başlat

        soru5Div.classList.add('gizli');
        finalEkrani.classList.remove('gizli');

    } else {
        // BAŞARISIZ!
        kodHataMesaji.classList.remove('gizli');
        setTimeout(() => kodHataMesaji.classList.add('gizli'), 2000);
    }

});
