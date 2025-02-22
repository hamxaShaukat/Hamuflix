import { cn } from "@/lib/utils";

import { Album } from "@/Constants/constants";

interface RomanticMoviesProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function RomanticMovies({
  album,
  className,
  aspectRatio = "portrait",
  width,
  height,
  ...props
}: RomanticMoviesProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div>
        <img
          src={album.cover}
          alt={album.name}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{album.name}</h3>
        <p className="text-xs text-muted-foreground">{album.artist}</p>
      </div>
    </div>
  );
}
