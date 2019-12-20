export interface foodData {
  status: number;
  product: Product;
  code: string;
  status_verbose: string;
}

interface Product {
  max_imgid: string;
  manufacturing_places: string;
  additives_tags: string[];
  nova_group_tags: string[];
  stores: string;
  compared_to_category: string;
  traces_tags: string[];
  states: string;
  ingredients_that_may_be_from_palm_oil_n: number;
  product_name: string;
  checkers_tags: any[];
  interface_version_created: string;
  data_quality_warnings_tags: string[];
  ingredients_n: number;
  last_modified_by?: any;
  product_name_fr: string;
  traces_lc: string;
  origins: string;
  brands_tags: string[];
  nova_groups: string;
  image_ingredients_thumb_url: string;
  code: string;
  additives_debug_tags: any[];
  ingredients_analysis_tags: string[];
  ingredients_text_debug_tags: any[];
  nucleotides_prev_tags: any[];
  nutrition_score_debug: string;
  allergens_from_user: string;
  allergens_lc: string;
  ingredients_original_tags: string[];
  image_ingredients_url: string;
  image_nutrition_url: string;
  additives_prev_original_tags: string[];
  'fruits-vegetables-nuts_100g_estimate': number;
  languages_hierarchy: string[];
  quantity: string;
  ingredients_that_may_be_from_palm_oil_tags: any[];
  serving_quantity: string;
  sortkey: number;
  nova_group: number;
  rev: number;
  expiration_date: string;
  categories_tags: string[];
  traces_hierarchy: string[];
  unknown_ingredients_n: number;
  unique_scans_n: number;
  countries_tags: string[];
  ingredients_text_with_allergens: string;
  countries: string;
  _keywords: string[];
  misc_tags: string[];
  minerals_tags: any[];
  packaging: string;
  traces_from_user: string;
  additives_old_n: number;
  nutrition_data_per: string;
  states_tags: string[];
  ingredients_text: string;
  pnns_groups_2: string;
  nutrition_grades_tags: string[];
  manufacturing_places_tags: any[];
  ingredients_text_fr: string;
  generic_name_fr: string;
  amino_acids_tags: any[];
  vitamins_prev_tags: any[];
  scans_n: number;
  minerals_prev_tags: any[];
  labels_hierarchy: any[];
  ingredients_tags: string[];
  codes_tags: string[];
  nutriscore_grade: string;
  complete: number;
  ingredients: Ingredient[];
  ingredients_hierarchy: string[];
  nutriments: Nutriments;
  categories_lc: string;
  ingredients_from_palm_oil_n: number;
  purchase_places: string;
  ingredients_from_palm_oil_tags: string[];
  data_quality_tags: string[];
  lang: string;
  informers_tags: string[];
  other_nutritional_substances_tags: any[];
  nutrient_levels_tags: string[];
  traces_from_ingredients: string;
  data_quality_bugs_tags: any[];
  additives_n: number;
  categories_hierarchy: string[];
  ingredients_n_tags: string[];
  packaging_tags: any[];
  _id: string;
  selected_images: Selectedimages;
  nutriscore_score: number;
  labels_tags: any[];
  ingredients_ids_debug: string[];
  no_nutrition_data: string;
  nova_group_debug: string;
  product_quantity: string;
  nutrition_data: string;
  last_editor?: any;
  nutrition_score_warning_no_fruits_vegetables_nuts: number;
  emb_codes_tags: any[];
  serving_size: string;
  interface_version_modified: string;
  cities_tags: any[];
  unknown_nutrients_tags: any[];
  ingredients_text_debug: string;
  nucleotides_tags: any[];
  image_nutrition_small_url: string;
  allergens_from_ingredients: string;
  image_ingredients_small_url: string;
  categories: string;
  created_t: number;
  last_image_dates_tags: string[];
  completeness: number;
  nutrition_score_beverage: number;
  languages_codes: Languagescodes;
  creator: string;
  origins_tags: any[];
  allergens: string;
  allergens_tags: string[];
  carbon_footprint_from_known_ingredients_debug: string;
  entry_dates_tags: string[];
  pnns_groups_2_tags: string[];
  last_image_t: number;
  amino_acids_prev_tags: any[];
  generic_name: string;
  product_name_debug_tags: any[];
  languages_tags: string[];
  last_modified_t: number;
  allergens_hierarchy: string[];
  photographers_tags: string[];
  pnns_groups_1: string;
  labels_lc: string;
  countries_hierarchy: string[];
  stores_tags: string[];
  last_edit_dates_tags: string[];
  labels: string;
  states_hierarchy: string[];
  brands: string;
  carbon_footprint_percent_of_known_ingredients: number;
  nutrient_levels: Nutrientlevels;
  lc: string;
  update_key: string;
  nutrition_grade_fr: string;
  debug_param_sorted_langs: string[];
  vitamins_tags: any[];
  link: string;
  traces: string;
  popularity_tags: string[];
  nova_groups_tags: string[];
  images: Images;
  emb_codes: string;
  nutrition_score_warning_no_fiber: number;
  correctors_tags: string[];
  data_quality_info_tags: string[];
  nutrition_data_prepared_per: string;
  id: string;
  ingredients_text_with_allergens_fr: string;
  additives_original_tags: string[];
  data_quality_errors_tags: any[];
  additives_old_tags: string[];
  nutriscore_data: Nutriscoredata;
  pnns_groups_1_tags: string[];
  purchase_places_tags: string[];
  ingredients_from_or_that_may_be_from_palm_oil_n: number;
  nutrition_data_prepared: string;
  languages: Languages;
  image_nutrition_thumb_url: string;
  countries_lc: string;
  editors_tags: string[];
  ingredients_debug: (null | string)[];
  nutrition_grades: string;
}

