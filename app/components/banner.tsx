export default function Banner({ message, color }: { message: string; color: string }) {
    return (
        <div className={`flex p-4 ${color} text-white rounded-b-md mb-6`}>
            <h2 className="font-bold mx-auto inline">{message}</h2>
        </div>
    );
}