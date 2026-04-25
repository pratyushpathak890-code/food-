import React from 'react';

const products = [
  { name: 'Dehydrated Onion', desc: 'White, pink and red onion flakes, chopped, minced and powder.', icon: '🧅' },
  { name: 'Dehydrated Garlic', desc: 'Garlic flakes, granules, minced garlic and powder.', icon: '🧄' },
  { name: 'Dehydrated Powder', desc: 'Fine processed powders for seasoning and food processing.', icon: '🌿' },
  { name: 'Spices', desc: 'Fresh aroma spices with consistent quality.', icon: '🌶️' },
];

const features = [
  'Export-ready product catalogue',
  'WhatsApp enquiry button',
  'Download brochure option',
  'Buyer enquiry form',
  'Quality assurance section',
  'Mobile responsive design',
];

export default function App() {
  const styles = {
    page: { fontFamily: 'Arial, sans-serif', background: '#ffffff', color: '#0f172a', margin: 0 },
    nav: { position: 'sticky', top: 0, zIndex: 10, background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid #e2e8f0', padding: '18px 6%' },
    navInner: { maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20 },
    logoWrap: { display: 'flex', alignItems: 'center', gap: 12 },
    logo: { width: 46, height: 46, borderRadius: 16, background: '#059669', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 },
    links: { display: 'flex', gap: 24, fontSize: 14, fontWeight: 700 },
    callBtn: { background: '#0f172a', color: '#fff', padding: '12px 20px', borderRadius: 999, textDecoration: 'none', fontWeight: 800 },
    hero: { maxWidth: 1200, margin: '0 auto', padding: '90px 6%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' },
    badge: { display: 'inline-block', background: '#ecfdf5', color: '#047857', border: '1px solid #bbf7d0', padding: '10px 16px', borderRadius: 999, fontWeight: 800, fontSize: 14 },
    h1: { fontSize: 64, lineHeight: 1.02, margin: '24px 0', letterSpacing: '-3px', fontWeight: 900 },
    para: { color: '#475569', fontSize: 18, lineHeight: 1.7, maxWidth: 560 },
    btnRow: { display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 30 },
    primary: { background: '#059669', color: '#fff', padding: '15px 24px', borderRadius: 999, textDecoration: 'none', fontWeight: 900 },
    secondary: { background: '#fff', color: '#0f172a', padding: '15px 24px', borderRadius: 999, textDecoration: 'none', fontWeight: 900, border: '1px solid #cbd5e1' },
    heroCard: { background: 'linear-gradient(135deg,#ecfdf5,#fff7ed)', padding: 26, borderRadius: 32, boxShadow: '0 25px 70px rgba(15,23,42,0.12)', border: '1px solid #e2e8f0' },
    grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
    miniCard: { background: '#fff', padding: 24, borderRadius: 24, boxShadow: '0 8px 24px rgba(15,23,42,0.06)' },
    section: { maxWidth: 1200, margin: '0 auto', padding: '70px 6%' },
    mutedTitle: { color: '#059669', fontWeight: 900, letterSpacing: 3, fontSize: 13, textTransform: 'uppercase' },
    h2: { fontSize: 42, lineHeight: 1.1, margin: '12px 0 22px', letterSpacing: '-1.5px' },
    productSection: { background: '#f8fafc', padding: '70px 6%' },
    productInner: { maxWidth: 1200, margin: '0 auto' },
    productGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22, marginTop: 34 },
    productCard: { background: '#fff', border: '1px solid #e2e8f0', borderRadius: 26, padding: 24, boxShadow: '0 8px 22px rgba(15,23,42,0.04)' },
    dark: { maxWidth: 1200, margin: '0 auto', background: '#0f172a', color: '#fff', borderRadius: 34, padding: 44 },
    featureGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 28 },
    feature: { background: 'rgba(255,255,255,0.1)', padding: 20, borderRadius: 20 },
    contact: { maxWidth: 1200, margin: '0 auto', padding: '70px 6%' },
    contactBox: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, border: '1px solid #e2e8f0', borderRadius: 34, padding: 38, boxShadow: '0 20px 60px rgba(15,23,42,0.08)' },
    input: { width: '100%', boxSizing: 'border-box', padding: 15, borderRadius: 16, border: '1px solid #cbd5e1', marginBottom: 12, fontSize: 15 },
    footer: { borderTop: '1px solid #e2e8f0', textAlign: 'center', padding: 28, color: '#64748b', fontWeight: 700 },
  };

  return (
    <div style={styles.page}>
      <header style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.logoWrap}>
            <div style={styles.logo}>NF</div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 900 }}>New Food</div>
              <div style={{ color: '#64748b', fontSize: 13, fontWeight: 700 }}>Manufacturer & Exporter</div>
            </div>
          </div>
          <div style={styles.links}>
            <a href="#about">Company</a>
            <a href="#products">Products</a>
            <a href="#quality">Quality</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="tel:+919662299039" style={styles.callBtn}>Call Now</a>
        </div>
      </header>

      <section style={styles.hero}>
        <div>
          <span style={styles.badge}>Premium Dehydrated Food Products</span>
          <h1 style={styles.h1}>Modern website for New Food.</h1>
          <p style={styles.para}>A clean, white, export-focused website concept for dehydrated onion, garlic, powder and spices with buyer enquiry, brochure and WhatsApp lead generation.</p>
          <div style={styles.btnRow}>
            <a href="#products" style={styles.primary}>Explore Products →</a>
            <a href="#contact" style={styles.secondary}>Get Quotation</a>
          </div>
        </div>

        <div style={styles.heroCard}>
          <div style={styles.grid2}>
            {products.map((p) => (
              <div key={p.name} style={styles.miniCard}>
                <div style={{ fontSize: 42 }}>{p.icon}</div>
                <h3 style={{ margin: '16px 0 8px', fontSize: 20 }}>{p.name.replace('Dehydrated ', '')}</h3>
                <p style={{ color: '#64748b', margin: 0 }}>Export quality</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" style={styles.section}>
        <div style={styles.mutedTitle}>Company Profile</div>
        <h2 style={styles.h2}>Trusted manufacturer for quality food ingredients.</h2>
        <p style={styles.para}>New Food can present itself as a reliable manufacturer and exporter with strong focus on quality, natural taste, timely delivery and buyer satisfaction. The redesigned website makes the business look more professional for export and B2B buyers.</p>
      </section>

      <section id="products" style={styles.productSection}>
        <div style={styles.productInner}>
          <div style={styles.mutedTitle}>Products</div>
          <h2 style={styles.h2}>Product Categories</h2>
          <div style={styles.productGrid}>
            {products.map((p) => (
              <div key={p.name} style={styles.productCard}>
                <div style={{ fontSize: 40 }}>{p.icon}</div>
                <h3 style={{ fontSize: 22, marginBottom: 10 }}>{p.name}</h3>
                <p style={{ color: '#64748b', lineHeight: 1.6 }}>{p.desc}</p>
                <button style={{ border: 0, background: 'transparent', color: '#059669', fontWeight: 900 }}>View Details →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quality" style={{ padding: '70px 6%' }}>
        <div style={styles.dark}>
          <div style={styles.mutedTitle}>Why Choose Us</div>
          <h2 style={{ ...styles.h2, color: '#fff' }}>Quality, logistics and consistency in one supply partner.</h2>
          <div style={styles.featureGrid}>
            {features.map((f) => (
              <div key={f} style={styles.feature}>✓ {f}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={styles.contact}>
        <div style={styles.contactBox}>
          <div>
            <div style={styles.mutedTitle}>Contact</div>
            <h2 style={styles.h2}>Request pricing, sample or export details.</h2>
            <p>📞 +91 96622 99039</p>
            <p>✉️ info@newfood.in</p>
            <p>📍 Mahuva, Bhavnagar, Gujarat, India</p>
          </div>
          <form>
            <input style={styles.input} placeholder="Your Name" />
            <input style={styles.input} placeholder="Company / Buyer Type" />
            <input style={styles.input} placeholder="Phone / WhatsApp" />
            <textarea style={{ ...styles.input, minHeight: 110 }} placeholder="Product requirement" />
            <button type="button" style={{ ...styles.primary, border: 0, width: '100%' }}>Send Enquiry</button>
          </form>
        </div>
      </section>

      <footer style={styles.footer}>© 2026 New Food. Modern website concept by Pratyush.</footer>
    </div>
  );
}
