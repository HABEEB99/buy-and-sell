import { User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export const UserModal = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="outline-none ring-0">
          <User className="w-4 h-4 font-bold" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center" className="">
        <DropdownMenuItem>Login</DropdownMenuItem>
        <DropdownMenuItem>Register</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
