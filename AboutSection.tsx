import { GalleryItem, ServiceItem } from './types';

// Let's reference our exact generated assets
export const HERO_IMAGE = '/src/assets/images/henkar_hero_1779927735552.png';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    name: 'The Whispering Rose',
    category: 'wedding',
    image: '/src/assets/images/gallery_wedding_1779927755641.png',
    description: 'An elegant four-tiered masterwork adorned with soft pink cascading sugar roses, ivory lace piping, and a smooth pearl luster finish.',
    flavors: ['Madagascar Vanilla Bean & Passionfruit', 'Lavender Honey & Wild Blackberry'],
    priceRange: '$$$$',
    slices: '120 - 150 servings',
    details: [
      'Four custom stacked tiers (12", 10", 8", 6" rounds)',
      'Handcrafted sugar roses requiring 24 hours of artisanal detailing each',
      'Encased in premium organic thin French rolled fondant',
      'Includes complimentary luxury presentation stand and silver cutting knife keepsake'
    ]
  },
  {
    id: 'g2',
    name: 'Citrus & Berry Celebration',
    category: 'celebration',
    image: '/src/assets/images/gallery_birthday_1779927770557.png',
    description: 'A vibrant three-tiered celebration drip cake topped with gourmet macarons, fresh organic glazed berries, gold dust, and airy pastel cream swirls.',
    flavors: ['Salted Caramel Toffee Crunch', 'Lemon Elderflower Whisper'],
    priceRange: '$$$',
    slices: '50 - 70 servings',
    details: [
      'Three whimsical stacked tiers (10", 8", 6" rounds)',
      'Smooth Swiss meringue buttercream coating with professional gold-leaf flecking',
      'Artistic white chocolate drip glaze tinted with biological pastel pigments',
      'Fresh raspberries, organic blueberries, and custom lavender macarons'
    ]
  },
  {
    id: 'g3',
    name: 'The Emerald Geode',
    category: 'artisan',
    image: '/src/assets/images/gallery_artisan_1779927787447.png',
    description: 'An avant-garde luxury custom cake featuring an intricate carved geode hollow filled with glowing emerald isomalt crystal clusters and real 24k gold foil veins.',
    flavors: ['Dark Chocolate Stout & Cherry', 'Pistachio Cardamom & Rose'],
    priceRange: '$$$$$',
    slices: '60 - 80 servings',
    details: [
      'Three heavy-stacked structure-reinforced tiers (9", 7", 5" hexagon & round mix)',
      'Exotic hand-chiseled cave structure filled with food-grade slowly grown candy crystals',
      'Gilded in genuine premium 24-karat edible gold trim',
      'Finished with dark charcoal textured stone-like buttercream for dramatic geological contrast'
    ]
  },
  {
    id: 'g4',
    name: 'The Royal Gilded Scroll',
    category: 'wedding',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?q=80&w=800&auto=format&fit=crop',
    description: 'A breathtaking majestic wedding design decorated with luxury baroque gold-leaf molds, edible crown topper, and ivory scroll accents.',
    flavors: ['Madagascar Vanilla Bean & Passionfruit', 'Rich Velvet White Chocolate'],
    priceRange: '$$$$',
    slices: '100 - 120 servings',
    details: [
      'Three grand tiers with custom base risers',
      'Traditional hand-piped royal icing scrolls painted with antique gold mineral dust',
      'Satin buttercream backing with flawless sharp edges'
    ]
  },
  {
    id: 'g5',
    name: 'Petite Parisian Macaron Tower',
    category: 'mini',
    image: 'https://images.unsplash.com/photo-1558961309-db0f17743d5e?q=80&w=800&auto=format&fit=crop',
    description: 'A lovely miniature tower of handmade French almond macarons resting on a delicate almond sponge cake, perfect for elegant high-tea or service bars.',
    flavors: ['Pistachio', 'Rose Petal', 'Dark Chocolate Sea Salt', 'Salted Butter Caramel'],
    priceRange: '$$',
    slices: '24 individual servings',
    details: [
      'Includes 40 freshly baked gourmet macarons arranged in a custom acrylic cone',
      'Edible chocolate base plate garnished with crystalized violet petals',
      'Gluten-free almond recipe made using traditional double-sift methods'
    ]
  },
  {
    id: 'g6',
    name: 'Monet Watercolor Canvas',
    category: 'artisan',
    image: 'https://images.unsplash.com/photo-1562266567-275d85918365?q=80&w=800&auto=format&fit=crop',
    description: 'A beautiful single-tier tall cake painted freehand with colored cocoa butter palette-knife strokes to resemble a French impressionist wildflower field.',
    flavors: ['Lemon Elderflower Whisper', 'Pistachio Cardamom & Rose'],
    priceRange: '$$$',
    slices: '20 - 30 servings',
    details: [
      'Single extra-tall double barrel cake (8" round, 9" height)',
      'Textured white-chocolate ganache canvas for tactile painting strokes',
      'Entirely edible colors naturally sourced from beetroot, spirulina, and turmeric extracts'
    ]
  },
  {
    id: 'g7',
    name: 'Belgian Truffle Opera Squares',
    category: 'mini',
    image: 'https://images.unsplash.com/photo-1511018556340-d16986a1c194?q=80&w=800&auto=format&fit=crop',
    description: 'Bite-sized luxury cakes composed of almond sponge cake soaked in coffee syrup, layered with ganache and French buttercream, finished with dark espresso glaze.',
    flavors: ['Belgian Espresso Truffle'],
    priceRange: '$$',
    slices: '36 bite-sized squares',
    details: [
      'Delivered in beautiful individual gold liners with customized monogram initialing',
      'High-quality Valrhona, Belgium single-origin cacao (72%)',
      'Decorated with delicate flakes of fine micro silver leaf'
    ]
  },
  {
    id: 'g8',
    name: 'The Modernist Coral Cake',
    category: 'artisan',
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=800&auto=format&fit=crop',
    description: 'A striking minimalist architectural piece featuring abstract blown-sugar coral shards and clean linear structural silhouettes in absolute white.',
    flavors: ['Madagascar Vanilla Bean & Passionfruit', 'Salted Caramel Toffee Crunch'],
    priceRange: '$$$$',
    slices: '40 - 50 servings',
    details: [
      'Double stacked tier (8" and 6" square shapes with modern sharp corners)',
      'Signature fluid isomalt coral structure, custom cast and hand-blown by Chef Henkar',
      'Pristine stark-white chocolate coating'
    ]
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 's1',
    name: 'Bespoke Wedding Cakes',
    tagline: 'Your Love Story, Sculpted in Sugar',
    description: 'We design custom, show-stopping cake masterworks that harmonize with your venue, dress design, and floral direction. Every wedding includes comprehensive tasting, direct consultations with Chef Henkar, and stress-free direct coordination with your event planners.',
    iconName: 'Heart',
    priceLabel: 'Inquire for Custom Quote',
    process: [
      'Flavors & Design Consult: 60-minute tasting session to select cake textures, fillings, and draft initial aesthetic sketches.',
      'Aesthetic Alignment: We review your fabric swatches, floral lists, and invite details to craft a perfect structural match.',
      'Secure Delivery & Local On-site Setup: Our white-glove team transports, finishes, constructs, and finalizes your cake on-site with flawless execution.'
    ]
  },
  {
    id: 's2',
    name: 'Artisan Celebration Cakes',
    tagline: 'Make Milestones Statuesque',
    description: 'From monumental birthdays and baby showers to corporate events and product launches, we craft themed desserts that spark intense conversation. Choose between whimsical cartoon representations, stunning gravity-defying geometries, or elegant modern watercolor drip finishes.',
    iconName: 'Sparkles',
    priceLabel: 'Starting from $180',
    process: [
      'Theme Formulation: Tell us your mood board, color preferences, or specific artistic parameters.',
      'Sizing Selection: Tailor custom sizing to perfectly match guest count and display expectations.',
      'Fresh Day-of Pickup or Priority Courier: Hand-delivery option with air-controlled protective carriage setup.'
    ]
  },
  {
    id: 's3',
    name: 'Elite Dessert Bar Services',
    tagline: 'A Curated Feast of Miniatures',
    description: 'Indulge your guests with custom-themed pastry selections. Perfect as dynamic sideboards alongside wedding cakes or as standalone grazing tables. We craft, deliver, and elegantly arrange a vibrant multi-sensory spread.',
    iconName: 'Cake',
    priceLabel: 'Starting from $15/guest',
    process: [
      'Curated Menu: Selection of handmade macarons, mini opera squares, glazed tarts, piped eclairs, and custom cake lollipops.',
      'Themed Riser Framing: We supply and build display settings using custom marble, stone, gold, or wooden riser sets.',
      'Allergy custom adjustments: Full options for pristine gluten-free, dairy-free, and vegan formulations without sacrificing flavor depth.'
    ]
  },
  {
    id: 's4',
    name: 'Private Baking & Styling Masterclass',
    tagline: 'Learn From Studio Masters',
    description: 'An exclusive opportunity to experience the artisan studio first-hand. Join Chef Henkar in a private or small-group workshop. Learn the exact science of sugar crystal geodes, flawless sharp-edge buttercream, or delicate gum-paste floral crafting.',
    iconName: 'GraduationCap',
    priceLabel: 'Starting from $350/person',
    process: [
      'Professional Equipment: Access to professional-grade tools, organic pastry ingredients, and individual workstations.',
      'Hands-on Mentorship: Chef Henkar demonstrates techniques step-by-step with continuous correction.',
      'Masterclass Certificate: Take home your completed masterpiece, a custom toolbag kit, and their secret recipe journal.'
    ]
  }
];

