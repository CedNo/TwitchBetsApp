export default function UsernameField(
    {username, setUsername, setHasError}:
    {username: string, setUsername: (username: string) => void, setHasError: (hasError: boolean) => void}
) {

    function usernameHasError() {
        return username.length > 20 || !username.match(/^[a-zA-Z0-9]+$/) || username === '';
    }

    setHasError(usernameHasError());

    return (
        <div className="flex flex-col gap-1">
                    <input
                        value={username}
                        className={
                            `${usernameHasError() ?
                                'border-red-500 focus:!border-red-400' :
                                ''
                            } p-2 border rounded-md w-full focus:outline-none focus:border-secondary-button-hover`
                        }
                        type="text"
                        placeholder="Username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
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
    )
};