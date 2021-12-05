import { 
  TransactionEvent, 
  Finding, 
  HandleTransaction, 
  FindingSeverity, 
  FindingType,
  createTransactionEvent,
  getJsonRpcUrl,
  
  

} from 'forta-agent'

import getLogs from "./stacking_setup" 

const handleTransaction: HandleTransaction = async (txEvent: TransactionEvent) => {
  const findings: Finding[] = [];
   
  const logs = getLogs(txEvent)

  for (const log of logs){
    findings.push(
      Finding.fromObject({
        name: "LEAVE_STAKING",
        description: `Someone leaving staking`,
        alertId: "PANCAKE_STAKING-1",
        severity: FindingSeverity.Info,
        type: FindingType.Info,
        metadata:{
          txHash:txEvent.hash,
          block:txEvent.blockHash,
          user:txEvent.from
        }
      })
    )
  }
          
      
    
    

  return findings;
}

export default {
  handleTransaction
}