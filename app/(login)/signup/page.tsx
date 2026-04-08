'use client'

import Link from "next/link";
import Button from "@/app/components/button";
import ConfirmPasswordField from "./components/confirm-password";
import UsernameField from "./components/username-field";
import { createUser } from "@/app/api/services/user_service";
import { useState } from "react";
import LoadingState from "./components/loading-state";
import ErrorState from "./components/error-state";
import SuccessfulState from "./components/sucessful-state";

export default function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);

    async function handleSubmit() {
        setHasSubmitted(true);
        setIsLoading(true);

        //TODO: REMOVE DELAY
        await new Promise(res => setTimeout(res, 3000));

        const success = await createUser({username, password, confirmPassword});
        
        setIsLoading(false);
        setIsSuccessful(success);
    }

    return (
        <div className='w-full md:w-1/2 lg:w-5/16 flex flex-col gap-4 my-10 mx-auto bg-secondary-bg rounded-xl p-10 shadow-xl'>
            {hasSubmitted ?
                (isLoading ? 
                    <LoadingState  /> :
                    (
                        isSuccessful ?
                            <SuccessfulState /> :
                            <ErrorState setHasSubmitted={setHasSubmitted} />
                    )
                ) :
                <form onSubmit={(e) => e.preventDefault()}>
                    <h1 className="text-3xl font-bold text-center pb-12">Glad to have you!</h1>
                    <UsernameField username={username} setUsername={setUsername} />
                    <ConfirmPasswordField password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} />
                    <Button
                        className="w-full p-2 rounded-md bg-secondary-button hover:bg-secondary-button-hover transition mx-auto"
                        onClick={handleSubmit}
                    >
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
            }
        </div>
    );
}