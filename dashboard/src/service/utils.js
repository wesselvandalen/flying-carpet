export const handleLongNames = (name) => {
  if (name === undefined || name === null) {
    return "";
  }

  if (name.length > 25) {
    return name.substring(0, 25) + "...";
  }
  return name;
}

export function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}