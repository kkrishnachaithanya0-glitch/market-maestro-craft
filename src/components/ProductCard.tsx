import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
}

export const ProductCard = ({ 
  image, 
  name, 
  price, 
  originalPrice, 
  rating, 
  reviewCount 
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <Card className="group overflow-hidden border border-border hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded">
            -{discount}%
          </div>
        )}
      </div>
      
      <div className="p-4 space-y-2">
        <h3 className="font-medium line-clamp-2 text-sm group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center gap-1">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 ${
                  i < Math.floor(rating) 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'fill-muted text-muted'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviewCount})</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <Button 
          className="w-full gap-2 bg-primary hover:bg-primary/90" 
          size="sm"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};
