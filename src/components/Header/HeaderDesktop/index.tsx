import ProductCart from "./ProductCart";
import ArrowLeftEndOnRectangle from "../../Svgs/ArrowLeftEndOnRectangle";
import ShoppingCart from "../../Svgs/ShoppingCart";
import ChevronLeft from "../../Svgs/ChevronLeft";
import DarkMode from "../DarkMode";

export default function HeaderDesktop() {
  return (
    // <!-- App Header -->
    // <!-- header deskTop -->
    <header className="fixed top-9 right-0 left-0 hidden md:flex items-center w-[98%] lg:w-[90%] h-24 px-5 lg:px-10 py-5 mx-auto bg-black/50 rounded-3xl backdrop-blur-[6px]">
      <div className="flex items-center w-full justify-between">
        {/* <!-- Logo & menu --> */}
        <nav className="flex items-center h-14 gap-x-5 lg:gap-x-9">
          {/* <!-- Logo --> */}
          <div className="shrink-0">
            <img src="images/app-logo.png" alt="Golden Coffee" />
          </div>
          {/* <!-- menu --> */}
          <ul className="flex h-full text-xl font-Dana text-gray-300 gap-x-5 lg:gap-x-9 tracking-tightest child:leading-[56px]">
            <li>
              <a href="#" className="font-Dana-Medium text-orange-200">
                صفحه اصلی
              </a>
            </li>
            {/* <!-- Has sub --> */}
            <li className="relative group">
              <a
                href="#"
                className="group-hover:text-orange-300 transition-all"
              >
                فروشگاه
              </a>
              {/* <!-- submenu --> */}
              <div className="absolute w-52 p-6 space-y-4 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible text-base border-t-[3px] border-t-orange-300 rounded-2xl shadow-normal bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white transition-all delay-75 child:inline-block child:tracking-normal child:transition-colors child-hover:text-orange-300">
                <a href="">قهوه ویژه</a>
                <a href="">ویژه در سطح جهانی</a>
                <a href="">قهوه ی درجه یک</a>
                <a href="">ترکیبات تجاری</a>
                <a href="">کپسول قهوه</a>
                <a href="">قهوه زینو برزیلی</a>
              </div>
            </li>
            <li>
              <a href="#">دیکشنری</a>
            </li>
            <li>
              <a href="#">بلاگ</a>
            </li>
            <li>
              <a href="#">درباره ما</a>
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>
          </ul>
        </nav>
        {/* <!-- cart & Thme toggle ,Login Link --> */}
        <div className="flex items-center gap-x-4 lg:gap-x-5 xl:gap-x-10 text-orange-200 text-xl">
          {/* <!-- cart icon & thme switch Btn --> */}
          <div className="flex items-center gap-x-4 lg:gap-x-5">
            {/* <!-- cart --> */}
            <div className="relative group">
              {/* <!-- cart Icon hover --> */}
              <div className="py-3 cursor-pointer">
                <ShoppingCart className="w-8 h-8" />
              </div>
              {/* <!-- cart box --> */}
              {/* <!-- opacity-0 invisible --> */}
              <div className="absolute left-0 w-[400px] top-full p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white border-t-[3px] border-t-orange-300 shadow-normal transition-all delay-75 rounded-2xl">
                {/* <!-- cart header --> */}
                <div className="flex items-center justify-between tracking-tighter font-Dana-Medium text-xs">
                  <span className="text-gray-300"> مورد 1</span>
                  <a href="#" className="flex items-center text-orange-300">
                    مشاهده ی سبد خرید
                    <ChevronLeft className="w-4 h-4" />
                  </a>
                </div>
                {/* <!-- cart body --> */}
                <div className="max-h-[480px] overflow-y-auto styleScoroll pb-1 border-b border-b-gray-300 dark:border-b-white/10 divide-y divide-gray-100 dark:divide-white/10 child:py-5">
                  <ProductCart />
                </div>

                {/* <!-- cart footer --> */}
                <div className="flex justify-between items-center mt-5">
                  <div>
                    <span className="font-Dana-Medium text-gray-300 text-xs tracking-tighter">
                      مبلغ قابل پرداخت
                    </span>
                    <div className="text-zinc-700 dark:text-white font-Dana-DemiBold">
                      350,000
                      <span className="font-Dana text-sm">تومان</span>
                    </div>
                  </div>
                  <div className="w-[144px] text-center h-14 p-4 rounded-xl font-Dana tracking-tightest bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-emerald-600 transition-colors">
                    <a href="">ثبت سفارش</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- thme switch Btn --> */}
            <DarkMode className="w-8 h-8" />
          </div>
          {/* <!-- Divide Border --> */}
          <span className="block w-px h-14 bg-white/20"></span>
          {/* <!-- Login Link --> */}

          <a href="" className="flex items-center gap-x-2.5 tracking-tightest">
            <ArrowLeftEndOnRectangle className="w-8 h-8 rotate-180" />

            <span className="hidden xl:inline-block">ورود | ثبت نام</span>
          </a>
        </div>
      </div>
    </header>
  );
}
