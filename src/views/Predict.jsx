import { useEffect, useState } from "react";
import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import Joi from "joi";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/navbar";
// import { Form, Button,Row,Col } from "react-bootstrap";
import { toast } from "react-toastify";

import PredictServices from "../services/PredictServices";

const Predict = () => {
    const initial = {
        account_length: '',
        intertiol_plan: 'No',
        voice_mail_plan: 'No',
        number_vm_messages: '',
        total_day_min: '',
        total_day_calls: '',
        total_day_charge: '',
        total_eve_min: '',
        total_eve_calls: '',
        total_eve_charge: '',
        total_night_minutes: '',
        total_night_calls: '',
        total_night_charge: '',
        total_intl_minutes: '',
        total_intl_calls: '',
        total_intl_charge: '',
        customer_service_calls: '',
        location_code: "445",
    }

    const [data, setData] = useState(initial);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('');

    const isValid = () => {
        const schema = Joi.object({
            account_length: Joi.number().integer().required(),
            intertiol_plan: Joi.string().required(),
            voice_mail_plan: Joi.string().required(),
            number_vm_messages: Joi.number().integer().required(),
            total_day_min: Joi.number().required(),
            total_day_calls: Joi.number().integer().required(),
            total_day_charge: Joi.number().required(),
            total_eve_min: Joi.number().required(),
            total_eve_calls: Joi.number().required(),
            total_eve_charge: Joi.number().required(),
            total_night_minutes: Joi.number().required(),
            total_night_calls: Joi.number().integer().required(),
            total_night_charge: Joi.number().required(),
            total_intl_minutes: Joi.number().required(),
            total_intl_calls: Joi.number().integer().required(),
            total_intl_charge: Joi.number().required(),
            customer_service_calls: Joi.number().integer().required(),
            location_code: Joi.string().valid("445", "452", "547").required(),
        });

        const { error } = schema.validate(data, { abortEarly: false });

        // console.log("error: ", err)
        // console.log("value: ", value)

        const errors = {};
        if (error) {
            error.details.map(e => {
                errors[e.path[0]] = e.message;
            })
        }
        setErrors(errors);
        console.log("errors: ", errors)
        return !error;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setLoading(true);

        console.log(data);
        if (!isValid()) return;
        // setLoading(false);

        try {
            const response = await PredictServices.predict(data);
            console.log(response?.data?.prediction);
            setResult(response.data.prediction);

            toast.success('🦄 Wow so easy!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (err) {
            console.log("error msg: ", err);

        }


    }


    const handleReset = (e) => {
        e.preventDefault();
        console.log("reset");
        setData(initial);
        setErrors({});
        setResult('');
    }

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    // console.log(data);
    if (loading) {
        return <Loader />;
    } else {
        return (
            <>
                <section className="hero predict">
                    <Navbar />
                    <div className="container hero-body overflow-hidden" style={{ paddingTop: '7rem' }}>
                        <p className='h1 w-75' style={{ fontSize: '4rem', fontWeight: 'bold', color: 'white' }}>Customer <span style={{ color: '#ECCA00' }}>Churn</span> Prediction</p>

                        <form className="text-white pt-5" >

                            <div className="row mb-3" style={{ color: '#ecca00' }}>
                                <div className="col-4">
                                    <label className="form-label">International Plan</label>
                                    <select className="m-2" value={data.intertiol_plan} onChange={(e) => setData({ ...data, intertiol_plan: e.target.value })}>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="col-4" >
                                    <label className="m-2">Voice Mail Plan</label>
                                    <select value={data.voice_mail_plan} onChange={(e) => setData({ ...data, voice_mail_plan: e.target.value })} >
                                        <option value="Yes" >Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="col-4" >
                                    <label className="m-2">Location code</label>
                                    <select value={data.location_code} onChange={(e) => setData({ ...data, location_code: e.target.value })}>
                                        <option value="445">445</option>
                                        <option value="452">452</option>
                                        <option value="547">547</option>
                                    </select>
                                </div>
                            </div>
                            <hr />


                            <div class="row mb-3" style={{ color: '#ecca00' }} >

                                <div className="col-4">
                                    <label for="acc_len" class="form-label">Account length</label>
                                    <input type="email" class="form-control" id="acc_len" value={data.account_length} onChange={(e) => setData({ ...data, account_length: e.target.value })} />
                                    {errors?.account_length && <span className="fs-6 font-monospace text-danger">{errors.account_length}</span>}
                                </div>
                                <div className="col-4">
                                    <label class="form-label">No of voice messages</label>
                                    <input class="form-control" type="text" value={data.number_vm_messages} onChange={(e) => setData({ ...data, number_vm_messages: e.target.value })} />
                                    {errors?.number_vm_messages && <span className="fs-6 font-monospace text-danger">{errors.number_vm_messages}</span>}
                                </div>
                                <div className="col-4">
                                    <label class="form-label">No of Service calls</label>
                                    <input class="form-control" type="text" value={data.customer_service_calls} onChange={(e) => setData({ ...data, customer_service_calls: e.target.value })} />
                                    {errors?.customer_service_calls && <span className="fs-6 font-monospace text-danger">{errors.customer_service_calls}</span>}
                                </div>
                            </div>

                            <hr />

                            <div className="row mb-3" style={{ color: '#ecca00' }}>
                                <div className="col-3">
                                    <label class="form-label">Total day calls</label>
                                    <input class="form-control" type="text" value={data.total_day_calls} onChange={(e) => setData({ ...data, total_day_calls: e.target.value })} />
                                    {errors?.total_day_calls && <span className="fs-6 font-monospace text-danger">{errors.total_day_calls}</span>}
                                </div>
                                <div className="col-3">
                                    <label class="form-label">Total night calls</label>
                                    <input class="form-control" type="text" value={data.total_night_calls} onChange={(e) => setData({ ...data, total_night_calls: e.target.value })} />
                                    {errors?.total_night_calls && <span className="fs-6 font-monospace text-danger">{errors.total_night_calls}</span>}
                                </div>
                                <div className="col-3">
                                    <label class="form-label">Total evening calls </label>
                                    <input class="form-control" type="text" value={data.total_eve_calls} onChange={(e) => setData({ ...data, total_eve_calls: e.target.value })} />
                                    {errors?.total_eve_calls && <span className="fs-6 font-monospace text-danger">{errors.total_eve_calls}</span>}
                                </div>
                                <div className="col-3">
                                    <label class="form-label">Total internationl calls</label>
                                    <input class="form-control" type="text" value={data.total_intl_calls} onChange={(e) => setData({ ...data, total_intl_calls: e.target.value })} />
                                    {errors?.total_intl_calls && <span className="fs-6 font-monospace text-danger">{errors.total_intl_calls}</span>}
                                </div>
                            </div>
                            <hr />
                            <div className="row mb-3" style={{ color: '#ecca00' }}>
                                <div className="col-3">
                                    <label class="form-label">Total day mins</label>
                                    <input class="form-control" type="text" value={data.total_day_min} onChange={(e) => setData({ ...data, total_day_min: e.target.value })} />
                                    {errors?.total_day_min && <span className="fs-6 font-monospace text-danger">{errors.total_day_min}</span>}
                                </div>
                                <div className="col-3">
                                    <label class="form-label">Total night mins</label>
                                    <input class="form-control" type="text" value={data.total_night_minutes} onChange={(e) => setData({ ...data, total_night_minutes: e.target.value })} />
                                    {errors?.total_night_minutes && <span className="fs-6 font-monospace text-danger">{errors.total_night_minutes}</span>}
                                </div>
                                <div className="col-3">
                                    <label class="form-label">Total evening mins </label>
                                    <input class="form-control" type="text" value={data.total_eve_min} onChange={(e) => setData({ ...data, total_eve_min: e.target.value })} />
                                    {errors?.total_eve_min && <span className="fs-6 font-monospace text-danger">{errors.total_eve_min}</span>}
                                </div>
                                <div className="col-3">
                                    <label class="form-label">Total internationl mins</label>
                                    <input class="form-control" type="text" value={data.total_intl_minutes} onChange={(e) => setData({ ...data, total_intl_minutes: e.target.value })} />
                                    {errors?.total_intl_minutes && <span className="fs-6 font-monospace text-danger">{errors.total_intl_minutes}</span>}
                                </div>
                            </div>
                            <hr />
                            <div className="row mb-3" style={{ color: '#ecca00' }}>
                                <div className="col-3">
                                    <label class="form-label">Total day charge</label>
                                    <input class="form-control" type="text" value={data.total_day_charge} onChange={(e) => setData({ ...data, total_day_charge: e.target.value })} />
                                    {errors?.total_day_charge && <span className="fs-6 font-monospace text-danger">{errors.total_day_charge}</span>}
                                </div>
                                <div className="col-3">
                                    <label class="form-label">Total night charge</label>
                                    <input class="form-control" type="text" value={data.total_night_charge} onChange={(e) => setData({ ...data, total_night_charge: e.target.value })} />
                                    {errors?.total_night_charge && <span className="fs-6 font-monospace text-danger">{errors.total_night_charge}</span>}
                                </div>
                                <div className="col-3">
                                    <label class="form-label">Total evening charge </label>
                                    <input class="form-control" type="text" value={data.total_eve_charge} onChange={(e) => setData({ ...data, total_eve_charge: e.target.value })} />
                                    {errors?.total_eve_charge && <span className="fs-6 font-monospace text-danger">{errors.total_eve_charge}</span>}
                                </div>
                                <div className="col-3">
                                    <label class="form-label">Total internationl charge</label>
                                    <input class="form-control" type="text" value={data.total_intl_charge} onChange={(e) => setData({ ...data, total_intl_charge: e.target.value })} />
                                    {errors?.total_intl_charge && <span className="fs-6 font-monospace text-danger">{errors.total_intl_charge}</span>}
                                </div>
                            </div>
                            <hr />
                            <div class="d-flex justify-content-around">
                                <button type="submit" class="btn btn-warning w-25" onClick={handleSubmit}>Submit</button>
                                <button type="submit" class="btn btn-danger w-25" onClick={handleReset}>Reset</button>
                            </div>

                            <div class="p-3"></div>
                            <div class="p-3"></div>
                        </form>
                        {console.log("prediction value :", result)}
                        {result && <div class="p-3">
                            <p className='h1 w-75' style={{ fontSize: '4rem', fontWeight: 'bold', color: 'white' }}>Predict Result</p>
                            {result === "0" && <div class="d-flex justify-content-around align-items-center" >
                                <img src='https://i.ibb.co/JtwhyG6/index353rter4.png' style={{ borderRadius: '200px', border: '5px solid' }} alt="" />
                                <p className='h1 w-75' style={{ fontSize: '4rem', fontWeight: 'bold', color: 'white' }}>Customer will <span style={{ color: 'green' }}>stay</span></p>
                            </div>}
                            {result === "1" && <div class="d-flex justify-content-around align-items-center" >
                                <img src='https://i.ibb.co/nrxT0JD/images2.png' style={{ borderRadius: '200px', border: '5px solid' }} alt="" />
                                <p className='h1 w-75' style={{ fontSize: '4rem', fontWeight: 'bold', color: 'white' }}>Customer will <span style={{ color: 'red' }}>churn</span></p>
                            </div>}
                        </div>}


                    </div>
                </section >

            </>
        );
    }
};

export default Predict;
