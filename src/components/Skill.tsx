type SkillProps = {
  src: string;
  alt: string;
  name?: string;
  small?: boolean;
  shadowColor?: string;
};

const shadowMap: Record<string, string> = {
  zinc: "hover:shadow-zinc-900/50",
  blue: "hover:shadow-blue-500/40",
  purple: "hover:shadow-purple-500/40",
  green: "hover:shadow-green-500/40",
  yellow: "hover:shadow-yellow-500/40",
  red: "hover:shadow-red-500/40",
};

export function Skill({
  src,
  alt,
  name,
  small,
  shadowColor = "zinc",
}: SkillProps) {
  return (
    <div className="group relative flex flex-col items-center gap-2">
      <div
        className={`bg-zinc-800 rounded-full flex items-center justify-center
        transition-all duration-300 cursor-pointer
        hover:bg-zinc-700 hover:scale-110 hover:shadow-lg
        ${shadowMap[shadowColor]}
        ${small ? "px-3.5" : "p-5"}`}
      >
        <img
          src={src}
          alt={alt}
          className={`h-12 object-contain ${small ? "w-5" : "w-12"}`}
          loading="lazy"
        />
      </div>

      {name && (
        <span className="text-sm text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-6">
          {name}
        </span>
      )}
    </div>
  );
}
