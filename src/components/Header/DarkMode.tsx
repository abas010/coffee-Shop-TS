import Moon from "../Svgs/Moon";
import Sun from "../Svgs/Sun";

type darkModeProps = {
  className: string;
  textMoon?: string;
  textSun?: string;
};

export default function DarkMode(props: darkModeProps) {
  const isDarkMode = (): void => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="inline-block  cursor-pointer" onClick={isDarkMode}>
      <div className="flex items-center  gap-x-2 dark:hidden">
        <Moon className={` ${props.className} `} />
        {props.textMoon && <span>{props.textMoon}</span>}
      </div>
      <div className="hidden dark:flex items-center gap-x-2">
        <Sun className={`${props.className}  `} />
        {props.textSun && <span>{props.textSun}</span>}
      </div>
    </div>
  );
}
