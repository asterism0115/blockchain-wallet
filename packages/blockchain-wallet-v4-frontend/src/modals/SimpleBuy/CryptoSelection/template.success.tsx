import { Props as OwnProps, SuccessStateType } from '.'
import CryptoSelector from './CryptoSelector'
import React, { useEffect } from 'react'
import Unsupported from './template.unsupported'

const Success: React.FC<Props> = props => {
  const isUserEligible =
    props.pairs.length && props.eligibility.eligible && props.fiatCurrency
  const isUserSddEligible = props.sddEligible && !props.sddEligible.eligible

  useEffect(() => {
    props.analyticsActions.logEvent([
      'IS_USER_SB_ELIGIBLE',
      JSON.stringify({
        pairs: props.pairs,
        eligibility: props.eligibility,
        doesWalletConsiderUserEligible: !!isUserEligible
      })
    ])
    if (isUserSddEligible) {
      props.analyticsActions.logEvent([
        'IS_USER_SDD_ELIGIBLE',
        JSON.stringify({
          pairs: props.pairs
        })
      ])
    }
  }, [])

  return isUserEligible || isUserSddEligible ? (
    <CryptoSelector {...props} />
  ) : (
    <Unsupported {...props} />
  )
}

export type Props = OwnProps & SuccessStateType

export default Success
