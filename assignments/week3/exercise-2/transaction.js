export const singleTransaction = `
START TRANSACTION;

-- Withdraw 1000 from account_number 101
UPDATE account 
SET balance = balance - 1000
WHERE account_number = 101;

-- Deposit 1000 to account_number 102
UPDATE account 
SET balance = balance + 1000
WHERE account_number = 102;

-- Log changes
INSERT INTO account_changes (account_number, amount, remark)
VALUES
    (1011, 1000, "withdrawn 1000 units"),
    (102, 1000, "deposited 1000 units");

-- Commit
COMMIT;
`