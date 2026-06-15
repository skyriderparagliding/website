"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import type { Product } from "@/types";

type ProductDetailsProps = {
  product: Product;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? "");
  const displayPrice = product.salePrice ?? product.price;

  const whatsappMessage = encodeURIComponent(
    `Hi SkyRiders! I'm interested in the ${product.name}${selectedSize ? ` (Size: ${selectedSize})` : ""}. Can you provide more info?`
  );

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-wider text-sky-500">
          {product.manufacturer}
        </p>
        <h1 className="mt-1 text-3xl font-bold text-slate-900 sm:text-4xl">
          {product.name}
        </h1>
        <p className="mt-3 text-slate-600 leading-relaxed">{product.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {product.certification && <Badge>{product.certification}</Badge>}
        {product.weight && <Badge variant="secondary">Weight: {product.weight}</Badge>}
        {product.isUsed && <Badge variant="outline">Pre-Owned</Badge>}
        {product.isRental && <Badge variant="outline">Rental</Badge>}
      </div>

      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-slate-900">
          {formatPrice(displayPrice)}
        </span>
        {product.salePrice && (
          <span className="text-lg text-slate-400 line-through">
            {formatPrice(product.price)}
          </span>
        )}
      </div>

      {product.sizes && product.sizes.length > 0 && (
        <div>
          <p className="mb-3 text-sm font-medium text-slate-700">Size</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`rounded-xl border-2 px-5 py-2.5 text-sm font-medium transition-colors ${
                  selectedSize === size
                    ? "border-sky-500 bg-sky-50 text-sky-700"
                    : "border-slate-200 text-slate-700 hover:border-slate-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button size="lg" className="flex-1">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
        <Button asChild variant="outline" size="lg" className="flex-1">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Inquiry
          </a>
        </Button>
      </div>

      {!product.inStock && (
        <p className="text-sm font-medium text-red-500">Currently out of stock</p>
      )}
    </div>
  );
}

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-50">
        <Image
          src={images[active]}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative h-20 w-20 overflow-hidden rounded-xl ${
                active === i ? "ring-2 ring-sky-500" : ""
              }`}
            >
              <Image src={img} alt="" fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
