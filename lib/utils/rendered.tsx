import parse from "html-react-parser";

const rendered = (string: string) => {
  return parse(string);
};

export default rendered;
