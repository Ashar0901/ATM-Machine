#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 12000;
let userpin = 12345;
let answer = await inquirer.prompt([
    { message: "Please Enter your Pin code", type: "number", name: "pin" },
]);
if (answer.pin === userpin) {
    console.log("Your Pin code is Correct");
    let account = await inquirer.prompt([
        {
            message: "Please select your account",
            type: "list",
            choices: ["Current Account", "Saving Account"],
            name: "account",
        },
    ]);
    let paymentmode = await inquirer.prompt([
        {
            message: "Please select transaction type",
            type: "list",
            choices: ["Fastcash", "Cashwithdrawal", "BalanceInquiry"],
            name: "transactiontype",
        },
    ]);
    if (paymentmode.transactiontype === "Fastcash") {
        let amountfastcash = await inquirer.prompt([
            {
                message: "Please Select your amount",
                type: "list",
                choices: ["1000", "3000", "5000", "10000", "15000"],
                name: "fastcashamount",
            },
        ]);
        let cashfast = amountfastcash.fastcashamount;
        if (cashfast >= mybalance) {
            console.log("You Have insufficient Balance in your account");
        }
        else if (mybalance -= cashfast) {
            console.log(`"your remaining balance is ${mybalance}"`);
        }
    }
    else if (paymentmode.transactiontype === "Cashwithdrawal") {
        let amountcashwithdrawal = await inquirer.prompt([
            {
                message: "Please enter withdrawal amount",
                type: "number",
                name: "cashwithdrawalamount",
            },
        ]);
        let withdraw = amountcashwithdrawal.cashwithdrawalamount;
        if (withdraw >= mybalance) {
            console.log(`"You Have insufficient balance in your account"`);
        }
        else if (mybalance -= withdraw) {
            console.log(`"Your remaining balance is ${mybalance}"`);
        }
    }
    else if (paymentmode.transactiontype === "BalanceInquiry") {
        console.log(`"Your Current balance is ${mybalance}`);
    }
}
else {
    console.log("Your pin code is incorrect !!!!!");
}
