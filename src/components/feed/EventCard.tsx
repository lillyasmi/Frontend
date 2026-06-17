"use client";

import React from 'react';
import { GeoEvent, RiskLevel } from "@/types";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  MapPin, 
  ShieldCheck, 
  ShieldAlert, 
  ExternalLink,
  ChevronRight,
  MessageSquare,
  Share2
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  event: GeoEvent;
}

const riskStyles: Record<RiskLevel, { badge: string; border: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }> = {
  critical: { badge: "bg-critical text-white", border: "border-critical/20", icon: ShieldAlert },
  high: { badge: "bg-high text-white", border: "border-high/20", icon: ShieldAlert },
  medium: { badge: "bg-medium text-white", border: "border-medium/20", icon: ShieldAlert },
  low: { badge: "bg-low text-white", border: "border-low/20", icon: ShieldCheck },
};

export function EventCard({ event }: EventCardProps) {
  const styles = riskStyles[event.riskLevel];

  return (
    <Card className={cn(
      "bg-card/50 border-border group hover:border-primary/50 transition-all duration-200",
      styles.border
    )}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-2">
            <Badge className={styles.badge}>{event.riskLevel.toUpperCase()}</Badge>
            <Badge variant="outline" className="bg-background/50 border-border capitalize">
              {event.category}
            </Badge>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            <Clock className="w-3 h-3" />
            {formatDistanceToNow(new Date(event.timestamp))} ago
          </div>
        </div>
        <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
          <Link href={`/events/${event.id}`}>
            {event.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {event.summary}
        </p>
        <div className="flex flex-wrap gap-4 text-xs font-medium">
          <div className="flex items-center gap-1.5 text-white">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            {event.country}, {event.region}
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <ShieldCheck className={cn(
              "w-3.5 h-3.5",
              event.verificationStatus === 'verified' ? "text-low" : "text-muted-foreground"
            )} />
            <span className="capitalize">{event.verificationStatus}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0 border-t border-border/50 flex justify-between items-center py-3">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
            <MessageSquare className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
        <Button asChild variant="ghost" size="sm" className="h-8 text-xs font-bold text-primary hover:text-primary hover:bg-primary/10 gap-1">
          <Link href={`/events/${event.id}`}>
            VIEW INTEL <ChevronRight className="w-3 h-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
