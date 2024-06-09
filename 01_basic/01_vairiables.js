const accountId = 12345;
let accountEmail = "dharmik_patel@test.com";
var accountPassWord = "12353";
accountCity = "Gandhinagar";
let accountState;


accountEmail = "test@test.com";
accountPassWord = "2230834";
accountCity = "Ahemdabad";

console.table([accountEmail,accountPassWord,accountCity,accountState]);
console.log("accountId=",accountId);

// accountId =  123  is not allowed it's const value.
//  never use var because of scope issue in var use let insted.
// initial value of decalare variable is undefine in js