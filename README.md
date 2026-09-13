# Girne Maarif Anaokulu · Ders Atölyesi

2026–2027 haftalık ders programı, öğretmen fiilî ders yükü, branş kotaları, otomatik yerleştirme, manuel düzenleme, sürümleme ve yedekleme uygulaması.

## Çalıştırma

```bash
npm install
npm run dev
```

Üretim derlemesi:

```bash
npm run build
npm run preview
```

## Web yayını

`npm run build` sonrası oluşan `dist/` klasörü Netlify, Vercel, Cloudflare Pages, Firebase Hosting veya standart statik web sunucusuna yüklenebilir.

## Google AI Studio’ya aktarma

1. Bu proje klasörünü ZIP olarak Google AI Studio’ya yükleyin veya bir GitHub deposuna koyup projeyi oradan içeri alın.
2. AI Studio’ya şu talimatı verin: “Mevcut React + TypeScript + Vite projesini koru; `npm install` ve `npm run dev` ile çalışmalı.”
3. Temel uygulama hiçbir API anahtarı gerektirmez. `.env.example` dosyası boş/opsiyoneldir.
4. Veriler tarayıcı `localStorage` alanında tutulur. JSON yedek alma/yükleme ile bilgisayarlar arasında taşınabilir.
5. İleride bulut veritabanı eklenecekse mevcut local-first yapı korunmalı ve senkronizasyon ayrı bir adapter/repository katmanına eklenmelidir.

## Uygulanan okul kuralları

- Pazartesi 1. ders: `Güne Başlama & Çember Zamanı`, kilitli ve korunan.
- 2. ve 6. dersler korunan zaman dilimleri olarak işaretlidir.
- Öğretmen aynı saatte iki sınıfa atanamaz.
- Branş öğretmeni farklı branşa atanamaz.
- Günlük öğretmen limiti kontrol edilir.
- Manuel kilitler otomatik yerleştirmede korunur.
- Atanmayan ihtiyaçlar `Açık Kadro / Atanmamış` olarak görünür.
- A4 yatay yazdır/PDF görünümü vardır.
- Türkçe karakter uyumlu CSV ve JSON yedekleme vardır.

## Taşınabilirlik

Kod standart React, TypeScript ve Vite kullanır. Lovable’a özel çalışma zamanı bağımlılığı yoktur. Bu nedenle Google AI Studio, yerel VS Code, GitHub Codespaces veya başka bir React geliştirme ortamında devam ettirilebilir.
