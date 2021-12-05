"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var abi = 'event Withdraw(address indexed user, uint256 indexed pid, uint256 amount)';
var contract = '0x73feaa1ee314f8c655e354234017be2193c9e24e';
function getLeaveStackingLogs(tx) {
    return tx.filterLog(abi, contract);
}
exports.default = getLeaveStackingLogs;
