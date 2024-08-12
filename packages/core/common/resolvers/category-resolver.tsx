




export const categoryResolver = (category: any) => {
  return buildCategoryTree(category)
}

const buildCategoryTree = (categories) => {
  const categoryTree = [];
  categories.filter((ele) => !ele.parent).map((category, index) => {
    if (!category.parent) {
      let temp = getParentChildTree(
        category.id,
        categories,
      );
      categoryTree.push({
        id: category.id,
        name: category.name,
        children: temp,
        key: "categoryIds"
      });
    }
  });
  return categoryTree;
};

const getParentChildTree = (parentId, data) => {
  const result = [];
  const children = data.filter((item) => item.parent && item.parent.id === parentId);
  // Iterate over each child
  children.forEach(child => {
    // Recursively call
    const grandchildren = getParentChildTree(child.id, data);
    // Push current child and its grandchildren to the result array
    result.push({
      id: child.id,
      name: child.name,
      children: grandchildren,
      key: "categoryIds"
    });
  });
  return result;
};

const renderAttributes = (data, parent) => {
  return data.map((item) => {
    const { key, label, name } = item ?? {};
    return {
      name: label?.['en-US'],
      id: `${parent.name}:${label?.['en-US']}`,
      key: "attributeFilters"
    };
  });
};

export const attributesFilter = (data) => {
  const constructedArray = data.map(item => {
    const { type = {}, label = {} } = item;

    return type?.values?.length && {
      name: label?.['en-US'],
      children: renderAttributes(type.values, item),
      key: "attributeFilters"
    };
  }).filter(Boolean); // Removes undefined values
  return constructedArray;
};


export const getSelectedAttributes = (filters, product) => {

  let filteredArr = [];


  // Filter categoryIds
  if (filters.categoryIds) {
    const categoryFiltered = product.filter(item =>
      item.key === 'categoryIds'
    ).map(item => ({
      ...item,
      children: item.children.filter(child => filters.categoryIds.includes(child.id))
    }));
    filteredArr = filteredArr.concat(categoryFiltered);
  }

  // Filter attributeFilters
  if (filters.attributeFilters) {
    const attributeFiltered = product.filter(item =>
      item.key === 'attributeFilters'
    ).map(item => ({
      ...item,
      children: item.children.filter(child => filters.attributeFilters.includes(child.id))
    }));
    filteredArr = filteredArr.concat(attributeFiltered);
  }

  return getChildAttributes(filteredArr).flatMap(item => item);
};

const getChildAttributes = (categories) => {
  return categories.filter((ele) => ele.children).map((category, index) => {
    return category.children.length && category.children.map((child) => ({
      name: child.name,
      id: child.id,
      key: category.key
    })).filter(Boolean);
  }).filter(Boolean);;
}