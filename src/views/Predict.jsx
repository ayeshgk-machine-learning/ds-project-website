import { useEffect, useState } from "react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";


import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button,Row,Col } from "react-bootstrap";

const Predict = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";
    const [loading, setLoading] = useState(false);

    const [accLength, setAccLength] = useState(0);
    const [vms, setVms] = useState(0);
    const [totDMins, setTotDMins] = useState(0);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    if (loading) {
        return <Loader />;
    } else {
        return (
            <>
                <div style={{ overflow: 'scroll' }}>
                    <form className="text-white">
                        <div class="mb-3">
                            <label for="account_lenght" class="form-label">Account Length</label>
                            <input type="number" onChange={(e) => setAccLength(e.target.value)} name="account_length" id="account_lenght" value={accLength} min="0" max="1000" step="1" />
                            <input type="range" value={accLength} onChange={(e) => setAccLength(e.target.value)} class="form-range" id="customRange1" min="0" max="1000" step="1" ></input>
                        </div>
                        <div class="mb-3">
                            <label for="intertiol_plan" class="form-label">International Plan</label>
                            {/* <input type="t" class="form-control" id="exampleInputPassword1" /> */}
                            <select name="intertiol_plan" >
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="voice_mail_plan" class="form-label">Voice Mail Plan</label>
                            {/* <input type="t" class="form-control" id="exampleInputPassword1" /> */}
                            <select name="voice_mail_plan" >
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="voice_mail_plan" class="form-label">Voice Mail Plan</label>
                            {/* <input type="t" class="form-control" id="exampleInputPassword1" /> */}
                            <select name="voice_mail_plan" >
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="number_vm_messages" class="form-label">Number of Voice Messages</label>
                            {/* <input type="text" class="form-control input-number" name="account_help" id="account_help" aria-describedby="emailHelp" /> */}
                            <input type="number" value={vms} onChange={(e) => setVms(e.target.value)} name="number_vm_messages" id="number_vm_messages" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            <input type="range" value={vms} onChange={(e) => setVms(e.target.value)} class="form-range" id="customRange1" min="0" max="1000" step="1" ></input>
                        </div>
                        <div class="mb-3">
                            <label for="total_day_min" class="form-label">Total day min</label>
                            {/* <input type="text" class="form-control input-number" name="account_help" id="account_help" aria-describedby="emailHelp" /> */}
                            <input type="text" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} name="total_day_min" id="total_day_min" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            <input type="range" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} class="form-range" id="customRange1" min="0" max="1000" step="1" ></input>
                        </div>
                        <div class="mb-3">
                            <label for="total_day_min" class="form-label">Total day min</label>
                            {/* <input type="text" class="form-control input-number" name="account_help" id="account_help" aria-describedby="emailHelp" /> */}
                            <input type="text" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} name="total_day_min" id="total_day_min" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            <input type="range" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} class="form-range" id="customRange1" min="0" max="1000" step="1" ></input>
                        </div>
                        <div class="mb-3">
                            <label for="total_day_min" class="form-label">Total day calls</label>
                            {/* <input type="text" class="form-control input-number" name="account_help" id="account_help" aria-describedby="emailHelp" /> */}
                            <input type="text" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} name="total_day_min" id="total_day_min" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            <input type="range" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} class="form-range" id="customRange1" min="0" max="1000" step="1" ></input>
                        </div>
                        <div class="mb-3">
                            <label for="total_day_min" class="form-label">Total day charge</label>
                            {/* <input type="text" class="form-control input-number" name="account_help" id="account_help" aria-describedby="emailHelp" /> */}
                            <input type="text" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} name="total_day_min" id="total_day_min" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            <input type="range" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} class="form-range" id="customRange1" min="0" max="1000" step="1" ></input>
                        </div>
                        <div class="mb-3">
                            <label for="total_day_min" class="form-label">Total evening mins</label>
                            {/* <input type="text" class="form-control input-number" name="account_help" id="account_help" aria-describedby="emailHelp" /> */}
                            <input type="text" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} name="total_day_min" id="total_day_min" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            <input type="range" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} class="form-range" id="customRange1" min="0" max="1000" step="1" ></input>
                        </div>
                        <div class="mb-3">
                            <label for="total_day_min" class="form-label">Total evening calls</label>
                            {/* <input type="text" class="form-control input-number" name="account_help" id="account_help" aria-describedby="emailHelp" /> */}
                            <input type="text" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} name="total_day_min" id="total_day_min" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            <input type="range" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} class="form-range" id="customRange1" min="0" max="1000" step="1" ></input>
                        </div>
                        <div class="mb-3">
                            <label for="total_day_min" class="form-label">Total day charge</label>
                            {/* <input type="text" class="form-control input-number" name="account_help" id="account_help" aria-describedby="emailHelp" /> */}
                            <input type="text" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} name="total_day_min" id="total_day_min" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            <input type="range" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} class="form-range" id="customRange1" min="0" max="1000" step="1" ></input>
                        </div>
                        <div class="mb-3">
                            <label for="total_day_min" class="form-label">Total night minutes</label>
                            {/* <input type="text" class="form-control input-number" name="account_help" id="account_help" aria-describedby="emailHelp" /> */}
                            <input type="text" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} name="total_day_min" id="total_day_min" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            <input type="range" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} class="form-range" id="customRange1" min="0" max="1000" step="1" ></input>
                        </div>
                        <div class="mb-3">
                            <label for="total_day_min" class="form-label">Total night calls</label>
                            {/* <input type="text" class="form-control input-number" name="account_help" id="account_help" aria-describedby="emailHelp" /> */}
                            <input type="text" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} name="total_day_min" id="total_day_min" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            <input type="range" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} class="form-range" id="customRange1" min="0" max="1000" step="1" ></input>
                        </div>
                        <div class="mb-3">
                            <label for="total_day_min" class="form-label">Total night charge</label>
                            {/* <input type="text" class="form-control input-number" name="account_help" id="account_help" aria-describedby="emailHelp" /> */}
                            <input type="text" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} name="total_day_min" id="total_day_min" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            <input type="range" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} class="form-range" id="customRange1" min="0" max="1000" step="1" ></input>
                        </div>
                        <div class="mb-3">
                            <label for="total_day_min" class="form-label">Total international minutes</label>
                            {/* <input type="text" class="form-control input-number" name="account_help" id="account_help" aria-describedby="emailHelp" /> */}
                            <input type="text" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} name="total_day_min" id="total_day_min" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            <input type="range" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} class="form-range" id="customRange1" min="0" max="1000" step="1" ></input>
                        </div>
                        <div class="mb-3">
                            <label for="total_day_min" class="form-label">Total international calls</label>
                            {/* <input type="text" class="form-control input-number" name="account_help" id="account_help" aria-describedby="emailHelp" /> */}
                            <input type="text" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} name="total_day_min" id="total_day_min" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            <input type="range" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} class="form-range" id="customRange1" min="0" max="1000" step="1" ></input>
                        </div>
                        <div class="mb-3">
                            <label for="total_day_min" class="form-label">Total international charge</label>
                            {/* <input type="text" class="form-control input-number" name="account_help" id="account_help" aria-describedby="emailHelp" /> */}
                            <input type="text" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} name="total_day_min" id="total_day_min" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            <input type="range" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} class="form-range" id="customRange1" min="0" max="1000" step="1" ></input>
                        </div>
                        <div class="mb-3">
                            <label for="total_day_min" class="form-label">customer service calls</label>
                            {/* <input type="text" class="form-control input-number" name="account_help" id="account_help" aria-describedby="emailHelp" /> */}
                            <input type="text" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} name="total_day_min" id="total_day_min" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            <input type="range" value={totDMins} onChange={(e) => setTotDMins(e.target.value)} class="form-range" id="customRange1" min="0" max="1000" step="1" ></input>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </>
        );
    }
};

export default Predict;
