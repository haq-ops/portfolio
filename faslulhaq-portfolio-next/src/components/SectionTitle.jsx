export default function SectionTitle({ word, title }) {
  return (
    <div className="relative mb-11 text-center sm:mb-16">
      <span className="bg-word" aria-hidden="true">
        {word}
      </span>
      <h2 className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-[28px] font-bold sm:text-[38px]">
        {title}
        <span className="mx-auto mt-3 block h-[3px] w-[60px] rounded bg-accent" />
      </h2>
    </div>
  );
}
