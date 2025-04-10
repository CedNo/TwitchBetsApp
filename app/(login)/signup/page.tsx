import Link from "next/link";
import Button from "@/app/components/button";
import ConfirmPasswordField from "./components/confirm-password";

export default function SignUp() {

    return (
        <div className="px-4 md:px-0">
            <form className="w-full md:w-1/2 lg:w-5/16 flex flex-col gap-4 my-10 mx-auto bg-secondary-bg rounded-xl p-10 shadow-xl">
                <h1 className="text-3xl font-bold text-center pb-4">Glad to have you!</h1>
                <input
                    className="p-2 border rounded-md w-full focus:outline-none focus:border-secondary-button-hover"
                    type="text"
                    placeholder="Username"
                />
                <ConfirmPasswordField />
                <Button className="w-full p-2 rounded-md bg-secondary-button hover:bg-secondary-button-hover transition mx-auto">
                    Start Betting
                </Button>
                <div className="flex flex-row gap-2 *:my-auto">
                    <hr className="w-full opacity-15"></hr>
                    <p className="w-fit text-sm mx-auto opacity-75">or</p>
                    <hr className="w-full opacity-15"></hr>
                </div>
                <div className="flex gap-4 text-sm w-fit mx-auto">
                    <label>Already have an account?</label>
                    <Link href="/login" className="text-link hover:underline">
                        Log in
                    </Link>
                </div>
            </form>
        </div>
    );
}