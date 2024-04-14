import React from "react";
import { categories } from "../constants";

const Categories = () => {
  return (
    <section id="categories" className="font-poppins px-[10%]">
      <div className="py-[100px]">
        <h3 className="text-[24px] text-center mb-10">Shop by Categories</h3>

        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category) => (
            <div key={category.id} className="relative cursor-pointer">
              <img src={category.icon} alt="icon" className="ss:w-[350px] w-[280px] ss:h-[350px] h-[280px] object-cover bg-gray-100 rounded-2xl group-hover:scale-110 duration-500" />

              <div className="absolute bottom-5 left-[50%] translate-x-[-50%] w-[90%]  mx-auto h-[50px] bg-white rounded-lg">
                <div className="flex items-center justify-center h-full">
                  <p className="text-[16px]">{category.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
