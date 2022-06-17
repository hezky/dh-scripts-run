import { marked as _marked } from "marked";
import TerminalRenderer from "marked-terminal";

_marked.setOptions({
  renderer: new TerminalRenderer(),
});

const marked = (msg) => {
  console.log(_marked(msg));
};

export { marked };
