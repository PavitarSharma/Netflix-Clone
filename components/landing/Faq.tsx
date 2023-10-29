import { useCallback, useState } from "react";
import { useCollapse } from "react-collapsed";
import { IoMdAdd, IoMdClose } from "react-icons/io";

interface FAQItem {
  title: string;
  description: string;
}

interface IFaqProp {
  faq: FAQItem;
}

const Faq = ({ faq }: IFaqProp) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
    duration: 500,
  });

  const toggleFaq = useCallback(() => {
    setExpanded((prevExpanded) => !prevExpanded);
  }, []);

  return (
    <div className="mb-2">
      <div
        {...getToggleProps({
          onClick: toggleFaq,
        })}
        className="w-full flex justify-between items-center bg-zinc-800 hover:bg-zinc-700 p-5 mb-1 duration-700 cursor-pointer"
      >
        <span className="md:text-2xl font-medium">{faq.title}</span>
        <button>
          {!isExpanded ? (
            <IoMdAdd className="md:text-[32px] text-2xl" />
          ) : (
            <IoMdClose className="md:text-[32px] text-2xl" />
          )}
        </button>
      </div>
      <div
        {...getCollapseProps()}
        className={`p-5 bg-zinc-800 md:text-2xl font-medium ${
          isExpanded ? "block" : "hidden"
        }`}
      >
        <div style={{ padding: 10 }}>{faq.description}</div>
      </div>
    </div>
  );
};

export default Faq;
