

export const parseAttributes = (specifications) => {
  return  Object.entries(JSON.parse(specifications)).map(([key, value]) => {
    return { key: key, value: value };
})
};