import { useState, useEffect } from "react";
const data = [
  {
    quantity: 5,
    product: {
      code: "STHO8CC2",
      name: "AutoArt - Bugatti Vision Gran Turismo",
      price: 3000000,
      media_url:
        "https://res.cloudinary.com/davidrivaldy/image/upload/v1599670549/spe-academy/AutoArt_-_Bugatti_Vision_Gran_Turismo_wyo3ap.jpg",
      stock: 8,
    },
  },
  {
    quantity: 1,
    product: {
      code: "QTLQ62FJ",
      name: "Greenlight Collectibles - 2012 Chevrolet Corvette Z06",
      price: 1300000,
      media_url:
        "https://res.cloudinary.com/davidrivaldy/image/upload/v1599670166/spe-academy/Greenlight_Collectibles_-_2012_Chevrolet_Corvette_Z06_go6fzk.jpg",
      stock: 13,
    },
  },
  {
    quantity: 2,
    product: {
      code: "9W4K0DR6",
      name: "CMC - Jaguar C-Type - 1953 Le Mans",
      price: 1500000,
      media_url:
        "https://res.cloudinary.com/davidrivaldy/image/upload/v1599670015/spe-academy/CMC_-_Jaguar_C-Type_-_1953_Le_Mans_gm591l.jpg",
      stock: 15,
    },
  },
  {
    quantity: 1,
    product: {
      code: "2OT2DNSS",
      name: "AutoArt - Mercedes - AMG GT R AMG Green Hell",
      price: 1500000,
      media_url:
        "https://res.cloudinary.com/davidrivaldy/image/upload/v1599666682/spe-academy/AutoArt_-_Mercedes_-_AMG_GT_R_AMG_Green_Hell_hkkfgd.jpg",
      stock: 11,
    },
  },
  {
    quantity: 2,
    product: {
      code: "DH13OWNC",
      name: "Greenlight Collectibles - 2012 Chevrolet Camaro ZL1",
      price: 2500000,
      media_url:
        "https://res.cloudinary.com/davidrivaldy/image/upload/v1599669884/spe-academy/Greenlight_Collectibles_-_2012_Chevrolet_Camaro_ZL1_xqzsfn.jpg",
      stock: 25,
    },
  },
];

const ProductList = () => {
  const [products, setProducts] = useState(data);
  const [total, setTotal] = useState(0);

  const handleChange = (event, index) => {
    const newProducts = [...products];
    newProducts[index].quantity = Number(event);
    setProducts(newProducts);
  };

  const totalPrice = () => {
    let total = 0;
    products.forEach((data) => {
      total += data.quantity * data.product.price;
    });
    return total;
  };
  useEffect(() => {
    setTotal(totalPrice());
  }, [products]);

  return (
    <>
      {products.map((data, index) => {
        return (
          <div
            key={data.product.code}
            className="border-grey grid grid-cols-5 gap-4 border-b-2"
          >
            <div className="col-span-3 mx-5 my-2 text-left">
              <div className="flex items-center justify-start">
                <div className="relative w-[150px] overflow-hidden">
                  <img
                    src={data.product.media_url}
                    alt={data.product.name}
                    className="h-[150px] w-[150px] object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-medium text-cyan-500">
                    {data.product.code}
                  </div>
                  <div className="text-lg font-bold">{data.product.name}</div>
                  <div className="text-sm font-medium">
                    IDR. {data.product.price}
                  </div>
                  <div className="text-red-500">{data.product.stock}</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center text-center">
              <input
                className="rounded border-2"
                type="number"
                id={data.product.code}
                name={data.product.name}
                min="0"
                max={data.product.stock}
                value={data.quantity}
                onChange={(e) => handleChange(e.target.value, index)}
              />
            </div>
            <div className="flex items-center justify-center text-center">
              IDR. {data.quantity * data.product.price}
            </div>
          </div>
        );
      })}
      <div className="fixed bottom-0 grid w-full grid-cols-5 gap-4 bg-black text-white">
        <div className="col-span-3"></div>
        <div className="text-center">TOTAL</div>
        <div className="text-center">IDR. {total}</div>
      </div>
    </>
  );
};

export default ProductList;
