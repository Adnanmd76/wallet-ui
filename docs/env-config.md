# 🌿 Environment Configuration Guide

This document outlines the required environment variables and configuration setup for Wallet UI.

---

## 📦 Required `.env` Variables

| Variable Name         | Description                          | Example Value               |
|-----------------------|--------------------------------------|-----------------------------|
| `VITE_API_URL`        | Backend API endpoint                 | `https://api.wallet.com`    |
| `VITE_SDK_KEY`        | Crypto SDK public key                | `pk_live_abc123xyz`         |
| `VITE_APP_ENV`        | Environment mode                     | `production` or `development` |
| `VITE_DEFAULT_LANG`   | Default language code                | `en`                        |
| `VITE_THEME`          | UI theme                             | `light` or `dark`           |

---

## 🔐 Secrets Management

- Use `.env.local` for sensitive keys  
- Never commit `.env*` files to Git  
- Add `.env*` to `.gitignore`

---

## 🧪 Example `.env.local`

VITE_API_URL=https://api.wallet.com 
VITE_SDK_KEY=pk_live_abc123xyz 
VITE_APP_ENV=production 
VITE_DEFAULT_LANG=ur 
VITE_THEME=light

---

## 📁 Related Files

- `.env.local` → Developer secrets  
- `vite.config.ts` → Loads env variables  
- `src/config/index.ts` → Centralized config access

---

## 📬 Contact for Config Help

- GitHub: [Adnanmd76](https://github.com/Adnanmd76)  
- Email: adnanmd76@gmail.com
