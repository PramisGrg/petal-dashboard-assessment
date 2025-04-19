import { Card, CardContent } from "../ui/card";
import oversizedHoodie from "@/assets/images/oversized-hoodie.png";
import hoodies from "@/assets/images/hoodies.png";
import sweatShirt from "@/assets/images/sweatshirt.png";
import cargoPant from "@/assets/images/cargo-pants.png";

const ProductCard = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-4 w-max">
        <Card
          className="w-72 h-80 bg-cover bg-center"
          style={{
            backgroundImage: `url(${oversizedHoodie})`,
          }}
        >
          <CardContent className="text-white text-xl">
            Oversized Hoodies
          </CardContent>
        </Card>
        <Card
          className="w-72 h-80 bg-cover bg-center"
          style={{
            backgroundImage: `url(${hoodies})`,
          }}
        >
          <CardContent className="text-white text-xl">
            Oversized Hoodies
          </CardContent>
        </Card>
        <Card
          className="w-72 h-80 bg-cover bg-center"
          style={{
            backgroundImage: `url(${sweatShirt})`,
          }}
        >
          <CardContent className="text-white text-xl">Sweatshirts</CardContent>
        </Card>
        <Card
          className="w-72 h-80 bg-cover bg-center"
          style={{
            backgroundImage: `url(${cargoPant})`,
          }}
        >
          <CardContent className="text-white text-xl">Cargo Pants</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductCard;
