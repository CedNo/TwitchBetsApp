export type Wager = {
    username: string;
    amount : number;
    createdAt : Date;
    betQuestionId : string;
    betQuestion : string;
    betOptionId : string;
    betOption : string;
    betWin : number;
};