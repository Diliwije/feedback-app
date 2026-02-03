import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

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
          <div>
            <h1>Feedback Dashboard</h1>
            <p>Welcome to the feedback dashboard. Here you can view and manage user feedback.</p>
          </div>
        );
}