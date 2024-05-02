import { db } from "../_lib/prisma";
import ProductItem from "./product-item";

const ProductList = async () => {
  const produts = await db.product.findMany({
    where: { discountPercentage: { gt: 0 } },
    take: 10,
    include: { restaurant: { select: { name: true } } },
  });

  return (
    <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden gap-4">
      {produts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
