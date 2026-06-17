"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface KPIWidgetProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon: LucideIcon;
  color: string;
}

export function KPIWidget({ title, value, change, isPositive, icon: Icon, color }: KPIWidgetProps) {
  return (
    <Card className="bg-card/50 border-border overflow-hidden relative group">
      <div className={cn("absolute top-0 left-0 w-1 h-full", color)} />
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {title}
        </CardTitle>
        <div className={cn("p-2 rounded-lg bg-white/5", color.replace('bg-', 'text-'))}>
          <Icon className="w-4 h-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={cn(
            "text-[10px] font-bold mt-1 uppercase",
            isPositive ? "text-low" : "text-critical"
          )}>
            {isPositive ? "↑" : "↓"} {change} <span className="text-muted-foreground font-normal ml-1">vs last 7d</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
}
