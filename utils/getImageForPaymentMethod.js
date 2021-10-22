const images={
  visa: require('../assets/visa.png'),
  unionPay: require('../assets/unionPay.png'),
  masterCard: require('../assets/masterCard.png')
};

export default paymentMethod =>images[paymentMethod];
