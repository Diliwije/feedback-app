import FeedbackList from "@/components/feedback-list";
import GradientHeader from "@/components/gradient-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getCategoryDesign } from "@/data/category-data";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight, Map } from "lucide-react";
import Link from "next/link";

export default async function FeedbackPage() {
        
  const {userId}=await auth();
  
  const posts=await prisma.post.findMany({
    include:{
      author:true,
    votes:true,
    },
    orderBy:{
      createdAt:'desc',
    },
  });

  const categories=await prisma.post.groupBy({
    by:['category'],
    _count:{
      id:true,
    },
  });
  
  return (
        <> 
        <div className="space-y-12">
          <GradientHeader
          title="shape the futhure of our product"
          subtitle="Your feedback helps us prioritize features and improvements."
          >
            <div className="flex gap-4 justify-center pt-4">
            <Button 
            asChild
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white"
      >
           <Link href="/feedback/new">Submit FeedBack<ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        
          <Button 
          asChild
          size="lg"
          className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white">
            <Link href="/roadmap/new">Submit Roadmap<Map className="ml-2 w-4 h-4" /></Link>
          </Button>  
        </div>
          </GradientHeader>

          {/*slidebar*/}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
              <CardDescription>Filter feedback by category</CardDescription>
              
            </CardHeader>

            <CardContent>
               <div className="space-y-3">
                  {categories.map((cat) => {
                    const design = getCategoryDesign(cat.category);
                    const Icon = design.icon;

                    return (
                      <div
                        key={cat.category}
                        className="group flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg ${design.light} ${design.border} border`}
                          >
                            <Icon className={`h-4 w-4 ${design.text}`}></Icon>
                          </div>
                          <span className="font-medium text-sm">
                            {cat.category}
                          </span>
                        </div>
                        <Badge
                          variant="secondary"
                          className={`${design.light} ${design.text}`}
                        >
                          {cat._count.id}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
          </Card>
        </div>
{/* Main Content */}
          <div className="lg:col-span-3">
            <FeedbackList initialPosts={posts} userId={userId} />
          </div>
         </div>

        </div>
         </>
        );
}