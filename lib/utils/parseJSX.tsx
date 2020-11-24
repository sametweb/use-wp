import parse from "html-react-parser";

const parseJSX = (string: string) => {
  return parse(string);
};

export default parseJSX;
