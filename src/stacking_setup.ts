import {TransactionEvent} from "forta-agent"
import {LogDescription} from "ethers/src.ts/utils"

const abi = 'event Withdraw(address indexed user, uint256 indexed pid, uint256 amount)'

const contract = '0x73feaa1ee314f8c655e354234017be2193c9e24e'

export default function getLeaveStackingLogs(tx:TransactionEvent):LogDescription[]{
    return tx.filterLog(abi, contract)
}