'use client'

import { useState } from "react";
import PasswordField from "@/app/components/password-field";

export default function ConfirmPasswordField(
        {password, setPassword, confirmPassword, setConfirmPassword}:
        {password: string, setPassword: (password: string) => void, confirmPassword: string, setConfirmPassword: (confirmPassword: string) => void}
    ) {

    const [isValidMatch, setIsValidMatch] = useState(true);

    function passwordHasError() {
        return (!isPasswordLengthValid(password) && password !== "") || (!isValidMatch && confirmPassword !== "")
    }

    return(
        <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-4">
                <PasswordField
                    className={passwordHasError() ? "border-red-500 focus:!border-red-400" : ""}
                    value={password}
                    onChange={
                        (e) => {
                            setPassword(e);
                            setIsValidMatch(passwordsMatch(e, confirmPassword));
                        }
                    }
                />
                <PasswordField
                    className={!isValidMatch && confirmPassword !== "" ? "border-red-500 focus:!border-red-400" : ""}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={
                        (e) => {
                            setConfirmPassword(e);
                            setIsValidMatch(passwordsMatch(password, e));
                        }
                    }
                />
            </div>
            {(!isPasswordLengthValid(password) && password !== "") &&
                <p className="text-red-500 text-sm">
                    Password must be between 8 and 64 characters.
                </p>
            }
            {(!isValidMatch && confirmPassword !== "") &&
                <p className="text-red-500 text-sm">
                    Passwords do not match.
                </p>
            }
            {((!isPasswordLengthValid(password) && password !== "") || (!isValidMatch && confirmPassword !== "")) ?
                '' :
                <p className="text-sm invisible">|</p>
            }
        </div>
    );
}

function isPasswordLengthValid(password: string) {
    return password.length >= 8 && password.length <= 64;
}

function passwordsMatch(password: string, confirmPassword: string) {
    return password === confirmPassword;
}