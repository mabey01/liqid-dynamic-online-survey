import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ProvideValueState from './provide-value-state.jsx';

describe('a ProvideValueState component', () => {
    it('should be initialised without defaultValue', () => {
        const componentFn = sinon.fake();

        const componet = shallow(
            <ProvideValueState>{componentFn}</ProvideValueState>
        );

        expect(componentFn.lastArg).to.include({ value: null });
    });

    it('should keep defaultValue in state after construction', () => {
        const initValue = 'foo';
        const componentFn = sinon.fake();

        const componet = shallow(
            <ProvideValueState defaultValue={initValue}>
                {componentFn}
            </ProvideValueState>
        );

        expect(componentFn.calledOnce).to.be.true;
        expect(componentFn.lastArg).to.include({ value: initValue });
    });

    it('should update value after calling changeValue with different value', () => {
        const initValue = 'foo';
        const componentFn = sinon.fake();

        const componet = shallow(
            <ProvideValueState defaultValue={initValue}>
                {componentFn}
            </ProvideValueState>
        );

        const differentValue = 'bar';
        componentFn.lastArg.changeValue(differentValue);
        expect(componentFn.lastArg).to.include({ value: differentValue });

        const differentValueAgain = 'foobar';
        componentFn.lastArg.changeValue(differentValueAgain);
        expect(componentFn.lastArg).to.include({ value: differentValueAgain });
    });
});
