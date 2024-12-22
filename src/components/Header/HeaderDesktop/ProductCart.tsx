export default function ProductCart() {
  return (
    <div className="flex gap-x-2.5">
      <img src="images/products/p1.png" className="w-30 h-30" alt="product 1" />
      <div className="flex flex-col justify-between tracking-tighter">
        <h4 className="font-Dana-Medium text-zinc-700 dark:text-white line-clamp-2">
          قهوه ی اسپرسو بن مانو مدل پریسکا 250 گرمی
        </h4>
        <div>
          <span className="text-teal-600 dark:text-emerald-500 text-xs">
            14.500 تومان تخفیف
          </span>
          <div className="text-zinc-700 dark:text-white font-Dana-DemiBold">
            175,000
            <span className="font-Dana text-sm">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}
