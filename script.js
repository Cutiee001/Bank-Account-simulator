class BankAccount {
    constructor(accountHolder, balance) {
      this.accountHolder = accountHolder;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  
    withdraw(amount) {
      if (amount > 0 && this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
      } else {
        console.log("Insufficient funds or invalid withdrawal amount.");
      }
    }
  
    displayBalance() {
      console.log(`Current balance: $${this.balance}`);
    }
  }
  
  let accounts = [];
  let currentAccountIndex = 0;
  
  function createAccount(accountHolder, balance) {
    const account = new BankAccount(accountHolder, balance);
    accounts.push(account);
    console.log(`Account created for ${accountHolder} with an initial balance of $${balance}.`);
  }
  
  function switchAccount(index) {
    if (index >= 0 && index < accounts.length) {
      currentAccountIndex = index;
      console.log(`Switched to account ${index + 1} of ${accounts.length}.`);
    } else {
      console.log("Invalid account index.");
    }
  }
  
  function deposit(amount) {
    if (accounts.length > 0) {
      accounts[currentAccountIndex].deposit(amount);
    } else {
      console.log("No accounts created.");
    }
  }
  
  function withdraw(amount) {
    if (accounts.length > 0) {
      accounts[currentAccountIndex].withdraw(amount);
    } else {
      console.log("No accounts created.");
    }
  }
  
  function displayBalance() {
    if (accounts.length > 0) {
      accounts[currentAccountIndex].displayBalance();
    } else {
      console.log("No accounts created.");
    }
  }
  
  // Example usage
createAccount("John Doe", 1000);
createAccount("Jane Doe", 500);

console.log("Initial balances:");
displayBalance();
switchAccount(1);
displayBalance();

deposit(200);
displayBalance();

switchAccount(0);
withdraw(300);
displayBalance();

