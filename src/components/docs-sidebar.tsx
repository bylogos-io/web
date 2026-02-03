"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Logos from "@public/icon.svg";
import { cn } from "@/lib/utils";

interface Doc {
  slug: string;
  title: string;
  order: number;
}

export function DocsSidebar({ docs }: { docs: Doc[] }) {
  const pathname = usePathname();

  // Ordenamos los documentos según el campo `order`
  const sortedDocs = [...docs].sort((a, b) => a.order - b.order);

  return (
    <div className="w-64 border-r border-border hidden md:flex flex-col h-full bg-background">
      <div className="p-4 border-b border-border">
        <Link rel="icon" href="/" className="self-start mb-4 block">
          <div className="flex items-center gap-2 hover:text-primary transition-all duration-200">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Volver al inicio</span>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#e16e0920] border-1 p-1">
            <Image src={Logos} alt="Logos Logo" />
          </div>
          <span className="font-bold text-lg">Documentación</span>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <nav className="p-4 space-y-2">
          {sortedDocs.map((doc) => {
            // Velite genera el slug incluyendo la carpeta 'docs/', por ejemplo 'docs/introduccion'
            // La URL que queremos es '/docs/introduccion'
            // Quitamos el prefijo 'docs/' para construir correctamente el href
            const cleanSlug = doc.slug.replace(/^docs\//, '');
            const href = `/docs/${cleanSlug}`;
            
            // Lógica Active State robusta:
            // 1. Coincidencia exacta: pathname === href
            // 2. Default (Root): Si estamos en '/docs' o '/docs/' y este es el item con orden 1 (Introducción)
            const isExactActive = pathname === href || pathname === `${href}/`;
            const isDefaultActive = (pathname === '/docs' || pathname === '/docs/') && doc.order === 1;
            
            const isActive = isExactActive || isDefaultActive;

            return (
              <Link
                key={doc.slug}
                href={href}
                className={cn(
                  "block px-4 py-2 text-sm rounded-md transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                )}
              >
                {doc.title}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );
}
