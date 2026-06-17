"use client";

import { Bell, Search, User, Globe, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useEventStore } from "@/stores/eventStore";

export function TopNavbar() {
  const { setSearchQuery } = useEventStore();

  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-40 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search intelligence, events, regions..."
            className="pl-10 bg-background/50 border-border focus-visible:ring-primary/50"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-critical/10 text-critical text-xs font-medium border border-critical/20 animate-pulse">
          <Activity className="w-3 h-3" />
          <span>High Alert: Red Sea Sector</span>
        </div>

        <div className="flex items-center gap-2 mr-2">
          <Badge variant="outline" className="bg-low/10 text-low border-low/20 gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-low" />
            System Normal
          </Badge>
        </div>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-critical rounded-full border-2 border-background" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full overflow-hidden border border-border">
              <User className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-card border-border">
            <DropdownMenuLabel>Intelligence Operator</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
            <DropdownMenuItem>Assigned Regions</DropdownMenuItem>
            <DropdownMenuItem>Verification History</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-critical">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
