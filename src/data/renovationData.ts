const images = import.meta.glob(
  "../assets/images/renovations/**/*.{webp,png,jpg,jpeg,svg}",
  { eager: true }
);

const formattedImages = Object.keys(images).reduce(
  (acc: { [key: string]: string }, key) => {
    acc[key.replace("../assets/images/renovations/", "")] = (
      images[key] as { default: string }
    ).default;
    return acc;
  },
  {}
);

const getRenovationData = (category: string) => {
  const categoryImages = Object.keys(formattedImages)
    .filter((key) => key.startsWith(`${category}/`))
    .reduce((acc: { [key: string]: string[] }, key) => {
      const subfolder = key.split("/")[1];
      if (!acc[subfolder]) {
        acc[subfolder] = [];
      }
      acc[subfolder].push(formattedImages[key]);
      return acc;
    }, {});

  return Object.keys(categoryImages).map((subfolder) => ({
    id: subfolder,
    title: "",
    description: "",
    mainImage: categoryImages[subfolder][0],
    images: categoryImages[subfolder],
  }));
};

type RenovationItem = {
  id: string;
  title: string;
  description: string;
  mainImage: string;
  images: string[];
};

type RenovationType = "bathroom" | "kitchen" | "community" | "other";

type RenovationData = {
  bathroom: RenovationItem[];
  kitchen: RenovationItem[];
  community: RenovationItem[];
  other: RenovationItem[];
};
export type { RenovationItem, RenovationType, RenovationData };

const renovationData: RenovationData = {
  bathroom: getRenovationData("bathroom"),
  kitchen: getRenovationData("kitchen"),
  community: getRenovationData("community"),
  other: getRenovationData("other"),
};

// Function to update the title and description of a renovation
const updateData = (
  folder: RenovationType,
  id: string,
  newTitle: string,
  newDescription: string
) => {
  renovationData[folder] = renovationData[folder].map((renovation) =>
    renovation.id === id
      ? { ...renovation, title: newTitle, description: newDescription }
      : renovation
  );
};

updateData("bathroom", "bathroom_1", "Reforma de baño", "descripción");
updateData("community", "facade", "Reforma de Fachada", "descripción");
updateData("kitchen", "kitchen_1", "Reforma de Cocina  1", "descripción");
updateData("kitchen", "kitchen_2", "Reforma de Cocina 2", "descripción");
updateData("kitchen", "kitchen_3", "Reforma de Cocina 3", "descripción");
updateData("kitchen", "kitchen_4", "Reforma de Cocina 4", "descripción");
updateData("other", "attic", "Reforma de Buhardilla", "descripción");
updateData("other", "custom_furniture", "Muebles a medida", "descripción");

console.log(renovationData); // Verificar los cambios

export default renovationData;
