import { CirclePlay } from "lucide-react"

export default function VideoReview() {
    return (
        <div className="bg-white relative aspect-9/16 max-w-[400px]">

            <div className="absolute inset-0 flex items-center justify-center">
                <CirclePlay size={48} className="text-[#00C27B]" />
            </div>

            {/* Review Content */}
            <div className=" absolute bottom-0 left-0 p-6 bg-[#00C27B]/10">
                <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-[#00C27B]"></div>
                        <div className="w-3 h-3 bg-[#00C27B]"></div>
                        <div className="w-3 h-3 bg-[#00C27B]"></div>
                        <div className="w-3 h-3 bg-[#00C27B]"></div>
                        <div className="w-3 h-3 bg-[#00C27B]"></div>
                    </div>
                </div>

                <h3 className="text-[16px] font-bold text-black mb-2">
                    EMMA R., CEO OF TECH INNOVATIONS
                </h3>
                <p className="opacity-60 text-[14px]">
                    Their blend of innovative tech solutions and stunning design completely transformed our digital presence.
                </p>
            </div>
        </div>
    );
}