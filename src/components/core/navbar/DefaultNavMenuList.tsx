import { usePathname } from "next/navigation";
import { DefaultNavMenuData } from "./NavMenudata";
import Link from "next/link";

export const DefaultNavMenuList = () => {
    const pathname = usePathname();
    return (
      <div
        className="flex flex-col pl-7 py-16
          lg:gap-5 lg:pl-0 lg:py-0 lg:flex-row lg:items-center whitespace-nowrap "
      >
        {DefaultNavMenuData.map((i) => {
          return (
            <div key={Math.random()}>
              <Link
                className={`${pathname === i.url && "text-c-violet-200 font-bold"
                  }`}
                href={i.url}
              >
                <p className="text-16-regular">{i.title}</p>
                <p className="my-5 block h-[1px] bg-slate-400 lg:hidden "></p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };