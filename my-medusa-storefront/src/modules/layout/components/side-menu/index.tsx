"use client"

import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Region } from "@medusajs/medusa"
import { Text, clx, useToggleState } from "@medusajs/ui"
import React, { Fragment, useState } from "react"
import { CiMenuFries } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SideMenuItems } from "../../../../types/global"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import User from "@modules/common/icons/user"
import Link from "next/link"


const SideMenu = ({ regions }: { regions: Region[] | null }) => {
  const toggleState = useToggleState()

  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [toggle, setToggle] = useState<boolean>(false)
  // console.log("clicked")

  return (
    <div className="h-full ">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button data-testid="nav-menu-button" className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base">
                  <CiMenuFries size={28} />
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="flex overflow-y-scroll shadow-md flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2 backdrop-blur-2xl">
                  <div data-testid="nav-menu-popup" className="flex flex-col h-full bg-white text-[#000] rounded-rounded justify-between p-6">

                    <div className=" flex items-center justify-between">
                      <div className=" flex items-center gap-x-[5px] md:gap-x-[10px]">
                        <p className=" bg-grey-10 p-3 rounded-full">
                          <User />
                        </p>

                        <Link href={"/login"} className="mr-2 uppercase text-[1.1em]">log in</Link>
                      </div>
                      <p className=" cursor-pointer" onClick={close}>
                        <XMark />
                      </p>
                    </div>


                    {/* Map all Items */}
                    <ul className="flex flex-col mt-8 gap-4 items-start justify-start">
                      {SideMenuItems?.map((item) => (
                        <React.Fragment key={item.id}>
                          <li>
                            <div className="text-[1.1em] lg:text-[18px] flex items-center font_weight font-thin px-[20px] tracking-[0.2em] ">
                              <div className={`${item.title === "shop" && "flex "} flex flex-col`}>
                                <div className={`${item.title === "shop" && "flex justify-between w-full items-center gap-x-2"}`}>
                                  <LocalizedClientLink href={item.title == "shop" ? "/shop" : item.href!} className="hover:text-ui-fg-disabled  uppercase">{item.title}</LocalizedClientLink>
                                  {item.title === "shop" &&
                                    <IoIosArrowDown
                                      className={`${toggle && "rotate-180 transition-all ease-in-out duration-200"} flex justify-end cursor-pointer`}
                                      onClick={() => setToggle(!toggle)} />
                                  }
                                </div>
                                {toggle && item.shop?.map((shopItem) => (
                                  <div key={shopItem.id} className="gap-4 mt-3 ml-3">
                                    <div className="text-[16px] flex items-center my-1 gap-x-2">
                                      <p>{shopItem.title}</p>
                                      <IoIosArrowDown className={`${openItems[shopItem.title] && " rotate-180"} cursor-pointer`} onClick={
                                        () => setOpenItems(prevState => ({
                                          ...prevState,
                                          [shopItem.title]: !prevState[shopItem.title] // Toggle the state for the clicked item
                                        }))} />
                                    </div>

                                    {openItems[shopItem.title] && (
                                      <>
                                        {shopItem?.Tshirt?.map((tshirtItem) => (
                                          <p key={tshirtItem.id} className="my-3 text-[15px] ml-4 hover:underline cursor-pointer">{tshirtItem.title}</p>
                                        ))}
                                        {shopItem?.shirt?.map((shirtItem) => (
                                          <p key={shirtItem.id} className="my-3 text-[15px] ml-4 hover:underline cursor-pointer">{shirtItem.title}</p>
                                        ))}
                                        {shopItem?.Trousers?.map((trousersItem) => (
                                          <p key={trousersItem.id} className="my-3 text-[15px] ml-4 hover:underline cursor-pointer">{trousersItem.title}</p>
                                        ))}
                                        {shopItem?.Jeans?.map((jeansItem) => (
                                          <p key={jeansItem.id} className="my-3 text-[15px] ml-4 hover:underline cursor-pointer">{jeansItem.title}</p>
                                        ))}
                                      </>
                                    )}
                                  </div>
                                ))}

                              </div>

                            </div>
                          </li>
                          <hr className="text-gray-5 w-full" />
                        </React.Fragment>

                      ))}
                    </ul>

                    {/* Tabel */}
                    <div className="my-4">
                      <table className="table-auto w-full bg-white border  border-gray-300">
                        <tbody className="">
                          <tr className="">
                            <td className="border  border-gray-300 px-5 py-5"><BiLogoInstagramAlt size={24}/></td>
                            <td className="border  border-gray-300 px-5 py-5"><FaFacebook  size={24}/></td>
                            <td className="border  border-gray-300 px-5 py-5"><BsTwitterX  size={20}/></td>
                          </tr>
                          <tr className="">
                            <td className="border text-center  border-gray-300 px-5 py-5"><FaYoutube size={24} /></td>
                            <td className="border  text-center  border-gray-300 px-5 py-5"><FaPinterest size={24} /></td>
                            <td className="border flex text-center  border-gray-300 px-5 py-5"><FaLinkedin size={24} /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>








                    {/* Region */}
                    <div className="flex flex-col gap-y-6">
                      <div
                        className="flex justify-between"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="flex justify-between txt-compact-small">
                        © {new Date().getFullYear()} Medusa Store. All rights
                        reserved.
                      </Text>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
