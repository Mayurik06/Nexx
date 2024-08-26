'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Button } from "./ui/button";
import { Menu ,X, Folder,CreditCard} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const HeaderMenu = () => {
    const [open, setOpen] = useState<boolean>(false)


    return (
        <DropdownMenu open={open} onOpenChange={()=>setOpen(!open)}>
        <DropdownMenuTrigger asChild>
<Button onClick={()=>setOpen(!open)} className="mr-4" variant="secondary">
       {
        open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>
       }
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem asChild>
            <Link href="/dashboard" className="flex"><Folder className="mr-2 h-4 w-4"/> <span>Project</span></Link></DropdownMenuItem>
          <DropdownMenuItem asChild>
          <Link href="/dashboard" className="flex"> <CreditCard className="mr-2 h-4 w-4"/> <span>Billing </span></Link></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
    )}

    export default HeaderMenu;