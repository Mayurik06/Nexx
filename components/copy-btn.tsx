"use client";
import { Clipboard } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CopyBtn = ({ text }: { text: string }) => {
    const copyToClipboard = async (text: string) => {
        navigator.clipboard.writeText(text).then(()=>{
            alert('Copied to the clipboard')
        })
    }
  return (
    <>
  
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
          <button onClick={()=>copyToClipboard(text)} className="text-slate-50 absolute p-1 right-0 top-0"><Clipboard/></button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy Code</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default CopyBtn;
