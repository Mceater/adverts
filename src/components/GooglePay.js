import GooglePayButton from '@google-pay/button-react';
import React from 'react';

function GooglePay (){
    return(
        <div>
            <GooglePayButton
                    environment="TEST"
                    paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                        type: 'CARD',
                        parameters: {
                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                        },
                        tokenizationSpecification: {
                            type: 'PAYMENT_GATEWAY',
                            parameters: {
                            gateway: 'example',
                            gatewayMerchantId: 'exampleGatewayMerchantId',
                            },
                        },
                        },
                    ],
                    merchantInfo: {
                        merchantId: '12345678901234567890',
                        merchantName: 'Demo Merchant',
                    },
                    transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: '1',
                        currencyCode: 'USD',
                        countryCode: 'US',
                    },
                    shippingAddressRequired: true,
                    callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
                    }}
                    existingPaymentMethodRequired='false'
                    buttonColor='black'
                    buttonType='Buy'
            />
        </div>
    )
}

export default GooglePay