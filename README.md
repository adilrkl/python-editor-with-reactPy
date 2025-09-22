# Python Editor (React)

Web tabanlı bir Python çalışma alanı. Kullanıcılar tarayıcıda Python kodu yazıp çalıştırabilir. Proje React ile geliştirilmiştir ve yerelde kolayca ayağa kaldırılabilir.

## Özellikler
- Canlı kod yazma ve çıktı görme
- Hızlı geliştirme için CRA tabanlı kurulum
- Üretim için optimize edilebilir build

## Gereksinimler
- Node.js 18+ (LTS önerilir)
- npm 9+

## Hızlı Başlangıç
```bash
git clone https://github.com/adilrkl/python-editor-with-reactPy.git
cd python-editor-with-reactPy
npm install
npm start
```

Uygulama geliştirme modunda çalışır ve genelde `http://localhost:3000` adresinde açılır. Kod değişiklikleri otomatik olarak yenilenir.

## Komutlar
- `npm start`: Geliştirme sunucusunu başlatır
- `npm test`: Testleri çalıştırır (watch modunda)
- `npm run build`: Üretim için optimize edilmiş `build/` çıktısını oluşturur

## Yapı
```
public/       # statik dosyalar
src/          # uygulama kaynak kodu
  components/ # UI bileşenleri (örn. Input)
```

## Yayınlama (Deployment)
- Statik hosting (Netlify, Vercel, GitHub Pages) için `npm run build` çıktısını kullanın.
- Sunucuya manuel kopyalama yapacaksanız `build/` klasörünü servis edin.

## Sorun Giderme
- `npm install` hatası: `node_modules` ve `package-lock.json` silip tekrar deneyin.
- Port meşgulse: Başka bir 3000 portu kullanan uygulamayı kapatın veya `PORT=3001 npm start` (Windows PowerShell: `$env:PORT=3001; npm start`).

## Lisans
Bu depo eğitim amaçlıdır. Gerekirse lisans metni ekleyin.
