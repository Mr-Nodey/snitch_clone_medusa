import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { FaOpencart } from "react-icons/fa6";


export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
         <div className="bg-[#000] h-[40px] w-full py-3 md:py-0  items-center justify-center flex">
              <p className=" text-center text-[10px]  flex-wrap md:flex  md:text-[.9em] tracking-[.2em]  text-grey-0">GET FLAT 50% OFF ON SELECT COLLECTION    <br  className=" md:hidden"/>
                   <span className="ml-2 uppercase underline">Download App</span>
              </p>
        </div>
      <header className="relative h-[70px] py-[7px] md:h-[130px] xl:py-0 md:py-[20px] mx-auto border-b duration-200 shadow-sm backdrop-blur-sm  bg-white border-ui-border-base" >
       
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase text-[25px] md:text-[35px] lg:text-[40px]"
              data-testid="nav-store-link"
            >
             Snitch
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {(
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  <CiSearch size={28}/>
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                <GoHeart size={28}/>
              </LocalizedClientLink>

              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                <CiUser size={28}/>
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
            
                </LocalizedClientLink>
              }
            >
              {/* <CartButton /> */}
              <FaOpencart size={27}/>
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
