import { InferSelectModel } from "drizzle-orm";
import { projects } from "@/db/schema";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import SubscribeBtn from "../payments/sunscribe-btn";
import { monthlyPlanId } from "@/lib/payments";
import { Lock } from "lucide-react";

type Project = InferSelectModel<typeof projects>;
type Props = {
  projects: Project[];
};

const ProjectList = (props: Props) => {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-4">
        {props.projects.map((project: Project) => (
          <li key={project.id}>
            <Card className="max-w-[350px] flex flex-col h-full">
              <CardHeader className="flex-1">
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/projects/${project.id}`}>
                  <Button>View Project</Button>
                </Link>
              </CardFooter>
            </Card>
          </li>
        ))}
        <Card className="max-w-[350px] flex flex-col h-full bg-gray-400">
          <CardHeader className="flex-1">
            <CardTitle className="flex flex-col">
              <Lock className="h-8 w-8 mr-2"/>
              Upgrade to Premium</CardTitle>
            <CardDescription>
              Unlock unlimited projects and more features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Lock className="h-10 w-10 mx-auto" />
          </CardContent>

        <SubscribeBtn price={monthlyPlanId} />
        </Card>

      
      </ul>
    </div>
  );
};

export default ProjectList;
