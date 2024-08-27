import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero(){
    return(
        <div className="pt-[120px]">
            <div className="px-[20px] lg:px-[546px]">
                <p className="text-white font-medium text-center">COMING SOON</p>
                <h1 className="text-center text-white font-bold leading-[40px] py-2 text-[32px]">Get notified when we launch and receive a 10% discount.</h1>
                <p className="font-medium text-white text-center py-1 lg:py-1 lg:pb-8">Oversized Connect App,  matches pilots with carriers.</p>
                <div className="bg-white rounded-lg">
                    <div className="flex w-full max-w-sm items-center space-x-2 pb-1 py-1 pr-1 lg:max-w-screen-sm px-1">
                        <Input type="email" placeholder="Email" />
                        <Button className="bg-blue-400 text-black font-medium">Notify Me</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}