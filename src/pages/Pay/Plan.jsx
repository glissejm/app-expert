import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from "../../components/Navbar";
import { changePay } from '../../store/actions/pay.action';
import { apiClient } from '../../store/axiosApi';
import mercadopago from 'mercadopago';

export default function Plan() {
    let navigate = useNavigate();

    const [listPlan, setListPlan] = useState([]);
    const dispatch = useDispatch();

    const handlePlan = (item, e) => {
        e.preventDefault();
        dispatch(changePay({ planSelected: item }));
        navigate("/cart");
    }

    const getPlans = async () => {
        try {
            const response = await apiClient("/pay/plans", "GET");
            const data = response.data;
            setListPlan(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getPlans();
    }, []);

    return (
        <>
            <Navbar />
            <div className='flex items-center justify-center h-screen'>
                {listPlan.map((item, index) => (
                    <div key={index} className="p-4 max-w-sm rounded-lg border shadow-md sm:p-8 bg-third m-4">
                        <h5 className="text-secondary mb-4 text-xl font-medium">{item.title}</h5>
                        <div className="flex items-baseline text-white">
                            <span className="text-3xl font-semibold">S/.</span>
                            <span className="text-5xl font-extrabold tracking-tight">{item.price}</span>
                            <span className="ml-1 text-xl font-normal">/{item.period}</span>
                        </div>
                        <ul className="my-7 space-y-5">
                            {item.description.map((item, index) => (
                                <li key={index} className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span className="text-base font-normal leading-tight text-white">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button type="submit" className="bg-secondary text-third h-fit hover:border-white hover:bg-white border-secondary font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" onClick={(e) => handlePlan(item, e)}>Elegir plan</button>
                    </div>
                ))}
            </div>
        </>

    );
}