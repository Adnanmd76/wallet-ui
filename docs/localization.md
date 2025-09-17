# 🌍 Localization & RTL Support Guide

This document explains how Wallet UI supports multiple languages and right-to-left (RTL) layouts for culturally inclusive design.

---

## 🧭 Supported Languages

| Code | Language     | RTL |
|------|--------------|-----|
| en   | English      | ❌  |
| ur   | Urdu         | ✅  |
| ar   | Arabic       | ✅  |
| fr   | French       | ❌  |
| zh   | Chinese      | ❌  |

---

## 🧩 Implementation Strategy

- Uses `i18next` for translation management  
- Language files stored in `src/locales/`  
- Auto-detects browser language  
- Manual toggle via settings modal

---

## 📁 Folder Structure

src/ ├── locales/ │ ├── en.json │ ├── ur.json │ ├── ar.json │ ├── fr.json │ └── zh.json ├── components/ │ └── LanguageSwitcher.tsx

---

## 🔄 RTL Layout Handling

- Uses `dir="rtl"` on `<html>` tag for RTL languages  
- Tailwind RTL plugin enabled  
- Conditional class switching via `isRTL` flag  
- Typography adjusted for Nastaliq and Arabic scripts

---

## 🧪 Testing Localization

- Use browser dev tools to simulate locale  
- Run `npm run test:rtl` for RTL layout validation  
- Check for overflow, alignment, and font rendering

---

## 🎨 Cultural Design Notes

- Urdu and Arabic use `Noto Nastaliq Urdu` and `Amiri` fonts  
- Icons flipped for RTL (e.g., arrows, chevrons)  
- Text spacing adjusted for script density

---

## 📬 Contact for Localization Help

- GitHub: [Adnanmd76](https://github.com/Adnanmd76)  
- Email: adnanmd76@gmail.com
