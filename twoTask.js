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
  priceReduction: 1000, // 2*3000-5000
  taxPercent: 5
}

const firstRate = PIJAR_DATA.firstRate
const extraFirstPrice = PIJAR_DATA.extraFirstPrice
const priceReduction = PIJAR_DATA.priceReduction

const taxPercent = PIJAR_DATA.taxPercent

// Menghitung jumlah discount
const getDiscount = (totalPrice, kodePromo) => {
const dataPromo = PIJAR_DATA[kodePromo] || {}
  if (totalPrice >= dataPromo.minTotalPrice) {
    const subTotal = totalPrice / 100 * dataPromo.discPercentage;
    return subTotal < dataPromo.maxDiscountPrice ? subTotal : dataPromo.maxDiscountPrice;
  } else {
    return 0
  }
}

// Menghitung jumlah jarak
const getDistance = (distance) => {
  if (distance > 2) {
    return distance * extraFirstPrice - priceReduction
  } else {
    return firstRate
  }
}

// Menghitung jumlah pajak
const getTax = (totalPrice, tax) => {
  if (tax) {
    return totalPrice / 100 * taxPercent
  } else {
    return 0
  }
}

const pijarFood = async (totalPrice, kodePromo, distence, tax) => {
  try {
    if (
      typeof totalPrice !== "number" ||
      typeof distence !== 'number' ||
      typeof tax !== 'boolean'
    ) {
      throw new Error ('Input salah')
    } else {
      const totalDiscount = await getDiscount(totalPrice, kodePromo);
      const totalDistance = await getDistance(distence);
      const totalTax = await getTax(totalPrice, tax);

      console.log(`Harga		: ${totalPrice}`)
      console.log(`Potongan	: ${totalDiscount}`)
      console.log(`Biaya Antar	: ${totalDistance}`)
      console.log(`Pajak		: ${totalTax}`)
      console.log(`SubTotal	: ${totalPrice - totalDiscount + totalDistance + totalTax}`)
    }
  } catch (err) {
    console.log(err)
  }
}

pijarFood(75000, 'PIJARFOOD5', 4, true)