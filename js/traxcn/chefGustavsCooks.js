const input =
  "FIBERSpinach FIBERSpinach CARBRice FATCheese FIBERBeans FIBERBeans CARBPotato FIBERBroccoli FIBERBanana FIBERBeans";
const ingredients = input.split(" ");
const ingredientCategories = ["FAT", "FIBER", "CARB"];
let restaurantInventory = ingredientCategories
  .map((category) => {
    return { [category]: { count: 0, daysOfArrival: [] } };
  })
  .reduce((a, b) => {
    return { ...a, ...b };
  });
let lastCooked = null;
let trash = [];
const recipes = {
  X: {
    ingredientsToUse: [
      { name: "FAT", minQuantity: 2 },
      { name: "FIBER", minQuantity: 0 },
    ],
    ingredientsNotToUse: ["CARB"],
  },
  Y: {
    ingredientsToUse: [
      { name: "FIBER", minQuantity: 1 },
      { name: "CARB", minQuantity: 1 },
    ],
    ingredientsNotToUse: ["FAT"],
  },
};

const getInventory = () => {
  return restaurantInventory;
};
const setInventory = (newInventory) => {
  restaurantInventory = { ...restaurantInventory, ...newInventory };
};

const getCategoryInInventory = (category) => {
  return restaurantInventory[category];
};

const setCategoryInInventory = (category, newValue) => {
  setInventory({ [category]: newValue });
};

const buildRegEx = (category) => {
  try {
    const regEx = new RegExp(`[${category}]{1,${category.length}}`, "");
    return regEx;
  } catch {
    console.log(`Error Building RegEx For ${category}`);
  }
};

// Get ingredient Category
const mapToCategory = (ingredients) => {
  return ingredients.map(
    (ingredient) =>
      ingredientCategories.filter(
        (category) =>
          ingredient.match(buildRegEx(category)).reduce((a, b) => a + b) ===
          category
      )[0]
  );
};
const throwToTrash = (category, quantityUsed) => {
  let { count, daysOfArrival } = getCategoryInInventory(category);
  while (quantityUsed > 0) {
    --count;
    daysOfArrival.pop();
    --quantityUsed;
  }
  setCategoryInInventory(category, { count, daysOfArrival });
  return { count, daysOfArrival };
};
const getIngredientsCount = (count, categoryInInventory) => {
  count += categoryInInventory.count;
  return count;
};
const canBeCooked = (dishName, inventory) => {
  const recipe = recipes[dishName];
  let ingredientsQuantity = 0;
  recipe.ingredientsToUse
    .filter((ingredient) => ingredient.minQuantity > 0)
    .forEach((ingredient) => {
      if (inventory[ingredient.name].count >= ingredient.minQuantity)
        ingredientsQuantity = getIngredientsCount(
          ingredientsQuantity,
          inventory[ingredient.name]
        );
    });
  recipe.ingredientsToUse
    .filter((ingredient) => ingredient.minQuantity === 0)
    .forEach((ingredient) => {
      ingredientsQuantity = getIngredientsCount(
        ingredientsQuantity,
        inventory[ingredient.name]
      );
    });
  if (ingredientsQuantity >= 4) {
    return true;
  } else return false;
};
const removeFromInventory = (cookedDish) => {
  let reduced = 0;
  recipes[cookedDish].ingredientsToUse
    .filter(
      (ing) => ing.minQuantity > 0 && getCategoryInInventory(ing.name).count > 0
    )
    .forEach((ing) => {
      reduced += getCategoryInInventory(ing.name).count;
      throwToTrash(ing.name, getCategoryInInventory(ing.name).count);
    });
  if (!(reduced === 4)) {
    recipes[cookedDish].ingredientsToUse
      .filter((ing) => ing.minQuantity === 0)
      .forEach((ing) => {
        throwToTrash(ing.name, 4 - reduced);
      });
  }
};

const cookX = (inventory) => {
  if (lastCooked == "X") return;
  if (canBeCooked("X", inventory)) {
    lastCooked = "X";
    removeFromInventory("X");
    return "X";
  }
  return "-";
};
// Cook DishY atleast 1 carb,1 fiber and no fat
const cookY = (inventory) => {
  if (lastCooked == "Y") return;
  if (canBeCooked("Y", inventory)) {
    lastCooked = "Y";
    removeFromInventory("Y");
    return "Y";
  }
  return "-";
};

const cook = (inventory) => {
  switch (lastCooked) {
    case "X":
      return cookY(inventory);
    case "Y":
      return cookX(inventory);
    default: {
      const cooked = cookX(inventory);
      return cooked === "-" ? cookY(inventory) : cooked;
    }
  }
};

const manageInventory = (restaurantInventory, category, day) => {
  restaurantInventory[category]["count"] = ++restaurantInventory[category][
    "count"
  ];
  restaurantInventory[category]["daysOfArrival"].push(day + 1);
  return restaurantInventory;
};

const cookForRestaurant = (ingredients, restaurantInventory) => {
  const categories = mapToCategory(ingredients);
  cookedItems = categories.map((category, day) => {
    restaurantInventory = manageInventory(getInventory(), category, day);
    return cook(restaurantInventory, day);
  });
  printMe("Cooked Items", cookedItems);
  return cookedItems;
};

const printMe = (name, object) =>
  console.table(`${name} : ${JSON.stringify(object)}`);
//
cookForRestaurant(ingredients, restaurantInventory);
