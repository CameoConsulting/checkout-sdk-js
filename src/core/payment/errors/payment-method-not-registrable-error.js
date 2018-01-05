import { StandardError } from '../../common/error/errors';

export default class PaymentMethodNotRegistrableError extends StandardError {
    /**
     * @constructor
     * @param {string} name
     */
    constructor(name) {
        super(`Failed to register "${name}" as a payment strategy.`);

        this.type = 'payment_method_not_registrable';
    }
}
