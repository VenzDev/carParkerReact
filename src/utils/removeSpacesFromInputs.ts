export default (data: { [key: string]: string }, setData: (removedData: object) => {}) => {
  const object = { ...data };
  for (let key in object) object[key] = object[key].trim();

  setData(object);
};
