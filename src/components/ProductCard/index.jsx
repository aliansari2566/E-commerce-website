import { Link } from "react-router-dom";
const ProductCard = (props) => {
  return (
    <>
      <div className="w-72 bg-slate-200 shadow-md rounded-xl duration-500 hover:scale-[.98] hover:shadow-xl group ease-in-out">
        <Link className="p-0.5" to={`/productDetails/${props.id}`}>
          <img
            src={props.img}
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl mix-blend-multiply group-hover:scale-105 ease-in-out duration-500 "
            style={{ padding: "3.1rem" }}
          />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">
              {props.cate}
            </span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {props.title}
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-blue-800 cursor-auto my-3 ">
                ${props.pri} USD
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default ProductCard;
