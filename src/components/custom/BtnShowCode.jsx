import { Tooltip } from "@mui/material";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  lazy,
  Suspense,
} from "react";
import {
  a11yLight,
  //CopyBlock,
  dracula,
  tomorrow,
  zenburn,
} from "react-code-blocks";
import Loading from "./Loading";
import { motion, AnimatePresence } from "framer-motion";

// const Code = lazy((text) => <CodeBlock text={text} />);
const CodeBlock = lazy(() => import("../custom/CodeBlock"));

const renderLoader = () => <Loading />;

const BtnShowCode = ({ showCode, setShowCode, text }) => {
  const toggleCode = () => {
    setShowCode((prev) => !prev);
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

      {/* {showCode && <CodeBlock text={text} />} */}
      {showCode && (
        <Suspense fallback={renderLoader()}>
          <motion.div
            //   whileInView={{ opacity: 1 }}
            //   whileHover={{ scale: 1.1 }}
            //   transition={{ duration: 0.5, type: "tween" }}
            //className="app__profile-item"
            //key={about.title + index}
            //   whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            //   transition={{ duration: 0.5 }}
            // whileInView={{ opacity: [0, 1] }}
            //  transition={{ duration: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            //className={`${classNames} app__flex`}
          >
            <CodeBlock text={text} />
          </motion.div>
        </Suspense>
      )}
    </>
  );
};

export default BtnShowCode;
