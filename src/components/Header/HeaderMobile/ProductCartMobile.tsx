export default function ProductCartMobile() {
  return (
    <div className="flex gap-x-1">
      <img
        src="images/products/p1.png"
        className="w-[90px] h-[90px]"
        alt="product 1"
      />
      <div className="flex flex-col justify-between tracking-tighter gap-y-1.5">
        <h4 className="font-Dana-Medium text-zinc-700 dark:text-white text-sm line-clamp-2">
          قهوه ی اسپرسو بن مانو مدل پریسکا 250 گرمی
        </h4>
        <div>
          <span className="text-teal-600 dark:text-emerald-500 font-Dana-Medium text-xs">
            14.500 تومان تخفیف
          </span>
          <div className="text-zinc-700 dark:text-white font-Dana-DemiBold">
            175,000
            <span className="font-Dana text-xs">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}
