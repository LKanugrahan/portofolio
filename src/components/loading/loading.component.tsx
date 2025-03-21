export default function Loading({className}:{className:string}) {
  return (
    <div className="flex gap-2 h-7 items-center">
        {Array(5).fill(0).map((_,i)=><div key={i}
        className={`animate-bounce-high ${className} rounded-full w-2 h-2`}
        style={{ animationDelay: `0.${i}s` }}
      />)}
    </div>
  );
}
