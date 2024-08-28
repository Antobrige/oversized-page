import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <div className="pt-[120px] lg:flex lg:justify-center lg:items-center">
      <div className="px-[20px] lg:px-[50px] max-w-4xl mx-auto">
        <p className="text-white font-medium text-center">COMING SOON</p>
        <h1 className="text-center text-white font-bold leading-[40px] py-2 text-[32px]">
          Get notified when we launch and receive a 10% discount.
        </h1>
        <p className="font-medium text-white text-center py-1 lg:py-1 lg:pb-8">
          Oversized Connect App, matches pilots with carriers.
        </p>
        <div className="bg-white rounded-lg mx-auto max-w-lg">
          <div className="flex w-full items-center space-x-2 pb-1 py-1 pr-1 px-1">
            <Input type="email" placeholder="Email" className="flex-1" />
            <Button className="bg-yellow-500 text-black font-medium hover:border-r-black">Notify Me</Button>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}