import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchBar } from "./SearchBar";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between py-6 px-10 capitalize">
      <div className="h-12 w-12">
        <img src="/flash.png" alt="" />
      </div>

      <div>
        <SearchBar />
      </div>

      <ul className="flex items-center justify-center gap-x-12">
        <li>home</li>
        <DropdownMenu>
          <DropdownMenuTrigger>Category</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Action</DropdownMenuItem>
            <DropdownMenuItem>Comedy</DropdownMenuItem>
            <DropdownMenuItem>Romantic</DropdownMenuItem>
            <DropdownMenuItem>Classic</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <li>Sign-in</li>
      </ul>
    </div>
  );
};

export default Navbar;
