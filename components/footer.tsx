import { Heart, Star } from "lucide-react";

export default function Footer() {
  return (
      <footer className="border-t bg-background mt-auto">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made </span>
                <Star className="h-4 w-4 text-red-500 fill-red-500"/>
                <span>By Dilshan Wijerathna</span>
               </div>
          
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>  {new Date().getFullYear()} FeedBack Fusion. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
  )
}
