# provesource-social-proof

<div align="center">

![ProveSource Logo](https://provesrc.com/favicon.ico)

**Add powerful social proof notifications to your website and boost conversions by 3x**

[![npm version](https://img.shields.io/npm/v/provesource-social-proof.svg)](https://www.npmjs.com/package/provesource-social-proof)
[![npm downloads](https://img.shields.io/npm/dm/provesource-social-proof.svg)](https://www.npmjs.com/package/provesource-social-proof)
[![License](https://img.shields.io/npm/l/provesource-social-proof.svg)](https://www.npmjs.com/package/provesource-social-proof)

[Website](https://provesrc.com) • [Documentation](https://help.provesrc.com) • [Get API Key](https://provesrc.com)

</div>

---

## 🚀 What is ProveSource?

ProveSource is the #1 social proof software trusted by **40,000+ businesses** to boost sales with real-time social proof notifications. Display recent purchases, reviews, visitor counts, and more to build trust and create urgency.

### ✨ Features

- 🛒 **Recent Sales Popups** - Show real-time purchase notifications
- ⭐ **Review Popups** - Display reviews from Google, Facebook, Trustpilot
- 👥 **Live Visitor Counter** - Show real-time visitors on your site
- 📊 **Social Counters** - Display followers across social platforms
- 💬 **Informational Notifications** - Highlight important messages
- 🎨 **Fully Customizable** - Match your brand perfectly
- ⚡ **Lightweight** - Fast loading, no performance impact
- 🔒 **Privacy Compliant** - GDPR & CCPA ready

---

## 📦 Installation

### Option 1: HTML Snippet (Recommended - No Installation)

Copy and paste this script into your HTML `<head>` or before the closing `</body>` tag:

```html
<script>
  !function(o,i){var e=o.createElement("script");e.type="text/javascript",e.async=!0,e.charset="UTF-8",e.src="https://cdn.provesrc.com/provesrc.js";var t=o.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);window.provesrc=window.provesrc||{dq:[],display:function(){this.dq.push(arguments)}},window._provesrcAsyncInit=function(){provesrc.init({apiKey:"YOUR_API_KEY",v:"0.0.4"})}}(document,window);
</script>
```

**Replace `YOUR_API_KEY` with your actual ProveSource API key from [provesrc.com](https://provesrc.com)**

### Option 2: npm Package

```bash
npm install --save provesource-social-proof
```

or

```bash
yarn add provesource-social-proof
```

---

## 🎯 Quick Start

### React

```jsx
import React, { useEffect } from 'react';
import provesource from 'provesource-social-proof';

function App() {
  useEffect(() => {
    provesource.init(process.env.REACT_APP_PROVESRC_API_KEY);
  }, []);

  return (
    <div>
      {/* Your app content */}
    </div>
  );
}

export default App;
```

### CommonJS / Node.js

```javascript
const provesource = require('provesource-social-proof');

// Initialize ProveSource
provesource.init('your-api-key-here');
```

### ES Modules

```javascript
import provesource from 'provesource-social-proof';

provesource.init('your-api-key-here');
```

---

## 📖 API Reference

### `provesource.init(apiKey)`

Initialize ProveSource social proof notifications on your website.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `apiKey` | `string` | Yes | Your ProveSource API key (get it from [provesrc.com](https://provesrc.com)) |

#### Returns

`HTMLElement | null` - The injected script element, or `null` if already initialized

#### Example

```javascript
import provesource from 'provesource-social-proof';

// Initialize with your API key
provesource.init('your-api-key-here');
```

---

## 🎨 What You Get

Once initialized, ProveSource will automatically display:

- ✅ **Recent Sales Notifications** - "John from New York just purchased..."
- ✅ **Review Popups** - Showcase your best reviews
- ✅ **Live Visitor Count** - "127 people are viewing this page"
- ✅ **Social Proof Counters** - Display your social media stats
- ✅ **Custom Notifications** - Highlight promotions and important info

All notifications are fully customizable through your ProveSource dashboard.

---

## 🌟 Real Results

> **"ProveSource has added over $4,500 in sales to SSA. That's a pretty awesome ROI."**  
> — Nathan Tyler, Co-founder at Simply Schedule Appointments

> **"Users who interacted with our ProveSource notifications had an 83% higher conversion rate."**  
> — Andrew Cattarin, eCommerce Manager at The Gamesmen

> **"New site visitors conversion to trial increased by over 14.2% a month after adding ProveSource."**  
> — Justin McGill, CEO & Founder at LeadFuze

---

## 🔧 Error Handling

The `init` function will throw an error if:

- Used outside a browser environment (Node.js, SSR, etc.)
- `apiKey` is not provided or is not a string

The function will return `null` if:

- ProveSource is already initialized (prevents duplicate initialization)

#### Example Error Handling

```javascript
try {
  provesource.init('your-api-key-here');
} catch (error) {
  console.error('Failed to initialize ProveSource:', error.message);
}
```

## 🔗 Resources

- 🌐 [Website](https://provesrc.com) - Learn more about ProveSource
- 📚 [Documentation](https://help.provesrc.com) - Full documentation and guides
- 🎯 [Get API Key](https://provesrc.com) - Sign up and get your API key
- 💬 [Support](mailto:support@provesrc.com) - Get help from our team
- 📖 [Case Studies](https://provesrc.com/case-studies) - See real results

---

## 📊 Trusted By

**40,000+ businesses** from 100+ countries trust ProveSource, including:

- Telefonica
- Tuenti
- Lens
- Vitapur
- And many more...

---

## 📝 License

MIT © [ProveSource](https://provesrc.com)

---

## 💡 Need Help?

- 📧 Email: [support@provesrc.com](mailto:support@provesrc.com)
- 🌐 Website: [provesrc.com](https://provesrc.com)
- 📚 Docs: [help.provesrc.com](https://help.provesrc.com)

---

<div align="center">

**Made with ❤️ by [ProveSource](https://provesrc.com)**

[Get Started Free](https://provesrc.com) • [View Documentation](https://help.provesrc.com) • [See Examples](https://provesrc.com)

</div>
