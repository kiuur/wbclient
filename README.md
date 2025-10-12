# @angstvorfrauen/baileys

<div align="center">

  ![WhatsApp](https://img.shields.io/badge/-%F0%9F%92%AC%20WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white&labelColor=0D1117)
  ![JavaScript](https://img.shields.io/badge/-%F0%9F%94%B8%20JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=F7DF1E&labelColor=0D1117)
  ![NPM](https://img.shields.io/badge/-%F0%9F%93%A6%20npm-CB3837?style=for-the-badge&logo=npm&logoColor=white&labelColor=0D1117)
</div>

---

## Changelog

- **libsignal-xeuka** – No more bad Mac Errors anymore
- **Buttons Support** – Send buttonMessage and Interactive Message
- **Buttons LID Fix** - Fixed LID && JID for Button Support
- **Linked Device iOS/Safari** – Linked Device set to IOS/Safari
- **Custom Pairing Code** – Generate and use your own pairing code
- **Removed Timeout** – Removed Timeout Function
- **Updated Proto** – WAProto Updated to the Newest Version
- **isBot Fixed in Groups** – `isBot` is Working in Groups and Private Chat properly
- **Fixed ListType/ListMessage** – listMessage is Sendable
- **Added offerCall** – Baileys can Call a Number in WhatsApp
- **Fix ACK** – Has been Removed (You can Turn on if needed)
- **Fixed Proto Crash** – Proto can be Updated to the Newest Version with 0 Crashes or Erros

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