import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const PLATE_CARDS = [
  {
    category: 'desserts',
    badge: 'INSTAGRAM ICON',
    img: '/images/plate_toast.jpg',
    alt: 'Lotus French Toast with whipped cream and Biscoff',
    title: 'Lotus French Toast',
    price: 'Rs. 1,545',
    desc: 'House baked brioche soaked in egg bath, layered with Lotus Biscoff spread and velvety whipped cream.',
    featured: false,
  },
  {
    category: 'starters',
    badge: 'BREAKFAST FAVORITE',
    img: '/images/plate_prawns.jpg',
    alt: 'Crispy Bang Bang Prawns with sriracha honey sauce',
    title: 'Bang Bang Prawns',
    price: 'Rs. 2,095',
    desc: "Crispy batter-fried jumbo prawns tossed in Dahlia's signature sriracha honey glaze, lime, and scallions.",
    featured: true,
  },
  {
    category: 'desserts',
    badge: 'DECADENT',
    img: '/images/menu_dessert.jpg',
    alt: 'Warm chocolate molten lava cake with vanilla ice cream',
    title: 'Molten Lava Cake',
    price: 'Rs. 1,545',
    desc: 'Classic dark chocolate lava cake with warm molten center, rich chocolate ganache, and Madagascar vanilla bean ice cream.',
    featured: false,
  },
  {
    category: 'pizza',
    badge: 'DETROIT CRUST',
    img: '/images/plate_pizza.jpg',
    alt: 'Detroit Style Whipped Ricotta and Pesto Pizza',
    title: 'Whipped Ricotta Pizza',
    price: 'Rs. 2,295',
    desc: 'Thick, crispy rectangular Detroit crust topped with grilled chicken, fragrant basil pesto, and fresh whipped lemon ricotta.',
    featured: false,
  },
  {
    category: 'mains',
    badge: 'PREMIUM CUT',
    img: '/images/plate_steak.jpg',
    alt: 'Cured tenderloin steak with fondant potatoes',
    title: 'Tenderloin Steak',
    price: 'Rs. 3,495',
    desc: 'Cured tenderloin medallion with confit arugula, cherry tomatoes, sauteed wild mushrooms, and buttery fondant potatoes.',
    featured: false,
  },
  {
    category: 'starters',
    badge: 'GARDEN FRESH',
    img: '/images/plate_salad.jpg',
    alt: 'Classic Caesar Salad with grilled chicken and parmesan',
    title: 'Classic Caesar Salad',
    price: 'Rs. 1,450',
    desc: 'Crisp greenhouse romaine, sun-dried tomatoes, house croutons, aged shaved parmesan, and tender grilled chicken breast.',
    featured: false,
  },
  {
    category: 'mains',
    badge: "CHEF'S CUT",
    img: '/images/plate_burger.jpg',
    alt: 'Gouda-Fest Smash Burger on brioche bun',
    title: 'Gouda-Fest Smash Burger',
    price: 'Rs. 2,095',
    desc: 'Double beef smash patty, melted smoked gouda cheese, homemade sauce, pickles, and jalapenos on toasted brioche.',
    featured: false,
  },
  {
    category: 'drinks',
    badge: 'SIGNATURE REFRESHER',
    img: '/images/plate_mojito.jpg',
    alt: 'Strawberry Mojito with mint leaves and fresh lime',
    title: 'Strawberry Mojito',
    price: 'Rs. 795',
    desc: 'Muddled greenhouse garden mint leaves, wild strawberry puree, fresh lime juice, and effervescent sparkling soda.',
    featured: false,
  },
  {
    category: 'drinks',
    badge: 'HOUSE ROAST',
    img: '/images/menu_latte.jpg',
    alt: 'Iced Caramel Macchiato with espresso layers and caramel',
    title: 'Iced Caramel Macchiato',
    price: 'Rs. 985',
    desc: 'Double shot espresso poured over chilled whole or oat milk, vanilla bean infusion, and golden salted caramel drizzle.',
    featured: false,
  },
]

const TABS = [
  { key: 'all', label: 'All Offerings' },
  { key: 'starters', label: 'Starters & Salads' },
  { key: 'mains', label: 'Artisanal Mains' },
  { key: 'pizza', label: 'Detroit Crusts' },
  { key: 'desserts', label: 'House Desserts' },
  { key: 'drinks', label: 'Beverages & Brews' },
]

export default function MenuSection({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('all')
  const headerRef = useScrollReveal()
  const tabsRef = useScrollReveal()
  const gridRef = useScrollReveal()

  const visible = PLATE_CARDS.filter(
    c => activeTab === 'all' || c.category === activeTab
  )

  return (
    <section className="menu-section" id="menu" aria-label="Dahlia Botanical Menu">
      <div className="section-edge-decor edge-left" aria-hidden="true"></div>
      <div className="section-edge-decor edge-right" aria-hidden="true"></div>
      <div className="container">

        <div className="section-header-editorial reveal-fade-up" ref={headerRef}>
          <span className="eyebrow">DAHLIA NURSERY + CAFÉ</span>
          <h2 className="section-title">The Seasonal Menu</h2>
          <p className="section-subtitle">
            Wholesome starters, artisanal mains, Detroit-style crusts, house-baked brioche desserts, and refreshing botanical brews.
          </p>
        </div>

        <div className="menu-tabs reveal-fade-up" role="tablist" ref={tabsRef}>
          {TABS.map(tab => (
            <button
              key={tab.key}
              className={`menu-tab-btn${activeTab === tab.key ? ' active' : ''}`}
              data-category={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="menu-plate-grid reveal-fade-up" id="menu-plate-grid" ref={gridRef}>
          {visible.map((card, i) => (
            <article
              key={i}
              className={`plate-card${card.featured ? ' featured-card' : ''}`}
              data-category={card.category}
            >
              <div className="plate-circle-wrap">
                <span className="plate-badge">{card.badge}</span>
                <img src={card.img} alt={card.alt} className="plate-circle-img" loading="lazy" />
              </div>
              <h3 className="plate-card-title">{card.title}</h3>
              <span className="plate-card-price">{card.price}</span>
              <p className="plate-card-desc">{card.desc}</p>
              <button className="plate-order-btn" onClick={() => onOpenModal('menu-modal')}>
                Explore &amp; Order
              </button>
            </article>
          ))}
        </div>

        <div className="menu-cta-wrap reveal-fade-up" style={{ marginTop: '54px', textAlign: 'center' }}>
          <button className="btn btn-primary" onClick={() => onOpenModal('menu-modal')} id="full-menu-btn">
            View Complete Menu Directory (All 70+ Items)
          </button>
        </div>

      </div>
    </section>
  )
}
