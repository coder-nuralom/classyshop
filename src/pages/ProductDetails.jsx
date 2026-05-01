import React, { useRef } from "react";
import BreadCumbs from "../components/BreadCumbs";
import ProductDescriptionBox from "../components/ProductDescriptionBox";
import ProductsSlider from "../components/ProductsSlider";
import SectionWrapper from "../components/SectionWrapper";
import ProductZoom from "../components/ProductZoom";
import ProductMeta from "../components/ProductMeta";
import products from "../../Data/productsData";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const relatedProducts = products?.filter((item) => item.category === product.category);

  if (!product) {
    return (
      <SectionWrapper className="mt-2">
        <div className="p-10 text-center bg-gray-100 text-xl font-medium capitalize">
          Product not found
        </div>
      </SectionWrapper>
    );
  }

  return (
    <>
      <BreadCumbs className="mb-5" />

      {/* Product Images and Price,Category,Brand Details */}
      <SectionWrapper className="pb-4">
        <div className="flex flex-col gap-y-10 min-[901px]:flex-row min-[901px]:gap-7 min-[901px]:items-start xl:items-center">
          <div className="product_image_area w-full min-[901px]:w-1/2 shrink-0">
            <ProductZoom product={product} />
          </div>
          <div className="productDetails_area w-full min-[901px]:w-1/2 xl:pr-10">
            <ProductMeta product={product} />
          </div>
        </div>
      </SectionWrapper>

      {/* Product description,details,reviews Box */}
      <SectionWrapper className="mt-12 mb-13">
        <ProductDescriptionBox />
      </SectionWrapper>

      {/* Related Products */}
      <SectionWrapper className="mb-12.5">
        <ProductsSlider title="Related Products" products={relatedProducts} />
      </SectionWrapper>
    </>
  );
};

export default ProductDetails;
