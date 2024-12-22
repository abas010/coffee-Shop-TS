export default function HeroSetion() {
  return (
    <main>
      <section className="home h-[200px] xs:h-auto xs:aspect-[2/1] bg-home-mobile md:bg-home-desktp bg-no-repeat bg-cover bg-[center_top]">
        <div className="container h-full flex justify-end items-center md:min-h-screen">
          <div className="text-white">
            <h2 className="font-Morabba-Bold text-2xl md:text-6xl mb0.5 md:mb-2">
              قهوه عربیکاتانزانیا
            </h2>
            <span className="font-Morabba-Light text-xl md:5xl">
              !یک فنجان بالانس
            </span>
            <span className="block w-[100px] h-px md:h-0.5 bg-orange-300 my-3 md:my-8"></span>
            <p className="max-w-[201px] md:max-w-[460px] text-xs md:text-2xl font-Dana">
              فطعانام آشنای عریبیکاراشمنیده ایدوعربیکا یکی ازگونه های قهوه است
              که در نواحی مختلف کمرند قهوه کشت می شود
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}