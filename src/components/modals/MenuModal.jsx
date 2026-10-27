import ModalWrapper from './ModalWrapper'

const sectionStyle = {
  fontFamily: "'Cinzel', serif",
  fontSize: '1.5rem',
  marginBottom: '16px',
  borderBottom: '2px solid var(--color-moss)',
  paddingBottom: '6px',
  color: 'var(--color-forest)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
}
const smallStyle = {
  fontFamily: 'var(--font-editorial-sans)',
  fontSize: '0.68rem',
  letterSpacing: '0.16em',
  color: 'var(--color-moss)',
}
const itemStyle = {
  borderBottom: '1px dashed rgba(73, 55, 44, 0.15)',
  paddingBottom: '12px',
}
const nameRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: "'Alice', serif",
  fontSize: '1.25rem',
}
const descStyle = {
  fontFamily: "'Alice', serif",
  fontSize: '0.95rem',
  color: '#777',
  marginTop: '3px',
}

function MenuItem({ name, price, desc, last }) {
  return (
    <li style={last ? { paddingBottom: '4px' } : itemStyle}>
      <div style={nameRowStyle}>
        <strong style={{ color: 'var(--color-forest)' }}>{name}</strong>
        <span style={{ color: 'var(--color-terracotta)', fontWeight: 600 }}>{price}</span>
      </div>
      {desc && <p style={descStyle}>{desc}</p>}
    </li>
  )
}

function DrinkItem({ name, price, last }) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Alice', serif", fontSize: '1.25rem', borderBottom: last ? 'none' : '1px dashed rgba(73, 55, 44, 0.15)', paddingBottom: last ? '4px' : '8px' }}>
      <span style={{ color: 'var(--color-forest)' }}>{name}</span>
      <strong style={{ color: 'var(--color-terracotta)' }}>{price}</strong>
    </li>
  )
}

function SectionHeader({ title, tag }) {
  return (
    <h3 style={sectionStyle}>
      <span>{title}</span>
      <small style={smallStyle}>{tag}</small>
    </h3>
  )
}

