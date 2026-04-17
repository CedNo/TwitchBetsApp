import InputField from "@/app/components/input-field";
import { useEffect } from "react";

export default function UsernameField(
    {username, setUsername, setHasError}:
    {username: string, setUsername: (username: string) => void, setHasError: (hasError: boolean) => void}
) {

    useEffect(() => {
        const hasError = usernameHasError(username);
        setHasError(hasError);
    }, [username, setHasError]);

    return (
        <div className="flex flex-col gap-1">
                    <InputField
                        value={username}
                        className={
                            `${usernameHasError(username) ?
                                'border-red-500 focus:!border-red-400' :
                                ''
                            } p-2 border rounded-md w-full focus:outline-none focus:border-secondary-button-hover`
                        }
                        type="text"
                        placeholder="Username"
                        onChange={setUsername}
                        name="username"
                        autoComplete="username"
                    />
                    {username.length > 20 &&
                        <p className="text-red-500 text-sm">
                            Username must be at most 20 characters long.
                        </p>
                    }
                    {username === '' &&
                        <p className="text-red-500 text-sm">
                            Username is required.
                        </p>
                    }
                    {!username.match(/^[a-zA-Z0-9]+$/) && username !== '' && 
                        <p className="text-red-500 text-sm">
                            Username must be alphanumeric.
                        </p>
                    }
                </div>
    );
}

function usernameHasError(username: string) {
    return username.length > 20 || !username.match(/^[a-zA-Z0-9]+$/) || username === '';
}