export const FLAVORS = [
  {
    name: 'Lavender Honey & Wild Blackberry',
    description: 'Delicate lavender blossom sponge, organic rosemary honey buttercream, and fresh blackberry reduction.',
    intensity: 'Mild & Floral',
    popularFor: 'Spring & Summer Weddings'
  },
  {
    name: 'Dark Chocolate Stout & Cherry',
    description: 'Decadent 72% Valrhona cocoa cake infused with premium local imperial stout, filled with vanilla bean liqueur cherries.',
    intensity: 'Rich & Comforting',
    popularFor: 'Artistic Geodes & Festive Occasions'
  },
  {
    name: 'Pistachio Cardamom & Rosewater',
    description: 'Toasted Persian green pistachio crumb sponge, whipped green cardamom meringue cream, finished with subtle rosewood syrup glaze.',
    intensity: 'Warm, Exotic & Nutty',
    popularFor: 'Artisan & Contemporary Gatherings'
  },
  {
    name: 'Madagascar Vanilla Bean & Passionfruit',
    description: 'Gourmet moist gold sponge folded with authentic caviar vanilla beans, layered with extremely tangy fresh passionfruit curd layers.',
    intensity: 'Bright & Zesty',
    popularFor: 'All Occasions, Universal Favorite'
  },
  {
    name: 'Salted Caramel Toffee Pecan',
    description: 'Brown butter sponge, handmade slow-roasted salty caramel glaze, crunchy caramelized butter pecan praline flakes.',
    intensity: 'Rich, Toasted & Sweet',
    popularFor: 'Milestone Birthdays & Autumn Receptions'
  }
];

export const ACCENTS = [
  { id: 'sugar_flowers', name: 'Cascading sugar flowers (+ $95)', price: 95 },
  { id: 'gold_foil', name: '24k gold leaf gilding (+ $50)', price: 50 },
  { id: 'fresh_berries', name: 'Fresh organic berry cluster (+ $30)', price: 30 },
  { id: 'isomalt_geode', name: 'Hand-sculpted Geode Cave (+ $120)', price: 120 },
  { id: 'whimsical_drip', name: 'Colored chocolate drip glaze (+ $20)', price: 20 },
  { id: 'custom_topper', name: 'Laser-cut custom monogram topper (+ $40)', price: 40 }
];
