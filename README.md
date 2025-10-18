# @angstvorfrauen/baileys

<div align="center">

  ![WhatsApp](https://img.shields.io/badge/-%F0%9F%92%AC%20WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white&labelColor=0D1117)
  ![JavaScript](https://img.shields.io/badge/-%F0%9F%94%B8%20JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=F7DF1E&labelColor=0D1117)
  ![NPM](https://img.shields.io/badge/-%F0%9F%93%A6%20npm-CB3837?style=for-the-badge&logo=npm&logoColor=white&labelColor=0D1117)
</div>

---

## Version

- **Baileys Version** – 2.3000.1028619397
- **Proto Version** – 2.3000.1028620558

---

## Changelog

- **libsignal-xeuka** – No more "bad Mac" Error anymore
- **Linked Device iOS/Safari** – Linked Device set to IOS/Safari
- **Custom Pairing Code** – Generate your Own Pairing Code `AAAA-AAAA`
- **isBot Fixed in Groups** – `isBot` is Working in Groups and Private Chat properly
- **Added offerCall** – Call a Number
- **Removed Timeout** – Removed Timeout Function
- **Fixed Jimp** – You can change Group Profile Picture again
- **Buttons Support** – Send Buttons and Interactive
- **Proto Updated** – Updated Proto to newest Version

---

## Installation

### package.json
```json
"dependencies": {
  "@angstvorfrauen/baileys": "*" 
}
```

### Terminal Installtion
```bash
npm install @angstvorfrauen/baileys
```
or

```bash
yarn add @angstvorfrauen/baileys
```

---

## Import

### ESM
```typescript
import makeWASocket from "@angstvorfrauen/baileys";
```

### CommonJS

```javascript
const { makeWASocket } = require("@angstvorfrauen/baileys");
```

---

## Functions

### Offer Call Function

```js
const jid = "xxxxx@s.whatsapp.net";
sock.offerCall(jid);
```

### Custom Pairing Code

```js
const number = "xxxxxxx";
const code = "AAAAAAAA";
await sock.requestPairingCode(number, code);
```

---

## Made with Love by Xeuka <3