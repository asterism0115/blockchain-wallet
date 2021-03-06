import { FundRecoveryActionType } from './fundRecovery/types'
import { IdentityVerificationActionTypes } from './identityVerification/types'
import { RecoveryPhraseActionTypes } from './recoveryPhrase/types'
import { RequestActionTypes } from './request/types'

// All relative ActionTypes should go here
// export type ComponentsActionTypes = IdentityVerificationActionTypes | ActivityListActionTypes | BchTransactionsActionTypes
export type ComponentsActionTypes =
  | FundRecoveryActionType
  | IdentityVerificationActionTypes
  | RecoveryPhraseActionTypes
  | RequestActionTypes

export * from './brokerage/types'
export * from './fundRecovery/types'
export * from './identityVerification/types'
export * from './interest/types'
export * from './interestUploadDocument/types'
export * from './recoveryPhrase/types'
export * from './recurringBuy/types'
export * from './request/types'
export * from './sendBch/types'
export * from './sendBtc/types'
export * from './settings/types'
export * from './simpleBuy/types'
export * from './swap/types'
export * from './withdraw/types'
