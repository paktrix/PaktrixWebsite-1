import { supabase } from './supabase';

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  features: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  applications: string[];
  image: string;
}

interface DBProduct {
  id: string;
  name: string;
  slug: string;
  short_description: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
  image: string;
  category_id: string;
  display_order: number;
  product_categories?: {
    display_order: number;
  };
}

function mapDBProductToProduct(dbProduct: DBProduct): Product {
  return {
    id: dbProduct.id,
    name: dbProduct.name,
    slug: dbProduct.slug,
    shortDescription: dbProduct.short_description,
    description: dbProduct.description,
    features: dbProduct.features || [],
    specifications: dbProduct.specifications || [],
    applications: dbProduct.applications || [],
    image: dbProduct.image,
  };
}

// ── Local industry product images ────────────────────────────────────────────
import cakeBoxImage from '../assets/food-packaging/cake-box.png';
import cookieBoxImage from '../assets/food-packaging/cookie-box.png';
import chocolateBoxImage from '../assets/food-packaging/chocolate-box.png';
import sandwichBoxImage from '../assets/food-packaging/sandwich-box.png';
import sweetBoxImage from '../assets/food-packaging/sweet-box.png';
import pizzaBoxImage from '../assets/food-packaging/pizza-box.png';
import bakeryBoxImage from '../assets/food-packaging/bakery-box.png';
import medicineBoxImage from '../assets/pharma-packaging/medicine-box.png';
import syrupBoxImage from '../assets/pharma-packaging/syrup-box.png';
import capsuleBoxImage from '../assets/pharma-packaging/capsule-box.png';
import healthBoxImage from '../assets/pharma-packaging/health-box.png';
import pharmaExportBoxImage from '../assets/pharma-packaging/pharma-export-box.png';
import skincareBoxImage from '../assets/cosmetic-packaging/skincare-box.png';
import makeupBoxImage from '../assets/cosmetic-packaging/makeup-box.png';
import perfumeBoxImage from '../assets/cosmetic-packaging/perfume-box.png';
import haircareBoxImage from '../assets/cosmetic-packaging/haircare-box.png';
import lipstickBoxImage from '../assets/cosmetic-packaging/lipstick-box.png';
import garmentBoxImage from '../assets/textile-packaging/garment-box.png';
import sareeBoxImage from '../assets/textile-packaging/saree-box.png';
import shirtBoxImage from '../assets/textile-packaging/shirt-box.png';
import fabricRollBoxImage from '../assets/textile-packaging/fabric-roll-box.png';
import textileExportBoxImage from '../assets/textile-packaging/textile-export-box.png';
import chocolateGiftBoxImage from '../assets/gift-box/chocolate-gift-box.png';
import crackerGiftBoxImage from '../assets/gift-box/cracker-gift-box.png';
import sweetGiftBoxImage from '../assets/gift-box/sweet-gift-box.png';
import dryfruitGiftBoxImage from '../assets/gift-box/dryfruit-gift-box.png';
import jewelryBoxImage from '../assets/gift-box/jewelry-box.png';

// ── Static industry products (with local images) ─────────────────────────────

