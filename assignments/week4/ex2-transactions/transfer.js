const transferAmount = async (client, collection, fromAccountNumber, toAccountNumber, amount) => {
  // Start session
  const session = client.startSession();

  // Start transaction
  await session.withTransaction(async () => {
    // Fetch fromAccount
    const fromAccount = await collection.findOne(
      { account_number: fromAccountNumber },
      { session }
    );

    // Fetch toAccount
    const toAccount = await collection.findOne(
      { account_number: toAccountNumber },
      { session }
    );

    // Validations
    if (!fromAccount) {
      throw new Error(`Account ${fromAccountNumber} not found`);
    };

    if (!toAccount) {
      throw new Error(`Account ${toAccountNumber} not found`);
    };

    if (fromAccount.balance < amount) {
      throw new Error(`Account ${fromAccountNumber} does not have enough funds`);
    }

    // Update fromAccount
    await collection.updateOne(
      { account_number: fromAccountNumber },
      {
        $inc: { balance: -amount },
        $push: {
          account_changes: {
            change_number: fromAccount.account_changes.length + 1,
            amount: -amount,
            changed_date: new Date(),
            remark: `Transferred ${amount} units to ${toAccountNumber}`
          }
        }
      },
      { session }
    );

    // Update toAccount
    await collection.updateOne(
      { account_number: toAccountNumber },
      {
        $inc: { balance: amount },
        $push: {
          account_changes: {
            change_number: toAccount.account_changes.length + 1,
            amount: amount,
            changed_date: new Date(),
            remark: `Transferred ${amount} units from ${fromAccountNumber}`
          }
        }
      },
      { session }
    );
  });

  // End session
  await session.endSession();
  console.log(`${amount} units successfully transferred from account ${fromAccountNumber} to account ${toAccountNumber}`);
};

module.exports = transferAmount;