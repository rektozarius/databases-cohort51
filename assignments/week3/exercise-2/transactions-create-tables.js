export const createDb = `
DROP DATABASE IF EXISTS week3;
CREATE DATABASE week3;
USE week3;
`

export const createAccount = `
CREATE TABLE account (
    account_number BIGINT PRIMARY KEY,
    balance BIGINT NOT NULL
);
`

export const createAccountChanges = `
CREATE TABLE account_changes (
    change_number BIGINT AUTO_INCREMENT PRIMARY KEY,
    account_number BIGINT NOT NULL,
    amount INT NOT NULL,
    changed_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    remark VARCHAR(255),
    FOREIGN KEY (account_number) REFERENCES account(account_number)
)
`

