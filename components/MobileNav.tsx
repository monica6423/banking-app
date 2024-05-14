"use client"

import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full">
      <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg" alt={"Menu"} width={30} height={30}></Image>
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="flex cursor-pointer items-center gap-2">
              <Image src="/icons/logo.svg" width={34} height={34} alt={"Bnking app"}></Image>
              <h1 className="text-26 font-ibm-plex-serif">Banking App</h1>
            </Link>
            <div className="mobile-nav-sheet">
              <SheetClose asChild>
                <nav className="flex flex-col gap-4 pt-16 text-whilte">
                  {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                    return (
                      <SheetClose asChild>
                        <Link href={item.route} key={item.label} className={cn("mobilenav-sheet_close w-full", {"bg-bank-gradient": isActive})}>
                          <Image width={20} height={20} src={item.imgURL} alt={item.label} className={cn({"brightness-[3] invert-0": isActive})}></Image>
                          <p className={cn("text-16 font-semibold text-black-2", {"text-white": isActive})}>
                            {item.label}
                          </p>
                        </Link>
                      </SheetClose>
                    )
                  })}
                </nav>
              </SheetClose>
              Footer
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav