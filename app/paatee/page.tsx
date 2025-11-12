'use client'
import React from 'react'

const page = () => {
  return (
    <>
    <div>PHONE ASSESSORIES</div>
    {(() => {
      type Product = {
        id: string
        name: string
        price: number
        desc?: string
        img?: string
      }

      const SAMPLE_PRODUCTS: Product[] = [
        { id: '1', name: 'Silicone Case', price: 12.99, desc: 'Soft-touch silicone case', img: '/image/silicn.jpeg' },
        { id: '2', name: 'Tempered Glass', price: 8.5, desc: '9H screen protector', img: '/image/glass.jpg' },
        { id: '3', name: 'Wireless Charger', price: 24.0, desc: 'Fast wireless charging pad', img: '/image/chager.jpeg' },
        { id: '4', name: 'Car Mount', price: 15.5, desc: 'Magnetic dashboard mount', img: 'https://via.placeholder.com/150' },
        { id: '5', name: 'USB-C Cable', price: 6.0, desc: 'Durable braided cable', img: 'https://via.placeholder.com/150' },
        { id: '6', name: 'Earbuds Case', price: 9.99, desc: 'Protective carry case', img: 'https://via.placeholder.com/150' },
      ]

      function ShopApp() {
        const [products] = React.useState<Product[]>(SAMPLE_PRODUCTS)
        const [query, setQuery] = React.useState('')
        const [cart, setCart] = React.useState<Record<string, number>>({})

        const filtered = products.filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            (p.desc || '').toLowerCase().includes(query.toLowerCase())
        )

        const addToCart = (id: string) => {
          setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))
        }

        const changeQty = (id: string, delta: number) => {
          setCart((c) => {
            const next = { ...c }
            const v = (next[id] || 0) + delta
            if (v <= 0) delete next[id]
            else next[id] = v
            return next
          })
        }

        const clearCart = () => setCart({})

        const cartItems = Object.entries(cart).map(([id, qty]) => {
          const p = products.find((x) => x.id === id)!
          return { ...p, qty }
        })

        const total = cartItems.reduce((s, it) => s + it.price * it.qty, 0)

        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <input
                  aria-label="search"
                  placeholder="Search products..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{ padding: '8px 10px', flex: 1, marginRight: 12 }}
                />
                <button onClick={() => { setQuery(''); }} style={{ padding: '8px 12px' }}>
                  Clear
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
                {filtered.map((p) => (
                  <div key={p.id} style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 12 }}>
                    <img src={p.img} alt={p.name} style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 6 }} />
                    <h3 style={{ margin: '8px 0 4px', fontSize: 16 }}>{p.name}</h3>
                    <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>{p.desc}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                      <strong style={{ fontSize: 15 }}>${p.price.toFixed(2)}</strong>
                      <button onClick={() => addToCart(p.id)} style={{ padding: '6px 10px' }}>
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 12 }}>
              <h3 style={{ marginTop: 0 }}>Cart</h3>

              {cartItems.length === 0 ? (
                <p style={{ color: '#6b7280' }}>Your cart is empty.</p>
              ) : (
                <div style={{ display: 'grid', gap: 10 }}>
                  {cartItems.map((it) => (
                    <div key={it.id} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <img src={it.img} alt={it.name} style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 6 }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 14 }}>{it.name}</div>
                        <div style={{ color: '#6b7280', fontSize: 13 }}>${it.price.toFixed(2)} each</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <button onClick={() => changeQty(it.id, -1)} style={{ padding: '4px 8px' }}>
                          −
                        </button>
                        <div style={{ minWidth: 20, textAlign: 'center' }}>{it.qty}</div>
                        <button onClick={() => changeQty(it.id, 1)} style={{ padding: '4px 8px' }}>
                          +
                        </button>
                      </div>
                    </div>
                  ))}

                  <div style={{ borderTop: '1px solid #e6e6e6', paddingTop: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <strong>Total</strong>
                      <strong>${total.toFixed(2)}</strong>
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button onClick={clearCart} style={{ flex: 1, padding: '8px 12px' }}>
                        Clear
                      </button>
                      <button
                        onClick={() => alert('Checkout simulated — integrate real payment here.')}
                        style={{ flex: 1, padding: '8px 12px' }}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </aside>
          </div>
        )
      }

      return <ShopApp />
    })()}
    </>
  )
}

export default page
