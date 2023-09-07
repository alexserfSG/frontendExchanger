import React, {useState} from 'react';

const Select = ({direct,select}) => {

    let id = "select_" + direct;

    //console.log(select);

    let selectKeys = [];
    for (let key in select) {
        if (select.hasOwnProperty(key)) {
            selectKeys.push(key);
        }

    }

    return (

        <div id = {id}>

            {/*<div className="i_ex_f_els_b_sd_search">*/}
            {/*    <img className="i_ex_f_els_b_sd_s_icon" src='images/search_icon.svg' alt="Search icon"/>*/}
            {/*    <input type="text" className="search" placeholder="Поиск"/>*/}
            {/*</div>*/}

            {
                selectKeys.map((cur) => (

                    <div key={cur} className="i_ex_f_els_b_sd_option">
                        <div className="i_ex_f_els_b_sd_o_cur">

                            <img src={`images/logo_${cur}.svg`}
                            alt={select[cur]}/>

                            <p>{select[cur]}</p>
                        </div>
                        <p>1 = 43 238 RUB</p>
                    </div>

                ))
            }

        </div>
    );
};

export default Select;