import React, { useEffect, useState } from "react";
import "./CardCarousel.css";

import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { ProductService } from "../../../service/ProductService";

export function CardCarousel() {
  const [products, setProducts]: any = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const getSeverity = (product: any) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  const productTemplate = (product: any) => {
    return (
      <div className="card" onClick={() => console.log(product.name)}>
        <div className="product-img">
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
          />
        </div>
        <div className="product-info">
          <p>{product.name}</p>
          <h6 className="mt-0 mb-3">${product.price}</h6>
        </div>
      </div>
    );
  };
  return (
    <div className="card-carousel">
      <div className="type">
        <h4>Ofertas</h4>
      </div>
      <div>
        <Carousel
          value={products}
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
        />
      </div>
    </div>
  );
}
