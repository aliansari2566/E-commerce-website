import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../../cart/ActionCreater";
import { useDispatch } from "react-redux";
import { auth } from "../../Firebase/firebase-config";

const ProductDetails = () => {
  const { productID } = useParams();

  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);

  const userID = () => {
    if (auth.currentUser) {
      const userID = auth.currentUser.uid;
      return userID;
    }
  };

  useEffect(() => {
    getproduct();
  }, []);

  const getproduct = async () => {
    try {
      const dataResponse = await axios.get(
        `https://fakestoreapi.com/products/${productID}`
      );
      setProduct(dataResponse.data);
    } catch (error) {
      console.log("error");
    }
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCartClickHandler = () => {
    dispatch(addToCart(product, quantity, userID()));
    navigate("/cart");
  };

  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              className="lg:w-1/2 w-full object-center rounded border border-gray-200"
              style={{ height: "30rem" }}
              src={product && product.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product && product.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product && product.title}
              </h1>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${product && product.price}
                  </span>
                </div>
                <div>
                  <input
                    type="number"
                    min={1}
                    className="border p-2"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  />
                  <button
                    onClick={addToCartClickHandler}
                    className="text-white bg-yellow-600 border border-yellow-600 py-2 px-6 focus:outline-none hover:shadow-lg rounded-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
