import { useLayoutEffect, useRef, useState } from "react";
function CommentedText({ text }) {
  const [lineCount, setLineCount] = useState(0);
  const ref = useRef(null);
  const updateLines = () => {
    const textElement = ref.current;
    if (textElement) {
      const elementHeight = textElement.getBoundingClientRect().height;
      const lineHeight = parseFloat(getComputedStyle(textElement).lineHeight);
      const lines = Math.ceil(elementHeight / lineHeight) + 1;
      setLineCount(lines);
    }
  };
  useLayoutEffect(() => {
    updateLines();
    window.addEventListener("resize", updateLines);
  }, [text]); // Trigger the calculation when the text prop changes

  return (
    <div className="flex items-start font-fira_retina text-menu-text lg:my-5">
      <div className="hidden  flex-col text-right lg:flex">
        {Array.from({ length: lineCount }, (_, i) => i + 1).map(
          (line, index) => {
            const comment =
              line === 1 ? "/**" : line === lineCount ? " */" : "*";
            return (
              <div key={index} className="grid grid-cols-2 justify-start gap-6">
                <span className="col-span-1 w-5 text-left">{line}</span>
                <div className="col-span-1 flex justify-center">{comment}</div>
              </div>
            );
          },
        )}
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: text }}
        ref={ref}
        className="ml[-10px] w-full break-words text-base"
      />
    </div>
  );
}

export default CommentedText;
