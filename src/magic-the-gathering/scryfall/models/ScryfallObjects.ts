interface ImageLinks {
	small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
}

interface Legalities {
	// options are: 'not_legal' OR 'legal'
    standard: string;
    future: string;
    historic: string;
    timeless: string;
    gladiator: string;
    pioneer: string;
    explorer: string;
    modern: string;
    legacy: string;
    pauper: string;
    vintage: string;
    penny: string;
    commander: string;
    oathbreaker: string;
    standardbrawl: string;
    brawl: string;
    alchemy: string;
    paupercommander: string;
    duel: string;
    oldschool: string;
    premodern: string;
    predh: string;
}

interface Pricing {
    usd: string;
    usd_foil: string;
    usd_etched: string;
    eur: string;
    eur_foil: string;
    tix: string;
}

interface RelatedURIs {
	gatherer: string;
	tcgplayer_infinite_articles: string;
	tcgplayer_infinite_decks: string;
	edhrec: string;
}

interface PurchaseURIs {
	tcgplayer: string;
	cardmarket: string;
	cardhoarder: string;
}

interface ScryfallCard {
  object: string;
  id: string; // e.g. "bc001cef-3afd-4128-989f-ac99dc76b243"
  oracle_id: string;
  multiverse_ids: number[];
  mtgo_id: number;
  mtgo_foil_id: number;
  tcgplayer_id: number;
  cardmarket_id: number;
  name: string;
  lang: string;
  released_at: string; // Date: 2005-10-07
  uri: string,
  scryfall_uri: string,
  layout: string;
  highres_image: boolean;
  image_status: string;
  image_uris: ImageLinks;
  mana_cost: string;
  cmc: number;
  type_line: string;
  oracle_text: string;
  power: string;
  toughness: string;
  colors: string[];
  color_identity: string[],
  keywords: string[];
  legalities: Legalities;
  games: string[];
  reserved: boolean;
  foil: boolean;
  nonfoil: boolean;
  finishes: string[];
  oversized: boolean;
  promo: boolean;
  reprint: boolean;
  variation: boolean;
  set_id: string;
  "set": string;
  set_name: string;
  set_type: string;
  set_uri: string,
  set_search_uri: string,
  scryfall_set_uri: string,
  rulings_uri: string,
  prints_search_uri: string,
  collector_number: string;
  digital: boolean;
  rarity: string;
  flavor_text: string;
  card_back_id: string;
  artist: string;
  artist_ids: string[],
  illustration_id: string;
  border_color: string;
  frame: string;
  full_art: boolean;
  textless: boolean;
  booster: boolean;
  story_spotlight: boolean;
  edhrec_rank: number;
  prices: Pricing;
  related_uris: RelatedURIs;
  purchase_uris: PurchaseURIs;
}