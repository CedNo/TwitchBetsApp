'use client'

import Button from "@/app/components/button";
import InputField from "@/app/components/input-field";
import { redirect } from "next/navigation";
import { useState } from "react";
import { createBetQuestion } from "@/app/api/services/bet_service";

import { MdRemove } from "react-icons/md";

export default function NewBetQuestionPage() {

    const [question, setQuestion] = useState("");
    const [optionInputs, setOptionInputs] = useState([{ value: "" }, { value: "" }]);
    const [endDateTime, setEndDateTime] = useState("");

    function addInput() {
        setOptionInputs([...optionInputs, { value: "" }]);
    }

    function removeInput(index: number) {
        const newInputs = [...optionInputs];
        newInputs.splice(index, 1);
        setOptionInputs(newInputs);
    }

    function handleInputChange(index: number, value: string) {
        const newInputs = [...optionInputs];
        newInputs[index].value = value;
        setOptionInputs(newInputs);
    }

    async function handleSubmit() {
        const options = optionInputs.map(input => input.value).filter(value => value.trim() !== "");

        if (question.trim() === "" || options.length < 2 || endDateTime.trim() === "") {
            alert("Please fill in the question, at least 2 options, and the end date and time.");
            return;
        }

        const questionId = await createBetQuestion(question, options, endDateTime)
            .then((id) => {
                alert("Bet question created successfully!");
                return id;
            })
            .catch((error) => {
                console.error("Error creating bet question:", error);
                alert("There was an error creating the bet question. Please try again.");
            });

            redirect(`/bet/question/${questionId}`);
        
    }

    function getOptionsInputs() {
        return optionInputs.map((input, index) => (
            <div key={index} className="flex gap-2 items-center">
                <InputField value={input.value} onChange={(value) => handleInputChange(index, value)} />
                {index >= 2 &&
                <Button 
                    className="rounded-full bg-secondary-button-remove hover:bg-secondary-button-remove-hover transition"
                    onClick={() => removeInput(index)}
                >
                    <MdRemove size={32} />
                </Button>
                }
            </div>
        ));
    }

    return (
        <div className="w-full md:w-1/2 lg:w-5/16 flex flex-col gap-4 my-10 mx-auto bg-secondary-bg rounded-xl p-10 shadow-xl">
            <h1 className="text-3xl font-bold">Create a new bet question</h1>
            <div className="flex flex-col gap-4 font-bold">
                <h2>Question</h2>
                <InputField value={question} onChange={setQuestion} />
                <h2>Options</h2>
                {getOptionsInputs()}
                <Button className="p-2 rounded-md bg-secondary-button hover:bg-secondary-button-hover transition mx-auto" onClick={addInput}>
                    + Add new option
                </Button>
                <h2>End date and time</h2>
                <InputField value={endDateTime} onChange={setEndDateTime} />
                <Button className="w-full p-2 rounded-md bg-secondary-button hover:bg-secondary-button-hover transition mx-auto" onClick={handleSubmit}>
                    Create bet question
                </Button>
            </div>
        </div>
    );
}