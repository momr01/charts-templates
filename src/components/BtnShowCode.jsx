import { Tooltip } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import {
  a11yLight,
  CopyBlock,
  dracula,
  tomorrow,
  zenburn,
} from "react-code-blocks";
//import { salesVSRefunds } from "../codes/charts";

// const MyComponent = ({ setShowCode }) => {
//   useEffect(() => {
//     const handleClick = () => {
//       setShowCode((prev) => !prev);
//     };

//     document.addEventListener("mousedown", handleClick);
//     return () => {
//       document.removeEventListener("mousedown", handleClick);
//     };
//   }, []);
//   return null;
// };

const BtnShowCode = ({ showCode, setShowCode, text }) => {
  //const [showCode, setShowCode] = useState(false);
  // const _isMounted = useRef(true);

  // useEffect(() => {
  //   return () => {
  //     _isMounted.current = false;
  //   };
  // }, []);

  const toggleCode = () => {
    // setShowCode((prev) => !prev);
    // if (_isMounted.current) {
    setShowCode((prev) => !prev);
    // }
  };

  return (
    <>
      <div className="flex justify-center my-2">
        <Tooltip
          title={showCode ? "Hide the full source" : "Show the full source"}
        >
          <button
            className="p-3 border-2 rounded-lg hover:bg-slate-200"
            onClick={toggleCode}
            //onClick={() => <MyComponent setShowCode={setShowCode} />}
            //onClick={setShowCode(true)}
          >{`<>`}</button>
        </Tooltip>
      </div>

      {showCode && (
        <div className="p-1 text-xs">
          <CopyBlock
            language="jsx"
            text={text}
            showLineNumbers={true}
            theme={dracula}
            //theme={zenburn}
            //theme={a11yLight}
            // theme={a11yDark}
            //theme={github}
            //theme={paraisoDark}
            //theme={paraisoLight}
            //theme={tomorrow}
            //theme={shadesOfPurple}
            wrapLines={true}
            codeBlock
            //highlight="11-16"
            //onCopy={copyCode}
            //onClick={copyCode}
          />
        </div>
      )}
    </>
  );
};

export default BtnShowCode;
