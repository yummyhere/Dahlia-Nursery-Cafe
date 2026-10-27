import { useState, useEffect, useRef } from 'react'
import ModalWrapper from './ModalWrapper'

const MENU_ITEMS = [
  { name: 'Bang Bang Prawns', desc: 'Crispy batter fried prawns, signature sriracha honey sauce.', price: 'Rs. 2,095', cat: 'Starters' },
  { name: 'Trio of Fries', desc: 'Fries in three flavours: truffle & mushrooms / kimchi / bolognese.', price: 'Rs. 1,145', cat: 'Starters' },
  { name: 'Smashed Potatoes', desc: 'Herb & garlic smashed baby potatoes, crème fraîche dip.', price: 'Rs. 995', cat: 'Starters' },
  { name: 'Dahlia Garden Salad', desc: 'Seasonal greens, heirloom tomatoes, lemon-herb vinaigrette.', price: 'Rs. 1,045', cat: 'Starters' },
  { name: 'Slow-Cooked Beef Steak', desc: 'Pan-seared sirloin, chimichurri, grilled seasonal vegetables.', price: 'Rs. 3,595', cat: 'Mains' },
  { name: 'Prawn Aglio Olio', desc: 'Spaghetti, tiger prawns, chilli, garlic, parsley, lemon.', price: 'Rs. 2,795', cat: 'Mains' },
  { name: 'Mushroom Risotto', desc: 'Wild mushroom, parmesan, truffle oil, fresh thyme.', price: 'Rs. 1,995', cat: 'Mains' },
  { name: 'Truffle Chicken', desc: 'Pan-seared chicken breast, truffle cream sauce, mashed potato.', price: 'Rs. 2,695', cat: 'Mains' },
  { name: 'Detroit-Style Pepperoni', desc: 'Caramelised edges, rich tomato base, premium pepperoni.', price: 'Rs. 2,395', cat: 'Detroit Pizza' },
  { name: 'Botanical Veggie Pizza', desc: 'Roasted vegetables, goat cheese, pesto, sun-dried tomatoes.', price: 'Rs. 2,095', cat: 'Detroit Pizza' },
  { name: 'Chicken Tikka Pizza', desc: 'Smoked tikka chicken, mint chutney base, mozzarella.', price: 'Rs. 2,295', cat: 'Detroit Pizza' },
  { name: 'Eggs Benedict', desc: 'Poached eggs, hollandaise, back bacon, toasted sourdough.', price: 'Rs. 1,695', cat: 'Brunch' },
  { name: 'Avocado Toast', desc: 'Smashed avocado, feta, cherry tomatoes, micro herbs, sourdough.', price: 'Rs. 1,395', cat: 'Brunch' },
  { name: 'The Full Dahlia Breakfast', desc: 'Eggs your way, sausage, mushrooms, grilled tomato, toast.', price: 'Rs. 1,895', cat: 'Brunch' },
  { name: 'Brioche French Toast', desc: 'Thick-cut brioche, maple syrup, berries, vanilla cream.', price: 'Rs. 1,295', cat: 'Brunch' },
  { name: 'Chocolate Lava Cake', desc: 'Warm dark chocolate, vanilla ice cream, raspberry coulis.', price: 'Rs. 1,045', cat: 'Desserts' },
  { name: 'Crème Brûlée', desc: 'Classic vanilla bean custard, caramelised sugar crust.', price: 'Rs. 945', cat: 'Desserts' },
  { name: 'Seasonal Fruit Tart', desc: 'Shortcrust pastry, pastry cream, fresh seasonal fruits.', price: 'Rs. 895', cat: 'Desserts' },
  { name: 'Signature Dahlia Latte', desc: 'Double espresso, steamed oat milk, house botanical syrup.', price: 'Rs. 795', cat: 'Coffee' },
  { name: 'Flat White', desc: 'Ristretto shots, silky microfoam, served in a ceramic cup.', price: 'Rs. 645', cat: 'Coffee' },
  { name: 'Matcha Latte', desc: 'Ceremonial grade matcha, steamed milk, light sweetness.', price: 'Rs. 745', cat: 'Coffee' },
  { name: 'Cold Brew', desc: '18-hour cold-steeped single origin, served over ice.', price: 'Rs. 695', cat: 'Coffee' },
  { name: 'Cortado', desc: 'Equal parts espresso and warm milk, perfectly balanced.', price: 'Rs. 595', cat: 'Coffee' },
  { name: 'Hibiscus Rose Cooler', desc: 'Hibiscus, rose water, lemon, sparkling water.', price: 'Rs. 695', cat: 'Botanical Drinks' },
  { name: 'Cucumber Mint Refresher', desc: 'Fresh cucumber, mint, lime, honey, sparkling water.', price: 'Rs. 645', cat: 'Botanical Drinks' },
  { name: 'Green Goddess Smoothie', desc: 'Spinach, apple, ginger, banana, coconut water.', price: 'Rs. 745', cat: 'Botanical Drinks' },
  { name: 'Chamomile Honey Lemonade', desc: 'Chamomile tea, fresh lemon, local honey, ice.', price: 'Rs. 595', cat: 'Botanical Drinks' },
]

function highlight(text, query) {
  if (!query) return text
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'))
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase()
      ? <mark key={i}>{part}</mark>
      : part
  )
}

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 120)
    } else {
      setQuery('')
    }
  }, [isOpen])

  const q = query.toLowerCase().trim()
  const matches = q
    ? MENU_ITEMS.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.cat.toLowerCase().includes(q)
      )
    : []

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} id="search-modal">
      <div className="search-modal-inner">
        <span className="eyebrow" style={{ textAlign: 'center', display: 'block', marginBottom: '10px' }}>DAHLIA NURSERY + CAFÉ</span>
        <h2 id="modal-search-title" style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--color-forest)', textAlign: 'center', marginBottom: '24px' }}>Search Dahlia</h2>
        <div className="search-input-wrap">
          <svg className="search-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            id="search-input"
            className="search-input"
            placeholder="Search menu, dishes, drinks…"
            autoComplete="off"
            spellCheck="false"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {query && (
            <button
              id="search-clear-btn"
              className="search-clear-btn visible"
              aria-label="Clear search"
              onClick={() => setQuery('')}
            >&times;</button>
          )}
        </div>

        <div id="search-results" className="search-results">
          {q && matches.length === 0 && (
            <p className="search-no-results">
              No results for "<strong>{query}</strong>"<br />
              <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>Try: coffee, brunch, pizza, steak…</span>
            </p>
          )}
          {matches.map((item, i) => (
            <div className="search-result-item" key={i}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="search-result-name">{highlight(item.name, query)}</div>
                <div className="search-result-category">{item.cat}</div>
                <div className="search-result-desc">{highlight(item.desc, query)}</div>
              </div>
              <div className="search-result-price">{item.price}</div>
            </div>
          ))}
        </div>

        {!q && (
          <p className="search-hint" id="search-hint">Start typing to search across our full menu…</p>
        )}
      </div>
    </ModalWrapper>
  )
}
