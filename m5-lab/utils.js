import { useRef, useEffect } from "react";


export const SECTION_LIST_MOCK_DATA = [
  {
    title: "Appetizers",
    data: [
      {
        id: "1",
        title: "Pasta",
        price: "10",
      },
      {
        id: "3",
        title: "Pizza",
        price: "8",
      },
    ],
  },
  {
    title: "Salads",
    data: [
      {
        id: "2",
        title: "Caesar",
        price: "2",
      },
      {
        id: "4",
        title: "Greek",
        price: "3",
      },
    ],
  },
];

/**
 * 3. Implement this function to transform the raw data
 * retrieved by the getMenuItems() function inside the database.js file
 * into the data structure a SectionList component expects as its "sections" prop.
 * @see https://reactnative.dev/docs/sectionlist as a reference
 */
export function getSectionListData(data) {
  // SECTION_LIST_MOCK_DATA is an example of the data structure you need to return from this function.
  // The title of each section should be the category.
  // The data property should contain an array of menu items.
  // Each item has the following properties: "id", "title" and "price"

  const convertedData = data.reduce((result, item) => {
    const categoryIndex = result.findIndex(
      (category) => category.title === item.category
    );

    if (categoryIndex !== -1) {
      // Category already exists, add item to its data array
      result[categoryIndex].data.push({
        id: item.id,
        title: item.title,
        price: item.price,
      });
    } else {
      // Category doesn't exist, create a new category
      result.push({
        title: item.category,
        data: [
          {
            id: item.id,
            title: item.title,
            price: item.price,
          },
        ],
      });
    }

    return result;
  }, []);

  return convertedData;
}

export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