export default function MenuModal({ isOpen, onClose }) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} id="menu-modal" wide>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <span className="eyebrow">DAHLIA NURSERY + CAFÉ</span>
        <h2 id="modal-menu-title" style={{ fontFamily: "'Cinzel', 'Ahsing', serif", fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', marginBottom: '12px', color: 'var(--color-forest)' }}>
          Complete Menu Directory
        </h2>
        <p style={{ fontFamily: "'Alice', Georgia, serif", fontSize: '1.15rem', color: 'var(--color-charcoal-muted)', maxWidth: '680px', margin: '0 auto' }}>
          Full botanical offerings across our kitchen, bakery, and brew bar. Sourced with care, prepared fresh daily in our glasshouse sanctuary.
        </p>
      </div>

      <div className="modal-menu-grid">

        {/* STARTERS */}
        <div>
          <SectionHeader title="STARTERS" tag="SMALL PLATES" />
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', padding: 0 }}>
            <MenuItem name="Bang Bang Prawns" price="Rs. 2,095" desc="Crispy batter fried prawns, signature sriracha honey sauce." />
            <MenuItem name="Trio of Fries" price="Rs. 1,145" desc="Fries in three flavours: truffle & mushrooms / kimchi / bolognese." />
            <MenuItem name="Smashed Potatoes" price="Rs. 995" desc="Herb & garlic smashed baby potatoes, crème fraîche dip." />
            <MenuItem name="Dahlia Garden Salad" price="Rs. 1,045" desc="Seasonal greens, heirloom tomatoes, lemon-herb vinaigrette." />
            <MenuItem name="Chicken Loaded Fries" price="Rs. 1,325" desc="Hand-cut fries, spice mix, cheese, chicken cubes, mushroom sauce, sriracha mayo, melted mozzarella." />
            <MenuItem name="Baked Mushrooms" price="Rs. 1,345" desc="Button mushroom, cream cheese, parmesan, olives, bell pepper." />
            <MenuItem name="Garlic Butter Prawn Skillet" price="Rs. 2,095" desc="Butter poached prawns, garlic, lime, parmesan, toasted pita." />
            <MenuItem name="Chicken Strips" price="Rs. 1,385" desc="Deep fried chicken tenders, garlic aioli dip." />
            <MenuItem name="Soup of the Day" price="Rs. 795" desc="Daily chef preparation served with artisan bread." last />
          </ul>
        </div>

        {/* SALAD + PIZZA */}
        <div>
          <SectionHeader title="SALAD" tag="GARDEN GREENS" />
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', padding: 0, marginBottom: '32px' }}>
            <MenuItem name="Classic Caesar Salad" price="Rs. 1,450" desc="Crispy greens, sun dried tomatoes, croutons, caesar dressing, parmesan, chicken." />
            <MenuItem name="Quinoa Salad" price="Rs. 1,695" desc="Black quinoa, mixed greens, feta cheese, red cabbage, roasted almonds, cherry tomatoes, mushrooms, balsamic dressing." />
            <MenuItem name="Square Salad" price="Rs. 1,450" desc="Tomatoes, crispy beans, feta, mix greens, crispy filo sheets, chicken, tangy mustard dressing, sour cream." last />
          </ul>

          <SectionHeader title="DETROIT STYLE PIZZA" tag="CRISPY CRUST" />
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', padding: 0 }}>
            <MenuItem name="Whipped Ricotta" price="Rs. 2,295" desc="Grilled chicken, pesto, fresh whipped ricotta." />
            <MenuItem name="Classic Cheese" price="Rs. 2,195" desc="House special tomato sauce, mozzarella, parmesan." />
            <MenuItem name="Pepperonica" price="Rs. 2,295" desc="Dahlia tomato sauce, pepperoni, mozzarella, parmesan." />
            <MenuItem name="Carnivale" price="Rs. 2,295" desc="Spicy creamy red sauce, chicken, olives, onions, bell peppers, cheese." />
            <MenuItem name="New York Style" price="Rs. 2,295" desc="Dahlia tomato sauce, chicken, cheese, onion rings, buffalo hot sauce." />
            <MenuItem name="Bianca" price="Rs. 2,295" desc="White truffle mushroom sauce, sundried tomatoes, chicken, rocket." last />
          </ul>
        </div>

        {/* CHICKEN MAINS */}
        <div>
          <SectionHeader title="CHICKEN MAINS" tag="ENTREES" />
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', padding: 0 }}>
            <MenuItem name="Poulet Marrakesh" price="Rs. 2,295" desc="Charcoal grilled chicken breast, marrakesh sauce, sticky garlic rice, sauteed vegetables." />
            <MenuItem name="Fettuccine Florentine" price="Rs. 2,095" desc="Grilled chicken breast, mushroom, parmesan, florentine sauce, roasted bell pepper, leeks, fettuccine." />
            <MenuItem name="Fiesta Burrito Bowl (Chicken)" price="Rs. 2,685" desc="Brown rice, salsa, sour cream, fresh guacamole, Mexican herbs." />
            <MenuItem name="Phuket" price="Rs. 2,195" desc="Stir fry chicken, peanuts, basil, lemongrass, sticky rice." />
            <MenuItem name="Buffalo Chicken Burger" price="Rs. 1,795" desc="Buffalo mayo, fried thigh chicken, tangy sauce, jalapeno, pickles, cheese, fries, coleslaw." />
            <MenuItem name="The Karachi Club" price="Rs. 1,745" desc="Classic gymkhana style club sandwich on whitebread with chicken, eggs, beef bacon, house sauce." />
            <MenuItem name="Hot Buttermilk Chicken Burger" price="Rs. 1,795" desc="Buttermilk fried thigh chicken, spicy mayo, coleslaw, fries." />
            <MenuItem name="Parmesan Chicken" price="Rs. 2,295" desc="Deep fried chicken breast, French mustard sauce, mash potatoes, sauteed vegetables." />
            <MenuItem name="Stuffed Chicken Roulade" price="Rs. 2,295" desc="Stuffed chicken with spinach, cream cheese, mashed potatoes, sauteed vegetables." />
            <MenuItem name="Mac 'N' Cheese" price="Rs. 1,695" desc="Classic cheesy macaroni, BBQ chicken shots, sesame seeds." />
            <MenuItem name="Lime Chicken Sandwich" price="Rs. 1,525" desc="Lime grilled chicken, rocket, chili mayo, fries, coleslaw." />
            <MenuItem name="Dry Chilli Bowl (Chicken)" price="Rs. 2,295" desc="Chicken, chillies, onion, capsicum, garlic rice." />
            <MenuItem name="Penne Arrabiata" price="Rs. 1,595" desc="Penne, chili flakes, tomato sauce, parmesan." />
            <MenuItem name="Parm Chicken" price="Rs. 2,195" desc="Deep fried chicken fillet, tomato sauce, mozzarella, spaghetti." last />
          </ul>
        </div>

        {/* BEEF + SEAFOOD */}
        <div>
          <SectionHeader title="BEEF CUTS & BURGERS" tag="PRIMES" />
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', padding: 0, marginBottom: '32px' }}>
            <MenuItem name="Gouda-Fest Smash Burger" price="Rs. 2,095" desc="Double beef patty, smoked gouda, homemade sauce, pickles, jalapeno, brioche bun." />
            <MenuItem name="Tenderloin Steak with Confit Arugula" price="Rs. 3,495" desc="Cured tenderloin, wilted arugula, cherry tomatoes, mushroom, fondant potatoes." />
            <MenuItem name="Fiesta Burrito Bowl (Beef)" price="Rs. 2,885" desc="Brown rice, salsa, sour cream, fresh guacamole, Mexican herbs." />
            <MenuItem name="Smoked BBQ Bacon Smash Burger" price="Rs. 2,095" desc="Double beef patty, beef bacon strips, sambal mayo, fries, coleslaw." />
            <MenuItem name="Thai Basil Beef" price="Rs. 2,295" desc="Red chillies, basil, stir fry beef, sticky rice." />
            <MenuItem name="Spaghetti Bolognese" price="Rs. 1,895" desc="Beef ragu, pomodoro sauce, basil, spaghetti." />
            <MenuItem name="Steak with Shiitake Mushrooms" price="Rs. 3,495" desc="Cured tenderloin, beef potatoes croquette, creamed spinach, demi glazed mushroom sauce." />
            <MenuItem name="Seoul Beef Bowl" price="Rs. 2,295" desc="Stir fried beef, Korean BBQ sauce, sticky rice, sunny side up egg." />
            <MenuItem name="Wasabi Beef Sandwich" price="Rs. 1,895" desc="Roasted beef, wasabi, rocket, parmesan, pickles, fries, coleslaw." />
            <MenuItem name="Dry Chilli Bowl (Beef)" price="Rs. 2,295" desc="Beef, chillies, onion, capsicum, garlic rice." last />
          </ul>

          <SectionHeader title="SEAFOOD" tag="OCEAN HARVEST" />
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', padding: 0 }}>
            <MenuItem name="The Tamil Prince" price="Rs. 2,885" desc="Red snapper, Asian spices, grilled veggies, sticky rice." />
            <MenuItem name="Frutti Di Mare" price="Rs. 2,495" desc="Linguine, pan seared prawns, calamari, lemon, garlic, parmesan." />
            <MenuItem name="Prawn Risotto" price="Rs. 2,885" desc="Saffron risotto, parmesan, mushrooms, chargrilled prawns, green peas." />
            <MenuItem name="Lemon & Herb Snapper" price="Rs. 2,885" desc="Pan seared snapper, lemon, herbs, mashed potatoes." last />
          </ul>
        </div>

        {/* DESSERTS */}
        <div>
          <SectionHeader title="DESSERTS" tag="PÂTISSERIE" />
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', padding: 0 }}>
            <MenuItem name="Lotus French Toast (House Special)" price="Rs. 1,545" desc="House baked brioche, egg bath, Lotus Biscoff, whipped cream." />
            <MenuItem name="Molten Lava" price="Rs. 1,545" desc="Classic chocolate lava cake, melted chocolate, vanilla ice cream." />
            <MenuItem name="Bread Pudding" price="Rs. 1,245" desc="House baked brioche, nuts, salted caramel sauce, ice cream." />
            <MenuItem name="Nutella French Toast" price="Rs. 1,545" desc="House baked brioche, egg bath, Nutella sauce, bananas, caramelized popcorn." />
            <MenuItem name="Blueberry Cheese Cake" price="Rs. 1,245" desc="Cream cheese, graham crackers, blueberries." />
            <MenuItem name="Tres Leches Au Chocolate" price="Rs. 1,095" desc="House baked sponge, three milks, chocolate ganache, honeycomb." />
            <MenuItem name="Toffee Pudding" price="Rs. 1,245" desc="Spiced cake, nuts, dates, ice cream." />
            <MenuItem name="Warm Brownie" price="Rs. 1,095" desc="Brownie, salted caramel, sea salt, ice cream." />
            <MenuItem name="Mini Carrot Cake" price="Rs. 1,095" desc="Spiced carrot cake with cream cheese frosting." />
            <MenuItem name="Mini Dark Chocolate Cake" price="Rs. 1,095" desc="Rich cocoa sponge with dark chocolate ganache." />
            <MenuItem name="Mini Vanilla Cake" price="Rs. 1,095" desc="Madagascar vanilla bean sponge with delicate glaze." last />
          </ul>
        </div>

        {/* DRINKS */}
        <div>
          <SectionHeader title="DRINKS & COFFEE" tag="HOT & ICED" />
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
            <DrinkItem name="Americano (Hot / Iced)" price="Rs. 785" />
            <DrinkItem name="Café Latte (Hot / Iced)" price="Rs. 845" />
            <DrinkItem name="Café Latte Flavoured (Hot / Iced)" price="Rs. 985" />
            <DrinkItem name="Iced Caramel Macchiato" price="Rs. 985" />
            <DrinkItem name="ABC Juice (Apple, Beetroot, Carrot)" price="Rs. 945" />
            <DrinkItem name="Fresh Juice (Seasonal)" price="Rs. 945" />
            <DrinkItem name="Iced Peach Tea" price="Rs. 795" />
            <DrinkItem name="Strawberry Mojito" price="Rs. 795" />
            <DrinkItem name="Iced Mocca" price="Rs. 925" />
            <DrinkItem name="Mint Margarita" price="Rs. 745" />
            <DrinkItem name="Fresh Lime" price="Rs. 295" />
            <DrinkItem name="Kiwi Red Bull Mojito" price="Rs. 995" />
            <DrinkItem name="Virgin Mojito" price="Rs. 785" />
            <DrinkItem name="Red Bull" price="Rs. 625" />
            <DrinkItem name="Tea / Green Tea" price="Rs. 300" />
            <DrinkItem name="Soft Drinks" price="Rs. 195" />
            <DrinkItem name="Mineral Water" price="Rs. 150" last />
          </ul>
        </div>

      </div>

      <div style={{ textAlign: 'center', marginTop: '36px', paddingTop: '24px', borderTop: '1px solid rgba(73, 55, 44, 0.2)' }}>
        <p style={{ fontFamily: 'var(--font-editorial-sans)', fontSize: '0.8rem', letterSpacing: '0.14em', color: 'var(--color-terracotta)', marginBottom: '20px', fontWeight: 600 }}>
          *PRICES ARE EXCLUSIVE OF GST.
        </p>
        <button className="btn btn-primary" onClick={onClose} style={{ width: 'auto', padding: '12px 36px' }}>
          Close Menu
        </button>
      </div>
    </ModalWrapper>
  )
}
