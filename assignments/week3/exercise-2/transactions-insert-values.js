export const insertAccount = `
INSERT INTO account (account_number, balance)
VALUES
    (101, 100000),
    (102, 200000),
    (103, 300000),
    (104, 400000);
`

export const insertAccountChanges = `
INSERT INTO account_changes (account_number, amount, remark)
VALUES
    (101, 100000, "initial deposit"),
    (102, 200000, "initial deposit"),
    (103, 300000, "initial deposit"),
    (104, 400000, "initial deposit");
`