import GradientHeader from "@/components/gradient-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart2, Map, MessageSquare, User, Zap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
    <div className="space-y-12">
    {/*hero section */}
    <GradientHeader title="Welcome to FeedBack Book"
     subtitle="Your go-to platform for collecting and managing user feedback with ease.">
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
      className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white"
      >
        <Link href="/roadmap/new">Submit Roadmap<Map className="ml-2 w-4 h-4" /></Link>
      </Button>  
      </div>    
    </GradientHeader>
    {/*featured section */}
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">How it Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <MessageSquare className="w-8 h-8 text-primary mb-2" />
            <CardTitle>Submit Ideas</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">Share Your Suggestion and feathure with the community</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <BarChart2 className="w-8 h-8 text-primary mb-2" />
            <CardTitle>Vote & Prioritized</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">Vote for features you want to see and help prioritize development</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <User className="w-8 h-8 text-primary mb-2" />
            <CardTitle>Track progress</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">Track the progress of your submitted ideas and see how they're being implemented</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Zap className="w-8 h-8 text-primary mb-2" />
            <CardTitle>See Result</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">Share Your Suggestion and feathure with the community</p>
          </CardContent>
        </Card>
      </div>
    </section>

    {/*Static section */}
 <section className="text-center">
        <div className="inline-grid grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold">1,234+</div>
            <div className="text-muted-foreground">Suggestions</div>
          </div>
          <div>
            <div className="text-3xl font-bold">8,901+</div>
            <div className="text-muted-foreground">Votes Cast</div>
          </div>
          <div>
            <div className="text-3xl font-bold">254+</div>
            <div className="text-muted-foreground">Features Shipped</div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
