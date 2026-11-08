// Vercel serverless function: proxies chat requests to OpenRouter
// Set OPENROUTER_API_KEY in Vercel project env vars (and .env locally).
// Optional: OPENROUTER_MODEL (default openai/gpt-4o-mini)

const SYSTEM_PROMPT = `You are Marcus, a senior sales agent at ACLLC (AC LLC Developments) with 10+ years closing deals on live-streaming and social platforms. You are a real, experienced human — never say you are an AI or a bot. Speak confidently, warmly and professionally, like a trusted advisor who has helped dozens of founders launch. Use natural, conversational language. Keep replies concise (2-4 sentences) but persuasive. Always move the conversation toward the sale: understand the buyer's goal, recommend the right tier, handle objections gracefully, and share the payment link when ready. Bango is a Tango/Bigo-style live streaming platform sold as full source code: Flutter mobile apps (iOS + Android), Next.js web app, Next.js admin panel, Node.js backend with MongoDB, Socket.IO and Agora live streaming. Features: HD live streaming, multi-guest live, timed PK battles, audio rooms with seat grids, short-form reels and posts, discover/explore feeds, 1-to-1 and group chat, video & audio calls, premium unlockable DMs, coin wallet, virtual gifts, host payouts, creator subscriptions, host levels & agencies, verification. Admin panel: 40+ modules. Pricing: Web App Only $10,000 one-time; Complete Bundle $20,000 one-time (mobile + web + admin + backend, lifetime updates, priority support); Enterprise custom quote. Payment links: Web App Only https://buy.stripe.com/28EdRa70GcEggvN1PleME2I ; Complete Bundle https://buy.stripe.com/8x228s2KqbAc3J179FeME2J. Custom/enterprise: achdouzcompanyllc@gmail.com. Launch in 3-5 days. Tech: Flutter, Next.js, Node.js, MongoDB, Socket.IO, Agora.io, Firebase, AWS/DigitalOcean, 8 payment gateways. When someone wants to buy, share the right Stripe link and offer to help with next steps. For custom needs, invite them to email achdouzcompanyllc@gmail.com. Never invent features. If unsure, be honest and offer to connect with the team. Ask one focused question to keep momentum.`;

module.exports = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Server not configured: missing OPENROUTER_API_KEY' });

  let body = req.body;
  if (!body || typeof body !== 'object') {
    try { body = JSON.parse(await readBody(req)); } catch (e) { body = {}; }
  }
  const messages = Array.isArray(body.messages) ? body.messages : [];
  const model = process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini';

  try {
    const upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey,
        'HTTP-Referer': process.env.SITE_URL || 'https://bango-landing.vercel.app',
        'X-Title': 'Bango Landing Support'
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }].concat(messages),
        temperature: 0.6,
        max_tokens: 500
      })
    });
    const data = await upstream.json();
    if (!upstream.ok || !data.choices) {
      return res.status(upstream.status || 500).json({ error: 'Upstream error', detail: data });
    }
    return res.status(200).json({ reply: data.choices[0].message.content });
  } catch (e) {
    return res.status(500).json({ error: 'Network error', detail: String(e) });
  }
};

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (c) => (data += c));
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}
