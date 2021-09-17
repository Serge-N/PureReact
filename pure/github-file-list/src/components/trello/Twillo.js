import React from "react";
import PropTypes from 'prop-types';

const Twillo = ({ twi }) => (
    <div>
        {
            twi.map(ti => (
                <div className="master-card" key={ti.id}>
                    <div className="card-content">
                        <h5 className="board-title">{ti.title}</h5>
                        <div className="board-task"></div>
                        <input type="text" className="board-input" placeholder="Add a Card.." />
                    </div>
                </div>
            ))
        }
    </div>);

Twillo.propTypes = {
    twi: PropTypes.array.isRequired
};

export default Twillo;