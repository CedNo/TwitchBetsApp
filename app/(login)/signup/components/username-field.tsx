export default function UsernameField({username, setUsername}: {username: string, setUsername: (username: string) => void}) {

    return (
        <div className="flex flex-col gap-1">
                    <input
                        value={username}
                        className={
                            `${(username.length > 20 || !username.match(/^[a-zA-Z0-9]+$/)) && username !== '' ?
                                'border-red-500 focus:!border-red-400' :
                                ''
                            } p-2 border rounded-md w-full focus:outline-none focus:border-secondary-button-hover`
                        }
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {(username.length > 20) &&
                        <p className="text-red-500 text-sm">
                            Username must be at most 20 characters long.
                        </p>
                    }
                    {(!username.match(/^[a-zA-Z0-9]+$/) && username !== '') &&
                        <p className="text-red-500 text-sm">
                            Username must be alphanumeric.
                        </p>
                    }
                    {((username.length > 20) || (!username.match(/^[a-zA-Z0-9]+$/) && username !== '')) ?
                        '' :
                        <p className="text-sm invisible">|</p>
                    }
                </div>
    )
};