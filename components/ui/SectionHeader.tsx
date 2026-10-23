import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-5 h-px w-16 bg-gradient-to-r from-blue-500 to-violet-500",
          centered && "mx-auto"
        )}
      />
    </div>
  );
}
