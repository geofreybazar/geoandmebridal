export const orderStatus: Record<string, string> = {
  draft: "Awaiting downpayment",
  active_projects: "Currently in production",
  completed_projects: "Order completed",
  archived_projects: "Archived order",
};

export const CUSTOM_BRIDAL_PRODUCTS = [
  // Bride
  { label: "Bespoke Wedding Gown", value: "wedding_gown" },
  { label: "Reception Dress", value: "reception_dress" },
  { label: "After-Party Dress", value: "after_party_dress" },
  { label: "Civil Wedding Dress", value: "civil_wedding_dress" },

  // Groom
  { label: "Groom Suit", value: "groom_suit" },
  { label: "Groom Tuxedo", value: "groom_tuxedo" },

  // Bride Entourage
  { label: "Bridesmaid Dress", value: "bridesmaid_dress" },
  { label: "Maid of Honor Dress", value: "maid_of_honor_dress" },
  { label: "Flower Girl Dress", value: "flower_girl_dress" },
  { label: "Mother of the Bride Dress", value: "mother_bride_dress" },
  { label: "Mother of the Groom Dress", value: "mother_groom_dress" },

  // Groom Entourage
  { label: "Best Man Suit", value: "best_man_suit" },
  { label: "Groomsmen Suit", value: "groomsmen_suit" },
  { label: "Ring Bearer Outfit", value: "ring_bearer_outfit" },
  { label: "Father of the Bride Suit", value: "father_bride_suit" },
  { label: "Father of the Groom Suit", value: "father_groom_suit" },

  // Packages
  { label: "Full Entourage Package", value: "full_entourage" },
  { label: "Bride & Groom Package", value: "bride_groom_package" },

  // Formal / Other Custom Wear
  { label: "Debut Gown", value: "debut_gown" },
  { label: "Evening Gown", value: "evening_gown" },
  { label: "Cocktail Dress", value: "cocktail_dress" },
  { label: "Custom Formal Attire", value: "custom_formal_attire" },
  { label: "Other", value: "other" },
];