export const industryProducts: Product[] = [
  // Food packaging
  {
    id: 'food-cake-box',
    name: 'Cake Boxes',
    slug: 'cake-boxes',
    shortDescription: 'Premium cake boxes designed for freshness, safety, and attractive presentation for bakeries and dessert brands.',
    description: 'Cake box packaging is essential for maintaining the freshness, safety, and presentation of cakes during storage and delivery. Attractive and durable cake packaging not only protects cakes from damage but also enhances brand value and customer experience for bakeries, cafés, and dessert brands.',
    features: [
      'Food-grade materials',
      'Custom sizes and shapes',
      'Grease-proof coating options',
      'Custom printing and branding',
      'Eco-friendly material options',
      'Window patching available',
    ],
    specifications: [
      { label: 'Material', value: 'Food-grade paperboard' },
      { label: 'Finish', value: 'Matte/Gloss lamination' },
      { label: 'Customization', value: 'Size, printing, window cutout' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Bakeries', 'Pastry shops', 'Home bakers', 'Cafés', 'Dessert brands'],
    image: cakeBoxImage,
  },
  {
    id: 'food-cookie-box',
    name: 'Cookie Boxes',
    slug: 'cookie-boxes',
    shortDescription: 'Durable cookie boxes that preserve freshness while creating attractive product presentation for bakeries.',
    description: 'Cookie box packaging plays an important role in preserving freshness, maintaining product quality, and creating attractive product presentation for bakeries and food brands. Well-designed cookie packaging helps protect cookies during storage and delivery while enhancing shelf appeal and brand visibility.',
    features: [
      'Food-grade materials',
      'Moisture-resistant coating',
      'Custom printing and branding',
      'Window patching options',
      'Eco-friendly options',
      'Multiple size options',
    ],
    specifications: [
      { label: 'Material', value: 'Food-grade paperboard' },
      { label: 'Finish', value: 'Matte/Gloss lamination' },
      { label: 'Customization', value: 'Size, printing, window' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Bakeries', 'Cafés', 'Dessert brands', 'Food businesses'],
    image: cookieBoxImage,
  },
  {
    id: 'food-chocolate-box',
    name: 'Chocolate Boxes',
    slug: 'chocolate-boxes',
    shortDescription: 'Elegant chocolate boxes that protect chocolates while enhancing premium look and gifting appeal.',
    description: 'Chocolate box packaging is essential for protecting chocolates while enhancing their premium look and gifting appeal. Elegant and durable packaging helps maintain product freshness, prevents damage during transportation, and creates a memorable unboxing experience for customers.',
    features: [
      'Premium food-grade materials',
      'Luxury finishing options',
      'Custom inserts and compartments',
      'Foil stamping and embossing',
      'Custom printing and branding',
      'Eco-friendly options',
    ],
    specifications: [
      { label: 'Material', value: 'Premium paperboard / Rigid board' },
      { label: 'Finish', value: 'Matte/Gloss, foil, embossing' },
      { label: 'Customization', value: 'Size, printing, inserts' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Chocolate brands', 'Bakeries', 'Confectionery businesses', 'Gift packaging companies'],
    image: chocolateBoxImage,
  },
  {
    id: 'food-sandwich-box',
    name: 'Sandwich Boxes',
    slug: 'sandwich-boxes',
    shortDescription: 'Hygienic sandwich boxes that keep food fresh, secure, and convenient for takeaway and delivery.',
    description: 'Sandwich box packaging is designed to keep food fresh, hygienic, and secure during storage, takeaway, and delivery. Durable and attractive sandwich packaging helps food businesses improve product presentation while ensuring convenience and safe handling for customers.',
    features: [
      'Food-grade materials',
      'Grease-proof coating',
      'Secure closure design',
      'Custom printing and branding',
      'Eco-friendly takeaway options',
      'Multiple sizes available',
    ],
    specifications: [
      { label: 'Material', value: 'Food-grade kraft / paperboard' },
      { label: 'Finish', value: 'Matte/Gloss lamination' },
      { label: 'Customization', value: 'Size, printing' },
      { label: 'Minimum Order', value: '1000 units' },
    ],
    applications: ['Cafés', 'Restaurants', 'Bakeries', 'Cloud kitchens', 'Food delivery businesses'],
    image: sandwichBoxImage,
  },
  {
    id: 'food-sweet-box',
    name: 'Sweet Boxes',
    slug: 'sweet-boxes',
    shortDescription: 'Attractive sweet boxes that protect sweets while enhancing presentation and gifting appeal.',
    description: 'Sweet packaging boxes are designed to protect sweets while enhancing their presentation and gifting appeal. Attractive and durable packaging helps maintain freshness, supports safe transportation, and creates a premium experience for customers during festivals, celebrations, and retail purchases.',
    features: [
      'Food-grade materials',
      'Premium finishing options',
      'Custom printing and branding',
      'Festive design options',
      'Eco-friendly options',
      'Multiple sizes available',
    ],
    specifications: [
      { label: 'Material', value: 'Food-grade paperboard / Rigid board' },
      { label: 'Finish', value: 'Matte/Gloss, foil stamping' },
      { label: 'Customization', value: 'Size, printing, design' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Mithai shops', 'Confectionery brands', 'Bakeries', 'Gifting businesses'],
    image: sweetBoxImage,
  },
  {
    id: 'food-pizza-box',
    name: 'Pizza Boxes',
    slug: 'pizza-boxes',
    shortDescription: 'Strong, food-grade pizza boxes that keep pizzas fresh, warm, and secure during delivery.',
    description: 'Pizza packaging boxes are essential for keeping pizzas fresh, warm, and secure during takeaway and delivery. Strong and food-grade pizza packaging helps maintain product quality, prevents leakage, and improves customer experience with convenient and attractive packaging.',
    features: [
      'Food-grade corrugated board',
      'Heat retention design',
      'Grease-resistant coating',
      'Custom printing and branding',
      'Eco-friendly options',
      'Multiple sizes available',
    ],
    specifications: [
      { label: 'Material', value: 'Food-grade corrugated board' },
      { label: 'Finish', value: 'Custom printed' },
      { label: 'Customization', value: 'Size, printing' },
      { label: 'Minimum Order', value: '1000 units' },
    ],
    applications: ['Restaurants', 'Pizza outlets', 'Cloud kitchens', 'Food delivery businesses'],
    image: pizzaBoxImage,
  },
  {
    id: 'food-bakery-box',
    name: 'Bakery Boxes',
    slug: 'bakery-boxes',
    shortDescription: 'Premium bakery boxes that protect baked products while enhancing freshness and presentation.',
    description: 'Bakery packaging boxes are designed to protect baked products while enhancing their freshness, presentation, and customer appeal. Attractive and durable bakery packaging helps businesses maintain product quality during storage, takeaway, and delivery while strengthening brand identity.',
    features: [
      'Food-grade materials',
      'Window patching options',
      'Custom printing and branding',
      'Grease-proof coating',
      'Eco-friendly options',
      'Multiple sizes available',
    ],
    specifications: [
      { label: 'Material', value: 'Food-grade paperboard' },
      { label: 'Finish', value: 'Matte/Gloss lamination' },
      { label: 'Customization', value: 'Size, printing, window' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Bakeries', 'Cafés', 'Dessert brands', 'Pastry shops'],
    image: bakeryBoxImage,
  },
  // Pharma packaging
  {
    id: 'pharma-medicine-box',
    name: 'Medicine Boxes',
    slug: 'medicine-boxes',
    shortDescription: 'High-quality medicine boxes designed for product safety, hygiene, and regulatory compliance.',
    description: 'Medicine box packaging is designed to protect tablets, capsules, syrups, and healthcare products from moisture, contamination, and external damage. Durable and professionally printed medicine packaging helps pharmaceutical brands maintain product safety while improving brand presentation and regulatory compliance.',
    features: [
      'Pharma-grade materials',
      'Moisture-resistant coating',
      'Tamper-proof options',
      'Batch coding and barcode compatible',
      'Custom printing and branding',
      'Regulatory labeling support',
    ],
    specifications: [
      { label: 'Material', value: 'Pharma-grade paperboard' },
      { label: 'Finish', value: 'Matte/Gloss lamination' },
      { label: 'Customization', value: 'Size, printing, labeling' },
      { label: 'Minimum Order', value: '1000 units' },
    ],
    applications: ['Pharmaceutical companies', 'Healthcare brands', 'Medical distributors'],
    image: medicineBoxImage,
  },
  {
    id: 'pharma-syrup-box',
    name: 'Syrup Boxes',
    slug: 'syrup-boxes',
    shortDescription: 'Strong syrup packaging boxes that protect liquid medicines during storage and transportation.',
    description: 'Syrup packaging boxes play an important role in protecting liquid medicines during storage and transportation. Strong and secure syrup packaging helps maintain product quality while providing accurate product information and attractive branding.',
    features: [
      'Pharma-grade materials',
      'Moisture-resistant coating',
      'Secure bottle protection',
      'Custom printing and branding',
      'Regulatory labeling support',
      'Multiple sizes available',
    ],
    specifications: [
      { label: 'Material', value: 'Pharma-grade paperboard' },
      { label: 'Finish', value: 'Matte/Gloss lamination' },
      { label: 'Customization', value: 'Size, printing' },
      { label: 'Minimum Order', value: '1000 units' },
    ],
    applications: ['Pharmaceutical companies', 'Healthcare businesses'],
    image: syrupBoxImage,
  },
  {
    id: 'pharma-capsule-box',
    name: 'Tablet & Capsule Boxes',
    slug: 'tablet-capsule-boxes',
    shortDescription: 'Customized tablet and capsule packaging that ensures product safety and regulatory compliance.',
    description: 'Tablet and capsule packaging solutions are essential for protecting pharmaceutical products from environmental exposure and maintaining medicine quality. Proper packaging also supports product identification, dosage information, and regulatory labeling requirements.',
    features: [
      'Pharma-grade materials',
      'Moisture and contamination protection',
      'Tamper-evident options',
      'Batch coding compatibility',
      'Custom printing and branding',
      'Regulatory compliant',
    ],
    specifications: [
      { label: 'Material', value: 'Pharma-grade paperboard' },
      { label: 'Finish', value: 'Matte/Gloss lamination' },
      { label: 'Customization', value: 'Size, printing, labeling' },
      { label: 'Minimum Order', value: '1000 units' },
    ],
    applications: ['Pharmaceutical companies', 'Healthcare brands', 'Nutraceutical companies'],
    image: capsuleBoxImage,
  },
  {
    id: 'pharma-health-box',
    name: 'Healthcare Product Boxes',
    slug: 'healthcare-product-boxes',
    shortDescription: 'Safe and reliable healthcare packaging for medical devices, wellness products, and supplements.',
    description: 'Healthcare product packaging is designed for medical devices, wellness products, supplements, and personal healthcare items. Safe and reliable packaging helps businesses maintain hygiene standards while improving customer trust and product presentation.',
    features: [
      'Pharma-grade materials',
      'Hygienic packaging design',
      'Custom printing and branding',
      'Tamper-proof options',
      'Regulatory labeling support',
      'Multiple sizes available',
    ],
    specifications: [
      { label: 'Material', value: 'Pharma-grade paperboard' },
      { label: 'Finish', value: 'Matte/Gloss lamination' },
      { label: 'Customization', value: 'Size, printing' },
      { label: 'Minimum Order', value: '1000 units' },
    ],
    applications: ['Healthcare brands', 'Wellness companies', 'Pharmaceutical businesses'],
    image: healthBoxImage,
  },
  {
    id: 'pharma-export-box',
    name: 'Pharma Export Boxes',
    slug: 'pharma-export-boxes',
    shortDescription: 'Durable pharma export packaging for maximum product safety during domestic and international transport.',
    description: 'Pharma export packaging solutions are designed to provide maximum product safety during domestic and international transportation. Secure packaging helps pharmaceutical products remain protected from environmental conditions, handling damage, and contamination risks.',
    features: [
      'High-strength materials',
      'Moisture and contamination protection',
      'Export-grade construction',
      'Custom printing and branding',
      'Regulatory compliant',
      'Secure packaging structure',
    ],
    specifications: [
      { label: 'Material', value: 'Heavy-duty corrugated / paperboard' },
      { label: 'Finish', value: 'Custom printed' },
      { label: 'Customization', value: 'Size, printing, structure' },
      { label: 'Minimum Order', value: '1000 units' },
    ],
    applications: ['Pharmaceutical exporters', 'Healthcare distributors'],
    image: pharmaExportBoxImage,
  },
  // Cosmetics packaging
  {
    id: 'cosmetic-skincare-box',
    name: 'Skincare Boxes',
    slug: 'skincare-boxes',
    shortDescription: 'Custom skincare packaging boxes that protect creams, serums, and lotions while enhancing brand appeal.',
    description: 'Skincare packaging boxes are designed to protect creams, serums, lotions, and wellness products while enhancing product presentation and brand visibility. Attractive and durable skincare packaging helps brands create a premium customer experience.',
    features: [
      'Premium materials',
      'Foil stamping and embossing',
      'Custom printing and branding',
      'Matte and gloss lamination',
      'Window patching options',
      'Eco-friendly options',
    ],
    specifications: [
      { label: 'Material', value: 'Premium paperboard / Rigid board' },
      { label: 'Finish', value: 'Matte/Gloss, foil, embossing' },
      { label: 'Customization', value: 'Size, printing, finishing' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Beauty brands', 'Cosmetic companies', 'Wellness brands'],
    image: skincareBoxImage,
  },
  {
    id: 'cosmetic-makeup-box',
    name: 'Makeup Boxes',
    slug: 'makeup-boxes',
    shortDescription: 'Premium makeup packaging boxes that protect cosmetic products while creating attractive retail presentation.',
    description: 'Makeup packaging boxes play an important role in protecting cosmetic products while creating attractive retail presentation. High-quality packaging helps beauty brands improve shelf appeal and strengthen customer trust.',
    features: [
      'Premium materials',
      'Custom inserts and compartments',
      'Foil stamping and embossing',
      'Custom printing and branding',
      'Matte and gloss lamination',
      'Window patching options',
    ],
    specifications: [
      { label: 'Material', value: 'Premium paperboard' },
      { label: 'Finish', value: 'Matte/Gloss, foil, embossing' },
      { label: 'Customization', value: 'Size, printing, inserts' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Beauty brands', 'Cosmetic companies', 'Makeup brands'],
    image: makeupBoxImage,
  },
  {
    id: 'cosmetic-perfume-box',
    name: 'Perfume Boxes',
    slug: 'perfume-boxes',
    shortDescription: 'Luxury perfume packaging boxes that provide elegant presentation and secure protection for fragrances.',
    description: 'Perfume packaging boxes are designed to provide luxury presentation and secure protection for fragrance products. Elegant packaging enhances product value and improves gifting appeal for premium perfume brands.',
    features: [
      'Luxury rigid board materials',
      'Foil stamping and embossing',
      'Custom inserts for bottles',
      'Premium finishing options',
      'Custom printing and branding',
      'Magnetic closure options',
    ],
    specifications: [
      { label: 'Material', value: 'Rigid board / Premium paperboard' },
      { label: 'Finish', value: 'Foil, embossing, matte/gloss' },
      { label: 'Customization', value: 'Size, printing, inserts' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Perfume brands', 'Fragrance companies', 'Luxury retail'],
    image: perfumeBoxImage,
  },
  {
    id: 'cosmetic-haircare-box',
    name: 'Haircare Boxes',
    slug: 'haircare-boxes',
    shortDescription: 'Customized haircare packaging for shampoos, oils, conditioners, and personal care products.',
    description: 'Haircare product packaging is essential for protecting shampoos, oils, conditioners, and personal care products during storage and transportation. Durable packaging also helps businesses improve branding and retail visibility.',
    features: [
      'Premium materials',
      'Moisture-resistant coating',
      'Custom printing and branding',
      'Matte and gloss lamination',
      'Custom sizes and shapes',
      'Eco-friendly options',
    ],
    specifications: [
      { label: 'Material', value: 'Premium paperboard' },
      { label: 'Finish', value: 'Matte/Gloss lamination' },
      { label: 'Customization', value: 'Size, printing' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Beauty brands', 'Salons', 'Wellness companies'],
    image: haircareBoxImage,
  },
  {
    id: 'cosmetic-lipstick-box',
    name: 'Lipstick & Small Cosmetic Boxes',
    slug: 'lipstick-small-cosmetic-boxes',
    shortDescription: 'Compact cosmetic packaging for lipstick, compact powder, nail polish, and mini beauty products.',
    description: 'Small cosmetic packaging solutions are ideal for lipstick, compact powder, nail polish, and mini beauty products. Professionally designed packaging helps brands improve shelf presence and customer engagement.',
    features: [
      'Premium materials',
      'Custom sizes for small products',
      'Foil stamping and embossing',
      'Custom printing and branding',
      'Matte and gloss lamination',
      'Eco-friendly options',
    ],
    specifications: [
      { label: 'Material', value: 'Premium paperboard' },
      { label: 'Finish', value: 'Matte/Gloss, foil' },
      { label: 'Customization', value: 'Size, printing' },
      { label: 'Minimum Order', value: '1000 units' },
    ],
    applications: ['Beauty brands', 'Cosmetic companies', 'Personal care brands'],
    image: lipstickBoxImage,
  },
  // Textile packaging
  {
    id: 'textile-garment-box',
    name: 'Garment Boxes',
    slug: 'garment-boxes',
    shortDescription: 'Custom garment packaging boxes that protect clothing products while enhancing retail presentation.',
    description: 'Garment packaging boxes are designed to protect clothing products while enhancing their presentation and retail appeal. Attractive packaging helps fashion brands improve customer experience and strengthen brand identity.',
    features: [
      'Durable materials',
      'Custom printing and branding',
      'Matte and gloss lamination',
      'Window patching options',
      'Eco-friendly options',
      'Multiple sizes available',
    ],
    specifications: [
      { label: 'Material', value: 'Paperboard / Corrugated' },
      { label: 'Finish', value: 'Matte/Gloss lamination' },
      { label: 'Customization', value: 'Size, printing, design' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Apparel brands', 'Boutiques', 'Retail businesses'],
    image: garmentBoxImage,
  },
  {
    id: 'textile-saree-box',
    name: 'Saree Boxes',
    slug: 'saree-boxes',
    shortDescription: 'Premium saree packaging boxes that protect sarees while creating elegant product presentation.',
    description: 'Saree packaging boxes help protect sarees from dust, moisture, and damage while creating elegant product presentation. Professionally designed saree packaging improves gifting appeal and retail visibility for textile brands.',
    features: [
      'Premium rigid board materials',
      'Custom printing and branding',
      'Foil stamping and embossing',
      'Matte and gloss lamination',
      'Custom inserts and compartments',
      'Multiple sizes available',
    ],
    specifications: [
      { label: 'Material', value: 'Rigid board / Premium paperboard' },
      { label: 'Finish', value: 'Matte/Gloss, foil, embossing' },
      { label: 'Customization', value: 'Size, printing, inserts' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Textile brands', 'Fashion businesses', 'Saree retailers'],
    image: sareeBoxImage,
  },
  {
    id: 'textile-shirt-box',
    name: 'Shirt & Apparel Boxes',
    slug: 'shirt-apparel-boxes',
    shortDescription: 'Customized apparel packaging for shirts, t-shirts, ethnic wear, and fashion accessories.',
    description: 'Shirt and apparel packaging solutions are designed for organized product presentation and safe storage during retail display and transportation. Stylish packaging helps apparel brands create a premium customer experience.',
    features: [
      'Durable materials',
      'Custom printing and branding',
      'Matte and gloss lamination',
      'Custom sizes and shapes',
      'Eco-friendly options',
      'Window patching options',
    ],
    specifications: [
      { label: 'Material', value: 'Paperboard / Corrugated' },
      { label: 'Finish', value: 'Matte/Gloss lamination' },
      { label: 'Customization', value: 'Size, printing' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Apparel brands', 'Fashion businesses', 'Retail clothing stores'],
    image: shirtBoxImage,
  },
  {
    id: 'textile-fabric-roll-box',
    name: 'Fabric Roll Packaging',
    slug: 'fabric-roll-packaging',
    shortDescription: 'Strong and customized fabric packaging for textile mills, wholesalers, and exporters.',
    description: 'Fabric roll packaging is essential for protecting textile materials during storage, transportation, and export handling. Durable packaging helps textile manufacturers maintain fabric quality and reduce product damage.',
    features: [
      'Heavy-duty materials',
      'Moisture-resistant coating',
      'Custom sizes for fabric rolls',
      'Custom printing and branding',
      'Export-grade construction',
      'Eco-friendly options',
    ],
    specifications: [
      { label: 'Material', value: 'Heavy-duty corrugated' },
      { label: 'Finish', value: 'Custom printed' },
      { label: 'Customization', value: 'Size, printing' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Textile mills', 'Wholesalers', 'Exporters', 'Industrial textile businesses'],
    image: fabricRollBoxImage,
  },
  {
    id: 'textile-export-box',
    name: 'Textile Export Boxes',
    slug: 'textile-export-boxes',
    shortDescription: 'Export-quality textile packaging for safe domestic and international transportation.',
    description: 'Textile export packaging solutions are designed to ensure safe transportation of garments, fabrics, and textile products in domestic and international markets. Secure packaging protects products from moisture, dust, and handling damage during logistics operations.',
    features: [
      'Export-grade materials',
      'Moisture and dust protection',
      'High-strength construction',
      'Custom printing and branding',
      'Secure packaging structure',
      'Multiple sizes available',
    ],
    specifications: [
      { label: 'Material', value: 'Heavy-duty corrugated' },
      { label: 'Finish', value: 'Custom printed' },
      { label: 'Customization', value: 'Size, printing, structure' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Garment exporters', 'Textile exporters', 'Fashion brands'],
    image: textileExportBoxImage,
  },
  // Gift box packaging
  {
    id: 'gift-chocolate-box',
    name: 'Chocolate Gift Boxes',
    slug: 'chocolate-gift-boxes',
    shortDescription: 'Premium chocolate gift boxes that create a luxurious unboxing experience for gifting.',
    description: 'Chocolate gift boxes are designed to enhance the presentation and gifting appeal of chocolates for festivals, celebrations, corporate gifting, and premium retail packaging. Elegant chocolate box gift packaging helps create a luxurious unboxing experience while protecting delicate chocolates during storage and transportation.',
    features: [
      'Luxury rigid board materials',
      'Custom inserts and compartments',
      'Foil stamping and embossing',
      'Premium finishing options',
      'Custom printing and branding',
      'Ribbon and magnetic closures',
    ],
    specifications: [
      { label: 'Material', value: 'Rigid board / Premium paperboard' },
      { label: 'Finish', value: 'Foil, embossing, matte/gloss' },
      { label: 'Customization', value: 'Size, printing, inserts' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Confectionery brands', 'Bakeries', 'Gifting companies', 'Luxury retail'],
    image: chocolateGiftBoxImage,
  },
  {
    id: 'gift-cracker-box',
    name: 'Crackers Gift Boxes',
    slug: 'crackers-gift-boxes',
    shortDescription: 'Festive crackers gift box packaging for celebrations and decorative gifting.',
    description: 'Crackers gift box packaging is specially designed for festive gifting and celebration packaging. Strong and decorative cracker packaging helps improve product presentation while ensuring safe handling and organized packaging during transportation and storage.',
    features: [
      'Premium materials',
      'Vibrant festive designs',
      'Custom printing and branding',
      'Custom sizes and shapes',
      'Premium finishing options',
      'Multiple sizes available',
    ],
    specifications: [
      { label: 'Material', value: 'Premium paperboard / Rigid board' },
      { label: 'Finish', value: 'Custom printed, foil' },
      { label: 'Customization', value: 'Size, printing, design' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Festive brands', 'Wholesalers', 'Retailers', 'Gifting businesses'],
    image: crackerGiftBoxImage,
  },
  {
    id: 'gift-sweet-box',
    name: 'Sweet Gift Boxes',
    slug: 'sweet-gift-boxes',
    shortDescription: 'Premium sweet gift boxes for festivals, weddings, and corporate gifting.',
    description: 'Sweet gift boxes are widely used for festivals, weddings, celebrations, and corporate gifting. Attractive sweet packaging enhances the overall gifting experience while maintaining freshness and safe product handling.',
    features: [
      'Premium rigid board materials',
      'Custom printing and branding',
      'Foil stamping and embossing',
      'Custom inserts and compartments',
      'Premium finishing options',
      'Multiple sizes available',
    ],
    specifications: [
      { label: 'Material', value: 'Rigid board / Premium paperboard' },
      { label: 'Finish', value: 'Foil, embossing, matte/gloss' },
      { label: 'Customization', value: 'Size, printing, inserts' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Mithai shops', 'Confectionery brands', 'Bakeries', 'Gifting businesses'],
    image: sweetGiftBoxImage,
  },
  {
    id: 'gift-dryfruit-box',
    name: 'Dry Fruit Gift Boxes',
    slug: 'dry-fruit-gift-boxes',
    shortDescription: 'Premium dry fruit gift boxes for festive gifting, corporate gifting, and luxury retail.',
    description: 'Dry fruit gift boxes are designed to offer premium presentation and secure packaging for festive gifting, corporate gifting, and luxury retail products. Elegant dry fruit packaging helps improve product appeal while protecting products from moisture and damage.',
    features: [
      'Luxury rigid board materials',
      'Custom compartment inserts',
      'Foil stamping and embossing',
      'Premium finishing options',
      'Custom printing and branding',
      'Moisture-resistant design',
    ],
    specifications: [
      { label: 'Material', value: 'Rigid board / Premium paperboard' },
      { label: 'Finish', value: 'Foil, embossing, matte/gloss' },
      { label: 'Customization', value: 'Size, printing, inserts' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Food brands', 'Gifting companies', 'Retail businesses'],
    image: dryfruitGiftBoxImage,
  },
  {
    id: 'gift-jewelry-box',
    name: 'Jewelry Gift Boxes',
    slug: 'jewelry-gift-boxes',
    shortDescription: 'Elegant jewelry gift boxes that enhance luxury appeal and protect valuable accessories.',
    description: 'Jewelry gift boxes are essential for enhancing the luxury appeal and protection of jewelry products. Premium jewelry packaging creates an elegant unboxing experience while ensuring safe storage and transportation of valuable accessories.',
    features: [
      'Luxury rigid board materials',
      'Velvet-lined interiors',
      'Foil stamping and embossing',
      'Magnetic closure options',
      'Custom printing and branding',
      'Premium finishing options',
    ],
    specifications: [
      { label: 'Material', value: 'Rigid board with velvet lining' },
      { label: 'Finish', value: 'Foil, embossing, matte/gloss' },
      { label: 'Customization', value: 'Size, printing, inserts' },
      { label: 'Minimum Order', value: '500 units' },
    ],
    applications: ['Jewelry brands', 'Retailers', 'Luxury stores', 'Gifting businesses'],
    image: jewelryBoxImage,
  },
];

// ── Database products (generic packaging types) ──────────────────────────────

export const products: Product[] = [
  {
    id: '1',
    name: 'Corrugated boxes',
    slug: 'Corrugated boxes',
    shortDescription: 'Versatile and secure boxes perfect for retail packaging and product display.',
    description: 'Our Corrugated End Boxes combine durability with crystal-clear visibility, making them ideal for showcasing your products while providing secure closure. These boxes feature convenient tuck-end flaps for easy assembly and reliable protection.',
    features: [
      'Crystal-clear material for maximum product visibility',
      'Secure tuck-end closure mechanism',
      'Easy to assemble without tools or adhesive',
      'Available in multiple sizes and thicknesses',
      'Excellent for retail display and gift packaging',
      'Recyclable and eco-friendly material'
    ],
    specifications: [
      { label: 'Material', value: 'Premium PET/APET' },
      { label: 'Thickness', value: '0.3mm - 0.5mm' },
      { label: 'Finish', value: 'Crystal Clear' },
      { label: 'Customization', value: 'Size, printing available' },
      { label: 'Minimum Order', value: '1000 units' }
    ],
    applications: [
      'Cosmetics and beauty products',
      'Confectionery and food items',
      'Toys and collectibles',
      'Electronics accessories',
      'Gift packaging'
    ],
    image: 'https://images.pexels.com/photos/4483942/pexels-photo-4483942.jpeg'
  },
  {
    id: '2',
    name: 'Mono Boxes',
    slug: 'mono-carton-box',
    shortDescription: 'Elegant curved design perfect for small gifts, favors, and premium product packaging.',
    description: 'Mono Boxes offer a unique and attractive packaging solution with their distinctive curved shape. These boxes are perfect for creating memorable unboxing experiences while maintaining product visibility.',
    features: [
      'Distinctive pillow-shaped design',
      'Easy snap-close assembly',
      'Perfect for gift packaging and party favors',
      'Transparent material showcases contents beautifully',
      'Available in various sizes',
      'Lightweight yet sturdy construction'
    ],
    specifications: [
      { label: 'Material', value: 'Clear PET' },
      { label: 'Thickness', value: '0.35mm - 0.4mm' },
      { label: 'Finish', value: 'High Clarity' },
      { label: 'Customization', value: 'Size, color tinting available' },
      { label: 'Minimum Order', value: '500 units' }
    ],
    applications: [
      'Wedding and party favors',
      'Jewelry and accessories',
      'Small confectionery items',
      'Sample products',
      'Promotional items'
    ],
    image: 'https://images.pexels.com/photos/5706281/pexels-photo-5706281.jpeg'
  },
  {
    id: '3',
    name: 'Premium Boxes',
    slug: 'Premium Boxes',
    shortDescription: 'Fully customizable boxes with high-quality printing for brand recognition.',
    description: 'Elevate your brand with our Customized Premium Boxes. Featuring high-resolution printing capabilities, these boxes combine with custom branding to create stunning packaging solutions.',
    features: [
      'Full-color custom printing options',
      'Combine transparency with branded elements',
      'UV-resistant inks for long-lasting quality',
      'Multiple design layouts supported',
      'White, metallic, or transparent printing available',
      'Perfect for brand differentiation'
    ],
    specifications: [
      { label: 'Material', value: 'Premium APET/PET' },
      { label: 'Thickness', value: '0.3mm - 0.6mm' },
      { label: 'Printing', value: 'Offset/Screen printing' },
      { label: 'Customization', value: 'Full custom design' },
      { label: 'Minimum Order', value: '2000 units' }
    ],
    applications: [
      'Branded product packaging',
      'Retail merchandise',
      'Corporate gifts',
      'Premium consumer goods',
      'Event merchandise'
    ],
    image: 'https://images.pexels.com/photos/4792513/pexels-photo-4792513.jpeg'
  },
  {
    id: '4',
    name: 'Clear Tubes',
    slug: 'clear-tubes',
    shortDescription: 'Cylindrical packaging ideal for rolled products, posters, and unique items.',
    description: 'Our Clear Tubes provide 360-degree product visibility in a sleek cylindrical format. These tubes are perfect for packaging rolled items, elongated products, or creating unique packaging presentations.',
    features: [
      'Complete 360-degree visibility',
      'Secure end-cap closures',
      'Various diameter and length options',
      'Crush-resistant construction',
      'Ideal for rolled and cylindrical products',
      'Can be customized with labels or printing'
    ],
    specifications: [
      { label: 'Material', value: 'Clear PET' },
      { label: 'Thickness', value: '0.4mm - 0.5mm' },
      { label: 'Diameter', value: '30mm - 200mm' },
      { label: 'Customization', value: 'Length, end caps, labeling' },
      { label: 'Minimum Order', value: '1000 units' }
    ],
    applications: [
      'Posters and prints',
      'Bottles and cylindrical products',
      'Candles',
      'Textiles and fabrics',
      'Documents and certificates'
    ],
    image: 'https://images.pexels.com/photos/8251829/pexels-photo-8251829.jpeg'
  },
  {
    id: '5',
    name: 'Display Boxes',
    slug: 'display-boxes',
    shortDescription: 'Premium display packaging with superior clarity for retail and exhibition use.',
    description: 'Display Boxes are designed specifically for retail environments and exhibitions where product presentation is paramount. These boxes offer exceptional clarity and sturdy construction to showcase your products in the best light.',
    features: [
      'Ultra-clear material for maximum visibility',
      'Rigid construction for stable display',
      'Multiple opening styles available',
      'Stackable design for efficient storage',
      'Scratch-resistant coating option',
      'Professional appearance for retail settings'
    ],
    specifications: [
      { label: 'Material', value: 'Premium APET' },
      { label: 'Thickness', value: '0.5mm - 0.8mm' },
      { label: 'Finish', value: 'Ultra Clear/Anti-glare' },
      { label: 'Customization', value: 'Size, insert cards, printing' },
      { label: 'Minimum Order', value: '1500 units' }
    ],
    applications: [
      'Retail product display',
      'Collectibles and figurines',
      'Electronics and gadgets',
      'Trade show exhibits',
      'Museum and gallery items'
    ],
    image: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg'
  }
];

// ── Fetch helpers ────────────────────────────────────────────────────────────

export async function fetchProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      product_categories (
        display_order
      )
    `)
    .eq('published', true);

  let dbProducts: Product[] = [];
  if (!error && data && data.length > 0) {
    const sortedData = [...data].sort((a, b) => {
      const categoryOrderA = a.product_categories?.display_order ?? 999;
      const categoryOrderB = b.product_categories?.display_order ?? 999;

      if (categoryOrderA !== categoryOrderB) {
        return categoryOrderA - categoryOrderB;
      }

      return (a.display_order ?? 999) - (b.display_order ?? 999);
    });

    dbProducts = sortedData.map(mapDBProductToProduct);
  }

  // Merge database products with static industry products, dedup by slug
  const dbSlugs = new Set(dbProducts.map(p => p.slug));
  const staticProducts = products.filter(p => !dbSlugs.has(p.slug));
  const allIndustryProducts = industryProducts.filter(p => !dbSlugs.has(p.slug));

  return [...dbProducts, ...staticProducts, ...allIndustryProducts];
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (!error && data) {
    return mapDBProductToProduct(data);
  }

  return (
    products.find(p => p.slug === slug) ??
    industryProducts.find(p => p.slug === slug) ??
    null
  );
}

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug) ??
    industryProducts.find(product => product.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id) ??
    industryProducts.find(product => product.id === id);
};