interface Languages {
  'en:french': number;
  'en:dutch': number;
}

interface Nutriscoredata {
  sugars: number;
  is_beverage: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
  score: number;
  proteins_points: number;
  sodium_points: number;
  energy_value: number;
  saturated_fat_value: number;
  proteins_value: number;
  sugars_value: number;
  grade: string;
  fiber_points: number;
  sugars_points: number;
  is_fat: number;
  is_water: number;
  sodium_value: number;
  saturated_fat_ratio_points: number;
  fiber: number;
  saturated_fat_points: number;
  saturated_fat: number;
  energy: number;
  negative_points: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils: number;
  energy_points: number;
  proteins: number;
  sodium: number;
  fiber_value: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
  saturated_fat_ratio: number;
  is_cheese: number;
  positive_points: number;
  saturated_fat_ratio_value: number;
}

interface Images {
  '1': _1;
  '2': _1;
  '3': _3;
  nutrition_fr: Nutritionfr;
  ingredients_fr: Ingredientsfr;
  front_nl: Frontnl;
}

interface Frontnl {
  angle: number;
  x2: string;
  y2: string;
  rev: string;
  imgid: string;
  x1: string;
  white_magic?: any;
  normalize?: any;
  geometry: string;
  sizes: Sizes2;
  y1: string;
}

interface Ingredientsfr {
  orientation?: any;
  y2?: any;
  rev: string;
  x1?: any;
  imgid: string;
  white_magic: string;
  normalize: string;
  ocr: number;
  geometry: string;
  sizes: Sizes2;
  y1?: any;
  angle?: any;
  x2?: any;
}

interface Nutritionfr {
  x2?: any;
  angle?: any;
  y1?: any;
  geometry: string;
  sizes: Sizes2;
  ocr: number;
  white_magic: string;
  normalize: string;
  x1?: any;
  imgid: string;
  y2?: any;
  rev: string;
  orientation: string;
}

interface Sizes2 {
  '100': _100;
  '200': _100;
  '400': _100;
  full: _100;
}

interface _3 {
  uploaded_t: number;
  uploader: string;
  sizes: Sizes;
}

interface _1 {
  sizes: Sizes;
  uploader: string;
  uploaded_t: string;
}

interface Sizes {
  '100': _100;
  '400': _100;
  full: _100;
}

interface _100 {
  w: number;
  h: number;
}

interface Nutrientlevels {
  fat: string;
  salt: string;
  sugars: string;
  'saturated-fat': string;
}

interface Languagescodes {
  nl: number;
  fr: number;
}

interface Selectedimages {
  front: Front;
  nutrition: Nutrition;
  ingredients: Nutrition;
}

