/**
 * Seed 5 GEO-optimised blog posts via the publish-blog API.
 *
 * Usage:
 *   node scripts/seed-blog-posts.mjs
 *
 * Calls the live site endpoint by default.
 * Set BASE_URL env var to override (e.g. http://localhost:3000).
 */

const BASE_URL = process.env.BASE_URL || "https://solentsignal.com";

const posts = [
  // ── Post 1 ─────────────────────────────────────────────────────────────
  {
    title: "What Is GEO? The Portsmouth Business Owner's Guide to AI Search",
    excerpt:
      "Generative Engine Optimisation (GEO) is how local businesses get recommended by ChatGPT, Gemini and Google AI Overviews. Here's what Portsmouth business owners need to know.",
    content: `
<p>If you've ever asked ChatGPT to recommend a plumber, a restaurant, or a web designer — you've already seen <strong>Generative Engine Optimisation (GEO)</strong> in action. Or more precisely, you've seen what happens when a business <em>hasn't</em> invested in it.</p>

<h2>SEO vs GEO — What's the Difference?</h2>
<p>Traditional SEO focuses on ranking in Google's blue-link results. It's about keywords, backlinks, and meta tags. GEO goes further. It's about making your business visible in <strong>AI-generated answers</strong> — the kind that appear in ChatGPT, Google AI Overviews, Gemini, Perplexity, and voice assistants like Siri and Alexa.</p>
<p>When someone asks "Who's the best accountant in Southsea?", AI doesn't just return a list of links. It <em>recommends</em> specific businesses. If yours isn't one of them, you're invisible to a rapidly growing segment of searchers.</p>

<h2>Why GEO Matters for Portsmouth Businesses</h2>
<p>Portsmouth and the wider Solent region are home to thousands of small businesses competing for local customers. As AI search adoption grows, the businesses that appear in AI answers will capture an outsized share of enquiries.</p>
<p>Consider these trends:</p>
<ul>
  <li><strong>ChatGPT</strong> now has over 200 million weekly users worldwide</li>
  <li><strong>Google AI Overviews</strong> appear on an increasing number of search results</li>
  <li><strong>Voice search</strong> via Siri, Alexa and Google Assistant continues to grow — and voice answers are almost always AI-generated</li>
</ul>
<p>If your website doesn't provide the structured data, authority signals, and clear content that AI models need, you simply won't be recommended.</p>

<h2>How GEO Works in Practice</h2>
<p>GEO optimisation involves several key areas:</p>
<ol>
  <li><strong>Structured Data (Schema Markup)</strong> — JSON-LD schema tells AI exactly what your business does, where you're located, and what services you offer</li>
  <li><strong>E-E-A-T Signals</strong> — Experience, Expertise, Authoritativeness, and Trustworthiness. AI models favour businesses with clear credentials and social proof</li>
  <li><strong>Content Structure</strong> — Clear headings, FAQ sections, and well-organised content make it easier for AI to extract and cite your information</li>
  <li><strong>Local Signals</strong> — Consistent NAP (Name, Address, Phone) data, Google Business Profile optimisation, and local citations</li>
  <li><strong>Technical Health</strong> — Fast load times, mobile-friendly design, HTTPS, and clean code</li>
</ol>

<h2>Getting Started with GEO</h2>
<p>The first step is understanding where you stand. An AI visibility audit checks what ChatGPT, Google AI, and voice search say about your business right now — and identifies what's missing.</p>
<p>At Solent Signal, we provide free AI visibility audits for Portsmouth and Solent businesses. We'll show you exactly how AI sees your business and give you a clear action plan to improve your visibility.</p>
`,
  },

  // ── Post 2 ─────────────────────────────────────────────────────────────
  {
    title: "Does ChatGPT Recommend Your Portsmouth Business?",
    excerpt:
      "More people are asking ChatGPT for local business recommendations. Find out whether AI is sending customers to you — or to your competitors.",
    content: `
<p>Here's a quick experiment: open ChatGPT and type <em>"recommend a good [your service] in Portsmouth"</em>. Does your business appear? If not, you've just discovered a problem that's costing you customers.</p>

<h2>How ChatGPT Decides Who to Recommend</h2>
<p>ChatGPT doesn't have a secret directory of businesses. It generates recommendations based on patterns in its training data and — increasingly — real-time web searches. Several factors influence whether your business gets mentioned:</p>
<ul>
  <li><strong>Online presence and reputation</strong> — reviews, citations, and mentions across the web</li>
  <li><strong>Website content quality</strong> — clear, well-structured information about your services</li>
  <li><strong>Schema markup</strong> — structured data that makes your business details machine-readable</li>
  <li><strong>Authority signals</strong> — credentials, awards, accreditations, and industry recognition</li>
  <li><strong>Consistency</strong> — matching business information across Google, directories, and your website</li>
</ul>

<h2>The Portsmouth Competitive Landscape</h2>
<p>We've audited dozens of Portsmouth businesses and found a consistent pattern: most local websites are <strong>not optimised for AI</strong>. They might rank on page one of Google, but when a customer asks ChatGPT or Google Gemini for a recommendation, they don't appear.</p>
<p>This creates a massive opportunity. The businesses that optimise for AI search now will dominate recommendations before their competitors even realise the landscape has changed.</p>

<h2>Real Example: A Portsmouth Tradesperson</h2>
<p>We recently audited a well-established plumbing company in Southsea. They had great Google reviews (4.8 stars, 120+ reviews) and a decent website. But when we asked ChatGPT to recommend plumbers in Portsmouth, they weren't mentioned at all.</p>
<p>The reason? Their website had no structured data, no clear service pages, and no schema markup. ChatGPT simply didn't have enough structured information to confidently recommend them.</p>
<p>After implementing GEO optimisation — adding LocalBusiness schema, restructuring their service pages, and improving their content — they started appearing in AI recommendations within weeks.</p>

<h2>How to Check Your AI Visibility</h2>
<p>You can do a quick check yourself:</p>
<ol>
  <li>Ask ChatGPT: <em>"Recommend a [your service] in Portsmouth"</em></li>
  <li>Ask Google Gemini the same question</li>
  <li>Ask Siri or Alexa: <em>"Find me a [your service] near Portsmouth"</em></li>
</ol>
<p>If you don't appear in any of these, your AI visibility needs work. We offer a free, detailed AI visibility audit that goes much deeper — checking your schema markup, content structure, local signals, and competitive positioning.</p>
`,
  },

  // ── Post 3 ─────────────────────────────────────────────────────────────
  {
    title: "How AI Search Is Changing Local Business in Portsmouth",
    excerpt:
      "AI-powered search is reshaping how customers find local businesses. Here's what's changing and how Portsmouth businesses can adapt.",
    content: `
<p>The way people find local businesses is changing faster than most business owners realise. AI-powered search — through ChatGPT, Google AI Overviews, Gemini, and voice assistants — is fundamentally shifting how customers discover and choose local services.</p>

<h2>The Shift From Links to Answers</h2>
<p>Traditional Google search gives you a page of links. You click through, compare, and decide. AI search gives you a <strong>direct answer</strong>. When someone asks "Who's the best electrician in Gosport?", they don't get ten blue links — they get a curated recommendation.</p>
<p>This changes the game entirely. Instead of competing for page-one rankings, businesses now compete to be <strong>the answer</strong>.</p>

<h2>What This Means for Portsmouth Businesses</h2>
<p>The Solent region is a competitive market. Whether you're a restaurant in Gunwharf Quays, a solicitor in the city centre, or a tradesperson serving Fareham and Havant, AI search affects you. Here's how:</p>

<h3>1. Winner-Takes-More</h3>
<p>When Google shows ten results, all ten get some clicks. When AI gives one recommendation, that business gets nearly all the enquiries. Being second-best in AI search is almost as bad as not appearing at all.</p>

<h3>2. Reviews and Reputation Matter More</h3>
<p>AI models heavily weight review quality and quantity. A business with 50 five-star Google reviews will almost always be recommended over one with 10 reviews, regardless of how good their website looks.</p>

<h3>3. Structured Data Is Essential</h3>
<p>AI can't recommend what it can't understand. If your website doesn't have structured data (schema markup) telling AI about your services, location, opening hours, and credentials, you're leaving money on the table.</p>

<h3>4. Content Must Be Clear and Specific</h3>
<p>AI favours content that directly answers questions. Vague marketing copy doesn't help. Specific, helpful content about your services, your area, and your expertise does.</p>

<h2>What Portsmouth Businesses Should Do Now</h2>
<p>The good news is that most local businesses haven't adapted to AI search yet. That means there's a window of opportunity to get ahead. Here are the key steps:</p>
<ol>
  <li><strong>Audit your AI visibility</strong> — find out what AI currently says about your business</li>
  <li><strong>Optimise your Google Business Profile</strong> — this is one of the strongest signals for local AI recommendations</li>
  <li><strong>Add structured data</strong> — implement LocalBusiness, Service, and FAQ schema on your website</li>
  <li><strong>Build your review profile</strong> — actively encourage satisfied customers to leave Google reviews</li>
  <li><strong>Create clear, specific content</strong> — answer the questions your customers actually ask</li>
</ol>

<h2>The Bottom Line</h2>
<p>AI search isn't coming — it's here. The Portsmouth businesses that adapt now will capture a growing share of local enquiries. Those that don't will wonder why their phone stopped ringing.</p>
`,
  },

  // ── Post 4 ─────────────────────────────────────────────────────────────
  {
    title: "Do I Need a New Website in 2026?",
    excerpt:
      "If your website was built more than 3 years ago, it probably isn't optimised for AI search. Here's how to tell if it's time for a rebuild.",
    content: `
<p>It's a question we hear all the time: <em>"My website looks fine — do I really need a new one?"</em> The honest answer depends on what "fine" means in 2026. A website that looks good but isn't optimised for AI search is like a beautifully designed shop on a street that nobody walks down.</p>

<h2>The 2026 Website Checklist</h2>
<p>Here's a quick test. Does your current website have:</p>
<ul>
  <li>✅ <strong>Schema markup</strong> (LocalBusiness, Service, FAQ, Review)</li>
  <li>✅ <strong>Core Web Vitals</strong> in the green (LCP under 2.5s, CLS under 0.1)</li>
  <li>✅ <strong>Mobile-first responsive design</strong></li>
  <li>✅ <strong>HTTPS with no mixed content warnings</strong></li>
  <li>✅ <strong>Structured content</strong> with clear headings (H1, H2, H3)</li>
  <li>✅ <strong>FAQ sections</strong> that answer real customer questions</li>
  <li>✅ <strong>Consistent NAP data</strong> (Name, Address, Phone) matching your Google Business Profile</li>
  <li>✅ <strong>Author and credential information</strong> (E-E-A-T signals)</li>
</ul>
<p>If you ticked fewer than five of these, your website is likely invisible to AI search — regardless of how it looks.</p>

<h2>Why Older Websites Struggle with AI</h2>
<p>Most websites built before 2024 were designed for <em>human visitors</em> and <em>traditional Google search</em>. They might look great, but they don't speak the language that AI models understand.</p>
<p>Common issues we see with older websites:</p>
<ul>
  <li><strong>No structured data at all</strong> — AI can't parse unstructured content reliably</li>
  <li><strong>Slow load times</strong> — often due to unoptimised images, bloated themes, or cheap hosting</li>
  <li><strong>Outdated CMS platforms</strong> — older WordPress themes with messy code that confuses crawlers</li>
  <li><strong>Missing meta information</strong> — no OpenGraph tags, no Twitter cards, no canonical URLs</li>
  <li><strong>Generic content</strong> — vague service descriptions that don't differentiate from competitors</li>
</ul>

<h2>Rebuild vs Optimise</h2>
<p>Not every website needs a complete rebuild. Sometimes, targeted optimisation can bring an existing site up to standard. Here's a rough guide:</p>
<p><strong>Optimise your existing site if:</strong></p>
<ul>
  <li>It was built within the last 2-3 years on a modern platform</li>
  <li>It loads quickly and is mobile-friendly</li>
  <li>It just needs schema markup, better content structure, and technical fixes</li>
</ul>
<p><strong>Consider a rebuild if:</strong></p>
<ul>
  <li>It's on an outdated platform (old WordPress theme, Wix, or a custom site from 2018)</li>
  <li>It fails Core Web Vitals checks</li>
  <li>The code is messy and hard to maintain</li>
  <li>It doesn't reflect your current services or branding</li>
</ul>

<h2>What a GEO-Optimised Website Looks Like</h2>
<p>A modern, GEO-optimised website is built from the ground up to be recommended by AI. It includes comprehensive schema markup, lightning-fast performance, clear content structure, and strong authority signals. It's not just a brochure — it's a machine-readable representation of your business that AI can confidently recommend.</p>
<p>At Solent Signal, we build GEO-optimised websites for Portsmouth and Solent businesses, starting from £49/month. Every site includes full schema markup, Core Web Vitals optimisation, and a free AI visibility audit.</p>
`,
  },

  // ── Post 5 ─────────────────────────────────────────────────────────────
  {
    title: "Why Your Google Business Profile Matters More Than Ever",
    excerpt:
      "Your Google Business Profile is one of the strongest signals AI uses to recommend local businesses. Here's how to make yours work harder.",
    content: `
<p>Your Google Business Profile (GBP) has always been important for local search. But in 2026, with AI search dominating how customers find businesses, it's become arguably the <strong>single most important piece of your online presence</strong>.</p>

<h2>Why AI Loves Google Business Profiles</h2>
<p>When ChatGPT, Gemini, or Google AI Overviews generate a local business recommendation, they pull heavily from Google's own data. Your Google Business Profile is a primary source for:</p>
<ul>
  <li><strong>Business name and category</strong></li>
  <li><strong>Location and service area</strong></li>
  <li><strong>Reviews and ratings</strong></li>
  <li><strong>Opening hours</strong></li>
  <li><strong>Services offered</strong></li>
  <li><strong>Photos and updates</strong></li>
</ul>
<p>If your GBP is incomplete, outdated, or poorly optimised, AI models have less confidence in recommending you — and they'll recommend a competitor instead.</p>

<h2>GBP Optimisation Checklist for 2026</h2>
<p>Here's what a fully optimised Google Business Profile looks like:</p>

<h3>1. Complete Every Field</h3>
<p>Don't leave anything blank. Fill in your business description, services, attributes, opening hours (including special hours), and service area. Google rewards completeness.</p>

<h3>2. Choose the Right Categories</h3>
<p>Your primary category is the most important ranking factor for local search. Choose the most specific category that fits your business. Add relevant secondary categories too, but don't overdo it.</p>

<h3>3. Actively Manage Reviews</h3>
<p>Reviews are critical for AI recommendations. Focus on:</p>
<ul>
  <li>Asking satisfied customers to leave reviews (a simple follow-up message works wonders)</li>
  <li>Responding to every review — positive and negative</li>
  <li>Keeping a steady flow of recent reviews (recency matters to AI)</li>
</ul>

<h3>4. Post Regular Updates</h3>
<p>Google Business Profile posts signal that your business is active and engaged. Post at least weekly with updates, offers, or helpful content. This also gives AI more content to work with.</p>

<h3>5. Add High-Quality Photos</h3>
<p>Businesses with more photos get significantly more engagement. Add photos of your work, your team, your premises, and your products. Update them regularly.</p>

<h3>6. Use the Q&A Feature</h3>
<p>Proactively add common questions and answers to your GBP Q&A section. This is a direct signal to AI about what your business offers and how you help customers.</p>

<h2>GBP and Your Website — Working Together</h2>
<p>Your Google Business Profile and your website should tell the same story. Ensure your NAP (Name, Address, Phone) data is identical across both. Use the same business name, the same address format, and the same phone number everywhere.</p>
<p>Your website's LocalBusiness schema markup should match your GBP data exactly. This consistency builds trust with AI models and makes them more confident in recommending you.</p>

<h2>The Portsmouth Advantage</h2>
<p>Many Portsmouth businesses have a Google Business Profile but haven't touched it since they set it up. That means the bar is low. A fully optimised GBP paired with a GEO-optimised website puts you significantly ahead of most local competitors.</p>
<p>If you're not sure how your GBP stacks up, our free AI visibility audit includes a full Google Business Profile review alongside your website and AI search analysis.</p>
`,
  },
];

async function publish(post) {
  const url = `${BASE_URL}/api/admin/publish-blog`;
  console.log(`Publishing: ${post.title}`);

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });

  const data = await res.json();

  if (res.ok) {
    console.log(`  ✓ Published → ${data.url}`);
  } else {
    console.error(`  ✕ Failed:`, data.error || data.detail || res.status);
  }
}

async function main() {
  console.log(`Seeding ${posts.length} blog posts to ${BASE_URL}\n`);
  for (const post of posts) {
    await publish(post);
  }
  console.log("\nDone.");
}

main();
