//rfce react function component export kısayolu ile oluşturabilirsin.
import React from "react";
import PropTypes from "prop-types";

function User({ title, data, friends }) {

    return (
        <div>
            <strong>{title}</strong>

            <div>İsim : {data.name}</div>
            <div>Yaş : {data.age}</div>
            <div>Şehir : {data.city} </div>

            <hr />

            <hr />
            <h3>Arkadaşlar</h3>
            {
                friends.map((isim, i) => (
                    <div key={i} style={(i + 1) % 2 == 0 ? { fontWeight: 500, color: 'black' } : { fontWeight: 500, color: "gray" }}>
                        {((i + 1) % 2 == 1 ? i + 1 + " - " + isim : i + 1 + " - " + isim)}
                    </div>
                ))
            }
        </div >
    );
}

User.propTypes = {

    data: PropTypes.exact({
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        city: PropTypes.string,
    }),
    friends: PropTypes.array,
    title: PropTypes.string.isRequired,

};

User.defaultProps = {
    title: 'Kişi',
}



export default User;
