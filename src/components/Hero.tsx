import { ActionMovies } from "./Movies/ActionMovies";
import { ClassicMovies } from "./Movies/ClassicMovies";
import { ComedyMovies } from "./Movies/ComedyMovies";
import { RomanticMovies } from "./Movies/RomanticMovies";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { ActionMoviesList, ClassicMoviesList, ComedyMoviesList, RomanticMoviesList } from "@/Constants/constants";

const Hero = () => {
  return (
    <>
      <div className="py-8 px-8">
        <div className="py-16">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Action Movies
              </h2>
              <p className="text-sm text-muted-foreground">
                Top picks for you. Updated daily.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="relative">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {ActionMoviesList.map((album) => (
                  <ActionMovies
                    key={album.name}
                    album={album}
                    className="w-[250px]"
                    aspectRatio="portrait"
                    width={250}
                    height={330}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
        <Separator className="my-4" />

        <div className="py-16">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Romantic Movies
              </h2>
              <p className="text-sm text-muted-foreground">
                Top picks for you. Updated daily.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="relative">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {RomanticMoviesList.map((album) => (
                  <RomanticMovies
                    key={album.name}
                    album={album}
                    className="w-[250px]"
                    aspectRatio="portrait"
                    width={250}
                    height={330}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>

        <Separator className="my-4" />
        <div className="py-16">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Classic Movies
              </h2>
              <p className="text-sm text-muted-foreground">
                Top picks for you. Updated daily.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="relative">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {ClassicMoviesList.map((album) => (
                  <ClassicMovies
                    key={album.name}
                    album={album}
                    className="w-[250px]"
                    aspectRatio="portrait"
                    width={250}
                    height={330}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
        <Separator className="my-4" />

        <div className="py-16">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Comedy Movies
              </h2>
              <p className="text-sm text-muted-foreground">
                Top picks for you. Updated daily.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="relative">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {ComedyMoviesList.map((album) => (
                  <ComedyMovies
                    key={album.name}
                    album={album}
                    className="w-[250px]"
                    aspectRatio="portrait"
                    width={250}
                    height={330}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