interface Nutrition {
  display: Display;
  small: Display;
  thumb: Display;
}

interface Display {
  fr: string;
}

interface Front {
  small: Small;
  display: Small;
  thumb: Small;
}

interface Small {
  nl: string;
}

interface Nutriments {
  'energy-kcal': number;
  'saturated-fat_prepared_value': number;
  'saturated-fat_value': number;
  sodium_serving: number;
  energy_prepared_value: number;
  'nova-group': number;
  sugars_serving: number;
  sugars_unit: string;
  salt_100g: number;
  'energy-kcal_serving': number;
  sodium_unit: string;
  'energy-kcal_100g': number;
  sugars: number;
  fat_prepared_100g: number;
  'saturated-fat_prepared_serving': number;
  'energy-kcal_value': number;
  'carbon-footprint-from-known-ingredients_product': number;
  proteins_prepared_unit: string;
  fat_prepared_unit: string;
  'nova-group_100g': number;
  sugars_value: number;
  'energy-kj': number;
  'energy-kcal_prepared': number;
  energy_serving: number;
  fat_prepared_serving: number;
  energy_100g: number;
  'energy-kj_prepared': number;
  'energy-kj_serving': number;
  energy_value: number;
  salt_unit: string;
  'nutrition-score-fr_100g': number;
  carbohydrates_100g: number;
  sugars_prepared_100g: number;
  sodium_prepared_serving: number;
  fat_value: number;
  'energy-kj_prepared_value': number;
  sugars_prepared_value: number;
  'saturated-fat_100g': number;
  'saturated-fat_prepared_100g': number;
  proteins_prepared_serving: number;
  'nutrition-score-uk_100g': number;
  carbohydrates_prepared_unit: string;
  salt_prepared: number;
  carbohydrates_unit: string;
  sodium_prepared_unit: string;
  fat_unit: string;
  'energy-kcal_prepared_100g': number;
  'energy-kj_prepared_100g': number;
  proteins_prepared_100g: number;
  fat_prepared: number;
  carbohydrates_prepared_100g: number;
  proteins_serving: number;
  proteins: number;
  'nova-group_serving': number;
  energy: number;
  salt_value: number;
  'saturated-fat_unit': string;
  'saturated-fat': number;
  'energy-kcal_prepared_value': number;
  carbohydrates_serving: number;
  'energy-kj_unit': string;
  'energy-kcal_prepared_serving': number;
  carbohydrates: number;
  fat_100g: number;
  'carbon-footprint-from-known-ingredients_100g': number;
  salt_prepared_value: number;
  sugars_prepared: number;
  fat_serving: number;
  proteins_100g: number;
  energy_prepared: number;
  'saturated-fat_prepared_unit': string;
  'energy-kj_prepared_unit': string;
  carbohydrates_prepared_serving: number;
  sodium_100g: number;
  sodium_prepared_value: number;
  energy_unit: string;
  'energy-kcal_unit': string;
  salt_prepared_unit: string;
  proteins_value: number;
  sodium_prepared_100g: number;
  energy_prepared_serving: number;
  proteins_unit: string;
  energy_prepared_unit: string;
  carbohydrates_prepared_value: number;
  fat: number;
  'saturated-fat_prepared': number;
  sugars_prepared_unit: string;
  'energy-kj_prepared_serving': number;
  salt: number;
  sugars_prepared_serving: number;
  'nutrition-score-fr': number;
  'energy-kcal_prepared_unit': string;
  carbohydrates_value: number;
  proteins_prepared: number;
  fat_prepared_value: number;
  'nutrition-score-uk': number;
  sodium_prepared: number;
  sodium_value: number;
  'carbon-footprint-from-known-ingredients_serving': number;
  proteins_prepared_value: number;
  carbohydrates_prepared: number;
  salt_serving: number;
  'energy-kj_100g': number;
  'saturated-fat_serving': number;
  salt_prepared_100g: number;
  energy_prepared_100g: number;
  sodium: number;
  'energy-kj_value': number;
  salt_prepared_serving: number;
  sugars_100g: number;
}

interface Ingredient {
  text: string;
  rank?: number;
  percent?: string;
  id: string;
  has_sub_ingredients?: string;
  vegetarian?: string;
  vegan?: string;
  from_palm_oil?: string;
}