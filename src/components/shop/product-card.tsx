"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const displayPrice = product.salePrice ?? product.price;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <Link href={`/shop/product/${product.slug}`} className="group block">
        <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            {product.salePrice && (
              <span className="absolute top-3 left-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                Sale
              </span>
            )}
            {product.isUsed && (
              <span className="absolute top-3 right-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">
                Used
              </span>
            )}
            {product.isRental && (
              <span className="absolute top-3 right-3 rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white">
                Rental
              </span>
            )}
          </div>
          <div className="p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-sky-500">
              {product.manufacturer}
            </p>
            <h3 className="mt-1 text-base font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500 line-clamp-2">
              {product.shortDescription}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-lg font-bold text-slate-900">
                {formatPrice(displayPrice)}
              </span>
              {product.salePrice && (
                <span className="text-sm text-slate-400 line-through">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
            {product.certification && (
              <Badge variant="secondary" className="mt-2">
                {product.certification}
              </Badge>
            )}
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
