import { Button } from "./ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Plus } from "lucide-react"
import { createProject } from "@/actions/createProject"
import SubmitButton from "./submit-project-btn"


const NewProjBtn=()=>{
    return(
<Dialog>
  <DialogTrigger asChild>
    <Button className="rounded-full"><Plus className="w-4 h-4"/></Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>New Project</DialogTitle>
      <DialogDescription>
       Create a new project to get started
      </DialogDescription>
    </DialogHeader>
<form className="flex gap-4 flex-col" action={createProject}>
    <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
<Label htmlFor="name">Name</Label>
<Input name="name" id="name" placeholder="Project Name"/>
</div>
<div className="flex flex-col gap-2">
<Label htmlFor="url">URL</Label>
<Input name="url" id="url" placeholder="https://example.com"/>
</div>
</div>
<div className="flex flex-col gap-2">
<Label htmlFor="description">Description</Label>
<Textarea name="description" id="description" placeholder="Description(optional)"></Textarea>
</div>
<SubmitButton/>
</form>

  </DialogContent>
</Dialog>



    )
}

export default NewProjBtn;