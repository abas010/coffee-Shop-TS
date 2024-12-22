import { useState } from "react";

import DarkMode from "../DarkMode";
import ProductCartMobile from "./ProductCartMobile";

import Bars3 from "../../Svgs/Bars3";
import Logo from "../../Svgs/Logo";
import ShoppingCart from "../../Svgs/ShoppingCart";
import ShoppingBag from "../../Svgs/ShoppingBag";
import ChevronDown from "../../Svgs/ChevronDown";
import ChatBubbleLeftEllipsis from "../../Svgs/ChatBubbleLeftEllipsis";
import Briefcase from "../../Svgs/Briefcase";
import DocumentText from "../../Svgs/DocumentText";
import PhoneArrowDownleft from "../../Svgs/PhoneArrowDownleft";
import ArrowLeftEndOnRectangle from "../../Svgs/ArrowLeftEndOnRectangle";
import LogoType from "../../Svgs/LogoType";
import XMark from "../../Svgs/XMark";
import Home from "../../Svgs/Home";
import ToggelSidebar from "./ToggelSidebar";
import toggelContext from "../../../Contexts/ToggelSidebarsMobile";

export default function HeaderMobile() {
  const [isShowNavMobile, setIsShowNavMobile] = useState(false);
  const [isShowCartMobile, setIsShowCartMobile] = useState(false);
  const [isShowNavMenoMobile, setIsShowNavMenoMobile] = useState(false);
  console.log(typeof useState);

  const overlayClickHandler = () => {
    setIsShowNavMobile(false);
    setIsShowCartMobile(false);
  };
  const toggelNavMenoHandler = () => {
    if (isShowNavMenoMobile) {
      setIsShowNavMenoMobile(false);
    } else {
      setIsShowNavMenoMobile(true);
    }
  };
  return (
    <div className="flex md:hidden items-center justify-between h-16 px-4 bg-white text-zinc-700 dark:bg-zinc-700 transition-all duration-1000">
      <toggelContext.Provider
        value={{
          isShowNavMobile,
          setIsShowNavMobile,
          isShowCartMobile,
          setIsShowCartMobile,
        }}
      >
        {/* <!-- nav icon --> */}
        <div className="showNavMobile">
          <ToggelSidebar isRight={true}>
            <Bars3 className="w-6 h-6 text-zinc-700 dark:text-white" />
          </ToggelSidebar>
        </div>

        {/* <!-- nav --> */}
        {/* hidden-o -Right */}
        <div
          className={`NavMobil fixed ${
            isShowNavMobile ? "Right" : "hidden-o -Right"
          } top-0 bottom-0  w-64 min-h-screen py-8 px-4 z-20 overflow-y-auto bg-white dark:bg-zinc-700 transition-all duration-1000`}
        >
          {/* <!-- header nav --> */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10">
            {/* <!-- logo nav --> */}

            <div className="flex gap-x-.5  ">
              <Logo className="w-[100px] h-10 text-orange-300" />
              <LogoType className="w-[100px] h-10 text-orange-300" />
            </div>

            {/* <!-- logo close nav --> */}

            <span>
              <ToggelSidebar isRight={true}>
                <XMark className="w-5 h-5 text-zinc-600 dark:text-white  " />
              </ToggelSidebar>
            </span>
          </div>

          {/* <!-- nav meno --> */}
          <ul className="child:pr-2.5 text-zinc-600 dark:text-white space-y-6">
            <li className="flex items-center text-orange-300 bg-orange-200/20 pr-0 h-10 rounded-md">
              <a href="" className="inline-flex items-center gap-x-2">
                <Home className="w-5 h-5" />
                صفحه ی اصلی
              </a>
            </li>

            <li className="mt-4">
              <div className="flex items-center justify-between">
                <a href="" className="inline-flex items-center gap-x-2">
                  <ShoppingBag className="w-5 h-5 text-zinc-600 dark:text-white" />
                  فروشگاه
                </a>
                <span
                  className="cursor-pointer   btnSubmenuMobile group transition-all"
                  onClick={toggelNavMenoHandler}
                >
                  <ChevronDown className="w-4 h-4 text-zinc-600 dark:text-white" />
                </span>
              </div>
              <div
                className={`flex flex-col gap-y-3 pr-7 mt-3 ${
                  !isShowNavMenoMobile && "hidden"
                } text-zinc-600 dark:text-white font-Dana subMenu transition-all`}
              >
                <a href="">قهوه ی ویژه</a>
                <a href="" className="submenu_item-active">
                  ویژه در سطح جهانی
                </a>
                <a href="">قهوه ی درجه یک </a>
                <a href="">ترکیبات تجاری</a>
                <a href="">کپسول قهوه</a>
                <a href="">قهوه زینو برزیلی</a>
              </div>
            </li>

            <li>
              <a href="" className="inline-flex items-center gap-x-2">
                <ChatBubbleLeftEllipsis className="w-5 h-5 text-zinc-600 dark:text-white" />
                دیکشنری
              </a>
            </li>

            <li>
              <a href="" className="inline-flex items-center gap-x-2">
                <Briefcase className="w-5 h-5 text-zinc-600 dark:text-white" />
                درباره ما
              </a>
            </li>

            <li className="">
              <a href="" className="inline-flex items-center gap-x-2">
                <DocumentText className="w-5 h-5 text-zinc-600 dark:text-white" />
                بلاگ
              </a>
            </li>

            <li>
              <a href="" className="inline-flex items-center gap-x-2">
                <PhoneArrowDownleft className="w-5 h-5 text-zinc-600 dark:text-white" />
                تماس با ما
              </a>
            </li>
          </ul>

          {/* <!-- footer nav --> */}
          <div className="flex flex-col items-start gap-6 pt-8 px-2.5 mt-8 border-t text-orange-300 border-t-gray-100 dark:border-t-white/10">
            <a href="" className="inline-flex items-center gap-x-2">
              <ArrowLeftEndOnRectangle className="w-5 h-5 rotate-180" />
              ورود | ثبت نام
            </a>
            <div className="inline-block btnDarkmode cursor-pointer">
              <DarkMode
                className="w-5 h-5"
                textMoon="حالت تیره"
                textSun="حالت روشن"
              />
            </div>
            <a href="" className="inline-flex items-center gap-x-2">
              <ShoppingCart className="w-5 h-5" />
              سبد خرید
            </a>
          </div>
        </div>

        {/* <!-- logo type --> */}
        <div>
          <LogoType className="w-[100px] h-10 text-orange-300" />
        </div>

        {/* <!-- cart icon --> */}
        <div className="btnShowCartMobile">
          <ToggelSidebar isRight={false}>
            <ShoppingCart className="w-6 h-6 text-zinc-700 dark:text-white" />
          </ToggelSidebar>
        </div>
        {/* <!-- cart --> */}
        {/* <!-- hidden-o -Left --> */}
        <div
          className={`cartMobile fixed ${
            isShowCartMobile ? "Left" : "hidden-o -Left"
          } top-0 bottom-0  flex flex-col w-64 min-h-screen pt-5 px-4 z-20 bg-white dark:bg-zinc-700 transition-all duration-1000`}
        >
          {/* <!-- header cart --> */}
          <div className="flex items-center justify-between pb-5 mb-5 border-b border-b-gray-300 dark:border-b-white/10">
            {/* <!-- logo close cart --> */}
            <div className="btnCloseCartMobile">
              <ToggelSidebar isRight={false}>
                <XMark className="w-5 h-5 text-zinc-600 dark:text-white  " />
              </ToggelSidebar>
            </div>
            <span className="text-zinc-700 dark:text-white font-Dana-Medium">
              سبد خرید
            </span>
          </div>

          {/* <!-- cart body --> */}
          <div className="max-h-[720px] overflow-y-auto styleScoroll child:pb-5 child:mb-5 child:border-b child:border-b-gray-100 child:dark:border-b-white/10">
            <ProductCartMobile />
            <ProductCartMobile />
          </div>

          {/* <!-- cart footer  --> */}
          <div className="flex items-end gap-x-4 mt-auto mb-8">
            <a
              href=""
              className="flex flex-grow justify-center items-center h-11 text-white bg-teal-600 dark:bg-emerald-500 rounded-xl"
            >
              ثبت سفارش
            </a>

            <div className="text-zinc-700 dark:text-white font-Dana-DemiBold">
              <span className="font-Dana-Medium text-gray-300 text-xs tracking-tighter">
                مبلغ قابل پرداخت
              </span>
              <div>
                350,000
                <span className="font-Dana text-xs">تومان</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`overlay ${
            !isShowNavMobile && !isShowCartMobile && "hidden-o "
          }  md:hidden fixed inset-0 w-full h-full z-10 bg-black/40 transition-all duration-1000`}
          onClick={overlayClickHandler}
        ></div>
      </toggelContext.Provider>
    </div>
  );
}
