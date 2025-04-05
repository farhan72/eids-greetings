# Eid Greetings - Ucapan Selamat Hari Raya Idul Fitri

![Eid Greetings](https://img.shields.io/badge/Eid-Greetings-green)
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-4.0.0-0F172A?&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/-Framer%20Motion-0055FF?logo=framer&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.12.7-green)

Aplikasi web interaktif untuk mengirimkan ucapan Selamat Hari Raya Idul Fitri dengan animasi, musik, dan amplop digital yang dapat dibuka.

## 🌟 Fitur

- **Amplop Digital Interaktif**: Klik untuk membuka amplop dan melihat ucapan random
- **Musik Latar**: Musik otomatis diputar saat amplop dibuka
- **Animasi Menarik**: Menggunakan Framer Motion dan GSAP untuk animasi yang halus
- **Responsif**: Tampilan yang optimal di desktop dan mobile
- **Ucapan Random**: Setiap kali amplop dibuka, ucapan yang ditampilkan akan berbeda

## 🚀 Teknologi

- **Next.js 15.2.4**: Framework React modern dengan fitur App Router
- **React 19.0.0**: Library UI untuk membangun antarmuka pengguna
- **TypeScript 5**: Superset JavaScript dengan fitur type safety
- **Tailwind CSS 4**: Framework CSS utility-first untuk styling
- **Framer Motion 12.6.3**: Library animasi untuk React
- **GSAP 3.12.7**: Library animasi untuk efek visual yang lebih kompleks
- **Howler.js 2.2.4**: Library untuk manajemen audio yang lebih baik
- **Heroicons 2.2.0**: Kumpulan ikon yang indah

## 🛠️ Instalasi

1. Clone repositori ini:
   ```bash
   git clone https://github.com/yourusername/eid-greetings.git
   cd eid-greetings
   ```

2. Install dependensi:
   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

3. Jalankan server development:
   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

## 📁 Struktur Proyek

```
eid-greetings/
├── public/
│   └── sounds/
│       └── eid-music.mp3
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── data/
│       └── greetings.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## 🔧 Kustomisasi

### Menambah Ucapan Baru

Untuk menambah ucapan baru, edit file `src/data/greetings.json`:

```json
{
  "title": "Selamat Hari Raya Idul Fitri",
  "greetings": [
    {
      "content": "Ucapan baru Anda di sini..."
    },
    // Ucapan lainnya...
  ]
}
```

### Mengganti Musik

Untuk mengganti musik, ganti file `public/sounds/eid-music.mp3` dengan file musik baru Anda.

## 📱 Penggunaan Mobile

Aplikasi ini sepenuhnya responsif dan dapat diakses dari perangkat mobile. Pastikan untuk mengaktifkan suara di perangkat Anda untuk mendengarkan musik saat membuka amplop.

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan buat pull request atau buka issue untuk diskusi.

## 📞 Kontak

Jika Anda memiliki pertanyaan atau saran, silakan hubungi [alfiibnu84@gmail.com](mailto:alfiibnu84@gmail.com).

---

Dibuat dengan ❤️ untuk merayakan Hari Raya Idul Fitri
