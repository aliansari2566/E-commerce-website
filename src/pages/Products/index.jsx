import axios from "axios";
import { useState, useEffect, useContext } from "react";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const [Products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const dataResponse = await axios.get("https://fakestoreapi.com/products");
      setProducts(dataResponse.data);
      dataResponse.data.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setfilteredProducts(dataResponse.data);
    } catch (error) {
      console.log("error");
    }
  };

  const searchInputChangeHandler = (e) => {
    const filteredProducts = Products.filter((Products) => {
      return Products.title
        .toLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });
    setfilteredProducts(filteredProducts);
  };
  const selectChange = (e) => {
    let sortedProducts;
    if (e.target.value === "ascending") {
      sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (e.target.value === "descending") {
      sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    } else if (e.target.value === "a_z") {
      sortedProducts = [...filteredProducts].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else if (e.target.value === "z_a") {
      sortedProducts = [...filteredProducts].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    } else {
      sortedProducts = filteredProducts;
    }
    setfilteredProducts(sortedProducts);
  };
  const priceFilterClickHandler = () => {
    const inputMinValue = document.getElementById("min_price").value;
    const inputMaxValue = document.getElementById("max_price").value;
    if (!isNaN(inputMinValue) && !isNaN(inputMaxValue)) {
      const filteredProductsByMinPrice = filteredProducts.filter(
        (product) =>
          product.price >= Number(inputMinValue) &&
          product.price <= Number(inputMaxValue)
      );
      setfilteredProducts(filteredProductsByMinPrice);
    }
  };
  const resetPriceRangeFilter = () => {
    setfilteredProducts(Products);
  };

  return (
    <div className="bg-white">
      <center>
        <p className="text-3xl font-bold text-white bg-cyan-500 p-6 ">
          All Products
        </p>
        <div className="flex items-center justify-center">
          <div className="max-w-full">
            <div className="relative text-gray-600">
              <div className="flex flex-wrap justify-center items-center mt-5 p-3">
                <input
                  type="search"
                  placeholder="Search by Title"
                  onChange={searchInputChangeHandler}
                  className="w-full md:w-1/4 p-3 mb-3 md:mb-0 md:mr-2 bg-white text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:border-gray-500"
                />
                <select
                  onChange={selectChange}
                  className="w-full md:w-auto p-3 mb-3 md:mb-0 md:mr-2 bg-white text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:border-gray-500"
                >
                  <option defaultValue hidden>
                    Sort by
                  </option>
                  <option value="ascending">Price Asc</option>
                  <option value="descending">Price Desc</option>
                  <option value="a_z">A-Z</option>
                  <option value="z_a">Z-A</option>
                </select>
                <input
                  type="text"
                  placeholder="Min"
                  id="min_price"
                  className="w-full md:w-1/12 p-3 mb-3 md:mb-0 md:mr-2 bg-white text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:border-gray-500"
                />
                <input
                  type="text"
                  placeholder="Max"
                  id="max_price"
                  className="w-full md:w-1/12 p-3 mb-3 md:mb-0 md:mr-2 bg-white text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:border-gray-500"
                />
                <button
                  className="w-full md:w-auto p-3 mb-3 md:mb-0 md:mr-2 bg-cyan-500 hover:bg-cyan-700 text-white font-bold rounded"
                  onClick={priceFilterClickHandler}
                >
                  Filter
                </button>
                <button
                  className="w-full md:w-auto p-3 mb-3 md:mb-0 md:mr-2 bg-cyan-500 hover:bg-cyan-700 text-white font-bold rounded"
                  onClick={resetPriceRangeFilter}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </center>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {filteredProducts.map((pro) => (
          <ProductCard
            key={pro.id}
            title={pro.title}
            img={pro.image}
            cate={pro.category}
            pri={pro.price}
            id={pro.id}
          />
        ))}
      </section>
    </div>
  );
};

export default Products;
