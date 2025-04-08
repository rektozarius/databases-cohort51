const accountData = [
  {
    account_number: "101",
    balance: 5000.00,
    account_changes: [
      {
        change_number: 1,
        amount: 1000.00,
        changed_date: new Date("2023-01-15"),
        remark: "Initial deposit"
      },
      {
        change_number: 2,
        amount: -200.00,
        changed_date: new Date("2023-01-20"),
        remark: "ATM withdrawal"
      },
      {
        change_number: 3,
        amount: 1500.00,
        changed_date: new Date("2023-02-05"),
        remark: "Salary deposit"
      }
    ]
  },
  {
    account_number: "102",
    balance: 12000.50,
    account_changes: [
      {
        change_number: 1,
        amount: 5000.00,
        changed_date: new Date("2023-01-10"),
        remark: "Account opening"
      },
      {
        change_number: 2,
        amount: 7000.50,
        changed_date: new Date("2023-01-25"),
        remark: "Transfer from savings"
      },
      {
        change_number: 3,
        amount: -300.00,
        changed_date: new Date("2023-02-10"),
        remark: "Utility bill payment"
      },
      {
        change_number: 4,
        amount: 1000.00,
        changed_date: new Date("2023-02-15"),
        remark: "Interest credited"
      }
    ]
  },
  {
    account_number: "103",
    balance: 750.25,
    account_changes: [
      {
        change_number: 1,
        amount: 1000.00,
        changed_date: new Date("2023-02-01"),
        remark: "Initial deposit"
      },
      {
        change_number: 2,
        amount: -249.75,
        changed_date: new Date("2023-02-05"),
        remark: "Grocery purchase"
      }
    ]
  }
];



const setupAccounts = async (collection) => {
    await collection.deleteMany();
		await collection.insertMany(accountData);
    console.log("Collection successfully created and populated")
};

module.exports = setupAccounts;