'use client'

import { useEffect, useState } from "react";
import PasswordField from "@/app/components/password-field";

export default function ConfirmPasswordField(
        {password, setPassword, confirmPassword, setConfirmPassword, setHasError}:
        {
            password: string, setPassword: (password: string) => void,
            confirmPassword: string, setConfirmPassword: (confirmPassword: string) => void,
            setHasError: (hasError: boolean) => void
        }
    ) {

    const [isValidMatch, setIsValidMatch] = useState(true);
    
    useEffect(() => {
        const hasError = passwordsHaveError(password, confirmPassword, isValidMatch);
        setHasError(hasError);
    }, [password, confirmPassword, isValidMatch, setHasError]);

    return(
        <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <PasswordField
                        className={passwordHasError(password, isValidMatch) ? "border-red-500 focus:!border-red-400" : ""}
                        value={password}
                        onChange={
                            (e) => {
                                setPassword(e);
                                setIsValidMatch(passwordsMatch(e, confirmPassword));
                            }
                        }
                    />
                    {password === "" &&
                        <p className="text-red-500 text-sm">
                            Password is required.
                        </p>
                    }
                </div>
                <div className="flex flex-col gap-1">
                    <PasswordField
                        className={!isValidMatch || confirmPassword === "" ? "border-red-500 focus:!border-red-400" : ""}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={
                            (e) => {
                                setConfirmPassword(e);
                                setIsValidMatch(passwordsMatch(password, e));
                            }
                        }
                    />
                    {confirmPassword === "" &&
                        <p className="text-red-500 text-sm">
                            Password must be confirmed.
                        </p>
                    }
                </div>
            </div>
            {!isPasswordLengthValid(password) && password !== "" &&
                <p className="text-red-500 text-sm">
                    Password must be between 8 and 64 characters.
                </p>
            }
            {!isValidMatch &&
                <p className="text-red-500 text-sm">
                    Passwords do not match.
                </p>
            }
            {!isPasswordLengthValid(password) || !isValidMatch ?
                '' :
                <p className="text-sm invisible">|</p>
            }
        </div>
    );
}

function passwordHasError(password: string, isValidMatch: boolean) {
    return !isPasswordLengthValid(password) || !isValidMatch
}

function passwordsHaveError(password: string, confirmPassword: string, isValidMatch: boolean) {
    return passwordHasError(password, isValidMatch) || confirmPassword === '';
}

function isPasswordLengthValid(password: string) {
    return password.length >= 8 && password.length <= 64;
}

function passwordsMatch(password: string, confirmPassword: string) {
    return password === confirmPassword;
}