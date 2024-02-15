export default function Loading() {
  return (
    <div className="w-full">
      {Array(5)
        .fill(1)
        .map((_, index) => (
          <div key={index} className="flex flex-row h-[160px] w-full gap-5 pb-6">
            <div
              className="w-[300px] h-full bg-slate-200 animate-pulse
       lg:block"
            ></div>
            <div className="flex flex-col w-full">
              <div
                className="w-3/5 h-[32px] bg-slate-200 animate-pulse
         mb-2 rounded-2xl"
              ></div>
              {Array(6)
                .fill(1)
                .map((_, index) => (
                  <div
                    key={index}
                    className="w-full h-[12px] bg-slate-200 animate-pulse
           mb-2 rounded-lg"
                  ></div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}
