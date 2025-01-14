import React from 'react';
import styled from 'styled-components';

export const Sample = () => {
    return (
        <FormStyled>
            <div className="input-control">
                <input
                    type="text"
                    placeholder="Salary Title"
                />
            </div>
            <div className="input-control">
                <input
                    type="text"
                    placeholder="Salary Amount"
                />
            </div>
            <div className="input-control">
                {/* Add content here if needed */}
            </div>
            <div className="selects input-control">
                <select required defaultValue="" name="category" id="category">
                    <option value="" disabled>Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="youtube">YouTube</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="input-control">
                <textarea
                    name="description"
                    placeholder="Add A Reference"
                    id="description"
                    cols="30"
                    rows="4"
                ></textarea>
            </div>
            <div className="submit-btn">
                <button type="submit">Submit</button>
            </div>
        </FormStyled>
    );
};

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    input, textarea, select {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);

        &::placeholder {
            color: rgba(34, 34, 96, 0.4);
        }
    }

    .input-control {
        input {
            width: 100%;
        }
    }

    .selects {
        display: flex;
        justify-content: flex-end;

        select {
            color: rgba(34, 34, 96, 0.4);

            &:focus,
            &:active {
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn {
        display: flex;
        justify-content: flex-end;

        button {
            padding: 0.5rem 1.5rem;
            font-size: 1rem;
            border: none;
            border-radius: 5px;
            background-color: var(--color-green, #4caf50);
            color: #fff;
            cursor: pointer;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            transition: background-color 0.3s ease;

            &:hover {
                background-color: #43a047;
            }
        }
    }
`;
