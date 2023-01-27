import { CopyBlock, dracula, zenburn } from "react-code-blocks";

const CodeBlock = ({ text }) => {
  return (
    <div className="text-[10px] p-2">
      <CopyBlock
        language="jsx"
        text={text}
        showLineNumbers={true}
        //theme={dracula}
        theme={zenburn}
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

    // <div className="p-1 text-xs">

    // </div>
    // </Suspense>
  );
};

export default CodeBlock;
