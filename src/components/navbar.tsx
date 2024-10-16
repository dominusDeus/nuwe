"use client";
import Link from "next/link";
import { Button } from "@/components/shared/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shared/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="border-b sticky top-0 md:static bg-background z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Nuwe
        </Link>
        <div className="md:flex items-center space-x-4 hidden">
          <Link
            href="/services"
            className="text-muted-foreground hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
          <Button asChild variant="outline">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <ModeToggle />
        </div>
        <div className="flex justify-end items-center space-x-4 md:hidden">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <Link href="/services">
                  <DropdownMenuItem>Services</DropdownMenuItem>
                </Link>
                <Link href="/about">
                  <DropdownMenuItem onClick={() => console.log("dark")}>
                    About Us
                  </DropdownMenuItem>
                </Link>
                <Link href="/">
                  <DropdownMenuItem onClick={() => console.log("system")}>
                    Contact
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
