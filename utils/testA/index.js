import jsons from "./input";

const solution = (input) => {
  const result = {};
  input.forEach((obj) => {
    const keys = Object.keys(obj.provider);
    keys.forEach((key) => {
      if (!result[key]) {
        result[key] = { [obj.provider[key]]: [obj.name] };
      } else {
        if (result[key][obj.provider[key]]) {
          result[key] = {
            ...result[key],
            [obj.provider[key]]: [...result[key][obj.provider[key]], obj.name],
          };
        } else {
          result[key] = { ...result[key], [obj.provider[key]]: [obj.name] };
        }
      }
    });
  });

  return result;
};

export default solution(jsons);
