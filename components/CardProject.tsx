import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { DataProject } from "@/lib/DataProject";
import Link from "next/link";

export function CardProject() {
  const data = DataProject;
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent className="-ml-1">
        {data.map((item, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-2">
              <Card className="bg-light border border-black p-5 shadow-[10px_10px_black] hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
                <CardContent className="flex flex-col aspect-square relative overflow-hidden">
                  <div className="relative w-full h-64">
                    <Image
                      src={item.src}
                      fill
                      alt={item.alt}
                      className="object-cover grayscale group-hover:grayscale-0 transition duration-300 ease-in-out rounded-md hover:grayscale-0"
                    />
                  </div>
                  <div className="mt-2">
                    <p>{item.description.substring(0, 100) + "..."}</p>
                    <Link href={item.src} className="underline">
                      See details
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
