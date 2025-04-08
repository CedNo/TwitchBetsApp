'use client'

import { useState } from "react";
import PasswordField from "@/app/components/password-field";

export default function ConfirmPasswordField() {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    let conflict = false;

    if(password === confirmPassword || password === "" || confirmPassword === "") {
        conflict = false;
    } else {
        conflict = true;
    }

    return(
        <div className="flex flex-col gap-4">
            <PasswordField
                className={conflict ? "border-red-500 focus:!border-red-400" : ""}
                value={password}
                onChange={
                    (e) => setPassword(e)
                }/>
            <PasswordField
                className={conflict ? "border-red-500 focus:!border-red-400" : ""}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={
                    (e) => setConfirmPassword(e)
                }/>
        </div>
    );
}