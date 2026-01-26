export default function BetCardContainer({children} : {children : React.ReactNode}) {
    return (
        <div className="h-40 w-80 bg-secondary-bg rounded-lg flex flex-col items-center p-4 m-2 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
            {children}
        </div>
    );
}