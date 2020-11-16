import parse from "html-react-parser";

export default (string: string) => {
  return parse(string);
};
