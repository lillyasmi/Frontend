"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Globe, ArrowRight, Shield, Activity, Map as MapIcon } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden py-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-critical/10 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 space-y-6 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase">
          <Activity className="w-3 h-3" />
          Real-Time Global Intelligence
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Geo-Intelligence & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            Conflict Monitoring
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Track conflicts, cyber threats, humanitarian crises, political instability, and global risk events from one centralized intelligence platform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button asChild size="lg" className="h-12 px-8 text-base font-semibold group">
            <Link href="/feed">
              Open Live Feed
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base font-semibold border-border bg-white/5 backdrop-blur-sm">
            <Link href="/map">
              <MapIcon className="mr-2 w-4 h-4" />
              Explore Global Map
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="h-12 px-8 text-base font-semibold hover:bg-white/5">
            <Link href="/dashboard">
              View Dashboard
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Decorative Icons Floating */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-10 md:left-20 hidden lg:block p-4 rounded-2xl glass"
      >
        <Shield className="w-8 h-8 text-primary" />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-10 md:right-20 hidden lg:block p-4 rounded-2xl glass"
      >
        <Globe className="w-8 h-8 text-low" />
      </motion.div>
    </section>
  );
}
