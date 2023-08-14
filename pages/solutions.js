import Navbar from "../components/navbar";
import { grid } from "./api/grid.js"

export default function Services() {

    return (
      <div class="container p-8 mx-auto xl:px-0 flex flex-wrap">
        <Navbar />
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto px-4 py-8 sm:py-16 lg:px-6">
            <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
              {grid.map((singleItem) => (
                <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
                    {singleItem.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
}