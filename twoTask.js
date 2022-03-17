const PIJAR_DATA = {
  PIJARFOOD5: {
    minTotalPrice: 50000,
    discPercentage: 50,
    maxDiscountPrice: 50000
  },
  DITRAKTIRPIJAR: {
    minTotalPrice: 25000,
    discPercentage: 60,
    maxDiscountPrice: 30000
  },
  firstRate: 5000,
  extraFirstPrice: 3000,
  priceReduction: 1000,
  taxDiscount: 5
}

const discont = ({kodePromo, totalPrice, distance, tax}) => {
  const dataPromo = PIJAR_DATA[kodePromo] || {}

  const firstRate = PIJAR_DATA.firstRate
  const extraFirstPrice = PIJAR_DATA.extraFirstPrice
  const priceReduction = PIJAR_DATA.priceReduction

  const taxDiscount = PIJAR_DATA.taxDiscount

  const getDiscount = () => {
    if (totalPrice >= dataPromo.minTotalPrice) {
      const subTotal = totalPrice / 100 * dataPromo.discPercentage;
      return subTotal < dataPromo.maxDiscountPrice ? subTotal : dataPromo.maxDiscountPrice;
    } else {
      return 0
    }
  }

  const discont = getDiscount()

  const getDistance = () => {
    if (distance > 2) {
      return distance * extraFirstPrice - priceReduction
    } else {
      return firstRate
    }
  }

  const totalDistancePrice = getDistance()

  const getTax = () => {
    if (tax) {
      return totalPrice / 100 * taxDiscount
    } else {
      return 0
    }
  }

  const totalTax = getTax()

  // return {
  //   Harga		: totalPrice,
  //   Potongan	: discont,
  //   BiayaAntar	: totalDistancePrice,
  //   Pajak		: totalTax,
  //   SubTotal	: totalPrice - discont + totalDistancePrice + totalTax
  // }

  return `
  Harga		: ${totalPrice}
  Potongan	: ${discont}
  Biaya Antar	: ${totalDistancePrice} 
  Pajak		: ${totalTax}
  SubTotal	: ${totalPrice - discont + totalDistancePrice + totalTax}
  `
}

console.log(discont({ totalPrice: 100000, kodePromo: 'PIJARFOOD5', distance: 5, tax: true }))
// console.log(discont({ totalPrice: 100000, kodePromo: 'PIJARFOOD5', distance: 5, tax: false }))
// console.log(discont({ totalPrice: 50000, kodePromo: 'PIJARFOOD5', distance: 3, tax: true }))

// console.log(discont({totalPrice: 100000, kodePromo: 'DITRAKTIRPIJAR', distance: 5, tax: true}))
// console.log(discont({totalPrice: 30000, kodePromo: 'DITRAKTIRPIJAR', distance: 5, tax: true}))