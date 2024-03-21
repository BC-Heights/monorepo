export function VerticalLine({className}: {className?: string}) {
    return <div className={`border-r self-stretch ${className}`}/>
}

export function HorizontalLine({className}: {className?: string}) {
    return <div className={`w-full self-center border-t ${className}`}/>
}