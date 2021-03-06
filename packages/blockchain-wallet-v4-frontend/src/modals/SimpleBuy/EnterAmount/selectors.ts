import { lift } from 'ramda'

import { ExtractSuccess, FiatType } from '@core/types'
import { selectors } from 'data'
import { RootState } from 'data/rootReducer'

const getData = (state: RootState) => {
  const walletCurrencyR = selectors.core.settings.getCurrency(state)
  const defaultMethodR = selectors.components.simpleBuy.getDefaultPaymentMethod(state)
  const eligibilityR = selectors.components.simpleBuy.getSBFiatEligible(state)
  const pairsR = selectors.components.simpleBuy.getSBPairs(state)
  const paymentMethodsR = selectors.components.simpleBuy.getSBPaymentMethods(state)
  const swapAccount = selectors.components.simpleBuy.getSwapAccount(state)

  return lift(
    (
      defaultMethod: ExtractSuccess<typeof defaultMethodR>,
      eligibility: ExtractSuccess<typeof eligibilityR>,
      pairs: ExtractSuccess<typeof pairsR>,
      paymentMethods: ExtractSuccess<typeof paymentMethodsR>,
      walletCurrency: FiatType
    ) => ({
      defaultMethod,
      eligibility,
      pairs,
      paymentMethods,
      swapAccount,
      walletCurrency
    })
  )(defaultMethodR, eligibilityR, pairsR, paymentMethodsR, walletCurrencyR)
}

export default getData
