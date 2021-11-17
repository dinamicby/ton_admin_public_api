let status = {
    electionId: 0,
    tpsAvg: [],
    totalValidators: 0,
    onlineValidators: 0,
    shardsNumber: 0,
    validatorStatus: {
      isWorking: true,
      unixtime: 0,
      masterchainblocktime: 0,
      stateserializermasterchainseqno: 0,
      shardclientmasterchainseqno: 0,
      masterchainblock: 0,
      gcmasterchainblock: 0,
      keymasterchainblock: 0,
      rotatemasterchainblock: 0,
      transNum: -1,
      blocksNum: -1,
      masterBlocksNum: -1,
      outOfSync: 4
    },
    complaintsNumber: { },
    validatorIndex: -1,
    validatorEfficiency: null,
    adnlAddr: '',
    validatorWalletAddr: '',
    validatorWalletBalance: 0,
    loadavg: [ ],
    netLoadAvg: [  ],
    mytoncoreStatus: true,
    dbSize: 0,
    fullConfigAddr: '',
    fullElectorAddr: '',
    validatorsElectedFor: 0,
    electionsStartBefore: 0,
    electionsEndBefore: 0,
    stakeHeldFor: 0,
    minStake: 0,
    maxStake: 0,
    startValidation: 0,
    endValidation: 0,
    startElection: 0,
    endElection: 0,
    startNextElection: 0
}

module.exports = {status}