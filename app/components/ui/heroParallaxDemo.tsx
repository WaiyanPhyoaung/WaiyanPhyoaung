"use client";
import React from "react";
import { HeroParallax } from "@/app/components/ui/heroParallax";
import { products } from "@/app/data";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
