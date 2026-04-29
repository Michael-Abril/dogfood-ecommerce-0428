const products = [
  { id: 1, name: 'Wireless Headphones', price: '$79.99', emoji: '🎧' },
  { id: 2, name: 'Mechanical Keyboard', price: '$129.99', emoji: '⌨️' },
  { id: 3, name: 'USB-C Hub', price: '$49.99', emoji: '🔌' },
]

export default function Home() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '48px 24px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
        <span style={{ fontWeight: 700, fontSize: 20 }}>ShopDemo</span>
        <button style={{ padding: '8px 20px', borderRadius: 8, background: '#111', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
          Cart (0)
        </button>
      </nav>
      <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 8 }}>Featured Products</h1>
      <p style={{ color: '#666', marginBottom: 40 }}>Top picks for your workspace setup</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {products.map(p => (
          <div key={p.id} style={{ border: '1px solid #e5e5e5', borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ fontSize: 48, textAlign: 'center' }}>{p.emoji}</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 16 }}>{p.name}</div>
              <div style={{ color: '#666', marginTop: 4 }}>{p.price}</div>
            </div>
            <button style={{ padding: '10px', borderRadius: 8, background: '#111', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 12, color: '#aaa', marginTop: 48, textAlign: 'center' }}>Dogfood Regression — Stack 6 — 2026-04-28</p>
    </main>
  )
}
