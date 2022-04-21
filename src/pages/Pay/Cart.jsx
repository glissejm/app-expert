import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import { changePay } from '../../store/actions/pay.action';
import Payment from './Payment';
import logoPago from '../../assets/mercadopago.png';

function Cart() {
  const dispatch = useDispatch()
  let navigate = useNavigate();

  const plan = useSelector((state) => state.pay.planSelected);
  const pay_type = useSelector((state) => state.pay.pay_type);

  const handleChangePlan = (item, e) => {
    e.preventDefault();
    dispatch(changePay({ planSelected: item }));
    navigate("/plan");
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen flex-row">
        <div className="p-12 max-w-sm rounded-lg border shadow-md sm:p-12 bg-third m-12">
          <h5 className="text-secondary mb-4 text-xl font-medium">{plan.title}</h5>
          <div className="flex items-baseline text-white">
            <span className="text-3xl font-semibold">S/.</span>
            <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
            <span className="ml-1 text-xl font-normal">/{plan.period}</span>
          </div>
          <ul className="my-7 space-y-5">
            {plan.description.map((item, index) => (
              <li key={index} className="flex space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-white">{item}</span>
              </li>
            ))}
          </ul>
          <button type="submit" className="bg-secondary text-third h-fit hover:border-white hover:bg-white border-secondary font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" onClick={(e) => handleChangePlan(plan, e)}>Cambiar plan</button>
        </div>
        <div className="p-4 max-w rounded-lg border shadow-md sm:p-8 m-4">
          {(!pay_type) &&
            <>
              <div className="form-group">
                <label className="font-semibold">Pago por tarjeta</label>
              </div>

              <div className="flex pointer-events-auto" onClick={() => dispatch(changePay({ pay_type: 'card' }))}>
                <div className="flex flex-col m-8 max-w-md">
                  <h2 className="mb-6 text-2xl font-bold">Confirm and pay</h2>
                  Paga con {' '}
                    <span className="ml-1">
                       <img height={40}
                        width={98}
                        src={logoPago}
                        alt="Mercado Pago" />
                    </span>
                </div>
              </div>
            </>
          }

          {(pay_type) && <Payment />}
        </div>
      </div>
    </>

  );
}

export default Cart;