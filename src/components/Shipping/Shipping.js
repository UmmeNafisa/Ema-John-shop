import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue={user.displayName} {...register("name")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input defaultValue={user.email} {...register("email", { required: true })} />
                <input placeholder="Your address" {...register("address", { required: true })} />
                <input placeholder="Your City" {...register("city", { required: true })} />
                <input placeholder="Contact number" {...register("phone-Number", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.email && <span className="error">This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;