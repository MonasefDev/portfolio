import Highlight from "react-highlight";

function SnippetSection() {
  return (
    <div className="flex h-full items-center justify-center ">
      <div className="w-full overflow-hidden p-5 2xl:p-16">
        <Highlight className="javascript word-wrap" language="javascript">
          {`const button = document.querySelector('#sendBtn');
const message = {
  name: "John Doe",
  email: "john.doe@gmail.com",
  message: "Hey! Just checked your website and it looks 
            awesome! Also, I checked your articled on Medium.
            Lerned a few nice tips. Thanks!",
  date: "Thu 21 Apr"
}
button.addEventListener('click', () => {
  form.send(message);
})`}
        </Highlight>
      </div>

      {/*  scroll bar */}
      <div
        id="scroll-bar"
        className="border-left hidden h-full justify-center py-1 lg:flex"
      >
        <div id="scroll"></div>
      </div>
    </div>
  );
}

export default SnippetSection;
