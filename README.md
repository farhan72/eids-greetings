# Eid Greetings - Ucapan Selamat Hari Raya Idul Fitri

![Eid Greetings](https://img.shields.io/badge/Eid-Greetings-green)
![Next.js](https://img.shields.io/badge/Next.js-13-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-3-blue)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-10-blue)

Aplikasi web interaktif untuk mengirimkan ucapan Selamat Hari Raya Idul Fitri dengan animasi, musik, dan amplop digital yang dapat dibuka.

## 🌟 Fitur

- **Amplop Digital Interaktif**: Klik untuk membuka amplop dan melihat ucapan random
- **Musik Latar**: Musik otomatis diputar saat amplop dibuka
- **Animasi Menarik**: Menggunakan Framer Motion untuk animasi yang halus
- **Responsif**: Tampilan yang optimal di desktop dan mobile
- **Ucapan Random**: Setiap kali amplop dibuka, ucapan yang ditampilkan akan berbeda

## 🚀 Teknologi

- **Next.js 13**: Framework React modern dengan fitur App Router
- **React 18**: Library UI untuk membangun antarmuka pengguna
- **TypeScript**: Superset JavaScript dengan fitur type safety
- **Tailwind CSS**: Framework CSS utility-first untuk styling
- **Framer Motion**: Library animasi untuk React
- **Heroicons**: Kumpulan ikon yang indah

## 📸 Tampilan

![Eid Greetings Screenshot](https://via.placeholder.com/800x450.png?text=Eid+Greetings+Screenshot)

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

Jika Anda memiliki pertanyaan atau saran, silakan hubungi [alfiibnu84@gmail.com](alfiibnu84@gmail.com).

---

Dibuat dengan ❤️ untuk merayakan Hari Raya Idul Fitri
