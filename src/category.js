var category = function category(key) {
  const categories = {
    pl: "Personal Loan",
    vl: "Vehicle Loan",
    el: "Education Loan",
    hl: "Home Loan",
    // Add more categories as needed
  };

  const formattedKey = key.toLowerCase();

  if (categories[formattedKey]) {
    return categories[formattedKey];
  } else {
    throw new Error(`Category with key ${key} not found.`);
  }
};

module.exports = {
  category: category,
};