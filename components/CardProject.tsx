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

export function CardProject() {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-5">
              <Card className="bg-light border border-black p-5 transform rotate-0 -skew-x-3 shadow-[10px_10px_black] hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
                <CardContent className="flex aspect-square relative overflow-hidden">
                  <div className="flex flex-col gap-1 w-full">
                    <div className="relative group">
                      <Image
                        src="/project/1.png"
                        height={500}
                        width={500}
                        alt="project-image"
                        className="object-contain grayscale group-hover:grayscale-0 transition duration-300 ease-in-out rounded-md hover:shadow-[10px_10px_black]"
                      />
                    </div>
                    <div>
                      <p>
                        Aplikasi Desktop diagnosa penyakit kulit menggunakan
                        menggunakan bahasa pemograman python dan library GUI
                        PySimpleGUI{" "}
                      </p>
                    </div>
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
