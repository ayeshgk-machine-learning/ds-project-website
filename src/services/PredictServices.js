import axios from 'axios';

const predict = async (data) => {
    const passing_data = {
        account_length: parseInt(data.account_length),
        intertiol_plan: data.intertiol_plan,
        voice_mail_plan: data.voice_mail_plan,
        number_vm_messages: parseInt(data.number_vm_messages),
        total_day_min: parseFloat(data.total_day_min),
        total_day_calls: parseInt(data.total_day_calls),
        total_day_charge: parseFloat(data.total_day_charge),
        total_eve_min: parseFloat(data.total_eve_min),
        total_eve_calls: parseInt(data.total_eve_calls),
        total_eve_charge: parseFloat(data.total_eve_charge),
        total_night_minutes: parseFloat(data.total_night_minutes),
        total_night_calls: parseInt(data.total_night_calls),
        total_night_charge: parseFloat(data.total_night_charge),
        total_intl_minutes: parseFloat(data.total_intl_minutes),
        total_intl_calls: parseInt(data.total_intl_calls),
        total_intl_charge: parseFloat(data.total_intl_charge),
        customer_service_calls: parseInt(data.customer_service_calls),
        location_code: data.location_code,
    }

    return axios({
        method: 'POST',
        url: 'http://127.0.0.1:5000/api/v1/predict',
        data: passing_data
    })
}

export default {
    predict
}