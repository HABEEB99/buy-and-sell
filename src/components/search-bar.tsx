import { Search } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export const SearchBar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="outline-none ring-0">
          <Search className="w-4 h-4 font-bold" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="flex items-center justify-between p-3"
      >
        <input
          type="text"
          placeholder="Search for an item"
          name="search"
          id="search"
          className="flex-1 outline-none bg-transparent text-sm"
        />

        <Search className="w-4 h-4 font-bold ml-6" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
