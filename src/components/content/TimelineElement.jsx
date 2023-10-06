function TimelineElement({ index, image, header, date, description }) {
  console.log();
  return (
    <div className="container px-10 py-2 lg:px-12">
      <div className="img absolute -left-4 top-5 z-[555] flex h-8 w-8 items-center justify-center rounded-full bg-[#011221] p-2 text-[#607B96] ring ring-[#607B96] lg:-left-6 lg:h-12 lg:w-12">
        {image}
      </div>
      <div className="text-box">
        <span className="mr-4 text-lg text-[#ff7b72] ">{header}</span>
        <span className="text-sm text-[#7ee787]">{date}</span>

        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}

export default TimelineElement;
